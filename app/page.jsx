"use client";

import HeroText from "@/components/HeroText.jsx";
import HeroImage from "@/components/HeroImage.jsx";
import LoginHeader from "@/components/LoginHeader.jsx";
import LoginBody from "@/components/LoginBody.jsx";
import LoginCode from "@/components/LoginCode.jsx";
import Footer from "@/components/Footer.jsx";

import image1 from "/public/Hero_Image.png";
import image2 from "/public/Login_Image.jpg";

import { auth } from "@/util/firebase.js";
import { useAuthState } from 'react-firebase-hooks/auth';

import { useRouter } from "next/navigation";

import { useState, useRef } from "react";

function App() {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  if(user){
    router.push("/app");
  }

  const [email, setEmail] = useState("");
  const [loginCodePage, setLoginCodePage] = useState(false);

  async function signInWithEmail() {
    console.log("Email: ");
  }

  return (
    <div className="relative bg-yellow">
      <div className="flex flex-col md:flex-row items-center">
        <HeroText />
        <HeroImage imageURL={image1} />
      </div>
      <div className="grid md:grid-cols-2">
        <LoginHeader />
        <HeroImage
          imageURL={image2}
          className="row-span-1 md:row-span-2 md:order-first order-none"
        />
        <LoginBody
          loginCodePage={loginCodePage}
          setLoginCodePage={setLoginCodePage}
          email={email}
          setEmail={setEmail}
        />
      </div>
      {loginCodePage && (
        <LoginCode
          loginCodePage={loginCodePage}
          setLoginCodePage={setLoginCodePage}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
