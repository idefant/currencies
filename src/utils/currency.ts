export const prettyPrice = (price: number) =>
  price.toLocaleString('en', {
    maximumFractionDigits: 2,
    useGrouping: true,
  });
