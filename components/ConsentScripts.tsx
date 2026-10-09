"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { CONSENT_EVENT, getConsent } from "@/lib/consent";

// GA4 + Meta Pixel. Renderuju se SAMO posle pristanka.
export default function ConsentScripts() {
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    setGranted(getConsent() === "granted");
    const onChange = (e: Event) =>
      setGranted((e as CustomEvent).detail === "granted");
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  if (!granted) return null;

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-V9RXXZGZSZ"
        strategy="afterInteractive"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-V9RXXZGZSZ');
        `}
      </Script>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1058190020467349');
          fbq('track', 'PageView');
        `}
      </Script>
    </>
  );
}
