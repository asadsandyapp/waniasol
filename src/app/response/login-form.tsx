"use client";

import { useActionState } from "react";
import { loginAction, type LoginState } from "./actions";

export function ResponseLoginForm() {
  const [state, formAction, pending] = useActionState(loginAction, null as LoginState);

  return (
    <div className="mx-auto w-full max-w-md rounded-2xl border border-border bg-card/80 p-8 shadow-soft backdrop-blur-sm dark:bg-card/40">
      <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-foreground">
        Sign in
      </h2>
      <p className="mt-2 text-sm text-muted">
        Enter the admin password to view contact form submissions.
      </p>
      <form action={formAction} className="mt-6 space-y-4">
        <div>
          <label
            htmlFor="response-password"
            className="text-sm font-semibold text-foreground"
          >
            Password
          </label>
          <input
            id="response-password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none ring-ring/40 transition focus:ring-2"
            disabled={pending}
          />
        </div>
        {state?.error ? (
          <p className="text-sm font-medium text-red-600 dark:text-red-400" role="alert">
            {state.error}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-xl bg-foreground px-4 py-3 text-sm font-semibold text-background transition hover:opacity-90 disabled:opacity-60"
        >
          {pending ? "Signing in…" : "View submissions"}
        </button>
      </form>
    </div>
  );
}
