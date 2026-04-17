export const projects = [
    {
        id: "p1",
        title: "AITfES - AI-Based Energy Systems Troubleshooting Assistant",
        date: "",
        context:
            "Diagnosing issues in complex energy systems typically relies on domain expertise and loosely structured troubleshooting approaches, making the process time-consuming and inconsistent.",
        solution:
            "Built an experimental web-based diagnostic chatbot using SvelteKit and the Google Gemini API. Implemented a basic guided questioning flow to emulate structured troubleshooting, focusing on narrowing down potential faults through sequential user inputs.",
        impact:
            "Demonstrated the feasibility of structuring diagnostic workflows through a conversational interface. The prototype showed potential to streamline troubleshooting.",
        tools: ["SvelteKit", "Google Gemini API", "AI Chatbot", "System Diagnostics"],
        links: [{ label: "AITfES WebApp", url: "https://aitfes.vercel.app/"},
            { label: "GitHub", url: "https://github.com/thenewlegend/AITfES" }
        ],
    },
    {
        id: "p2",
        title: "MirrorSafe - Lightweight Folder Backup System",
        date: "2025",
        context:
            "Users required a simple, reliable backup solution without complex configuration or heavy software overhead.",
        solution:
            "Developed a desktop application using Python and PySide6 to mirror directories with support for incremental backups, scheduling, and multi-threaded file operations, running unobtrusively via system tray.",
        impact:
            "Reduced backup time and storage usage through incremental copying while ensuring data integrity via exact mirror replication.",
        tools: ["Python", "PySide6", "Multi-threading", "File Systems", "Desktop GUI"],
        links: [
            { label: "GitHub", url: "https://github.com/thenewlegend/mirrorsafe" }
        ],
    },
    {
        id: "p3",
        title: "Alpha Sentience - AI Financial Data Query Interface",
        date: "",
        context:
            "Extracting insights from financial datasets typically required manual querying and familiarity with financial APIs, creating friction for quick exploratory analysis.",
        solution:
            "Developed a prototype natural language interface integrating Alpha Vantage MCP, allowing users to query financial data conversationally. The system translates simple user prompts into API requests and returns structured responses.",
        impact:
            "Demonstrated that a conversational interface can lower the barrier to accessing financial data for simple queries. Although limited in scope and not production-ready, the prototype reduced friction in ad hoc exploration.",
        tools: ["Python", "Alpha Vantage API", "MCP", "NLP Interface"],
        links: [
            { label: "GitHub", url: "https://github.com/thenewlegend/AlphaSentience" }
        ],
    },
    {
        id: "p4",
        title: "Excel Master Index Builder (Python Automation Tool)",
        date: "",
        context:
            "Managing large collections of files lacked structured indexing, leading to inefficiencies in navigation and retrieval.",
        solution:
            "Engineered a Python-based automation tool to recursively scan directories and generate structured Excel indices with dynamic hyperlinking.",
        impact:
            "Eliminated manual indexing effort and significantly improved data accessibility and navigation speed.",
        tools: ["Python", "Automation", "Excel Processing", "File System Management"],
        links: [
            { label: "GitHub", url: "https://github.com/thenewlegend/Excel-Master-Sheet-Builder" }
        ],
    },
];