import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import App from '../App';

const ProtectedApp: React.FC = () => {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setEmail(data.user?.email ?? null);
    });
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    window.location.assign('/login');
  };

  return (
    <>
      <div className="fixed right-4 top-3 z-[60] flex items-center gap-2">
        {email && (
          <span className="hidden md:inline rounded-full border border-white/10 bg-black/80 px-3 py-1 text-[10px] text-gray-400 backdrop-blur-md">
            {email}
          </span>
        )}
        <button
          onClick={signOut}
          className="rounded-full border border-red-900/60 bg-black/80 px-3 py-1 text-[10px] text-red-400 backdrop-blur-md hover:bg-red-950 hover:text-red-300"
        >
          退出
        </button>
      </div>
      <App />
    </>
  );
};

export default ProtectedApp;
