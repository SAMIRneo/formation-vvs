export function calculateRisk(
  capital: number,
  percent: number,
  entry: number,
  stop: number,
  target: number,
  fees: number,
) {
  if (
    ![capital, percent, entry, stop, target, fees].every(Number.isFinite) ||
    capital <= 0 ||
    percent <= 0 ||
    percent > 100 ||
    stop <= 0 ||
    entry <= stop ||
    target <= entry ||
    fees < 0
  )
    return null;
  const budget = (capital * percent) / 100;
  if (fees >= budget) return null;
  const units = Math.min(
    (budget - fees) / (entry - stop),
    (capital - fees) / entry,
  );
  if (units <= 0) return null;
  const loss = units * (entry - stop) + fees;
  const gain = units * (target - entry) - fees;
  if (![budget, units, loss, gain, units * entry].every(Number.isFinite))
    return null;
  return {
    budget,
    units,
    loss,
    gain,
    exposure: units * entry,
    rr: gain / loss,
    breakEven: gain > 0 ? (loss / (gain + loss)) * 100 : null,
    capped: units < (budget - fees) / (entry - stop),
  };
}
