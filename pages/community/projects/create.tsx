import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/lib/supabase';
import { isSupabaseConfigured } from '@/lib/mockData';

export default function CreateProjectPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [hardware, setHardware] = useState<string[]>([]);
  const [tags, setTags] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/community');
    }
  }, [user, loading, router]);

  const handleHardwareChange = (value: string) => {
    if (hardware.includes(value)) {
      setHardware(hardware.filter((h) => h !== value));
    } else {
      setHardware([...hardware, value]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setSubmitting(true);
    setError(null);

    try {
      if (isSupabaseConfigured()) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('username, avatar_url')
          .eq('id', user.id)
          .single();

        const tagArray = tags.split(',').map((t) => t.trim()).filter((t) => t);

        const { error: insertError } = await supabase.from('projects').insert({
          title,
          description,
          author_id: user.id,
          author_username: profile?.username || `user_${user.id.slice(0, 8)}`,
          author_avatar: profile?.avatar_url || null,
          github_url: githubUrl || null,
          hardware,
          tags: tagArray,
          images: [],
        });

        if (insertError) throw insertError;
      } else {
        // Mock 데이터는 로컬 스토리지에 저장 (실제로는 Supabase 필요)
        alert('프로젝트 등록 기능을 사용하려면 Supabase 설정이 필요합니다.');
        return;
      }

      router.push('/community/projects');
    } catch (err: any) {
      setError(err.message || '프로젝트 등록에 실패했습니다.');
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
        <title>프로젝트 등록 - Community</title>
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
      <Script id="ezoic-init-create-project" strategy="afterInteractive">
        {`
          window.ezstandalone = window.ezstandalone || {};
          ezstandalone.cmd = ezstandalone.cmd || [];
        `}
      </Script>

      <Navigation />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold text-raycast-text mb-8">
            프로젝트 등록
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-raycast-text mb-2">
                프로젝트 제목
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="프로젝트 제목을 입력하세요"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-raycast-text mb-2">
                프로젝트 설명
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={10}
                className="w-full px-4 py-2 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="프로젝트에 대해 설명해주세요"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-raycast-text mb-2">
                GitHub URL (선택)
              </label>
              <input
                type="url"
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://github.com/..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-raycast-text mb-2">
                사용한 하드웨어
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={hardware.includes('SO-ARM101')}
                    onChange={() => handleHardwareChange('SO-ARM101')}
                    className="mr-2"
                  />
                  <span>SO-ARM101</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-raycast-text mb-2">
                태그 (쉼표로 구분)
              </label>
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="automation, robotics, ai"
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
                {submitting ? '등록 중...' : '프로젝트 등록'}
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

