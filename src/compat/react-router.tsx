"use client";

import NextLink from "next/link";
import React from "react";
import {
  usePathname,
  useRouter,
  useSearchParams as useNextSearchParams,
  useParams as useNextParams,
} from "next/navigation";

export interface CompatLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href?: string;
  to?: string;
  state?: any;
  replace?: boolean;
  scroll?: boolean;
  children?: React.ReactNode;
}

export const Link = React.forwardRef<HTMLAnchorElement, CompatLinkProps>(
  ({ to, href, children, ...props }, ref) => {
    const destination = href || to || "#";
    return (
      <NextLink ref={ref} href={destination} {...props}>
        {children}
      </NextLink>
    );
  }
);
Link.displayName = "Link";

export function useNavigate() {
  const router = useRouter();
  return (to: string | number, options?: { replace?: boolean }) => {
    if (typeof to === "number") {
      if (typeof window !== "undefined") {
        if (to === -1) window.history.back();
        else if (to === 1) window.history.forward();
      }
      return;
    }
    if (options?.replace) {
      router.replace(to);
    } else {
      router.push(to);
    }
  };
}

export function useLocation() {
  const pathname = usePathname();
  const [hash, setHash] = React.useState("");
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setHash(window.location.hash);
      setSearch(window.location.search);
      const onHashChange = () => setHash(window.location.hash);
      const onPopState = () => {
        setHash(window.location.hash);
        setSearch(window.location.search);
      };
      window.addEventListener("hashchange", onHashChange);
      window.addEventListener("popstate", onPopState);
      return () => {
        window.removeEventListener("hashchange", onHashChange);
        window.removeEventListener("popstate", onPopState);
      };
    }
  }, []);

  return {
    pathname: pathname || "/",
    search,
    hash,
    state: null,
    key: "default",
  };
}

export function useParams<
  T extends Record<string, string | string[] | undefined> = Record<
    string,
    string
  >,
>() {
  const params = useNextParams();
  return (params || {}) as T;
}

export function useSearchParams() {
  const params = useNextSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const setSearchParams = React.useCallback(
    (newParams: Record<string, string> | URLSearchParams) => {
      const query =
        typeof newParams.toString === "function"
          ? newParams.toString()
          : new URLSearchParams(newParams as any).toString();
      router.push(`${pathname}?${query}`);
    },
    [router, pathname]
  );

  return [params || new URLSearchParams(), setSearchParams] as const;
}

export function Navigate({ to, replace }: { to: string; replace?: boolean }) {
  const router = useRouter();
  React.useEffect(() => {
    if (replace) {
      router.replace(to);
    } else {
      router.push(to);
    }
  }, [to, replace, router]);
  return null;
}

export function BrowserRouter({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function Routes({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function Route() {
  return null;
}

export default {
  Link,
  useNavigate,
  useLocation,
  useParams,
  useSearchParams,
  Navigate,
  BrowserRouter,
  Routes,
  Route,
};
