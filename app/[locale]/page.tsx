"use client";

import { Authenticated, Unauthenticated } from "convex/react";
import { useParams, useRouter } from "next/navigation";
import Login from "./login";
import { useEffect } from "react";

export default function Home() {
  const { locale } = useParams<{ locale: string }>();

  return (
    <>
      <Authenticated>
        <RedirectToQuestionnaire locale={locale} />
      </Authenticated>
      <Unauthenticated>
        <Login />
      </Unauthenticated>
    </>
  );
}

function RedirectToQuestionnaire({ locale }: { locale: string }) {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/${locale}/questionnaire`);
  }, [router, locale]);

  return null;
}
