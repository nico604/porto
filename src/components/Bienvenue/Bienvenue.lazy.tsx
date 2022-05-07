import React, { lazy, Suspense } from 'react';

const LazyBienvenue = lazy(() => import('./Bienvenue'));

const Bienvenue = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBienvenue {...props} />
  </Suspense>
);

export default Bienvenue;
