module.exports = (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { principal, rate, time, frequency = 1 } = req.body;

  if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate < 0 || time <= 0) {
    return res.status(400).json({ error: 'Invalid input. Principal, rate, and time must be positive numbers.' });
  }

  const r = rate / 100;
  let amount = principal;
  const steps = [];

  for (let i = 1; i <= time; i++) {
    amount *= (1 + r / frequency);
    const currentInterest = amount - principal;
    steps.push({
      year: i,
      amount: parseFloat(amount.toFixed(2)),
      interest: parseFloat(currentInterest.toFixed(2))
    });
  }

  const finalAmount = parseFloat(amount.toFixed(2));
  const totalInterest = parseFloat((finalAmount - principal).toFixed(2));

  res.json({
    principal: principal,
    rate: rate,
    time: time,
    frequency: frequency,
    amount: finalAmount,
    interest: totalInterest,
    steps: steps
  });
};
