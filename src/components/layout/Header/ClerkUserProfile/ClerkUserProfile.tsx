import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import "./ClerkUserProfile.css";
import { Link } from "react-router";

type ClerkUserProfile = {
  className?: string;
};

export default function ClerkUserProfile({ className }: ClerkUserProfile) {
  const { user } = useUser();
  const [userRole, setUserRole] = useState<"user" | "seller">("user");
  return (
    <div className={className}>
      <SignedOut>
        <SignInButton>
          <button className="sign-in-button">Sign In</button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton fallback={<Skeleton circle width={30} height={30} />}>
          {/* Custom page for the Orders Analytics*/}
          <UserButton.MenuItems>
            <UserButton.Action
              label="Orders"
              labelIcon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="m17.275 20.25l3.475-3.45l-1.05-1.05l-2.425 2.375l-.975-.975l-1.05 1.075zM6 9h12V7H6zm12 14q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23M3 22V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v6.675q-.7-.35-1.463-.513T18 11H6v2h7.1q-.425.425-.787.925T11.675 15H6v2h5.075q-.05.25-.062.488T11 18q0 1.05.288 2.013t.862 1.837L12 22l-1.5-1.5L9 22l-1.5-1.5L6 22l-1.5-1.5z"
                  />
                </svg>
              }
              open="orders"
            />
          </UserButton.MenuItems>

          <UserButton.UserProfilePage
            label="Orders"
            labelIcon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="m17.275 20.25l3.475-3.45l-1.05-1.05l-2.425 2.375l-.975-.975l-1.05 1.075zM6 9h12V7H6zm12 14q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23M3 22V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v6.675q-.7-.35-1.463-.513T18 11H6v2h7.1q-.425.425-.787.925T11.675 15H6v2h5.075q-.05.25-.062.488T11 18q0 1.05.288 2.013t.862 1.837L12 22l-1.5-1.5L9 22l-1.5-1.5L6 22l-1.5-1.5z"
                />
              </svg>
            }
            url="orders">
            <div>
              <h1 className="custom-page-header">Orders Page</h1>
              <p>Here you can see your order analytics</p>
              {userRole === "seller" && (
                <h3>Order statisticks for the seller</h3>
              )}
              {userRole === "user" && <h3>Order statisticks for the user</h3>}
            </div>
          </UserButton.UserProfilePage>

          <UserButton.UserProfilePage
            label="User Roles"
            url="user-roles"
            labelIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                fill="currentColor">
                <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352h117.4C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
              </svg>
            }>
            <div className="user-roles-container">
              <h1 className="custom-page-header">User Roles</h1>

              <div className="role-grid">
                <div className="role-card">
                  <div className="role-icon-container">
                    <svg
                      className="user-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fill="currentColor">
                      <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                    </svg>
                    <h2 className="role-title">Standard User</h2>
                  </div>
                  <ul className="feature-list">
                    <li>• Browse and purchase products</li>
                    <li>• Write reviews</li>
                    <li>• Save favorites</li>
                    <li>• Access to customer support</li>
                    <li>• Manage personal profile</li>
                  </ul>
                  {userRole === "user" && (
                    <div className="current-role">
                      <p>This is your current role</p>
                    </div>
                  )}
                </div>

                <div className="role-card">
                  <div className="role-icon-container">
                    <svg
                      className="seller-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      fill="currentColor">
                      <path d="M547.6 103.8L490.3 13.1C485.2 5 476.1 0 466.4 0H109.6C99.9 0 90.8 5 85.7 13.1L28.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4zM499.7 254.9l-.1 0c-5.3 .7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3V384H128V250.6c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1l-.1 0c-4.1-.6-8.1-1.3-12-2.3V384v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V384 252.6c-4 1-8 1.8-12.3 2.3z" />
                    </svg>
                    <h2 className="role-title">Seller</h2>
                  </div>
                  <ul className="feature-list">
                    <li style={{fontWeight: '700'}}>• All standard user features plus:</li>
                    <li>• List and sell your own products</li>
                    <li>• Access to seller dashboard</li>
                    <li>• Sales analytics and reporting</li>
                    <li>• Promotional tools and features</li>
                  </ul>
                  {userRole === "seller" ? (
                    <div className="current-role">
                      <p>This is your current role</p>
                    </div>
                  ) : (
                    <a href="#seller-form" className="upgrade-text">
                      <p>Upgrade to seller below</p>
                    </a>
                  )}
                </div>
              </div>
              <p>Current Role: {userRole}</p>
              <button
                onClick={() => {
                  setUserRole((prev) => (prev === "user" ? "seller" : "user"));
                  user?.update({
                    unsafeMetadata: { userRole },
                  });
                  console.log(user?.unsafeMetadata);
                }}>
                Switch to {userRole === "user" ? "Seller" : "User"}
              </button>
              {userRole === "user" && (
                <>
                  <div id="seller-form" className="form-container">
                    <h2 className="form-header">Upgrade to Seller</h2>
                    <p className="form-description">
                      Please complete the following form to apply for a seller
                      account. Our team will review your application and respond
                      within 2-3 business days.
                    </p>

                    <form className="application-form">
                      <div className="form-grid">
                        <div className="form-field">
                          <label className="form-label" htmlFor="business-name">
                            Business Name *
                          </label>
                          <input
                            type="text"
                            id="business-name"
                            className="form-input"
                            required
                          />
                        </div>

                        <div className="form-field">
                          <label className="form-label" htmlFor="business-type">
                            Business Type *
                          </label>
                          <select
                            id="business-type"
                            className="form-select"
                            required>
                            <option value="">Select a business type</option>
                            <option value="individual">
                              Individual / Sole Proprietor
                            </option>
                            <option value="partnership">Partnership</option>
                            <option value="llc">
                              Limited Liability Company (LLC)
                            </option>
                            <option value="corporation">Corporation</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        <div className="form-field">
                          <label className="form-label" htmlFor="phone">
                            Business Phone *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            className="form-input"
                            required
                          />
                        </div>

                        <div className="form-field">
                          <label className="form-label" htmlFor="address">
                            Business Address *
                          </label>
                          <input
                            type="text"
                            id="address"
                            className="form-input"
                            required
                          />
                        </div>

                        <div className="full-width-field">
                          <label className="form-label" htmlFor="products">
                            What products do you plan to sell? *
                          </label>
                          <textarea
                            id="products"
                            rows={3}
                            className="form-textarea"
                            required></textarea>
                        </div>

                        <div className="full-width-field">
                          <div className="checkbox-container">
                            <input
                              id="terms"
                              type="checkbox"
                              className="form-checkbox"
                              required
                            />
                            <label htmlFor="terms" className="checkbox-label">
                              I agree to the{" "}
                              <Link
                                to="/terms-of-service"
                                target="_blank"
                                className="form-link">
                                Terms of Service
                              </Link>{" "}
                              and{" "}
                              <Link
                                to="/seller-policy"
                                target="_blank"
                                className="form-link">
                                Seller Policy
                              </Link>{" "}
                              *
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="button-container">
                        <button type="submit" className="submit-button">
                          Submit Application
                        </button>
                      </div>
                    </form>
                  </div>

                  <div className="form-footer">
                    <p>
                      Have questions about becoming a seller?{" "}
                      <a
                        href="mailto:info_shopiclothi@gmail.com"
                        className="form-link">
                        Contact our customer support team
                      </a>
                    </p>
                  </div>
                </>
              )}
            </div>
          </UserButton.UserProfilePage>
        </UserButton>
      </SignedIn>
    </div>
  );
}
