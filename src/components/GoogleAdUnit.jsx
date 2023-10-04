'use client';
import React from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const GoogleAdUnit = ({ children }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  React.useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error(err);
    }
  }, [pathname, searchParams]);
  return <React.Fragment>{children}</React.Fragment>;
};

export default GoogleAdUnit;
