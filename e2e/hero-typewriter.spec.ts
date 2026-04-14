import { expect, test } from "@playwright/test";

const CYCLING_WORDS = ["transparent", "seamless", "secure", "profitable"] as const;

test("hero headline layout and cycling words type letter-by-letter", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");

  const sr = page.locator("h1 .sr-only").first();
  const visible = page.getByTestId("hero-typewriter-visible");
  const cycling = page.getByTestId("hero-cycling-word");

  const full = ((await sr.textContent()) ?? "").replace(/\s+/g, " ").trim();
  expect(full).toContain("AI-enabled");
  expect(full).toContain("transparent");
  expect(full).toContain("profitable");

  await expect(visible).toContainText("AI-enabled ecosystems");
  await expect(visible).toContainText("that make commerce");

  await expect
    .poll(
      async () => {
        const raw = ((await cycling.textContent()) ?? "").trim();
        const compact = raw.replace(/\s+/g, "");
        if (!compact) return false;
        if (CYCLING_WORDS.some((w) => raw.includes(w))) return true;
        return CYCLING_WORDS.some(
          (w) => w.startsWith(compact) && compact.length > 0,
        );
      },
      { timeout: 15_000 },
    )
    .toBe(true);
});
