---
title: Runtime evidence, re-checked nightly
date: 2026-07-20
order: 3
description: Every security-relevant change to our messaging infrastructure ships with a captured run of the real system. Here is why, and why we re-check the captures every night.
ogDescription: Why every security-relevant change ships with a captured run of the real system.
summary: Why every security-relevant change to our messaging infrastructure ships with a captured run of the real system, and why we re-check those captures every night.
---

A test suite tells you your code does what the tests describe. It does not tell you the shipped system does what your claims describe. Those are different statements, and the gap between them is where most security marketing lives.

So alongside tests, our messaging infrastructure has a second discipline we call proof bundles. A proof bundle is a captured run of the real, deployed system exercising one claimed behaviour end to end: two SDKs on two platforms exchanging a message through a live cluster, with the bytes on the wire recorded, or an encrypted file uploaded from one device and decrypted on another. The bundle holds the commands that ran, the output they produced, and the assertion that ties the output to the claim. Any change that touches security, cryptography, or a cross-service contract is required to ship with one. Not a description of what should happen: a recording of what did.

The word proof deserves scrutiny, and we invite it. These are not formal proofs. A formal proof establishes a property for all cases from a specification; a proof bundle establishes that a behaviour held on the occasions it was exercised. That is runtime evidence, a weaker and different thing, and we say so wherever the claims appear. What runtime evidence has over formal methods is reach: it covers the whole deployed stack, including the parts a model would idealise away, and it is cheap enough to demand for every relevant change rather than reserve for the crown jewels.

Evidence also rots. A capture proves what the system did the day it was captured; the system keeps changing afterwards. So every bundle is re-verified nightly against the current build. When we first closed the loop this month and drove the full set to green, the failures along the way were the point: each one was either a capture that had drifted from the system it described, or a behaviour that had quietly changed. Both are things you want to find at night, in an automated loop, rather than in front of a security reviewer.

The discipline is not free. It slows down exactly the changes that feel most urgent, because those are the ones that touch the sensitive surfaces. We think the trade is right for infrastructure that asks to carry other people's private conversations, and we would rather explain a slow release than an optimistic claim.
