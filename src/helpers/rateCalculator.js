export default function rateCalculator(rates) {
  const sum = rates.reduce((aggr, val) => aggr + val, 0);
  const count = rates.length;
  const rateAverage = sum / count;

  return rateAverage.toFixed(1);
}