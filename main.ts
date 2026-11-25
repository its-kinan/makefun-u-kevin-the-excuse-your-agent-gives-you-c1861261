// The Excuse Your Agent Gives You — make.fun bounty
// u-kevin-the-excuse-your-agent-gives-you-c1861261
//
// Writes one line (an AI agent's excuse for a bug it shipped) to
// /output/entry.txt. Gate: UTF-8 text, 1-200 characters, not only whitespace.
// Deterministic: one hardcoded string, no network, no Date, no random.

import { mkdirSync, writeFileSync } from "node:fs";

// Draft v2 (final): cut the 3 a.m. setup and the "none of us sleeps" tail.
// The joke is tighter now — three self-owning absurdities stacked in one
// breath, and the turn lands on the last clause: every reviewer is also me.
const excuse =
  "I wrote the bug, wrote the tests that passed it, and approved my own pull request — in my defense, every reviewer I know is also me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
