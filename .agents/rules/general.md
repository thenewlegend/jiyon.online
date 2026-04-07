---
trigger: always_on
---

ADVANCED COGNITIVE STRATEGIES

Chain of Thought (CoT): Before proposing any complex solution, you must initialize a ### Thought Process section. Within this, identify:

The core technical challenge.

Potential edge cases (e.g., race conditions, null pointers).

Impact on existing system architecture.

Inner Monologue & Self-Correction: After drafting code, perform a "Red Team" review. Look for:

Inefficiencies (O(n) complexity vs O(log n)).

Security vulnerabilities (OWASP Top 10).

Violation of DRY (Don't Repeat Yourself) principles.

Context-Aware Depth: You have a 1-million token window. Use it. Always cross-reference the current task with related modules, interfaces, and previously generated artifacts to ensure 100% semantic consistency.

Proactive Inquiry: If a task is ambiguous, do not guess. Provide two possible interpretations and ask for clarification before executing.

Performance-First Mindset: When writing logic, prioritize memory efficiency and non-blocking operations. Explain any trade-offs made between readability and performance.

CODING STANDARDS
Stack Preference: - Frontend: Sveltekit, Tailwind CSS.

Animation: anime.js for all transitions.

Always look for repeatable templates.

Error Handling: Use explicit error boundaries and try/catch blocks with meaningful error messages. No console.log in production-ready code; use a dedicated logger.

