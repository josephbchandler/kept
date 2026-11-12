"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

function SearchIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted">
      <circle cx="9" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="m13.2 13.2 3.3 3.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

const inputClass =
  "h-10 w-full rounded-full border border-line bg-white/60 pr-4 pl-9 text-sm text-ink placeholder:text-muted/80 outline-none transition focus:border-ink/30 focus:bg-white";

/** Header search. Submitting goes to /search?q=…; on the search page, results update as you type. */
export function SearchBox() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const urlQuery = pathname === "/search" ? (searchParams.get("q") ?? "") : "";

  const [query, setQuery] = useState(urlQuery);
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    // Moved to another page: show that page's query (empty outside /search).
    setLastPathname(pathname);
    setQuery(urlQuery);
  }

  const go = (value: string, replace: boolean) => {
    const href = value.trim() ? `/search?q=${encodeURIComponent(value.trim())}` : "/search";
    if (replace) router.replace(href, { scroll: false });
    else router.push(href);
  };

  return (
    <form
      role="search"
      action="/search"
      onSubmit={(event) => {
        event.preventDefault();
        go(query, pathname === "/search");
      }}
      className="relative"
    >
      <SearchIcon />
      <input
        type="search"
        name="q"
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
          if (pathname === "/search") go(event.target.value, true);
        }}
        placeholder="Search objects or brands"
        aria-label="Search objects or brands"
        autoComplete="off"
        className={inputClass}
      />
    </form>
  );
}

export function SearchBoxFallback() {
  return (
    <form role="search" action="/search" className="relative">
      <SearchIcon />
      <input type="search" name="q" placeholder="Search objects or brands" aria-label="Search objects or brands" className={inputClass} />
    </form>
  );
}
