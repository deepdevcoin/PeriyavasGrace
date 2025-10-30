import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const { user, loading, googleSignIn, emailSignIn, emailSignUp, signOutUser } = useAuth();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Divine Experiences", path: "/testimonials" },
    { name: "Book Consultation", path: "/booking" },
    { name: "Contact", path: "/contact" },
  ];

  // Modal forms
  const AuthModal = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loadingLocal, setLoadingLocal] = useState(false);

    const resetForm = () => {
      setEmail("");
      setPassword("");
      setError(null);
    };

    const handleGoogleSignIn = async () => {
      setError(null);
      try {
        setLoadingLocal(true);
        await googleSignIn();
        setAuthModalOpen(false);
        resetForm();
      } catch (err: any) {
        setError(err.message || "Failed to sign in with Google.");
      } finally {
        setLoadingLocal(false);
      }
    };

    const handleEmailSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setError(null);
      try {
        setLoadingLocal(true);
        if (isSignUp) {
          await emailSignUp(email, password);
        } else {
          await emailSignIn(email, password);
        }
        setAuthModalOpen(false);
        resetForm();
      } catch (err: any) {
        setError(err.message || (isSignUp ? "Sign-up failed." : "Sign-in failed."));
      } finally {
        setLoadingLocal(false);
      }
    };

    return (

      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4 py-6 overflow-auto"
        style={{ minHeight: "100vh" }}
      >
        <div className="bg-white rounded shadow-lg max-w-md w-full p-6 relative mx-auto">
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            onClick={() => setAuthModalOpen(false)}
          >
            ✕
          </button>

          <h2 className="text-2xl font-bold mb-4 text-center">
            {isSignUp ? "Sign Up" : "Sign In"}
          </h2>

          <div className="mb-4 text-center">
            <Button
              variant="outline"
              onClick={handleGoogleSignIn}
              disabled={loadingLocal || loading}
              className="w-full mb-2"
            >
              Continue with Google
            </Button>
          </div>

          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
            {error && <p className="text-red-600">{error}</p>}
            <Button
              type="submit"
              disabled={loadingLocal || loading}
              className="w-full"
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </Button>
          </form>

          <div className="text-center mt-4">
            {isSignUp ? (
              <>
                Already have an account?{" "}
                <button
                  className="text-blue-600 underline"
                  onClick={() => {
                    setIsSignUp(false);
                    setError(null);
                  }}
                >
                  Sign In
                </button>
              </>
            ) : (
              <>
                Don't have an account?{" "}
                <button
                  className="text-blue-600 underline"
                  onClick={() => {
                    setIsSignUp(true);
                    setError(null);
                  }}
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-serif font-bold text-primary">
              Periyava's Grace
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant={location.pathname === link.path ? "default" : "ghost"}
                  className={location.pathname === link.path ? "bg-primary" : ""}
                >
                  {link.name}
                </Button>
              </Link>
            ))}

            {/* Auth buttons */}
            {user ? (
              <>
                <span className="px-4">{user.displayName || user.email}</span>
                <Button onClick={signOutUser} disabled={loading}>
                  Sign Out
                </Button>
              </>
            ) : (
              <Button onClick={() => setAuthModalOpen(true)}>Sign In / Sign Up</Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-2 animate-slide-up">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button
                  variant={location.pathname === link.path ? "default" : "ghost"}
                  className={`w-full justify-start ${location.pathname === link.path ? "bg-primary" : ""
                    }`}
                >
                  {link.name}
                </Button>
              </Link>
            ))}

            {/* Mobile Auth buttons */}
            <div className="pt-4 border-t border-border space-y-2">
              {user ? (
                <div className="flex items-center space-x-4 px-2">
                  <span>{user.displayName || user.email}</span>
                  <Button onClick={signOutUser} disabled={loading}>
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Button onClick={() => setAuthModalOpen(true)} className="w-full">
                  Sign In / Sign Up
                </Button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Auth Modal */}
      {authModalOpen && <AuthModal />}
    </nav>
  );
};

export default Navigation;
