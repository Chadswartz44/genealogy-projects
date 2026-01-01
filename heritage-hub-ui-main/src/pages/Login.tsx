import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ChevronRight, Eye, EyeOff, Mail } from "lucide-react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);

  const handleForgotPassword = () => {
    setResetEmailSent(true);
    setTimeout(() => {
      setShowForgotPassword(false);
      setResetEmailSent(false);
    }, 3000);
  };

  if (showForgotPassword) {
    return (
      <Layout>
        <section className="min-h-[80vh] flex items-center justify-center py-16 bg-muted/30">
          <div className="heritage-container">
            <div className="max-w-md mx-auto">
              <div className="bg-card rounded-2xl p-8 shadow-elevated animate-scale-in">
                {resetEmailSent ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-heritage-green/20 flex items-center justify-center mx-auto mb-6">
                      <Mail className="w-8 h-8 text-heritage-green" />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                      Check Your Email
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      We've sent a password reset link to your email address.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="font-display text-2xl font-bold text-foreground mb-2 text-center">
                      Reset Password
                    </h2>
                    <p className="text-muted-foreground mb-6 text-center">
                      Enter your email and we'll send you a reset link.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="w-full h-12 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <Button className="w-full h-12" onClick={handleForgotPassword}>
                        Send Reset Link
                      </Button>
                      <button
                        onClick={() => setShowForgotPassword(false)}
                        className="w-full text-center text-sm text-primary hover:underline"
                      >
                        Back to Login
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center justify-center py-16 bg-muted/30">
        <div className="heritage-container">
          <div className="max-w-md mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-elevated animate-scale-in">
              {/* Toggle */}
              <div className="flex rounded-lg bg-muted p-1 mb-8">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                    isLogin ? "bg-card shadow text-foreground" : "text-muted-foreground"
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                    !isLogin ? "bg-card shadow text-foreground" : "text-muted-foreground"
                  }`}
                >
                  Sign Up
                </button>
              </div>

              <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
                {isLogin ? "Welcome Back" : "Create Account"}
              </h2>

              {/* Social Buttons */}
              <div className="space-y-3 mb-6">
                <Button variant="social" className="w-full justify-center gap-3 h-12">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </Button>
                <Button variant="social" className="w-full justify-center gap-3 h-12">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
                  </svg>
                  Continue with Apple
                </Button>
              </div>

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or with email</span>
                </div>
              </div>

              {/* Form */}
              <div className="space-y-4">
                {!isLogin && (
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full h-12 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full h-12 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="w-full h-12 px-4 pr-12 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {isLogin && (
                  <button
                    onClick={() => setShowForgotPassword(true)}
                    className="text-sm text-primary hover:underline"
                  >
                    Forgot password?
                  </button>
                )}

                <Button className="w-full h-12">
                  {isLogin ? "Sign In" : "Create Account"}
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>

              <p className="text-xs text-muted-foreground mt-6 text-center">
                By continuing, you agree to our{" "}
                <Link to="/terms" className="text-primary hover:underline">Terms</Link> and{" "}
                <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
