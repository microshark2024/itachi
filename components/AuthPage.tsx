import React, { FormEvent, useState } from 'react';
import { supabase } from '../lib/supabase';

const AuthPage: React.FC = () => {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    try {
      const result =
        mode === 'signin'
          ? await supabase.auth.signInWithPassword({ email, password })
          : await supabase.auth.signUp({
              email,
              password,
              options: { emailRedirectTo: window.location.origin },
            });

      if (result.error) throw result.error;

      if (mode === 'signup' && !result.data.session) {
        setMessage('注册成功。请检查邮箱并完成确认后再登录。');
      } else {
        window.location.assign('/');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : '认证失败，请稍后重试。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md border border-white/10 bg-zinc-950/90 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <div className="mx-auto mb-5 w-14 h-14 rounded-full border-4 border-red-700 flex items-center justify-center">
            <div className="w-7 h-7 bg-red-700 rounded-t-full" />
          </div>
          <h1 className="font-cinzel text-3xl font-black text-red-600">UCHIHA</h1>
          <p className="mt-2 text-xs tracking-[0.25em] text-gray-500 uppercase">
            The Shadow of the Leaf
          </p>
        </div>

        <div className="grid grid-cols-2 mb-6 bg-zinc-900 rounded-lg p-1">
          <button
            type="button"
            onClick={() => setMode('signin')}
            className={`rounded-md py-2 text-sm transition-colors ${mode === 'signin' ? 'bg-red-900 text-white' : 'text-gray-500'}`}
          >
            登录
          </button>
          <button
            type="button"
            onClick={() => setMode('signup')}
            className={`rounded-md py-2 text-sm transition-colors ${mode === 'signup' ? 'bg-red-900 text-white' : 'text-gray-500'}`}
          >
            注册
          </button>
        </div>

        <form onSubmit={submit} className="space-y-4">
          <input
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="邮箱"
            className="w-full rounded-lg border border-white/10 bg-black px-4 py-3 text-sm outline-none focus:border-red-700"
          />
          <input
            type="password"
            required
            minLength={6}
            autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="密码（至少 6 位）"
            className="w-full rounded-lg border border-white/10 bg-black px-4 py-3 text-sm outline-none focus:border-red-700"
          />

          {error && <p className="text-sm text-red-400">{error}</p>}
          {message && <p className="text-sm text-green-400">{message}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-red-800 hover:bg-red-700 disabled:opacity-50 py-3 font-bold transition-colors"
          >
            {loading ? '处理中...' : mode === 'signin' ? '进入宇智波世界' : '创建账号'}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-gray-600">
          认证由 Supabase Auth 提供，密码不会存储在本项目代码中。
        </p>
      </div>
    </main>
  );
};

export default AuthPage;
