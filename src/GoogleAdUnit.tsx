'use client';
import React from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

declare global {
  interface Window {
    adsbygoogle?: any | any[];
  }
}

const GoogleAdUnit = ({ children }: Props): React.JSX.Element => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  React.useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, [pathname, searchParams]);
  return <>{children}</>;
};

export default GoogleAdUnit;
