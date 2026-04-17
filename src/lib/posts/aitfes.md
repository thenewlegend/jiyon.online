---
title: "Building AITfES: Designing a Practical AI System for Engineering Workflows"
date: "Apr 17, 2026"
readTime: "8 min read"
excerpt: "A practical exploration of building a modular RAG-based AI system for engineering workflows, focusing on data pipelines, retrieval design, and system reliability."
tags: ["AI Systems", "RAG", "Engineering", "Data Pipelines"]
---

<script>
  import BlogLayout from '$lib/components/sections/BlogLayout.svelte';
</script>

<BlogLayout {title} {date} {excerpt} {readTime}>

## Building AITfES: Designing a Practical AI System for Engineering Workflows

## Overview

AITfES (AI Tool for Engineering Systems) began as an attempt to answer a simple question:

> Can AI be made reliable enough to assist in real engineering decision-making?

Rather than building a generic chatbot, the objective was to design a system that could:
- Work within **defined engineering domains**
- Provide **context-aware responses**
- Maintain a reasonable level of **accuracy and control**

This led to the adoption of a **Retrieval-Augmented Generation (RAG)** architecture.

---

## Why RAG Instead of a Standard LLM?

Early experimentation with standalone LLMs (via the Gemini API) exposed a key limitation:

- Responses were fluent, but **not grounded in domain-specific data**
- Hallucinations were unacceptable in engineering contexts

RAG was chosen because it:
- Anchors responses to **retrieved, relevant data**
- Allows **control over knowledge boundaries**
- Scales with structured data rather than model retraining

The decision was less about trend adoption and more about **risk reduction in technical outputs**.

---

## System Architecture

The system was structured into three primary layers:

1. **Data Layer** — Engineering data ingestion and structuring  
2. **Retrieval Layer** — Semantic search using a vector database  
3. **Application Layer** — User interface and interaction logic  

Core technologies:
- Gemini API (LLM inference)
- Pinecone (vector database for semantic retrieval)
- SvelteKit (frontend and server-side logic)

This separation ensured modularity and made debugging significantly easier.

---

## Data Pipeline: Scaling Was Not Optional

The system initially operated on a small dataset (~148 records), which was insufficient for meaningful retrieval.

### What Changed

The pipeline was redesigned to:
- Automate ingestion of structured engineering data
- Normalize and clean inputs
- Generate embeddings consistently

This scaled the dataset to **12,000+ records**.

### Lesson

> RAG performance is directly proportional to data quality and coverage.

A well-structured dataset contributes more to output reliability than prompt tuning alone.

---

## Retrieval Layer: Precision Over Volume

Using Pinecone enabled semantic search, but early results revealed:

- High recall, but sometimes **low relevance**
- Context noise affecting LLM output

### Adjustments Made

- Tuned retrieval parameters (top-k results)
- Improved chunking strategy for documents
- Focused on **semantic coherence over raw data volume**

### Lesson

> More data does not guarantee better results—**better retrieval does**.

---

## Prompt Design: Controlling the LLM

A key challenge was ensuring that the LLM:
- Stayed within retrieved context
- Avoided speculative responses

### Approach

- Structured prompts with explicit instructions
- Constrained response formats
- Reinforced context usage

### Lesson

> Prompting is not about clever phrasing—it is about **system control**.

Without constraints, even a strong model behaves unpredictably in technical domains.

---

## Full-Stack Integration

The system integrates:
- LLM inference (Gemini API)
- Retrieval (Pinecone)
- Interface and routing (SvelteKit)

This was not just an implementation step—it exposed architectural considerations:

- Latency across components
- Error propagation between layers
- Need for graceful fallback mechanisms

### Lesson

> Building AI systems is less about models and more about **orchestration**.

---

## What Worked

- Modular architecture simplified iteration
- RAG significantly improved response relevance
- Scaling the dataset had immediate impact on output quality

---

## What Didn’t Work Initially

- Over-reliance on raw LLM capability
- Poor early data structuring
- Weak retrieval tuning

Each of these led to unreliable outputs until corrected.

---

## Key Takeaways

1. **AI systems for engineering must be controlled, not just powerful**  
2. **Data pipelines are as critical as model selection**  
3. **Retrieval quality defines system usefulness**  
4. **Prompting is a design discipline, not an afterthought**  
5. **System integration introduces real-world constraints often ignored in prototypes**

---

## Closing Note

AITfES is not positioned as a finished product, but as a working system that demonstrates:

- How AI can be integrated into engineering workflows  
- What trade-offs are required to make it reliable  
- Where further improvements are necessary  

The focus remains on building systems that are **practical, scalable, and grounded in real use cases**, rather than purely experimental.

</BlogLayout>