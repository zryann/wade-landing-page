import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logoLight from "@/assets/logo-light.svg";

const PrivacyPolicy = () => {
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
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">1. Conditions</h2>
            <p>By using the WADE Application, you agree to abide by these terms of service, all applicable laws and regulations, and you agree that you are responsible for compliance with applicable local laws. If you disagree with any of these terms, you are prohibited from using or accessing this site. The materials on this website are protected by applicable copyright and trademark laws.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">2. License of Use</h2>
            <p>It is only permitted to temporarily download a copy of the information and/or software contained in the WADE application for personal, non-commercial temporary viewing. This permission does not mean that the license of use is granted only under the conditions reported by the WADE application, and does not result in the transfer of other licenses and/or title transfer.</p>
            <p>This license is automatically terminated if you violate any of these restrictions, or it can be terminated at any time and when deemed necessary by the WADE application.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">3. Disclaimer</h2>
            <p>The materials included in the WADE application are provided as specified in this application. The WADE application does not provide any warranty, even if it implies in any way, and rejects any other warranties, such as warranties of merchantability, fitness for a particular purpose or non-infringement of intellectual property rights.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">4. Limitations</h2>
            <p>WADE application or suppliers shall not be liable for any loss of data, profit, or business interruption arising from the use or non-use of the materials included in the WADE application.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">5. The Accuracy of the Materials</h2>
            <p>The materials appearing in the WADE application may contain technical, typographic or photographic errors. WADE application does not guarantee that none of the materials are correct, complete or up-to-date. The WADE application may make changes to the materials on the website at any time without notice.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">6. Links</h2>
            <p>The WADE application has not examined all of the sites linked to the website and is not responsible for the content of these sites. The use of such linked websites is exclusively the responsibility of the user.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">7. Changes</h2>
            <p>The WADE application may change these terms of service for the website at any time without prior notice. By using this website, you agree to be bound by the current terms of service.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">8. Governing Law</h2>
            <p>Determined according to the laws of the Republic of Turkey.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">Wade Driver Privacy Policy</h2>
            <p>Wade Driver (Driver App) is a wholly owned subsidiary of WADE, which focuses on delivery in Erbil, Iraq. At Wade Driver, we strive to do everything we can to respect the trust customers have in our brand, and our commitment to your privacy is no exception.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">Personal Information Policy</h2>
            <p>We collect personal information from visitors to our website and users of our Mobile Applications. This Policy sets forth how we use this information and provides other details about our personal information practices.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">Consent</h2>
            <p>By using this site, you agree to the terms of this Policy. Whenever you submit information via this app, you consent to the collection, use, and disclosure of the information in accordance with this Policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">Types of Information We Collect</h2>
            <p>When using Online Services, you may be asked to enter your name, email address, mailing address, telephone number and/or other details. Wade Driver gathers such personal information only when voluntarily submitted by you.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">Sharing of Personal Information</h2>
            <p>Wade Driver may share personal information within the WADE Family. Personal information that you submit may be disclosed to third parties such as vendors/suppliers and/or agents who are employed to provide some of our services.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">Location Information</h2>
            <p>Mobile Apps may collect precise information about the location of your mobile device using technologies such as GPS, Wi-Fi, or cell tower proximity. Wade Driver uses this information for location-based services that you request.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">Cookies</h2>
            <p>Cookies are pieces of information that a website transfers to an individual's hard drive for record keeping purposes. Wade Driver uses cookies for a variety of purposes to improve your online experience.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">Contact Us</h2>
            <p>If you have any questions about Wade Driver Privacy Policy, please contact us at: <a href="mailto:info@wadedelivery.com" className="text-secondary hover:underline">info@wadedelivery.com</a></p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
