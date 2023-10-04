import React, { Suspense } from 'react';
import GoogleAdUnitClient, { GoogleAdUnitProps } from './GoogleAdUnitClient';

// const GoogleAdUnitClient = React.lazy(() => import('./GoogleAdUnitClient'))

const GoogleAdUnit = ({ children }: GoogleAdUnitProps) => {
  return (
    <Suspense fallback={null}>
      <GoogleAdUnitClient>{children}</GoogleAdUnitClient>
    </Suspense>
  );
};

export default GoogleAdUnit;
