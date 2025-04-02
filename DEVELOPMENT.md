# Development Guide for Elite Modeling Agency

This document contains the commands and procedures for developing and running the application.

## Frontend Development

Navigate to the client directory:
```bash
cd ModelingAgency/client
```

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

The React application will be available at `http://localhost:5173`.

## Backend Development

Navigate to the API project:
```bash
cd ModelingAgency/ModelingAgency.API
```

Restore packages:
```bash
dotnet restore
```

Run the API:
```bash
dotnet run
```

The ASP.NET Core API will be available at `https://localhost:5225`.

## Database Migrations

If you need to update the database schema:

```bash
cd ModelingAgency/ModelingAgency.API
dotnet ef migrations add [MigrationName]
dotnet ef database update
```

## Building for Production

### Frontend
```bash
cd ModelingAgency/client
npm run build
```

### Backend
```bash
cd ModelingAgency/ModelingAgency.API
dotnet publish -c Release
```

## Testing

### Frontend
```bash
cd ModelingAgency/client
npm test
```

### Backend
```bash
cd ModelingAgency/ModelingAgency.Tests
dotnet test
``` 