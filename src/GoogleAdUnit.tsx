'use client';
import React from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

type GoogleAdUnitProps = {
  children: React.ReactNode;
};

declare global {
  interface Window {
    adsbygoogle?: any | any[];
  }
}

const GoogleAdUnit: React.FC<GoogleAdUnitProps> = ({ children }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  React.useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, [pathname, searchParams]);
  return <React.Fragment>{children}</React.Fragment>;
};

export default GoogleAdUnit;
