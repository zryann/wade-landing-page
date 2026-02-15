import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logoLight from "@/assets/logo-light.svg";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary py-6">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/">
            <img src={logoLight} alt="WADE" className="h-8" />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-10">
          Terms & Conditions
        </h1>

        <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
          <p>Thank you for choosing WADE services. Please read this document that affects your legal rights. By accessing or using the WADE App or Services, you agree to be bound by these Terms and Conditions.</p>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">1. Acceptance of Terms</h2>
            <p>WADE is a digital platform which provides services regarding delivery of food and other goods through the App which includes third party applications accessible through the WADE application.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">2. Registration, Account and Communication Preferences</h2>
            <p>In order to access and use certain areas or features of the App and Services, you will need to register for the WADE App via your smart phone. By registering for a WADE member account, you certify that any information you provide to us is true, accurate, current, and complete, and that you are 18 years of age or older.</p>
            <p>You must keep your password confidential and must not share it. You are responsible for all activities that occur under your member account.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">3. Privacy Policy</h2>
            <p>Please refer to our <Link to="/privacy" className="text-secondary hover:underline">Privacy Policy</Link> for information about what we collect, how we collect, use, and disclose information about you.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">4. Use of the App, Services, Content, and Trademarks</h2>
            <p>Unless otherwise indicated, the App and Services and all content and other materials are property of WADE or WADE's licensors and are protected by international copyright laws. All intellectual property rights are exclusively owned by the Company.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">5. Warranty Disclaimer</h2>
            <p>YOU EXPRESSLY UNDERSTAND AND AGREE THAT YOUR USE OF THE APP OR WADE'S SERVICES IS AT YOUR OWN RISK. WADE MAKES NO REPRESENTATIONS CONCERNING ANY CONTENT CONTAINED IN OR ACCESSED THROUGH THE SERVICE.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">6. Limitation on Liability</h2>
            <p>YOU ACKNOWLEDGE AND AGREE THAT YOU ASSUME FULL RESPONSIBILITY FOR YOUR USE OF THE APP AND SERVICE. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, NEITHER WADE NOR ITS SUPPLIERS OR LICENSORS WILL BE LIABLE TO YOU FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">7. Links or Third-Party Applications</h2>
            <p>The Service provides links to other accessible applications or resources. WADE is not responsible for the availability of such external applications or resources.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">8. Feedback</h2>
            <p>You can submit questions, comments, suggestions, ideas, or other information about WADE. Feedback is non-confidential and shall become the sole property of WADE.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">9. Indemnity</h2>
            <p>You agree to release and to indemnify, defend and hold harmless WADE and its subsidiaries, affiliates and agencies from and against any and all losses, liabilities, expenses, damages, costs, claims or actions arising from your use of the service or violation of these Terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">10. Modifications</h2>
            <p>WADE reserves the right to modify, suspend or discontinue, temporarily or permanently, the App or Services at any time without liability. Istanbul courts and execution offices will be exclusively authorized for the resolution of conflicts in accordance with Laws of the Republic of Turkey.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">11. Termination and Suspension</h2>
            <p>WADE may terminate and suspend all or part of the service and your access immediately, without prior notice or liability, if you breach any of the Terms and Conditions.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">12. Payment Conditions</h2>
            <h3 className="text-lg font-display font-medium text-foreground mt-4">12.1 Pricing</h3>
            <p>Pricing for products or menu items showcased via the Service may vary from those prices set by Merchants. WADE retains the authority to modify prices at any moment.</p>

            <h3 className="text-lg font-display font-medium text-foreground mt-4">12.2 Service Fees</h3>
            <p>WADE may impose fees for the Service including delivery fees, service fees, merchant fees, or surge fees.</p>

            <h3 className="text-lg font-display font-medium text-foreground mt-4">12.3 Refunds and Returns</h3>
            <p>Fees paid for orders that have been completed and delivered are definitive and non-refundable. WADE may choose to issue refunds at its sole discretion.</p>

            <h3 className="text-lg font-display font-medium text-foreground mt-4">12.4 Unclaimed Orders and Cancellations</h3>
            <p>WADE reserves the right to bill you the total order amount if you are not present at the delivery location or fail to collect an order.</p>

            <h3 className="text-lg font-display font-medium text-foreground mt-4">12.5 Risk of Loss</h3>
            <p>Ownership and risk of loss for products transfers to you when WADE or our supplier hands items over to the carrier.</p>

            <h3 className="text-lg font-display font-medium text-foreground mt-4">12.6 Payment Information; Taxes</h3>
            <p>WADE will charge the payment method you specify at the time of purchase. You are responsible for all transaction taxes.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">13. GPS Tracking Policy</h2>
            <p>WADE Captain incorporates GPS technology to track the location of our delivery personnel. The GPS tracking feature serves to optimize deliveries, provide real-time tracking, ensure safety, and enhance customer service.</p>
            <p>We implement appropriate technical and organizational measures to safeguard GPS location data. You retain the right to access, rectify, request deletion, or restrict processing of your GPS location data.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">Contact Us</h2>
            <p>If you have any questions, please contact us at: <a href="mailto:info@wadedelivery.com" className="text-secondary hover:underline">info@wadedelivery.com</a></p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TermsConditions;
