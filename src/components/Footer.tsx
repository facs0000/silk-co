export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-display text-2xl text-cream tracking-wide leading-none">
            Silk <span className="text-coral">Co.</span>
          </span>
          <span className="font-body text-xs text-hint tracking-[0.04em]">
            Consultoría de IA para Empresas · Chile
          </span>
        </div>

        {/* Links */}
        <nav className="flex items-center gap-8">
          <a
            href="#servicios"
            className="font-body text-sm text-muted hover:text-cream transition-colors duration-200"
          >
            Soluciones
          </a>
          <a
            href="#contacto"
            className="font-body text-sm text-muted hover:text-cream transition-colors duration-200"
          >
            Contacto
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-muted hover:text-cream transition-colors duration-200"
          >
            LinkedIn
          </a>
        </nav>

        {/* Copyright */}
        <p className="font-body text-xs text-hint">© 2025 Silk Co.</p>
      </div>
    </footer>
  )
}
