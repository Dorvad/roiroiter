import type { ReactNode } from "react";
import Link from "next/link";
import { statusLabel, type Status } from "@/lib/data";

export function Kicker({
  children,
  className = "",
  gold = false,
}: {
  children: ReactNode;
  className?: string;
  gold?: boolean;
}) {
  return (
    <span className={`label ${gold ? "label-gold" : ""} ${className}`}>
      {children}
    </span>
  );
}

export function Hairline({ gold = false, className = "" }: { gold?: boolean; className?: string }) {
  return <div className={`${gold ? "hairline-gold" : "hairline"} ${className}`} aria-hidden />;
}

const statusClass: Record<Status, string> = {
  Available: "status-available",
  Sold: "status-sold",
  "Private Collection": "status-private",
  Inquiry: "status-inquiry",
};

export function StatusBadge({
  status,
  className = "",
}: {
  status: Status;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2 label ${className}`}>
      <span className={`status-dot ${statusClass[status]}`} aria-hidden />
      {statusLabel[status]}
    </span>
  );
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "outline" | "solid" | "ghost";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "outline",
  className = "",
}: ButtonLinkProps) {
  const v =
    variant === "solid" ? "btn-solid" : variant === "ghost" ? "btn-ghost" : "";
  const isInternal = href.startsWith("/");
  if (isInternal) {
    return (
      <Link href={href} className={`btn ${v} ${className}`}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={`btn ${v} ${className}`}>
      {children}
    </a>
  );
}

/** A small caret/arrow used on links */
export function Arrow({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={`inline-block ${className}`}>
      &#8594;
    </span>
  );
}
