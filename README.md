# Backend Assignment - Calculator Hub

A full-stack web application with interactive calculators for compound interest and trigonometry calculations.

## 🚀 Live Demo

- **Home Page:** Interactive hub with navigation to all calculators
- **Trigonometry Calculator:** Calculate Sec C + Cot A for right triangles
- **Compound Interest Calculator:** Calculate compound interest with step-by-step breakdown
- **Solved Problems:** 4 complete solutions using the templates

## 📋 Features

- ✅ **Interactive Calculators** - Real-time calculations with dynamic visualizations
- ✅ **RESTful API** - Backend endpoints for all calculations
- ✅ **Responsive Design** - Works on desktop and mobile
- ✅ **Assignment Solutions** - 2 Trigonometry + 2 Compound Interest problems
- ✅ **Professional UI** - Clean, human-designed interface

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **API:** RESTful endpoints with JSON responses

## 📁 Project Structure

```
├── index.html                    # Home page with navigation
├── temp1.html                    # Trigonometry calculator
├── interestcompounded.html       # Compound interest calculator
├── trigonometry_problem1.html    # Solved problem 1 (9,40,41 triplet)
├── trigonometry_problem2.html    # Solved problem 2 (5,12,13 triplet)
├── compound_interest_problem1.html # Solved problem 1 (Rate calculation)
├── compound_interest_problem2.html # Solved problem 2 (Amount calculation)
├── server.js                     # Express.js backend server
├── package.json                  # Dependencies and scripts
└── assets/                       # Images and icons
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd backend-assignment
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   npm start
   ```

4. **Open in browser:**
   ```
   http://localhost:3000
   ```

## 📡 API Endpoints

### Health Check
```http
GET /api/health
```

### Compound Interest
```http
POST /api/compound-interest
Content-Type: application/json

{
  "principal": 10000,
  "rate": 10,
  "time": 2
}
```

### Trigonometry
```http
POST /api/trigonometry
Content-Type: application/json

{
  "sideA": 3,
  "sideB": 4,
  "sideC": 5
}
```

## 🎯 Assignment Solutions

### Trigonometry Problems
1. **Problem 1:** Pythagorean triplet (9, 40, 41) → Sec C + Cot A = 5/4
2. **Problem 2:** Pythagorean triplet (5, 12, 13) → Sec C + Cot A = 3/2

### Compound Interest Problems
1. **Problem 1:** Find rate when ₹5000 becomes ₹6050 in 2 years → Rate = 10%
2. **Problem 2:** Find amount after 2 years when ₹8000 becomes ₹10648 in 3 years → ₹9680

## 🌐 Deployment

### Free Hosting Options
- **Vercel** (Recommended) - Easy deployment with GitHub integration
- **Netlify** - Great for static sites with functions
- **Railway** - Full-stack deployment with database support
- **Render** - Simple and reliable hosting

### Deploy to Vercel
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

## 📱 Usage

1. **Home Page:** Navigate to different calculators and solved problems
2. **Interactive Calculators:** Enter values and see real-time calculations
3. **API Testing:** Use the built-in API demo sections
4. **Solved Problems:** View complete solutions with step-by-step calculations

## 🔧 Development

### Available Scripts
```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
```

### Local Development
- Server runs on `http://localhost:3000`
- API endpoints available at `/api/*`
- Static files served from root directory

## 📄 License

ISC License

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

---

**Built with ❤️ for Backend Development Assignment**
