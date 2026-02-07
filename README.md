# 📝 Todo App → Agentic App (Workshop Project)

This repository is a **step-by-step, beginner-friendly workshop project** that starts with a **classic Todo application** and gradually evolves into a **chat-controlled, agent-ready system**.

The goal is to **demystify AI agents and MCP** by grounding everything in **real software engineering fundamentals**.

> No prior AI knowledge required.

---

## 🎯 What You’ll Build

1. A normal Todo app using:

   * FastAPI
   * SQLite (SQL)
   * HTML, CSS, JavaScript
2. A chat-based interface that controls the app
3. A conceptual agent layer (reason → act → observe)
4. An understanding of where **MCP fits** in real systems

---

## 🧭 Phase-wise Learning Path

| Phase   | Title          | Description                  |
| ------- | -------------- | ---------------------------- |
| Phase 0 | Setup          | Environment and fundamentals |
| Phase 1 | Backend        | FastAPI + SQL Todo API       |
| Phase 2 | Frontend       | HTML/CSS/JS UI               |
| Phase 3 | Chat Control   | Rule-based chatbot           |
| Phase 4 | Agent Thinking | From bot to agent            |
| Phase 5 | MCP Concepts   | Tool standardization         |

---

## 🔹 Phase 0: Setup & Prerequisites

### Objective

Get everyone to a common starting point.

### Prerequisites

* Python 3.10+
* Git
* Basic understanding of HTTP and JavaScript

### Outcome

* Project runs locally
* FastAPI server starts successfully

---

## 🔹 Phase 1: Classic Todo App (Backend)

### Objective

Build a **normal, production-style backend** without any AI.

### What You’ll Learn

* FastAPI basics
* REST APIs
* SQLAlchemy ORM
* SQLite database
* CRUD operations

### Outcome

* `/todos` API
* Persistent database
* Swagger UI testing

> Key idea: **Good software does not require AI.**

---

## 🔹 Phase 2: Frontend (HTML / CSS / JS)

### Objective

Connect a real browser-based UI to the backend.

### What You’ll Learn

* Fetch API
* DOM manipulation
* Rendering API data
* Handling user input

### Outcome

* Todo app usable in the browser
* Create, view, and complete tasks

> Key idea: **Frontend and backend communicate via APIs.**

---

## 🔹 Phase 3: Chat-Based Control (Rule-Based Bot)

### Objective

Control the Todo app using natural language.

### What You’ll Learn

* Chat UI basics
* Intent detection using rules
* Mapping user messages → API calls
* Deterministic chatbot behavior

### Example

```
User: Add buy milk
Bot: ✅ Task added
```

### Outcome

* Chat interface replaces buttons
* Language triggers backend actions

> Key idea: **Language → Action → State change**

---

## 🔹 Phase 4: From Bot to Agent

### Objective

Understand what makes a system **agentic**.

### What You’ll Learn

* Limitations of rule-based bots
* Ambiguous user commands
* Multi-step reasoning
* Agent loop: Think → Act → Observe

### Example

```
User: Finish yesterday’s task
Agent:
  1. Fetch yesterday’s todos
  2. Decide which one to complete
  3. Perform the action
```

### Outcome

* Conceptual agent behavior
* Clear separation between logic and tools

> Key idea: **Agents reason before acting.**

---

## 🔹 Phase 5: MCP Concepts (Tool Standardization)

### Objective

Understand where **MCP (Model Context Protocol)** fits.

### What You’ll Learn

* What MCP is and what it is not
* Tool discovery vs hardcoded APIs
* MCP vs OpenAPI (conceptually)
* When MCP makes sense
* When MCP is overkill

### Outcome

* Mental model of MCP
* Ability to design AI-ready backends

> Key idea: **MCP standardizes how agents see your app.**

---

## 🧠 Final Takeaways

By completing this project, you will understand:

* How real-world apps are built
* How chatbots control software
* What “agentic” actually means
* Where MCP fits in the ecosystem
* How to design AI-ready systems **without hype**

---

## 🚀 How to Use This Repository

* Follow phases **in order**
* Each phase builds on the previous one
* Focus on understanding architecture, not shortcuts
* Experiment and extend freely

---

## 👥 Who This Is For

* Students
* Backend / frontend developers
* Educators
* Anyone curious about AI agents in real apps

---

## 📌 Philosophy

> AI doesn’t replace your application.
> It becomes another user — one that talks.

---

Happy building 🚀
