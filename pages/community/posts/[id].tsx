import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/lib/supabase';
import AuthModal from '@/components/AuthModal';
import { mockPosts, mockComments, isSupabaseConfigured } from '@/lib/mockData';

export default function PostDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAuth();
  const [post, setPost] = useState<any>(null);
  const [comments, setComments] = useState<any[]>([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  useEffect(() => {
    if (id) {
      fetchPost();
      fetchComments();
    }
  }, [id]);

  const fetchPost = async () => {
    try {
      if (isSupabaseConfigured()) {
        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;

        // 조회수 증가
        await supabase
          .from('posts')
          .update({ views: (data.views || 0) + 1 })
          .eq('id', id);

        setPost(data);
      } else {
        // Mock 데이터 사용
        const foundPost = mockPosts.find((p) => p.id === id);
        if (foundPost) {
          setPost({ ...foundPost, views: (foundPost.views || 0) + 1 });
        }
      }
    } catch (error) {
      console.error('Error fetching post:', error);
      // 에러 시 mock 데이터에서 찾기
      const foundPost = mockPosts.find((p) => p.id === id);
      if (foundPost) {
        setPost(foundPost);
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchComments = async () => {
    try {
      if (isSupabaseConfigured()) {
        const { data, error } = await supabase
          .from('comments')
          .select('*')
          .eq('post_id', id)
          .is('parent_id', null)
          .order('created_at', { ascending: true });

        if (error) throw error;
        setComments(data || []);
      } else {
        setComments(mockComments.filter((c) => c.post_id === id));
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
      setComments(mockComments.filter((c) => c.post_id === id));
    }
  };

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      setAuthModalOpen(true);
      return;
    }

    if (!newComment.trim()) return;

    setSubmitting(true);

    try {
      const { data: profile } = await supabase
        .from('profiles')
        .select('username, avatar_url')
        .eq('id', user.id)
        .single();

      const { error } = await supabase.from('comments').insert({
        post_id: id,
        content: newComment,
        author_id: user.id,
        author_username: profile?.username || `user_${user.id.slice(0, 8)}`,
        author_avatar: profile?.avatar_url || null,
        parent_id: null,
      });

      if (error) throw error;

      setNewComment('');
      fetchComments();
    } catch (error) {
      console.error('Error submitting comment:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-raycast-white flex items-center justify-center">
        <div className="text-gray-500">로딩 중...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-raycast-white">
        <Navigation />
        <main className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl font-semibold text-raycast-text mb-4">게시글을 찾을 수 없습니다</h1>
            <Link href="/community" className="text-blue-600 hover:underline">
              커뮤니티로 돌아가기
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-raycast-white">
      <Head>
        <title>{post.title} - Community</title>
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
      <Script id="ezoic-init-post" strategy="afterInteractive">
        {`
          window.ezstandalone = window.ezstandalone || {};
          ezstandalone.cmd = ezstandalone.cmd || [];
        `}
      </Script>

      <Navigation />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/community"
            className="text-sm text-raycast-text-secondary hover:text-raycast-text mb-6 inline-block"
          >
            ← 커뮤니티로 돌아가기
          </Link>

          {/* 게시글 */}
          <article className="bg-white border border-raycast-border rounded-xl p-8 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded">
                {post.category}
              </span>
              <span className="text-sm text-gray-500">{formatDate(post.created_at)}</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-semibold text-raycast-text mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
              <span>작성자: {post.author_username}</span>
            </div>

            <div className="prose max-w-none text-raycast-text-secondary leading-relaxed whitespace-pre-wrap">
              {post.content}
            </div>
          </article>

          {/* 댓글 섹션 */}
          <section className="bg-white border border-raycast-border rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-raycast-text mb-6">
              댓글 {comments.length}
            </h2>

            {/* 댓글 작성 폼 */}
            <form onSubmit={handleSubmitComment} className="mb-8">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none mb-4"
                placeholder={user ? '댓글을 입력하세요...' : '로그인이 필요합니다.'}
                disabled={!user}
              />
              <button
                type="submit"
                disabled={!user || submitting || !newComment.trim()}
                className="px-6 py-2 bg-raycast-text text-white rounded-button hover:bg-opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? '작성 중...' : '댓글 작성'}
              </button>
            </form>

            {/* 댓글 목록 */}
            <div className="space-y-6">
              {comments.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  아직 댓글이 없습니다. 첫 댓글을 작성해보세요!
                </div>
              ) : (
                comments.map((comment) => (
                  <div key={comment.id} className="border-b border-gray-200 pb-6 last:border-0">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                        {comment.author_avatar ? (
                          <img
                            src={comment.author_avatar}
                            alt={comment.author_username}
                            className="w-full h-full rounded-full object-cover"
                          />
                        ) : (
                          <span className="text-gray-500 text-sm">
                            {comment.author_username[0].toUpperCase()}
                          </span>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold text-raycast-text">
                            {comment.author_username}
                          </span>
                          <span className="text-xs text-gray-500">
                            {formatDate(comment.created_at)}
                          </span>
                        </div>
                        <p className="text-raycast-text-secondary whitespace-pre-wrap">
                          {comment.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>
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

