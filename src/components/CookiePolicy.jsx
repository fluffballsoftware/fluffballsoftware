import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="pt-32 pb-20 relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fluff-sky/30 to-transparent" />
      <div className="absolute inset-0 dots-pattern opacity-30 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card shadow-fluff border border-fluff-sky/30 mb-6">
            <span>🍪</span>
            <span className="text-sm font-bold text-fluff-navy">Legal Information</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl text-fluff-navy mb-12">
            Fluff Ball Software Ltd. <span className="gradient-text-brand">Cookies Policy</span>
          </h1>

          <div className="prose prose-lg prose-fluff max-w-none text-fluff-navy/80 space-y-8 font-semibold">
            
            <div>
              <h2 className="font-display text-2xl text-fluff-navy mb-4">How we use cookies</h2>
              <p>
                Our website uses cookies, which are small text files placed on your device, to help it function properly, improve user experience, and gather analytics data. This page outlines the types of cookies we use and their purposes.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-fluff-navy mb-4">Essential Cookies</h2>
              <p className="mb-4">These cookies are necessary for the basic functionality of the site.</p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-fluff-sky/30">
                      <th className="py-3 px-4 font-bold text-fluff-navy">Cookie Name</th>
                      <th className="py-3 px-4 font-bold text-fluff-navy">What it does</th>
                      <th className="py-3 px-4 font-bold text-fluff-navy">Expiry</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-fluff-sky/10">
                      <td className="py-3 px-4">cookie-consent</td>
                      <td className="py-3 px-4">Stores your consent preferences for cookies on our website.</td>
                      <td className="py-3 px-4">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl text-fluff-navy mb-4">Analytics Cookies</h2>
              <p className="mb-4 text-sm text-fluff-navy/60">(Optional. This means you can opt out of these cookies.)</p>
              <p className="mb-4">These cookies help us understand how users interact with our site. They are anonymised.</p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-fluff-sky/30">
                      <th className="py-3 px-4 font-bold text-fluff-navy">Cookie Name</th>
                      <th className="py-3 px-4 font-bold text-fluff-navy">What it does</th>
                      <th className="py-3 px-4 font-bold text-fluff-navy">Expiry</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-fluff-sky/10">
                      <td className="py-3 px-4">_ga</td>
                      <td className="py-3 px-4">Used by Google Analytics to distinguish users.</td>
                      <td className="py-3 px-4">2 years</td>
                    </tr>
                    <tr className="border-b border-fluff-sky/10">
                      <td className="py-3 px-4">_ga_&lt;container-id&gt;</td>
                      <td className="py-3 px-4">Used by Google Analytics to persist session state.</td>
                      <td className="py-3 px-4">2 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl text-fluff-navy mb-4">Managing Cookie Preferences</h2>
              <p className="mb-4">
                You can change your cookie preferences using the cookie consent banner on our website. You also have the option to delete cookies whenever you wish and adjust your browser settings to block or allow all or certain cookies automatically. Most web browsers allow you to manage cookies through settings.
              </p>
              <p>
                Please contact us at <a href="mailto:hello@fluffballsoftware.co.uk" className="text-fluff-sky hover:underline">hello@fluffballsoftware.co.uk</a> if you require any further information or assistance with managing your cookie preferences.
              </p>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CookiePolicy;
