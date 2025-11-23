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
import { mockProjects, isSupabaseConfigured } from '@/lib/mockData';

export default function ProjectsPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      if (isSupabaseConfigured()) {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setProjects(data || []);
      } else {
        setProjects(mockProjects);
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
      setProjects(mockProjects);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR');
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter((p) => p.hardware?.includes(filter));

  return (
    <div className="min-h-screen bg-raycast-white">
      <Head>
        <title>프로젝트 갤러리 - Community</title>
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
      <Script id="ezoic-init-projects" strategy="afterInteractive">
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
              프로젝트 갤러리
            </h1>
            <p className="text-gray-600">
              Rosota Copilot을 사용한 멋진 프로젝트들을 공유해주세요.
            </p>
          </div>

          <div className="mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-button text-sm transition-colors ${
                  filter === 'all'
                    ? 'bg-raycast-text text-white'
                    : 'bg-white text-raycast-text border border-gray-300'
                }`}
              >
                전체
              </button>
              <button
                onClick={() => setFilter('SO-ARM101')}
                className={`px-4 py-2 rounded-button text-sm transition-colors ${
                  filter === 'SO-ARM101'
                    ? 'bg-raycast-text text-white'
                    : 'bg-white text-raycast-text border border-gray-300'
                }`}
              >
                SO-ARM101
              </button>
            </div>
            <button
              onClick={() => {
                if (!user) {
                  setAuthModalOpen(true);
                  return;
                }
                router.push('/community/projects/create');
              }}
              className="px-6 py-2 bg-raycast-text text-white rounded-button hover:bg-opacity-90 transition-all duration-200"
            >
              프로젝트 등록
            </button>
          </div>

          {loading ? (
            <div className="text-center py-12 text-gray-500">로딩 중...</div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              아직 프로젝트가 없습니다. 첫 프로젝트를 등록해보세요!
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/community/projects/${project.id}`}
                  className="block p-6 bg-white border border-raycast-border rounded-xl hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
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
                  <h3 className="text-lg font-semibold text-raycast-text mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-raycast-text-secondary line-clamp-2 mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>작성자: {project.author_username}</span>
                    <span>{formatDate(project.created_at)}</span>
                  </div>
                  {project.github_url && (
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <span className="text-xs text-blue-600">GitHub 링크 있음</span>
                    </div>
                  )}
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

