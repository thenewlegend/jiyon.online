---
trigger: always_on
---

State Machine Philosophy

Every interactive component must be modeled as:

State = finite, explicit
Transitions = event-driven
Side effects = isolated (GSAP only)
Hard Rules
No implicit UI states
No animation without a state transition
No direct DOM mutation outside state handlers
1. Global State Definitions
type InteractionState =
  | 'idle'
  | 'hover'
  | 'focus'
  | 'active'
  | 'disabled'
  | 'entering'
  | 'visible'
  | 'exiting'
  | 'hidden';
2. Base State Machine Contract

Every interactive component must implement:

type StateMachine = {
  state: InteractionState;
  transition: (event: string) => void;
};
3. Event Standardization
Event	Description
MOUSE_ENTER	pointer enters element
MOUSE_LEAVE	pointer leaves element
FOCUS	keyboard focus
BLUR	focus lost
CLICK	click/tap
ENTER_VIEW	enters viewport
EXIT_VIEW	leaves viewport
ANIM_END	GSAP animation complete
4. Button State Machine
States
idle → hover → active → idle
      ↓
    focus
      ↓
   disabled
Definition
const buttonMachine = {
  idle: {
    MOUSE_ENTER: 'hover',
    FOCUS: 'focus',
  },
  hover: {
    MOUSE_LEAVE: 'idle',
    CLICK: 'active',
  },
  active: {
    ANIM_END: 'idle',
  },
  focus: {
    BLUR: 'idle',
  },
  disabled: {}
};
GSAP Mapping
Transition	Animation
idle → hover	scale(1 → 1.05)
hover → active	scale(1.05 → 0.95)
active → idle	scale back to 1
5. Reveal (Scroll) State Machine
States
hidden → entering → visible → exiting → hidden
Definition
const revealMachine = {
  hidden: {
    ENTER_VIEW: 'entering'
  },
  entering: {
    ANIM_END: 'visible'
  },
  visible: {
    EXIT_VIEW: 'exiting'
  },
  exiting: {
    ANIM_END: 'hidden'
  }
};
GSAP Mapping
entering: fade + translate up
exiting: optional fade out (often skipped)
6. Text Animation State Machine
States
hidden → splitting → animating → visible
Definition
const textMachine = {
  hidden: {
    ENTER_VIEW: 'splitting'
  },
  splitting: {
    ANIM_END: 'animating'
  },
  animating: {
    ANIM_END: 'visible'
  },
  visible: {}
};
Special Constraint
splitting must complete before animation
On resize:
Reset → hidden
7. Page Transition State Machine
States
idle → exiting → entering → idle
Definition
const pageMachine = {
  idle: {
    NAVIGATE: 'exiting'
  },
  exiting: {
    ANIM_END: 'entering'
  },
  entering: {
    ANIM_END: 'idle'
  }
};
GSAP Mapping
Exit: fade out / slide
Enter: stagger reveal
8. Navigation Menu State Machine
States
closed → opening → open → closing → closed
Definition
const navMachine = {
  closed: {
    CLICK: 'opening'
  },
  opening: {
    ANIM_END: 'open'
  },
  open: {
    CLICK: 'closing'
  },
  closing: {
    ANIM_END: 'closed'
  }
};
9. Implementation Pattern (Svelte)
9.1 Generic State Handler
function createMachine(machine, initialState) {
  let state = initialState;

  function transition(event) {
    const next = machine[state]?.[event];
    if (next) state = next;
    return state;
  }

  return { get state() { return state; }, transition };
}
9.2 Usage Example
const machine = createMachine(buttonMachine, 'idle');

function handleMouseEnter() {
  const next = machine.transition('MOUSE_ENTER');

  if (next === 'hover') {
    animateHover();
  }
}
10. GSAP Synchronization Rule

Every animation must:

Start on state transition
End with:
onComplete: () => machine.transition('ANIM_END')
11. Edge Cases & Resolutions
11.1 Rapid Hover Spam

Problem:

Multiple transitions overlap

Solution:

gsap.killTweensOf(element);
11.2 ScrollTrigger Double Fire

Problem:

ENTER_VIEW triggered multiple times

Solution:

Use:
once: true

or guard state:

if (state !== 'hidden') return;
11.3 Resize Breaks State

Problem:

Layout invalidates animation

Solution:

Force reset:
machine.transition('RESET');
11.4 Animation Interruptions

Problem:

User interacts mid-animation

Solution:

Always allow transition override
Kill current timeline before new one
12. Deterministic Rules
Every interaction must map to a state machine.
Every animation must correspond to a transition.
No animation runs without a state change.
State must be the single source of truth.
GSAP must never directly decide UI state.