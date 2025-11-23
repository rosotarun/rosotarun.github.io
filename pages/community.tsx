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
import { mockPosts, mockProjects, isSupabaseConfigured } from '@/lib/mockData';

export default function CommunityPage() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [posts, setPosts] = useState<any[]>([]);
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
    fetchProjects();
  }, []);

  const fetchPosts = async () => {
    try {
      if (isSupabaseConfigured()) {
        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(4);

        if (error) throw error;
        setPosts(data || []);
      } else {
        setPosts(mockPosts.slice(0, 4));
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
      setPosts(mockPosts.slice(0, 4));
    } finally {
      setLoading(false);
    }
  };

  const fetchProjects = async () => {
    try {
      if (isSupabaseConfigured()) {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(3);

        if (error) throw error;
        setProjects(data || []);
      } else {
        setProjects(mockProjects.slice(0, 3));
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
      setProjects(mockProjects.slice(0, 3));
    }
  };

  const handleWritePost = () => {
    if (!user) {
      setAuthMode('login');
      setAuthModalOpen(true);
      return;
    }
    router.push('/community/write');
  };

  const handleCreateProject = () => {
    if (!user) {
      setAuthMode('login');
      setAuthModalOpen(true);
      return;
    }
    router.push('/community/projects/create');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (minutes < 1) return '방금 전';
    if (minutes < 60) return `${minutes}분 전`;
    if (hours < 24) return `${hours}시간 전`;
    if (days < 7) return `${days}일 전`;
    return date.toLocaleDateString('ko-KR');
  };

  return (
    <div className="min-h-screen bg-raycast-white">
      <Head>
        <title>Community - Rosota Copilot</title>
        <meta
          name="description"
          content="로봇 개발자들을 위한 커뮤니티. Rosota Copilot 사용자들과 함께 소통하고 프로젝트를 공유하세요."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Community - Rosota Copilot" />
        <meta
          property="og:description"
          content="로봇 개발자들을 위한 커뮤니티. Rosota Copilot 사용자들과 함께 소통하고 프로젝트를 공유하세요."
        />
        <meta property="og:type" content="website" />
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
      <Script id="ezoic-init-community" strategy="afterInteractive">
        {`
          window.ezstandalone = window.ezstandalone || {};
          ezstandalone.cmd = ezstandalone.cmd || [];
        `}
      </Script>

      <Navigation />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-raycast-text mb-6">
              Rosota Copilot Community
            </h1>
            <p className="text-lg md:text-xl text-raycast-text-secondary max-w-3xl mx-auto leading-relaxed">
              로봇 개발자들을 위한 공간입니다. 질문하고, 프로젝트를 공유하고, 함께 성장하세요.
            </p>
          </section>

          {/* Quick Actions */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <button
                onClick={handleWritePost}
                className="px-6 py-4 bg-raycast-text text-raycast-white text-sm font-medium rounded-button hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                새 게시글 작성
              </button>
              <button
                onClick={handleCreateProject}
                className="px-6 py-4 bg-raycast-white text-raycast-text border border-gray-300 text-sm font-medium rounded-button hover:border-gray-400 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                프로젝트 등록
              </button>
            </div>
          </section>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* 질문 & 답변 */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-semibold text-raycast-text">
                  질문 & 답변
                </h2>
                <Link
                  href="/community/qna"
                  className="text-sm text-raycast-text-secondary hover:text-raycast-text transition-colors"
                >
                  모두 보기 →
                </Link>
              </div>

              <div className="space-y-4">
                {loading ? (
                  <div className="text-center py-12 text-gray-500">로딩 중...</div>
                ) : posts.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    아직 게시글이 없습니다. 첫 게시글을 작성해보세요!
                  </div>
                ) : (
                  posts.map((post) => (
                    <Link
                      key={post.id}
                      href={`/community/posts/${post.id}`}
                      className="block p-6 bg-white border border-raycast-border rounded-xl hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded">
                              {post.category}
                            </span>
                            <span className="text-xs text-gray-500">
                              {formatDate(post.created_at)}
                            </span>
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
                  ))
                )}
              </div>
            </div>

            {/* 사이드바 */}
            <div className="space-y-6">
              {/* 프로젝트 갤러리 */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-raycast-text">프로젝트 갤러리</h3>
                  <Link
                    href="/community/projects"
                    className="text-sm text-raycast-text-secondary hover:text-raycast-text transition-colors"
                  >
                    모두 보기 →
                  </Link>
                </div>
                <div className="space-y-4">
                  {projects.length === 0 ? (
                    <div className="text-center py-8 text-gray-500 text-sm">
                      아직 프로젝트가 없습니다.
                    </div>
                  ) : (
                    projects.map((project) => (
                      <Link
                        key={project.id}
                        href={`/community/projects/${project.id}`}
                        className="block p-4 bg-white border border-raycast-border rounded-xl hover:shadow-md transition-shadow duration-200"
                      >
                        <div className="aspect-video bg-gray-100 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                          {project.images && project.images.length > 0 ? (
                            <img
                              src={project.images[0]}
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <span className="text-gray-400 text-sm">프로젝트 이미지</span>
                          )}
                        </div>
                        <h4 className="font-semibold text-raycast-text mb-1">
                          {project.title}
                        </h4>
                        <p className="text-xs text-gray-500">작성자: {project.author_username}</p>
                      </Link>
                    ))
                  )}
                </div>
              </div>

              {/* 인기 태그 */}
              <div>
                <h3 className="text-xl font-semibold text-raycast-text mb-4">인기 태그</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'leader-follower',
                    'timeline',
                    'calibration',
                    'hardware',
                    'troubleshooting',
                    'projects',
                    'tips',
                    'beginner',
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 커뮤니티 통계 */}
              <div className="p-6 bg-white border border-raycast-border rounded-xl">
                <h3 className="text-xl font-semibold text-raycast-text mb-4">커뮤니티 통계</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">총 멤버</span>
                    <span className="text-sm font-semibold text-raycast-text">-</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">게시글</span>
                    <span className="text-sm font-semibold text-raycast-text">-</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">프로젝트</span>
                    <span className="text-sm font-semibold text-raycast-text">-</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">오늘 게시글</span>
                    <span className="text-sm font-semibold text-raycast-text">-</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 카테고리 섹션 */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-raycast-text mb-8 text-center">
              커뮤니티 카테고리
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: '질문 & 답변',
                  description: '소프트웨어 사용법, 문제 해결 등',
                  icon: '💬',
                  href: '/community/qna',
                },
                {
                  title: '프로젝트 공유',
                  description: '로봇 프로젝트를 공유하고 피드백 받기',
                  icon: '🚀',
                  href: '/community/projects',
                },
                {
                  title: '팁 & 트릭',
                  description: '유용한 팁과 노하우 공유',
                  icon: '💡',
                  href: '/community/tips',
                },
                {
                  title: '자유 게시판',
                  description: '자유롭게 대화하고 정보 공유',
                  icon: '🗨️',
                  href: '/community/general',
                },
              ].map((category) => (
                <Link
                  key={category.title}
                  href={category.href}
                  className="p-6 bg-white border border-raycast-border rounded-xl hover:shadow-lg transition-all duration-200 cursor-pointer group"
                >
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-lg font-semibold text-raycast-text mb-2 group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-raycast-text-secondary mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-end">
                    <span className="text-sm text-raycast-text-secondary group-hover:text-raycast-text transition-colors">
                      보기 →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        mode={authMode}
        onModeChange={(newMode) => setAuthMode(newMode)}
      />
    </div>
  );
}

