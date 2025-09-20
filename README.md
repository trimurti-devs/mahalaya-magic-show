# Mahalaya Magic Show

A beautiful React application celebrating the divine stories of Goddess Durga and the sacred festival of Durga Puja.

## Features

- Modern React 18 with TypeScript
- Vite for fast development and building
- Tailwind CSS for styling
- shadcn/ui component library
- Responsive design
- Interactive storytelling experience

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to Render

This project is configured for easy deployment to Render.com:

1. **Push to GitHub**: Make sure your code is pushed to a GitHub repository
2. **Connect to Render**: Go to [Render.com](https://render.com) and connect your GitHub repository
3. **Create Web Service**: Render will automatically detect the configuration from `render.yaml`
4. **Deploy**: The service will build and deploy automatically

### Render Configuration

The `render.yaml` file contains the deployment configuration:
- **Build Command**: `npm run build`
- **Static Site**: Serves the built files from `./dist`
- **SPA Routing**: Configured to handle client-side routing

### Environment Variables

No additional environment variables are required for basic deployment.

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── assets/             # Images and static assets
└── App.tsx             # Main application component

