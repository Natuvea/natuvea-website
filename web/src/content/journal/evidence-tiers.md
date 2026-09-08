---
title: Four tiers of evidence
date: 2026-07-20
order: 2
description: "Verified, observed, inferred, unassessed: how we grade every claim we make, including to ourselves."
ogDescription: How we grade every claim we make, including to ourselves.
---

Most engineering claims arrive dressed as facts. The build passes. The scanner is clean. The feature works on Android. Ask what actually stands behind each one and the answers turn out to belong to different species, so we made the species explicit. Every claim in our engineering process carries one of four grades.

- **Verified.** A command or test ran and we saw a meaningful result. The grade names the exact check and its scope, because a nearby check is not the check. A test suite that passes on a full clone says nothing about the job that checks out a shallow one.
- **Observed.** We read the exact source: the line of code, the configuration value, the recorded output. Weaker than verified, because reading what the code says is not watching what it does.
- **Inferred.** Plausible from reasoning, not executed end to end. Inferences are welcome, labelled as inferences, next to the name of the check that would promote them.
- **Unassessed.** The check could not run: the environment was missing, the credentials were absent, the tool crashed. This grade exists because its absence is dangerous. A scan that errored is not a clean scan, and a question nobody could check is not a question with a comforting answer.

The last tier is the one that earns its keep. Almost every assurance failure we have studied, in our own work and in postmortems elsewhere, involves an unassessed claim promoted to clean by wishful accounting: the scanner that failed open, the platform nobody re-tested after a change, the reviewer who assumed the other reviewer looked. Naming the tier makes that promotion visible, and therefore refusable.

The grades apply to people and machines alike, and most usefully to automation that sounds confident. When an automated review asserts that something is absent, we require the search that would have found it: which pattern, which files. An unfalsifiable negative gets rejected regardless of how fluent it sounds, which turns out to be a good rule for colleagues of every kind.

None of this is novel; it is what good auditors have always done. Writing it down just means the discipline survives busy weeks, new tools, and the strong human preference for hearing that everything is fine.
