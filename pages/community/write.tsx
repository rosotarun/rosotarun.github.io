import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/lib/supabase';

export default function WritePostPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('질문 & 답변');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/community');
    }
    // URL 쿼리 파라미터에서 카테고리 가져오기
    if (router.query.category) {
      setCategory(router.query.category as string);
    }
  }, [user, loading, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setSubmitting(true);
    setError(null);

    try {
      // 프로필 정보 가져오기
      const { data: profile } = await supabase
        .from('profiles')
        .select('username, avatar_url')
        .eq('id', user.id)
        .single();

      const { error: insertError } = await supabase.from('posts').insert({
        title,
        content,
        category,
        author_id: user.id,
        author_username: profile?.username || `user_${user.id.slice(0, 8)}`,
        author_avatar: profile?.avatar_url || null,
      });

      if (insertError) throw insertError;

      router.push('/community');
    } catch (err: any) {
      setError(err.message || '게시글 작성에 실패했습니다.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-raycast-white flex items-center justify-center">
        <div className="text-gray-500">로딩 중...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-raycast-white">
      <Head>
        <title>게시글 작성 - Community</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Ezoic Privacy Scripts */}
      <Script
        src="https://cmp.gatekeeperconsent.com/min.js"
        data-cfasync="false"
        strategy="beforeInteractive"
      />
      <Script
        src="https://the.gatekeeperconsent.com/cmp.min.js"
        data-cfasync="false"
        strategy="beforeInteractive"
      />

      {/* Ezoic Header Script */}
      <Script
        src="//www.ezojs.com/ezoic/sa.min.js"
        strategy="afterInteractive"
      />
      <Script id="ezoic-init-write" strategy="afterInteractive">
        {`
          window.ezstandalone = window.ezstandalone || {};
          ezstandalone.cmd = ezstandalone.cmd || [];
        `}
      </Script>

      <Navigation />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold text-raycast-text mb-8">
            새 게시글 작성
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-raycast-text mb-2">
                카테고리
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="질문 & 답변">질문 & 답변</option>
                <option value="프로젝트 공유">프로젝트 공유</option>
                <option value="팁 & 트릭">팁 & 트릭</option>
                <option value="자유 게시판">자유 게시판</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-raycast-text mb-2">
                제목
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="게시글 제목을 입력하세요"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-raycast-text mb-2">
                내용
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={15}
                className="w-full px-4 py-2 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="게시글 내용을 입력하세요"
                required
              />
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded text-sm text-red-600">
                {error}
              </div>
            )}

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={submitting}
                className="px-6 py-3 bg-raycast-text text-white rounded-button hover:bg-opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? '작성 중...' : '게시글 작성'}
              </button>
              <button
                type="button"
                onClick={() => router.back()}
                className="px-6 py-3 bg-white text-raycast-text border border-gray-300 rounded-button hover:border-gray-400 transition-all duration-200"
              >
                취소
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}

