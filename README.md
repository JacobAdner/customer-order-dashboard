# Customer Order Dashboard

A modern Angular-based dashboard for customers to monitor and track their orders.

## Features

- View all orders in a clean, organized table
- Filter and search through orders
- View detailed order information including items, shipping address, and tracking
- Real-time order status updates
- Responsive design for mobile and desktop

## Prerequisites

- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Development

Run the development server:
```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any source files.

## Build

Run the build command:
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Testing

Run unit tests:
```bash
npm test
```

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   └── orders/
│   │       ├── order-list/
│   │       └── order-detail/
│   ├── models/
│   │   └── order.model.ts
│   ├── services/
│   │   └── order.service.ts
│   └── app.component.ts
├── assets/
└── styles.css
```

## API Integration

The application is set up to work with a Node.js backend API. Update the `apiUrl` in `order.service.ts` to point to your backend endpoint.

Expected API endpoints:
- `GET /api/orders` - Get all orders
- `GET /api/orders/:id` - Get order by ID