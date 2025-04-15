import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import './ClerkUserProfile.css'

type ClerkUserProfile = {
    className?: string;
}

 export default function ClerkUserProfile({className}: ClerkUserProfile) {
  return (
    <div className={className}>
      <SignedOut>
        <SignInButton>
          <button className="sign-in-button">Sign In</button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton fallback={<Skeleton circle width={30} height={30} />}>
          
        </UserButton>
      </SignedIn>
    </div>
  );
}
