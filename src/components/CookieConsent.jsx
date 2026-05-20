import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none"
          >
            <div className="max-w-4xl mx-auto bg-fluff-dark/95 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-fluff-lg pointer-events-auto flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1 text-white/80 text-sm">
                <p>
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                  By clicking "Accept All", you consent to our use of cookies. 
                  <button 
                    onClick={() => setShowPolicy(true)}
                    className="text-fluff-sky hover:text-white underline ml-1 transition-colors"
                  >
                    Read Cookie Policy
                  </button>
                </p>
              </div>
              <div className="flex items-center gap-3 w-full md:w-auto">
                <button
                  onClick={declineCookies}
                  className="flex-1 md:flex-none px-5 py-2.5 rounded-xl border border-white/20 text-white/70 hover:bg-white/5 transition-colors text-sm font-semibold"
                >
                  Decline
                </button>
                <button
                  onClick={acceptCookies}
                  className="flex-1 md:flex-none px-5 py-2.5 rounded-xl bg-fluff-accent hover:bg-fluff-accent/90 text-white transition-colors text-sm font-bold shadow-fluff"
                >
                  Accept All
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPolicy && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-fluff-dark border border-white/10 rounded-3xl w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col shadow-2xl relative"
            >
              <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <h2 className="text-xl font-display text-white">Cookie Policy</h2>
                <button 
                  onClick={() => setShowPolicy(false)}
                  className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 overflow-y-auto text-white/70 text-sm space-y-4">
                <p><strong>Last updated:</strong> {new Date().toLocaleDateString('en-GB')}</p>
                <h3 className="text-white font-bold mt-4">1. What are cookies?</h3>
                <p>Cookies are small text files that are placed on your computer or mobile device when you browse websites. They are widely used to make websites work more efficiently and provide information to the site owners.</p>
                
                <h3 className="text-white font-bold mt-4">2. How we use cookies</h3>
                <p>We use essential cookies to make our site work. With your consent, we may also use non-essential cookies to improve user experience and analyze website traffic. By clicking "Accept", you agree to our website's cookie use as described in this Policy.</p>
                
                <h3 className="text-white font-bold mt-4">3. Types of cookies we use</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Strictly Necessary Cookies:</strong> Required for the operation of our website.</li>
                  <li><strong>Analytical/Performance Cookies:</strong> Allow us to recognize and count the number of visitors and see how visitors move around our website.</li>
                </ul>

                <h3 className="text-white font-bold mt-4">4. Managing cookies</h3>
                <p>You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CookieConsent;
