# GitHub Pages 배포 가이드

GitHub Pages로 배포할 때 환경 변수를 설정하는 방법입니다.

## 방법 1: GitHub Actions 사용 (권장)

### 1. GitHub Secrets 설정

1. GitHub 저장소로 이동
2. **Settings** → **Secrets and variables** → **Actions** 클릭
3. **New repository secret** 클릭
4. 다음 두 개의 Secret을 추가:

   **Secret 1:**
   - Name: `NEXT_PUBLIC_SUPABASE_URL`
   - Value: `https://hfjelukqxzjlkdfvkqdf.supabase.co`

   **Secret 2:**
   - Name: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Value: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmamVsdWtxeHpqbGtkZnZrcWRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM5MDEyMjgsImV4cCI6MjA3OTQ3NzIyOH0.pvW8btsfyW_V5SL4y1VHy-g1LYYntH_Jit2EnDl1Olo`

### 2. GitHub Pages 설정

1. **Settings** → **Pages** 클릭
2. **Source**를 **GitHub Actions**로 변경

### 3. 자동 배포

이제 `main` 브랜치에 푸시하면 자동으로 배포됩니다.

## 방법 2: 로컬에서 배포 (수동)

로컬에서 배포하려면 환경 변수를 설정한 후 배포하세요:

### Windows PowerShell:
```powershell
# 환경 변수 설정
$env:NEXT_PUBLIC_SUPABASE_URL="https://hfjelukqxzjlkdfvkqdf.supabase.co"
$env:NEXT_PUBLIC_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmamVsdWtxeHpqbGtkZnZrcWRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM5MDEyMjgsImV4cCI6MjA3OTQ3NzIyOH0.pvW8btsfyW_V5SL4y1VHy-g1LYYntH_Jit2EnDl1Olo"

# 빌드 및 배포
npm run deploy
```

### Windows CMD:
```cmd
REM 환경 변수 설정
set NEXT_PUBLIC_SUPABASE_URL=https://hfjelukqxzjlkdfvkqdf.supabase.co
set NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmamVsdWtxeHpqbGtkZnZrcWRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM5MDEyMjgsImV4cCI6MjA3OTQ3NzIyOH0.pvW8btsfyW_V5SL4y1VHy-g1LYYntH_Jit2EnDl1Olo

REM 빌드 및 배포
npm run deploy
```

**참고:** 환경 변수는 현재 터미널 세션에서만 유효합니다. 배포가 완료되면 환경 변수는 자동으로 해제됩니다.

## 확인

배포 후 사이트에서 로그인 기능이 정상 작동하는지 확인하세요.
