-- rosotarun 계정의 예시 게시글 삽입 SQL
-- Supabase SQL Editor에서 실행하세요

-- 1. 먼저 rosotarun 사용자 ID 확인 및 프로필 확인
-- 아래 쿼리로 사용자 ID를 확인할 수 있습니다:
-- SELECT id, email FROM auth.users WHERE email = 'rosotarun@gmail.com';

-- 2. 프로필이 없으면 생성
INSERT INTO profiles (id, username, avatar_url, bio)
SELECT 
  id,
  'rosotarun',
  null,
  'Rosota Copilot 개발자'
FROM auth.users
WHERE email = 'rosotarun@gmail.com'
ON CONFLICT (id) DO UPDATE SET username = 'rosotarun';

-- 3. 예시 게시글 삽입
-- 질문 & 답변 게시글
INSERT INTO posts (title, content, category, author_id, author_username, author_avatar, views, created_at, updated_at)
SELECT 
  'Leader-Follower 모드 설정 방법이 궁금합니다',
  '안녕하세요! Rosota Copilot을 처음 사용하는데 Leader-Follower 모드를 어떻게 설정하는지 모르겠습니다.

단계별로 알려주시면 감사하겠습니다. 특히 하드웨어 연결 부분이 헷갈리네요.',
  '질문 & 답변',
  id,
  'rosotarun',
  null,
  45,
  NOW() - INTERVAL '2 hours',
  NOW() - INTERVAL '2 hours'
FROM auth.users
WHERE email = 'rosotarun@gmail.com';

-- 팁 & 트릭 게시글
INSERT INTO posts (title, content, category, author_id, author_username, author_avatar, views, created_at, updated_at)
SELECT 
  '타임라인 녹화 기능 활용 팁',
  '타임라인 녹화 기능을 사용하면서 알게 된 팁을 공유합니다.

1. 녹화 전에 캘리브레이션을 꼭 해주세요
2. 움직임이 너무 빠르면 프레임 드롭이 발생할 수 있습니다
3. 저장된 타임라인은 JSON으로 내보낼 수 있어요

더 좋은 팁이 있으면 댓글로 공유해주세요!',
  '팁 & 트릭',
  id,
  'rosotarun',
  null,
  78,
  NOW() - INTERVAL '5 hours',
  NOW() - INTERVAL '5 hours'
FROM auth.users
WHERE email = 'rosotarun@gmail.com';

-- 프로젝트 공유 게시글
INSERT INTO posts (title, content, category, author_id, author_username, author_avatar, views, created_at, updated_at)
SELECT 
  '자동화 픽 앤 플레이스 프로젝트 공유',
  'SO-ARM101을 사용해서 간단한 픽 앤 플레이스 자동화 시스템을 만들었습니다.

주요 기능:
- 물체 인식 및 위치 추적
- 정밀한 그리퍼 제어
- 반복 작업 자동화

프로젝트는 GitHub에 공개되어 있습니다. 피드백 환영합니다!',
  '프로젝트 공유',
  id,
  'rosotarun',
  null,
  123,
  NOW() - INTERVAL '1 day',
  NOW() - INTERVAL '1 day'
FROM auth.users
WHERE email = 'rosotarun@gmail.com';

-- 자유 게시판 게시글
INSERT INTO posts (title, content, category, author_id, author_username, author_avatar, views, created_at, updated_at)
SELECT 
  '로봇 개발 커뮤니티에 오신 것을 환영합니다!',
  '안녕하세요, rosotarun입니다!

Rosota Copilot 커뮤니티에 오신 것을 환영합니다. 
여기서는 로봇 개발에 대한 질문, 프로젝트 공유, 팁 등을 자유롭게 나눌 수 있습니다.

함께 성장하는 커뮤니티가 되었으면 좋겠습니다!',
  '자유 게시판',
  id,
  'rosotarun',
  null,
  234,
  NOW() - INTERVAL '3 days',
  NOW() - INTERVAL '3 days'
FROM auth.users
WHERE email = 'rosotarun@gmail.com';

-- 4. 예시 댓글 삽입 (첫 번째 게시글에)
INSERT INTO comments (post_id, content, author_id, author_username, author_avatar, parent_id, created_at, updated_at)
SELECT 
  p.id,
  'Leader-Follower 모드는 설정 메뉴에서 활성화할 수 있습니다. 하드웨어 연결 후 캘리브레이션을 먼저 진행하시는 것을 추천드려요!',
  u.id,
  'helper1',
  null,
  null,
  NOW() - INTERVAL '1 hour',
  NOW() - INTERVAL '1 hour'
FROM posts p
CROSS JOIN auth.users u
WHERE p.title = 'Leader-Follower 모드 설정 방법이 궁금합니다'
  AND u.email = 'rosotarun@gmail.com'
LIMIT 1;

INSERT INTO comments (post_id, content, author_id, author_username, author_avatar, parent_id, created_at, updated_at)
SELECT 
  p.id,
  '저도 처음에 헷갈렸는데, 공식 문서의 튜토리얼을 보시면 도움이 될 것 같아요!',
  u.id,
  'helper2',
  null,
  null,
  NOW() - INTERVAL '30 minutes',
  NOW() - INTERVAL '30 minutes'
FROM posts p
CROSS JOIN auth.users u
WHERE p.title = 'Leader-Follower 모드 설정 방법이 궁금합니다'
  AND u.email = 'rosotarun@gmail.com'
LIMIT 1;

-- 5. 예시 프로젝트 삽입
INSERT INTO projects (title, description, author_id, author_username, author_avatar, images, github_url, hardware, tags, created_at, updated_at)
SELECT 
  '자동화 픽 앤 플레이스 로봇',
  'SO-ARM101을 사용한 정밀 픽 앤 플레이스 시스템. 물체 인식부터 배치까지 자동화.',
  id,
  'rosotarun',
  null,
  ARRAY[]::TEXT[],
  'https://github.com/rosotarun/pick-and-place',
  ARRAY['SO-ARM101']::TEXT[],
  ARRAY['automation', 'pick-and-place', 'computer-vision']::TEXT[],
  NOW() - INTERVAL '1 day',
  NOW() - INTERVAL '1 day'
FROM auth.users
WHERE email = 'rosotarun@gmail.com';

