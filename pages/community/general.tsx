import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AuthModal from '@/components/AuthModal';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/lib/supabase';
import { mockPosts, isSupabaseConfigured } from '@/lib/mockData';

export default function GeneralPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      if (isSupabaseConfigured()) {
        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .eq('category', '자유 게시판')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setPosts(data || []);
      } else {
        setPosts(mockPosts.filter((p) => p.category === '자유 게시판'));
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
      setPosts(mockPosts.filter((p) => p.category === '자유 게시판'));
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (minutes < 60) return `${minutes}분 전`;
    if (hours < 24) return `${hours}시간 전`;
    if (days < 7) return `${days}일 전`;
    return date.toLocaleDateString('ko-KR');
  };

  return (
    <div className="min-h-screen bg-raycast-white">
      <Head>
        <title>자유 게시판 - Community</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Ezoic Scripts */}
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
      <Script
        src="//www.ezojs.com/ezoic/sa.min.js"
        strategy="afterInteractive"
      />
      <Script id="ezoic-init-general" strategy="afterInteractive">
        {`
          window.ezstandalone = window.ezstandalone || {};
          ezstandalone.cmd = ezstandalone.cmd || [];
        `}
      </Script>

      <Navigation />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Link
              href="/community"
              className="text-sm text-raycast-text-secondary hover:text-raycast-text mb-4 inline-block"
            >
              ← 커뮤니티로 돌아가기
            </Link>
            <h1 className="text-3xl md:text-4xl font-semibold text-raycast-text mb-4">
              자유 게시판
            </h1>
            <p className="text-gray-600">
              자유롭게 대화하고 정보를 공유해주세요.
            </p>
          </div>

          <div className="mb-6">
            <button
              onClick={() => {
                if (!user) {
                  setAuthModalOpen(true);
                  return;
                }
                router.push('/community/write?category=자유 게시판');
              }}
              className="px-6 py-2 bg-raycast-text text-white rounded-button hover:bg-opacity-90 transition-all duration-200"
            >
              글쓰기
            </button>
          </div>

          {loading ? (
            <div className="text-center py-12 text-gray-500">로딩 중...</div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              아직 게시글이 없습니다. 첫 게시글을 작성해보세요!
            </div>
          ) : (
            <div className="space-y-4">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/community/posts/${post.id}`}
                  className="block p-6 bg-white border border-raycast-border rounded-xl hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded">
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-500">{formatDate(post.created_at)}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-raycast-text mb-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-raycast-text-secondary line-clamp-2 mb-3">
                        {post.content}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>작성자: {post.author_username}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        mode="login"
        onModeChange={() => {}}
      />
    </div>
  );
}

