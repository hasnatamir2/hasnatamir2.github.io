"use client";
import Script from "next/script";

const GoogleAnaltyics = ({ MEASUREMENTID }: { MEASUREMENTID: string }) => {
  return (
    <>
      <Script
        async
        src="https://www.google-analytics.com/analytics.js"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', G-${MEASUREMENTID}, 'auto');
          ga('send', 'pageview');
        `}
      </Script>
    </>
  );
};

export default GoogleAnaltyics;
