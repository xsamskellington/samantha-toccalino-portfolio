"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function SkipLink() {
  const { t } = useLanguage();
  return (
    <a href="#main" className="skip-link">
      {t.nav.skipLink}
    </a>
  );
}
