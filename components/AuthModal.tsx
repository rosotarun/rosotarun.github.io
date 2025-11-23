import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { supabase } from '@/lib/supabase';
import { isSupabaseConfigured } from '@/lib/mockData';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'login' | 'signup';
  onModeChange?: (mode: 'login' | 'signup') => void;
}

export default function AuthModal({ isOpen, onClose, mode, onModeChange }: AuthModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Supabase 설정 확인
    if (!isSupabaseConfigured()) {
      setError('회원가입 및 로그인 기능을 사용하려면 Supabase 설정이 필요합니다. SUPABASE_SETUP.md 파일을 참고하여 설정해주세요.');
      return;
    }

    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      if (mode === 'signup') {
        // 회원가입
        if (!username.trim()) {
          setError('사용자명을 입력해주세요.');
          setLoading(false);
          return;
        }

        const { data: authData, error: authError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              username: username.trim(),
            },
            emailRedirectTo: `${window.location.origin}/community`,
          },
        });

        if (authError) {
          // 에러 메시지 개선
          if (authError.message.includes('already registered')) {
            throw new Error('이미 등록된 이메일입니다. 로그인을 시도해주세요.');
          } else if (authError.message.includes('Password')) {
            throw new Error('비밀번호는 최소 6자 이상이어야 합니다.');
          } else if (authError.message.includes('email')) {
            throw new Error('유효한 이메일 주소를 입력해주세요.');
          }
          throw authError;
        }

        if (authData.user) {
          // 프로필 생성 시도
          try {
            await supabase.from('profiles').insert({
              id: authData.user.id,
              username: username.trim(),
            });
          } catch (profileError) {
            console.error('Profile creation error:', profileError);
            // 프로필 생성 실패해도 계속 진행
          }

          setMessage('회원가입이 완료되었습니다! 이메일을 확인하여 인증을 완료해주세요.');
          setTimeout(() => {
            onClose();
            setEmail('');
            setPassword('');
            setUsername('');
          }, 3000);
        }
      } else {
        // 로그인
        const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (signInError) {
          if (signInError.message.includes('Invalid login credentials')) {
            throw new Error('이메일 또는 비밀번호가 올바르지 않습니다.');
          } else if (signInError.message.includes('Email not confirmed')) {
            throw new Error('이메일 인증이 완료되지 않았습니다. 이메일을 확인해주세요.');
          }
          throw signInError;
        }

        if (signInData.user) {
          setMessage('로그인되었습니다!');
          setTimeout(() => {
            onClose();
            setEmail('');
            setPassword('');
            window.location.reload();
          }, 1000);
        }
      }
    } catch (err: any) {
      setError(err.message || '오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen || !mounted) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-xl p-8 max-w-md w-full shadow-xl my-auto relative z-[10000]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-raycast-text">
            {mode === 'login' ? '로그인' : '회원가입'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <div>
              <label className="block text-sm font-medium text-raycast-text mb-2">
                사용자명
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="사용자명을 입력하세요"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-raycast-text mb-2">
              이메일
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="이메일을 입력하세요"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-raycast-text mb-2">
              비밀번호
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="비밀번호를 입력하세요"
              required
              minLength={6}
            />
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded text-sm text-red-600">
              {error}
            </div>
          )}

          {message && (
            <div className="p-3 bg-green-50 border border-green-200 rounded text-sm text-green-600">
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-raycast-text text-white rounded-button hover:bg-opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? '처리 중...' : mode === 'login' ? '로그인' : '회원가입'}
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-500">
          {mode === 'login' ? (
            <span>
              계정이 없으신가요?{' '}
              <button
                type="button"
                onClick={() => {
                  setError(null);
                  setMessage(null);
                  onModeChange?.('signup');
                }}
                className="text-blue-600 hover:underline"
              >
                회원가입
              </button>
            </span>
          ) : (
            <span>
              이미 계정이 있으신가요?{' '}
              <button
                type="button"
                onClick={() => {
                  setError(null);
                  setMessage(null);
                  onModeChange?.('login');
                }}
                className="text-blue-600 hover:underline"
              >
                로그인
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}

