export const projects = [
    {
        id: "p1",
        title: "AI-Based Energy Systems Troubleshooting Assistant",
        date: "",
        context:
            "Diagnosing complex energy systems required domain expertise and structured troubleshooting workflows.",
        solution:
            "Developed a web-based diagnostic chatbot using SvelteKit and Google Gemini API, implementing guided questioning logic to systematically identify faults.",
        impact:
            "Improved troubleshooting efficiency by structuring diagnostic workflows and reducing reliance on manual expertise.",
        tools: ["SvelteKit", "Google Gemini API", "AI Chatbot", "System Diagnostics"],
        links: [{ label: "AIfTES WebApp", url: "https://aitfes.vercel.app/"},
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
        title: "AI Financial Data Query Interface",
        date: "",
        context:
            "Extracting meaningful insights from raw financial datasets required manual querying and domain-specific knowledge.",
        solution:
            "Built a natural language interface leveraging Alpha Vantage MCP integration to enable conversational querying of financial data.",
        impact:
            "Enabled intuitive access to structured financial insights, significantly reducing analysis time.",
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