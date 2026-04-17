import Link from "next/link";
import { redirect } from "next/navigation";
import { LANGS, langNativeName } from "@/data/i18n";
import type { Lang } from "@/data/types";

/**
 * 환경변수 DEFAULT_PATH를 런타임에 읽어야 하므로 정적 프리렌더 비활성.
 * 4100 포트(메인)는 DEFAULT_PATH 미설정 → 언어 선택 UI.
 * 4101~4104 포트는 DEFAULT_PATH 값에 따라 해당 라인으로 즉시 redirect.
 */
export const dynamic = "force-dynamic";

export default function LangSelectPage() {
  const defaultPath = process.env.DEFAULT_PATH;
  if (defaultPath && defaultPath.startsWith("/")) {
    redirect(defaultPath);
  }
  return (
    <div className="min-h-screen flex flex-col">
      <section className="relative flex-1 flex items-center justify-center bg-primary-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#111111] via-[#1a1a1a] to-[#2a2420]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-gold/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-beige/5 rounded-full blur-[120px]" />

        <div className="relative max-w-[720px] mx-auto px-6 py-24 text-center">
          <p className="text-accent-beige text-[10px] tracking-[0.4em] uppercase font-bold mb-5">
            LUNN DERMATOLOGY · AFTERCARE
          </p>
          <div className="w-10 h-px bg-accent-beige mx-auto mb-10" />

          <h1
            className="text-white text-3xl md:text-4xl lg:text-5xl leading-[1.35] mb-4"
            style={{ fontFamily: '"Noto Serif KR", serif', fontWeight: 300 }}
          >
            시술 후 관리 가이드
          </h1>
          <p
            className="text-white/50 text-lg lg:text-xl leading-relaxed mb-3"
            style={{ fontFamily: '"Noto Serif KR", serif', fontWeight: 300 }}
          >
            Aftercare Guide · 术后护理指南
          </p>

          <p className="text-white/40 text-sm mt-12 mb-6 tracking-wide">
            SELECT YOUR LANGUAGE · 请选择语言
          </p>

          <div className="flex flex-col gap-3 max-w-sm mx-auto">
            {LANGS.map((lang) => (
              <LangButton key={lang} lang={lang} />
            ))}
          </div>

          <p className="text-white/30 text-xs mt-16 leading-relaxed">
            For patients of Lunn Dermatology Clinic.
            <br />
            명함의 QR 코드를 통해 접속하신 경우 언어가 자동 선택됩니다.
          </p>
        </div>
      </section>
    </div>
  );
}

function LangButton({ lang }: { lang: Lang }) {
  return (
    <Link
      href={`/${lang}`}
      className="group flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 hover:bg-accent-beige hover:border-accent-beige px-6 py-5 transition-all"
    >
      <div className="flex items-center gap-4">
        <span className="text-[11px] font-mono tracking-[0.3em] text-white/50 group-hover:text-primary-navy/60 w-8 text-left">
          {lang.toUpperCase()}
        </span>
        <span className="text-white text-lg font-semibold group-hover:text-primary-navy">
          {langNativeName[lang]}
        </span>
      </div>
      <span className="text-white/40 text-lg group-hover:text-primary-navy group-hover:translate-x-1 transition-all">
        →
      </span>
    </Link>
  );
}
