---
title: The number we do not publish
date: 2026-07-20
order: 1
description: Our claims registry has an empty slot where the throughput figure should be, and it stays empty until evidence fills it.
ogDescription: An empty slot in the claims registry, kept empty on purpose.
---

Every messaging platform's website tells you how fast it is. Ours does not, and the reason is a row in a file.

Public statements about our messaging infrastructure come from a claims registry: a short list where each entry holds the claim's exact wording, the evidence behind it, and every surface the claim appears on. Copy on a website must trace back to an entry; an entry must trace down to evidence. When the evidence narrows, the claim narrows with it, on every surface at once. It is the same idea as a bill of materials, applied to sentences.

One entry in the registry is a placeholder. It reads, in full: reserved, messages per second per replica, p99 latency under N milliseconds. Status, pending. Evidence, none.

We have measured throughput extensively in private; capacity work is a standing part of the engineering. But measuring is not the same as having evidence you would put your name under. Our own bar says a published figure needs a capture of the measurement, on named hardware, with the method recorded, re-runnable when the system changes. No such capture has been promoted to the registry yet, so the marketing carries no number, and the copy is written so that it does not need one. Earlier in the project a throughput figure did reach a public surface without that backing; it has since been retired, and the empty slot exists precisely so the shortcut cannot repeat. The registry entry acts as a tripwire: anyone tempted to write a fast-sounding sentence finds the slot where the evidence should be.

This costs us something real. Fast is a selling point, and a competitor with looser habits will happily out-claim us. But a performance figure you cannot defend is borrowed credibility, and the audience we care about, the people who check, treats one indefensible number as a licence to doubt every other sentence. The empty slot is a statement of intent: when the number appears, it will mean something.
