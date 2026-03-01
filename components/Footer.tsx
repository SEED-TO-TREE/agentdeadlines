export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/SEED-TO-TREE/agentdeadlines/blob/prod/CONTRIBUTING.md"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00ff88] transition-colors"
          >
            + Add an event
          </a>
          <span className="text-white/10">·</span>
          <span>
            Built by{" "}
            <a
              href="https://github.com/SEED-TO-TREE"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              @남우
            </a>
          </span>
        </div>
        <span>Data updated: 2026-03-01</span>
      </div>
    </footer>
  );
}
