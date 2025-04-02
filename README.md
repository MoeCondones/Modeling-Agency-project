# Elite Modeling Agency

A full-stack web application for a modeling agency featuring a modern React frontend and ASP.NET Core backend.

## Features

- **Modern UI/UX**: Built with React and styled-components for a sleek, responsive design
- **Dark/Light Mode**: Theme toggle with persistent user preference
- **Animations**: Smooth transitions and animations using Framer Motion
- **Model Showcase**: Grid layout with filtering by gender and category
- **Model Details**: Detailed profiles with measurements and portfolio
- **Contact Form**: Interactive contact form with validation
- **Apply Form**: Application form for prospective models
- **Responsive Design**: Optimized for all device sizes

## Tech Stack

### Frontend
- React
- styled-components for CSS-in-JS styling
- Framer Motion for animations
- React Router for navigation

### Backend
- ASP.NET Core API
- Entity Framework Core
- SQL Server

## Getting Started

### Prerequisites
- Node.js (v18+)
- .NET 8.0 SDK
- SQL Server (optional, can use SQLite for development)

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/modeling-agency.git
   cd modeling-agency
   ```

2. Set up the frontend
   ```
   cd ModelingAgency/client
   npm install
   npm run dev
   ```

3. Set up the backend
   ```
   cd ModelingAgency/ModelingAgency.API
   dotnet restore
   dotnet run
   ```

## Development

The application uses:
- Vite for frontend development
- Hot Module Replacement for instant UI updates
- Entity Framework migrations for database schema updates

## Screenshots

[Screenshots will be added here]

## License

This project is licensed under the MIT License - see the LICENSE file for details. 