const skills = [
  "Next.js",
  "TypeScript",
  "React",
  "Supabase",
  "Tailwind CSS",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
        About
      </h2>

      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-12 text-center">
        Next.js / TypeScript / React
        を中心としたモダンな技術スタックで、Webアプリケーションやサイトの開発を承っています。
        レスポンシブ対応・ダークモード・認証機能・データベース連携など、
        ご要望に合わせた実装が可能です。丁寧なコミュニケーションと迅速な対応を心がけています。
        お気軽にご相談ください。
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
