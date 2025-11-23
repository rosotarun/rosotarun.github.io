import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { supabase } from '@/lib/supabase';
import { mockProjects, isSupabaseConfigured } from '@/lib/mockData';

export default function ProjectDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchProject();
    }
  }, [id]);

  const fetchProject = async () => {
    try {
      if (isSupabaseConfigured()) {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;
        setProject(data);
      } else {
        const foundProject = mockProjects.find((p) => p.id === id);
        setProject(foundProject || null);
      }
    } catch (error) {
      console.error('Error fetching project:', error);
      const foundProject = mockProjects.find((p) => p.id === id);
      setProject(foundProject || null);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-raycast-white flex items-center justify-center">
        <div className="text-gray-500">로딩 중...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-raycast-white">
        <Navigation />
        <main className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl font-semibold text-raycast-text mb-4">프로젝트를 찾을 수 없습니다</h1>
            <Link href="/community/projects" className="text-blue-600 hover:underline">
              프로젝트 갤러리로 돌아가기
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
        <title>{project.title} - 프로젝트 갤러리</title>
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
      <Script id="ezoic-init-project-detail" strategy="afterInteractive">
        {`
          window.ezstandalone = window.ezstandalone || {};
          ezstandalone.cmd = ezstandalone.cmd || [];
        `}
      </Script>

      <Navigation />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/community/projects"
            className="text-sm text-raycast-text-secondary hover:text-raycast-text mb-6 inline-block"
          >
            ← 프로젝트 갤러리로 돌아가기
          </Link>

          <article className="bg-white border border-raycast-border rounded-xl p-8">
            <div className="mb-6">
              <span className="text-sm text-gray-500">{formatDate(project.created_at)}</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-semibold text-raycast-text mb-6">
              {project.title}
            </h1>

            <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
              <span>작성자: {project.author_username}</span>
            </div>

            {project.images && project.images.length > 0 && (
              <div className="mb-8">
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            <div className="prose max-w-none text-raycast-text-secondary leading-relaxed whitespace-pre-wrap mb-8">
              {project.description}
            </div>

            {project.hardware && project.hardware.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-raycast-text mb-3">사용한 하드웨어</h3>
                <div className="flex flex-wrap gap-2">
                  {project.hardware.map((hw: string) => (
                    <span
                      key={hw}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      {hw}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.tags && project.tags.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-raycast-text mb-3">태그</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.github_url && (
              <div className="mt-8">
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-button hover:bg-gray-800 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub에서 보기
                </a>
              </div>
            )}
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}

