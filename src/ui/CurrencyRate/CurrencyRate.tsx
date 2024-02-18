import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

import { prettyPrice } from '#utils/currency';

import style from './CurrencyRate.module.scss';

/* eslint-disable no-unused-vars */
interface CurrencyRateProps {
  code: string;
  name?: string;
  rate?: number;
  base: string;
  setBase?: () => void;
  converterValue: string;
  setConverterValue: (value: string, code: string) => void;
}
/* eslint-enable no-unused-vars */

const CurrencyRate: FC<CurrencyRateProps> = ({
  code,
  name,
  rate,
  base,
  setBase,
  converterValue,
  setConverterValue,
}) => {
  const isBase = code === base;

  return (
    <Box
      px={2}
      py={1}
      borderRadius={4}
      bgcolor={isBase ? 'grey.800' : 'background.paper'}
      display="flex"
      justifyContent="space-between"
      onDoubleClick={setBase}
      sx={{ userSelect: 'none' }}
    >
      <Box>
        <Typography fontSize="h6.fontSize" lineHeight={1.25}>
          {code}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {name}
        </Typography>
      </Box>

      <Stack alignItems="flex-end" flex={1}>
        <input
          className={style.input}
          // defaultValue={0}
          value={converterValue || ''}
          placeholder="0"
          onChange={(e) => setConverterValue(e.target.value, code)}
        />
        {!isBase && rate && (
          <Typography variant="caption" color="text.secondary">
            1 {code} = {prettyPrice(1 / rate)} {base}
          </Typography>
        )}
      </Stack>
    </Box>
  );
};

export default CurrencyRate;
