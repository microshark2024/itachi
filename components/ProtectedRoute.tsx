import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [status, setStatus] = useState<'loading' | 'authenticated' | 'unauthenticated'>('loading');

  useEffect(() => {
    let mounted = true;

    supabase.auth.getUser().then(({ data }) => {
      if (mounted) setStatus(data.user ? 'authenticated' : 'unauthenticated');
    });

    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      if (mounted) setStatus(session?.user ? 'authenticated' : 'unauthenticated');
    });

    return () => {
      mounted = false;
      data.subscription.unsubscribe();
    };
  }, []);

  if (status === 'loading') {
    return (
      <main className="min-h-screen bg-black text-gray-500 flex items-center justify-center">
        正在验证身份...
      </main>
    );
  }

  if (status === 'unauthenticated') {
    window.location.replace('/login');
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
