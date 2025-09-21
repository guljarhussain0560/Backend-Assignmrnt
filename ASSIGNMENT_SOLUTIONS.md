# Backend Developer Assignment - Solved Problems

## Overview
This document contains 4 solved problems using the provided templates, following the strict assignment requirements.

## Template 1 - Trigonometry Problems (2 solutions)

### Problem 1: Pythagorean Triplet (9, 40, 41)
**File:** `trigonometry_problem1.html`

**Problem:** Find Sec C + Cot A for a right triangle with sides 9cm, 40cm, 41cm

**Solution Steps:**
1. **Pythagorean Verification:** 41² - 40² = 9² (1681 - 1600 = 81)
2. **Sec C Calculation:** Sec C = Hypotenuse/Base = 41/40
3. **Cot A Calculation:** Cot A = Perpendicular/Base = 9/40
4. **Final Answer:** Sec C + Cot A = 41/40 + 9/40 = 50/40 = 5/4

**Key Changes Made:**
- Updated triangle dimensions: 9cm, 40cm, 41cm
- Modified calculation: 41 - 40 = 1, 41² - 40² = 9²
- Updated fractions: 41/40 + 9/40 = 5/4
- Changed answer box to show "5 / 4"

### Problem 2: Pythagorean Triplet (5, 12, 13)
**File:** `trigonometry_problem2.html`

**Problem:** Find Sec C + Cot A for a right triangle with sides 5cm, 12cm, 13cm

**Solution Steps:**
1. **Pythagorean Verification:** 13² - 12² = 5² (169 - 144 = 25)
2. **Sec C Calculation:** Sec C = Hypotenuse/Base = 13/12
3. **Cot A Calculation:** Cot A = Perpendicular/Base = 5/12
4. **Final Answer:** Sec C + Cot A = 13/12 + 5/12 = 18/12 = 3/2

**Key Changes Made:**
- Updated triangle dimensions: 5cm, 12cm, 13cm
- Modified calculation: 13 - 12 = 1, 13² - 12² = 5²
- Updated fractions: 13/12 + 5/12 = 3/2
- Changed answer box to show "3 / 2"

## Template 2 - Compound Interest Problems (2 solutions)

### Problem 1: Find Rate of Interest
**File:** `compound_interest_problem1.html`

**Problem:** A sum of ₹5000 amounts to ₹6050 in 2 years at compound interest. Find the rate of interest.

**Solution Steps:**
1. **Given:** Principal = ₹5000, Amount = ₹6050, Time = 2 years
2. **Formula:** A = P(1 + r/100)²
3. **Substitution:** 6050 = 5000(1 + r/100)²
4. **Simplification:** (1 + r/100)² = 6050/5000 = 121/100
5. **Square Root:** 1 + r/100 = 11/10 (since 11² = 121, 10² = 100)
6. **Rate Calculation:** r/100 = 11/10 - 1 = 1/10, so r = 10%

**Key Changes Made:**
- Updated principal amount: ₹5000
- Updated final amount: ₹6050
- Changed time period: 2 years
- Modified fractions: 6050/5000 = 121/100
- Updated cube root calculation: 11² = 121, 10² = 100
- Changed rate calculation: r = 10%
- Updated 1-year calculation: 5000 × 11/10 = 5500

### Problem 2: Find Amount After 2 Years
**File:** `compound_interest_problem2.html`

**Problem:** A sum of ₹8000 amounts to ₹10648 in 3 years at compound interest. Find the amount in 2 years.

**Solution Steps:**
1. **Given:** Principal = ₹8000, Amount = ₹10648, Time = 3 years
2. **Formula:** A = P(1 + r/100)³
3. **Substitution:** 10648 = 8000(1 + r/100)³
4. **Simplification:** (1 + r/100)³ = 10648/8000 = 1331/1000
5. **Cube Root:** 1 + r/100 = 11/10 (since 11³ = 1331, 10³ = 1000)
6. **Rate:** r = 10%
7. **2-Year Amount:** 8000 × (11/10)² = 8000 × 121/100 = 9680

**Key Changes Made:**
- Updated principal amount: ₹8000
- Updated final amount: ₹10648
- Changed time period: 3 years
- Modified fractions: 10648/8000 = 1331/1000
- Updated cube root calculation: 11³ = 1331, 10³ = 1000
- Changed rate calculation: r = 10%
- Updated 2-year calculation: 8000 × 11/10 × 11/10 = 9680

## Assignment Compliance

### ✅ Rules Followed:
1. **Template Structure Preserved:** No CSS or layout modifications
2. **Content Only Changes:** Only numbers, variables, and calculation steps replaced
3. **Logic Flow Maintained:** Arrows, fractions, and highlight boxes remain consistent
4. **Box Reuse:** Utilized existing fraction, number, and variable boxes
5. **No Structural Changes:** No divs added, removed, or moved

### ✅ Deliverables Completed:
1. **2 Trigonometry Problems** using Template 1
2. **2 Compound Interest Problems** using Template 2
3. **All files created** and ready for screenshots

## File Structure
```
├── trigonometry_problem1.html    # Problem 1: (9,40,41) triplet
├── trigonometry_problem2.html    # Problem 2: (5,12,13) triplet
├── compound_interest_problem1.html # Problem 1: Find rate (₹5000→₹6050)
├── compound_interest_problem2.html # Problem 2: Find amount (₹8000→₹10648)
└── ASSIGNMENT_SOLUTIONS.md       # This documentation
```

## How to View Solutions
1. Start the server: `npm start`
2. Access each solution file:
   - `http://localhost:3000/trigonometry_problem1.html`
   - `http://localhost:3000/trigonometry_problem2.html`
   - `http://localhost:3000/compound_interest_problem1.html`
   - `http://localhost:3000/compound_interest_problem2.html`

## Mathematical Accuracy
All solutions have been verified for mathematical correctness:
- Pythagorean theorem validations
- Compound interest formula applications
- Fraction simplifications
- Rate calculations
- Step-by-step logical flow

The solutions demonstrate proper use of the templates while maintaining mathematical rigor and visual clarity.
