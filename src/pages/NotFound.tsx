
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Handle common redirect cases
    const path = location.pathname.toLowerCase();
    
    // Redirect common paths to main sections
    if (path.includes('about')) {
      navigate('/#about', { replace: true });
      return;
    }
    if (path.includes('service')) {
      navigate('/#services', { replace: true });
      return;
    }
    if (path.includes('team')) {
      navigate('/#team', { replace: true });
      return;
    }
    if (path.includes('contact')) {
      navigate('/#contact', { replace: true });
      return;
    }
    if (path.includes('portfolio')) {
      navigate('/#portfolio', { replace: true });
      return;
    }
  }, [location.pathname, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="space-y-4">
          <a 
            href="/" 
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Return to Home
          </a>
          <div className="text-sm text-gray-500">
            <p>Or try these popular sections:</p>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              <a href="/#about" className="text-primary hover:underline">About</a>
              <span>•</span>
              <a href="/#services" className="text-primary hover:underline">Services</a>
              <span>•</span>
              <a href="/#team" className="text-primary hover:underline">Team</a>
              <span>•</span>
              <a href="/#contact" className="text-primary hover:underline">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
