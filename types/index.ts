// ── Button system ────────────────────────────────────────────
export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

// ── Badge system ──────────────────────────────────────────────
export type BadgeVariant =
  | "default"
  | "brand"
  | "success"
  | "error"
  | "warning"
  | "info"
  | "locked";

// ── Status system ─────────────────────────────────────────────
export type StatusType = "success" | "error" | "warning" | "info";

export interface StatusConfig {
  label: string;
  type: StatusType;
}

// ── Investigation progress ────────────────────────────────────
export type ProgressState = "upcoming" | "active" | "completed";

export interface ProgressStep {
  number: string;
  label: string;
  state: ProgressState;
}

// ── Code display ──────────────────────────────────────────────
export type CodeLineState =
  | "normal"
  | "hover"
  | "selected"
  | "suspicious"
  | "correct"
  | "incorrect";

export interface CodeLine {
  number: number;
  content: string;
  state?: CodeLineState;
}

// ── Case / investigation domain (forward-looking types) ───────
export type CaseStatus = "solved" | "unsolved" | "locked";
export type Difficulty = "rookie" | "investigator" | "master";

export interface CaseBadge {
  label: string;
  variant: BadgeVariant;
}

// ── Navigation ────────────────────────────────────────────────
export interface NavLink {
  label: string;
  to: string;
  external?: boolean;
}
