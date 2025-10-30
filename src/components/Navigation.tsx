import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User, LogOut } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import AuthModal from "@/components/AuthModal";

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const { user, loading, signOutUser } = useAuth();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Book Consultation", path: "/booking" },
  ];

  const getUserInitials = () => {
    if (user?.displayName) {
      return user.displayName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
    }
    if (user?.email) {
      return user.email[0].toUpperCase();
    }
    return "U";
  };

  const ProfileMenu = () => (
    <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50">
      <div className="px-4 py-3 border-b border-gray-100">
        <p className="text-sm font-semibold text-gray-900">
          {user?.displayName || "User"}
        </p>
        <p className="text-xs text-gray-500 truncate">{user?.email}</p>
      </div>
      <div className="py-2">
        <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3">
          <User size={16} />
          Profile Settings
        </button>
        <button
          onClick={() => {
            signOutUser();
            setProfileMenuOpen(false);
          }}
          disabled={loading}
          className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-3"
        >
          <LogOut size={16} />
          Sign Out
        </button>
      </div>
    </div>
  );
console.log("User object:", user);

  return (
    <>
      {/* NAVIGATION BAR */}
      <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-soft">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-serif font-bold text-primary">
                Periyava's Grace
              </span>
            </Link>

            {/* Desktop Nav */}
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

              {user ? (
                <div className="relative ml-4">
                  <button
                    onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                    className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                  >
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt="Profile"
                        className="w-10 h-10 rounded-full border-2 border-primary object-cover"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-semibold text-sm border-2 border-primary">
                        {getUserInitials()}
                      </div>
                    )}
                  </button>
                  {profileMenuOpen && <ProfileMenu />}
                  {profileMenuOpen && (
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setProfileMenuOpen(false)}
                    />
                  )}
                </div>
              ) : (
                <Button
                  onClick={() => setAuthModalOpen(true)}
                  className="ml-4 rounded-full px-6"
                >
                  Sign In
                </Button>
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

          {/* Mobile Nav */}
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
                    className={`w-full justify-start ${
                      location.pathname === link.path ? "bg-primary" : ""
                    }`}
                  >
                    {link.name}
                  </Button>
                </Link>
              ))}

              <div className="pt-4 border-t border-border space-y-2">
                {user ? (
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 px-2 py-2">
                      {user.photoURL ? (
                        <img
                          src={user.photoURL}
                          alt="Profile"
                          className="w-10 h-10 rounded-full border-2 border-primary object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-semibold text-sm border-2 border-primary">
                          {getUserInitials()}
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold truncate">
                          {user.displayName || "User"}
                        </p>
                        <p className="text-xs text-gray-500 truncate">{user.email}</p>
                      </div>
                    </div>
                    <Button
                      onClick={signOutUser}
                      disabled={loading}
                      variant="outline"
                      className="w-full"
                    >
                      <LogOut size={16} className="mr-2" />
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <Button
                    onClick={() => setAuthModalOpen(true)}
                    className="w-full rounded-full"
                  >
                    Sign In
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* MOVE MODAL OUTSIDE NAVBAR */}
      {authModalOpen && <AuthModal onClose={() => setAuthModalOpen(false)} />}
    </>
  );
};

export default Navigation;
