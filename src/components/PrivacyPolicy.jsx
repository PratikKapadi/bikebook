import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="text-center mb-4">Privacy Policy</h1>

          <p>
            Welcome to BikeBook! This Privacy Policy outlines how we collect, use, and protect your personal information when you use our website and services.
          </p>

          <h3>1. Information We Collect</h3>
          <p>
            We may collect the following types of information:
            <ul>
              <li>Personal Identification Information (Name, Email Address, Phone Number, etc.)</li>
              <li>Vehicle Preferences and Search History</li>
              <li>Location Data</li>
            </ul>
          </p>

          <h3>2. How We Use Your Information</h3>
          <p>
            We use the collected data to:
            <ul>
              <li>Provide personalized vehicle recommendations</li>
              <li>Improve our website and services</li>
              <li>Communicate with you regarding inquiries, promotions, and updates</li>
              <li>Enhance user experience through location-based services</li>
            </ul>
          </p>

          <h3>3. Data Protection</h3>
          <p>
            We are committed to ensuring that your information is secure. We have implemented appropriate security measures to protect your data from unauthorized access, disclosure, or alteration.
          </p>

          <h3>4. Sharing Your Information</h3>
          <p>
            We do not sell or rent your personal information to third parties. However, we may share your information with trusted partners for operational purposes, such as payment processing or marketing communications, with your consent.
          </p>

          <h3>5. Cookies</h3>
          <p>
            Our website uses cookies to improve user experience. Cookies are small data files stored on your device that help us analyze web traffic or personalize your interactions with the site.
          </p>

          <h3>6. Your Rights</h3>
          <p>
            You have the right to:
            <ul>
              <li>Access, modify, or delete your personal data</li>
              <li>Withdraw consent for data processing</li>
              <li>Request the transfer of your data</li>
            </ul>
          </p>

          <h3>7. Changes to This Privacy Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website. You are advised to review this page periodically for any changes.
          </p>

          <h3>8. Contact Us</h3>
          <p>
            If you have any questions or concerns about our Privacy Policy, feel free to contact us at:
            <ul>
              <li>Email: privacy@bikebook.com</li>
              <li>Phone: +1 234 567 890</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
