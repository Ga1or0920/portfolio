export type Work = {
  title: string;
  description: string;
  techs: string[];
  github?: string;
  demo?: string;
  image?: string;
};

export const works: Work[] = [
  {
    title: "TaskFlow",
    description:
      "タスク管理アプリ。ドラッグ&ドロップでのステータス変更、リアルタイム同期、認証機能を実装。",
    techs: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    github: "https://github.com/Ga1or0920",
    demo: "https://taskflow-demo.vercel.app",
  },
];
