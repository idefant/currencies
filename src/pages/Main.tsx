import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { FC, useMemo, useState } from 'react';

import { useFetchCurrenciesQuery, useFetchLatestRateQuery } from '#api';
import CurrencyRate from '#ui/CurrencyRate';
import { prettyPrice } from '#utils/currency';

const Main: FC = () => {
  const [baseCurrency, setBaseCurrency] = useState('RUB');
  const [converterValues, setConverterValues] = useState<Record<string, string>>({});

  const { data: currencies } = useFetchCurrenciesQuery();
  const { data: latestRate } = useFetchLatestRateQuery({});

  const rates = useMemo(() => {
    if (!latestRate) return [];
    const rates = Object.entries(latestRate.rates).map(([code, value]) => ({
      code,
      value: value / latestRate.rates[baseCurrency],
    }));

    return rates;
  }, [baseCurrency, latestRate]);

  const handleChangeConverterValue = (value: string, code: string) => {
    const valueNum = Number(value.replaceAll(',', '.').replaceAll(' ', ''));
    if (Number.isNaN(valueNum) || valueNum === 0 || !latestRate) {
      setConverterValues({ [code]: value });
      return;
    }

    setConverterValues({
      ...Object.fromEntries(
        rates.map((rate) => [
          rate.code,
          prettyPrice((valueNum * latestRate.rates[rate.code]) / latestRate.rates[code]),
        ]),
      ),
      [code]: value,
    });
  };

  return (
    <Box maxWidth={800} mx="auto">
      <Box px={2} py={1} borderRadius="0 0 16px 16px" bgcolor="background.paper">
        <CurrencyRate
          code={baseCurrency}
          name={currencies?.[baseCurrency]}
          base={baseCurrency}
          converterValue={converterValues[baseCurrency]}
          setConverterValue={handleChangeConverterValue}
        />
      </Box>

      <Stack spacing={1} p={2}>
        {rates
          .filter((rate) => rate.code !== baseCurrency)
          .map((rate) => (
            <CurrencyRate
              code={rate.code}
              name={currencies?.[rate.code]}
              rate={rate.value}
              base={baseCurrency}
              setBase={() => setBaseCurrency(rate.code)}
              converterValue={converterValues[rate.code]}
              setConverterValue={handleChangeConverterValue}
              key={rate.code}
            />
          ))}
      </Stack>
    </Box>
  );
};

export default Main;
