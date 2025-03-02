import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import LoadingSpinner from '.';

const withLoading = (WrappedComponent) => {
  const WithLoadingComponent = (props) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      const handleStart = () => setIsLoading(true);
      const handleComplete = () => setIsLoading(false);
      const handleError = () => setIsLoading(false);

      router.events.on('routeChangeStart', handleStart);
      router.events.on('routeChangeComplete', handleComplete);
      router.events.on('routeChangeError', handleError);

      return () => {
        router.events.off('routeChangeStart', handleStart);
        router.events.off('routeChangeComplete', handleComplete);
        router.events.off('routeChangeError', handleError);
      };
    }, [router]);

    // Check for missing critical data (e.g., marketTypes)
    if (!props.marketTypes) {
      return <LoadingSpinner size="medium" />;
    }

    return isLoading ? (
      <LoadingSpinner size="medium" />
    ) : (
      <WrappedComponent {...props} />
    );
  };

  // Ensure display name for debugging
  WithLoadingComponent.displayName = `WithLoading(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithLoadingComponent;
};

export default withLoading;