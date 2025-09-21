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

  const { sideA, sideB, sideC } = req.body;

  if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC) || sideA <= 0 || sideB <= 0 || sideC <= 0) {
    return res.status(400).json({ error: 'Invalid input. All sides must be positive numbers.' });
  }

  // Determine if it's a right triangle (Pythagorean theorem)
  const sides = [sideA, sideB, sideC].sort((a, b) => a - b);
  const a = sides[0];
  const b = sides[1];
  const c = sides[2]; // Hypotenuse

  const isRightTriangle = Math.abs(a * a + b * b - c * c) < 0.01;

  if (!isRightTriangle) {
    return res.status(400).json({ error: 'The given sides do not form a right triangle.' });
  }

  const perpendicular = sideA;
  const base = sideB;
  const hypotenuse = sideC;

  // Sec C = Hypotenuse / Base
  const secC = parseFloat((hypotenuse / base).toFixed(2));

  // Cot A = Base / Perpendicular
  const cotA = parseFloat((base / perpendicular).toFixed(2));

  const result = parseFloat((secC + cotA).toFixed(2));

  res.json({
    sides: { sideA, sideB, sideC },
    triangle: { hypotenuse, base, perpendicular },
    calculations: { secC, cotA, result },
    isRightTriangle: true
  });
};
