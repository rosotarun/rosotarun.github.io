// Mock 데이터 - Supabase가 설정되지 않았을 때 사용
export const mockPosts = [
  {
    id: '1',
    title: 'Leader-Follower 모드 설정 방법이 궁금합니다',
    content: `안녕하세요! Rosota Copilot을 처음 사용하는데 Leader-Follower 모드를 어떻게 설정하는지 모르겠습니다.

단계별로 알려주시면 감사하겠습니다. 특히 하드웨어 연결 부분이 헷갈리네요.`,
    category: '질문 & 답변',
    author_id: 'rosotarun',
    author_username: 'rosotarun',
    author_avatar: null,
    views: 45,
    created_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2시간 전
    updated_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '2',
    title: '타임라인 녹화 기능 활용 팁',
    content: `타임라인 녹화 기능을 사용하면서 알게 된 팁을 공유합니다.

1. 녹화 전에 캘리브레이션을 꼭 해주세요
2. 움직임이 너무 빠르면 프레임 드롭이 발생할 수 있습니다
3. 저장된 타임라인은 JSON으로 내보낼 수 있어요

더 좋은 팁이 있으면 댓글로 공유해주세요!`,
    category: '팁 & 트릭',
    author_id: 'rosotarun',
    author_username: 'rosotarun',
    author_avatar: null,
    views: 78,
    created_at: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), // 5시간 전
    updated_at: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '3',
    title: '자동화 픽 앤 플레이스 프로젝트 공유',
    content: `SO-ARM101을 사용해서 간단한 픽 앤 플레이스 자동화 시스템을 만들었습니다.

주요 기능:
- 물체 인식 및 위치 추적
- 정밀한 그리퍼 제어
- 반복 작업 자동화

프로젝트는 GitHub에 공개되어 있습니다. 피드백 환영합니다!`,
    category: '프로젝트 공유',
    author_id: 'rosotarun',
    author_username: 'rosotarun',
    author_avatar: null,
    views: 123,
    created_at: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1일 전
    updated_at: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '4',
    title: '로봇 개발 커뮤니티에 오신 것을 환영합니다!',
    content: `안녕하세요, rosotarun입니다!

Rosota Copilot 커뮤니티에 오신 것을 환영합니다. 
여기서는 로봇 개발에 대한 질문, 프로젝트 공유, 팁 등을 자유롭게 나눌 수 있습니다.

함께 성장하는 커뮤니티가 되었으면 좋겠습니다!`,
    category: '자유 게시판',
    author_id: 'rosotarun',
    author_username: 'rosotarun',
    author_avatar: null,
    views: 234,
    created_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3일 전
    updated_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

export const mockComments = [
  {
    id: '1',
    post_id: '1',
    content: 'Leader-Follower 모드는 설정 메뉴에서 활성화할 수 있습니다. 하드웨어 연결 후 캘리브레이션을 먼저 진행하시는 것을 추천드려요!',
    author_id: 'helper1',
    author_username: 'helper1',
    author_avatar: null,
    parent_id: null,
    created_at: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '2',
    post_id: '1',
    content: '저도 처음에 헷갈렸는데, 공식 문서의 튜토리얼을 보시면 도움이 될 것 같아요!',
    author_id: 'helper2',
    author_username: 'helper2',
    author_avatar: null,
    parent_id: null,
    created_at: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
  },
];

export const mockProjects = [
  {
    id: '1',
    title: '자동화 픽 앤 플레이스 로봇',
    description: 'SO-ARM101을 사용한 정밀 픽 앤 플레이스 시스템. 물체 인식부터 배치까지 자동화.',
    author_id: 'rosotarun',
    author_username: 'rosotarun',
    author_avatar: null,
    images: [],
    github_url: 'https://github.com/rosotarun/pick-and-place',
    hardware: ['SO-ARM101'],
    tags: ['automation', 'pick-and-place', 'computer-vision'],
    created_at: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
  },
];

// Supabase 연결 확인
export const isSupabaseConfigured = () => {
  if (typeof window === 'undefined') {
    // 서버 사이드
    return !!(
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://placeholder.supabase.co' &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY !== 'placeholder-key'
    );
  } else {
    // 클라이언트 사이드 - window 객체에서 확인
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL || (window as any).__NEXT_DATA__?.env?.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || (window as any).__NEXT_DATA__?.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    return !!(
      url &&
      url !== 'https://placeholder.supabase.co' &&
      key &&
      key !== 'placeholder-key'
    );
  }
};

