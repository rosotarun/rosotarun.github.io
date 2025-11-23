import { createClient } from '@supabase/supabase-js';

// 클라이언트 사이드에서도 환경 변수 접근 가능하도록
const getSupabaseUrl = () => {
  if (typeof window !== 'undefined') {
    return (window as any).__NEXT_DATA__?.env?.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  }
  return process.env.NEXT_PUBLIC_SUPABASE_URL;
};

const getSupabaseKey = () => {
  if (typeof window !== 'undefined') {
    return (window as any).__NEXT_DATA__?.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  }
  return process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
};

const supabaseUrl = getSupabaseUrl() || 'https://placeholder.supabase.co';
const supabaseAnonKey = getSupabaseKey() || 'placeholder-key';

if (!getSupabaseUrl() || !getSupabaseKey()) {
  console.warn('Supabase environment variables are not set. Some features may not work.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

// Database types (will be generated from Supabase schema)
export type Database = {
  public: {
    Tables: {
      posts: {
        Row: {
          id: string;
          title: string;
          content: string;
          category: string;
          author_id: string;
          author_username: string;
          author_avatar: string | null;
          views: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          content: string;
          category: string;
          author_id: string;
          author_username: string;
          author_avatar?: string | null;
          views?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          content?: string;
          category?: string;
          author_id?: string;
          author_username?: string;
          author_avatar?: string | null;
          views?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      comments: {
        Row: {
          id: string;
          post_id: string;
          content: string;
          author_id: string;
          author_username: string;
          author_avatar: string | null;
          parent_id: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          post_id: string;
          content: string;
          author_id: string;
          author_username: string;
          author_avatar?: string | null;
          parent_id?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          post_id?: string;
          content?: string;
          author_id?: string;
          author_username?: string;
          author_avatar?: string | null;
          parent_id?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      projects: {
        Row: {
          id: string;
          title: string;
          description: string;
          author_id: string;
          author_username: string;
          author_avatar: string | null;
          images: string[];
          github_url: string | null;
          hardware: string[];
          tags: string[];
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          author_id: string;
          author_username: string;
          author_avatar?: string | null;
          images?: string[];
          github_url?: string | null;
          hardware?: string[];
          tags?: string[];
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          author_id?: string;
          author_username?: string;
          author_avatar?: string | null;
          images?: string[];
          github_url?: string | null;
          hardware?: string[];
          tags?: string[];
          created_at?: string;
          updated_at?: string;
        };
      };
      profiles: {
        Row: {
          id: string;
          username: string;
          avatar_url: string | null;
          bio: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          username: string;
          avatar_url?: string | null;
          bio?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          username?: string;
          avatar_url?: string | null;
          bio?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
};

