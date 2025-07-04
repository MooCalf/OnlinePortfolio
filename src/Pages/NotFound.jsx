import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <p className="text-xl text-muted-foreground">Page not found</p>
        <Link 
          to="/" 
          className="glass-button inline-block"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};