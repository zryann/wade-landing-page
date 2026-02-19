"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const DeleteAccount = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-primary py-6 shadow-md">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/">
            <img src="/logo-light.svg" alt="WADE" className="h-8" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-10">
          How to Delete Your Account
        </h1>

        <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
          <p>
            At Wade, we offer a simple way to delete your account directly from our mobile app. Please keep in mind that if you have any ongoing transactions or unpaid balances, your account cannot be deleted. Make sure all transactions are completed and any outstanding payments are settled before proceeding. To delete your account via the Wade app, follow these steps:
          </p>
          <ul>
            <li>Open the Wade app on your mobile device.</li>
            <li>Go to the profile tab</li>
            <li>Select 'Account'</li>
            <li>Scroll down and tap on the ‘Delete Account’ option.</li>
            <li>Follow the on-screen prompts to confirm and finalize the process.</li>
          </ul>
          <p>
            Deleting your account will also erase your personal data. However, in certain cases, we may need to retain some of your information for legal purposes or to protect against fraud and misuse. Once your data is removed from the app, it will be permanently deleted from our systems and cannot be restored. If you prefer, you can also request account deletion by reaching out to our support team at info@wadedelivery.com.
          </p>
        </div>
      </main>
    </div>
  );
};

export default DeleteAccount;
