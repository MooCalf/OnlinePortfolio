import { Link } from "react-router-dom";

export const NotFound = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground relative">
        <div className="grid-bg" aria-hidden="true" />
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Page Not Found</p>
        <Link to="/" className="text-primary underline">Go Home</Link>
    </div>
);