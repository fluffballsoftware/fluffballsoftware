import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
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
            <span>🛡️</span>
            <span className="text-sm font-bold text-fluff-navy">Legal Information</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl text-fluff-navy mb-12">
            Fluff Ball Software Ltd. <span className="gradient-text-brand">Privacy Policy</span>
          </h1>

          <div className="prose prose-lg prose-fluff max-w-none text-fluff-navy/80 space-y-8 font-semibold">
            
            <div>
              <h2 className="font-display text-2xl text-fluff-navy mb-4">Introduction</h2>
              <p>
                Fluff Ball Software Ltd. ("we", "us") takes your privacy seriously. This policy sets out how we use and protect your personal data when you visit our website. As the data controller, we are responsible for your personal data. We are registered with the Information Commissioner's Office (ICO) under registration reference: ZC165699.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-fluff-navy mb-4">What is personal data?</h2>
              <p>Personal data is any information about a person which identifies them.</p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-fluff-navy mb-4">What type of personal data do we collect?</h2>
              <p className="mb-2">We collect:</p>
              <ul className="list-disc pl-5 space-y-2 text-fluff-navy/70">
                <li><strong>Identity information</strong> e.g. name, address and date of birth.</li>
                <li><strong>Contact information</strong> e.g. email address and telephone number.</li>
                <li><strong>Financial data</strong> e.g. your payment details.</li>
                <li><strong>Preference information</strong> e.g. marketing and advertising preferences.</li>
              </ul>
              <p className="mt-4">We do not collect sensitive data or data relating to children.</p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-fluff-navy mb-4">How do we collect your personal data?</h2>
              <p>We collect this data when you interact with us through or using our website and when you send us correspondence.</p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-fluff-navy mb-4">How and why do we use your personal data?</h2>
              <p className="mb-4">In accordance with data protection law, we can only use your personal data if we have a legal basis for doing so. We use personal data for the following reasons:</p>
              <ul className="list-disc pl-5 space-y-3 text-fluff-navy/70">
                <li>So that we can interact with you and provide services and marketing to you. Our legal basis for doing so is our legitimate interests or those of a third party, and for the performance of any contract we have with you, or to take steps before entering into a contract with you.</li>
                <li>To help us ensure that the website is operating effectively. Our legal basis for doing so is our legitimate interests or those of a third party.</li>
                <li>To enable us to make and receive payments. Our legal basis for doing so is for the performance of any contract we have with you or to take steps before entering into a contract with you.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl text-fluff-navy mb-4">Marketing</h2>
              <p className="mb-2">We will send you promotional communications if you have:</p>
              <ul className="list-disc pl-5 space-y-2 text-fluff-navy/70 mb-4">
                <li>requested information; or</li>
                <li>purchased something from us.</li>
              </ul>
              <p>
                But we will not do this if you have opted out of receiving marketing. You can opt out by following the opt out links within any promotional material sent to you. If you opt out of receiving promotional communications, you will still receive essential communications relating to goods or services we are providing you.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-fluff-navy mb-4">Do we share personal data?</h2>
              <p className="mb-4">
                We only share personal data with third party service providers where necessary. You can find a list of these providers on our website. We will get your express consent before we share your data with any third party for their own marketing purposes.
              </p>
              <p className="mb-4">
                Where we share your personal data, we only do this where we are satisfied that the third party will take appropriate steps to protect your data and its use is limited to acting on our instructions.
              </p>
              <p>
                We may need to share your personal data with legal and regulatory bodies if this is necessary for us to comply with the law or any applicable regulations.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-fluff-navy mb-4">International transfers</h2>
              <p>We do not transfer your personal data outside of the UK.</p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-fluff-navy mb-4">Do we use third party links on our website?</h2>
              <p>Yes, the website may include links to third party websites or content. We have no control over these, so you should read the privacy policy of any third party site you visit.</p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-fluff-navy mb-4">Is the personal data secure?</h2>
              <p>We take the security of your data seriously and have put in place appropriate measures to protect it. We limit access to your personal data to only those employees, agents, contractors and other third parties who need to know for business purposes, and they are subject to robust confidentiality obligations.</p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-fluff-navy mb-4">How long is the personal data kept for?</h2>
              <p className="mb-4">We only keep your personal data for as long as reasonably necessary to fulfil the purposes for which it was collected. We will keep the majority of your personal data for so long as you use any of our goods, services or the website, or until you withdraw your consent (where this is our legal basis for processing).</p>
              <p>We will only keep information about orders and payments for longer than this. We will keep this data for a period of 6 years after our relationship with you has ended.</p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-fluff-navy mb-4">Your legal rights</h2>
              <p className="mb-4">You have the following rights:</p>
              <ul className="list-disc pl-5 space-y-2 text-fluff-navy/70 mb-4">
                <li>The right to be provided with a copy of your personal data that we hold.</li>
                <li>The right to ask us to correct any personal data we hold about you.</li>
                <li>The right to ask us to delete your personal data in certain circumstances.</li>
                <li>The right to request that we restrict the processing of your personal data in certain circumstances.</li>
                <li>The right to request that we transfer your personal data to yourself or a third party in certain circumstances.</li>
                <li>The right to withdraw your consent to processing where this is the legal basis relied upon by us.</li>
                <li>The right to object to the processing of your personal data for direct marketing purposes.</li>
                <li>The right to object to the processing of your personal data in certain circumstances where we are relying on a legitimate interest.</li>
              </ul>
              <p>For more information on these rights, you can visit the <a href="https://ico.org.uk/" target="_blank" rel="noopener noreferrer" className="text-fluff-sky hover:underline">Information Commissioner's Office website here</a>.</p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-fluff-navy mb-4">How can you exercise your rights?</h2>
              <p>If you wish to exercise any of these rights, please contact us. You will not have to pay a fee to exercise your rights, but we may need to request additional information from you before we can act. Usually, we will respond to legitimate requests to exercise these rights within one month; however, this can take longer if the request is complex. If we think it will take longer, we will let you know.</p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-fluff-navy mb-4">Keeping us up to date</h2>
              <p>You must let us know if any personal data we hold about you is incorrect or out of date.</p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-fluff-navy mb-4">Changes to this policy</h2>
              <p>This policy gets reviewed and updated regularly. Please make sure you check this page each time you visit the website.</p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-fluff-navy mb-4">Contact us</h2>
              <p>Should you have any questions about this policy or wish to exercise any of your data rights, please contact us at <a href="mailto:hello@fluffballsoftware.co.uk" className="text-fluff-sky hover:underline">hello@fluffballsoftware.co.uk</a>.</p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-fluff-navy mb-4">Complaints</h2>
              <p>We would appreciate you contacting us to allow us to attempt to resolve any complaints. However, you have the right to make a complaint to the Information Commissioner's Office at any time by visiting the <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer" className="text-fluff-sky hover:underline">complaints page here</a>.</p>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
