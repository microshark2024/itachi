import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AuthPage from './components/AuthPage';
import { supabase } from './lib/supabase';

const Root: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    let mounted = true;

    supabase.auth.getUser().then(({ data }) => {
      if (!mounted) return;
      setAuthenticated(Boolean(data.user));
      setLoading(false);
    });

    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      if (mounted) setAuthenticated(Boolean(session?.user));
    });

    return () => {
      mounted = false;
      data.subscription.unsubscribe();
    };
  }, []);

  const isLoginPage = window.location.pathname === '/login';

  if (loading) {
    return (
      <main className="min-h-screen bg-black text-gray-500 flex items-center justify-center">
        正在验证身份...
      </main>
    );
  }

  if (!authenticated && !isLoginPage) {
    window.history.replaceState({}, '', '/login');
  }

  if (authenticated && isLoginPage) {
    window.history.replaceState({}, '', '/');
  }

  return authenticated ? <App /> : <AuthPage />;
};

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Could not find root element to mount to');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);
