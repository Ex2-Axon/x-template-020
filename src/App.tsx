import { useState, useEffect } from 'react'

/* ── CRT Overlay Component ── */
function CRTOverlay() {
  return <div className="crt-overlay pointer-events-none fixed inset-0 z-50" aria-hidden="true" />
}

/* ── Glitch Text Component ── */
function GlitchText({ text, className }: { text: string; className?: string }) {
  return (
    <div className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -z-10 animate-glitch text-primary opacity-70" aria-hidden="true">{text}</span>
      <span className="absolute top-0 left-0 -z-20 animate-glitch text-accent opacity-70" aria-hidden="true" style={{ animationDelay: '0.5s' }}>{text}</span>
    </div>
  )
}

/* ── Cyber Card Component (Based on reference) ── */
function CyberCard({ title, subtitle, content }: { title: string; subtitle: string; content: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#101010] p-1 transition-all hover:border-white/10">
      {/* Moving glow line on hover */}
      <div className="absolute -left-px top-full h-[70px] w-px bg-gradient-to-b from-transparent via-[#b663ff] to-transparent opacity-0 shadow-[0_0_30px_#b663ff] transition-all duration-600 group-hover:top-1/4 group-hover:opacity-100" />
      
      <div className="relative flex flex-col items-center justify-center rounded-[1.25rem] bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:1.1rem_1.1rem] bg-center p-8 text-center">
        <div className="mb-2 font-heading text-xs tracking-[0.2em] uppercase">
          <span className="bg-gradient-to-r from-[#b663ff] to-[#13c1ef] bg-clip-text font-black text-transparent">
            {title}
          </span>
          <div className="mt-1 h-[3px] w-1/4 bg-gradient-to-r from-[#b663ff] to-[#13c1ef]" />
        </div>
        <h3 className="mb-4 font-heading text-3xl font-bold text-[#faf9f6]">{subtitle}</h3>
        <p className="font-body text-sm leading-relaxed text-muted">{content}</p>
      </div>
    </div>
  )
}

/* ── Background Decoration ── */
function BackgroundDecor() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Decorative lines */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
      <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-accent/10 to-transparent" />
      
      {/* Random coordinates */}
      <div className="absolute top-10 left-10 font-mono text-[8px] text-muted opacity-30">LAT: 35.6895° N <br /> LONG: 139.6917° E</div>
      <div className="absolute bottom-10 right-10 font-mono text-[8px] text-muted opacity-30 text-right">NODE_ID: AX-020 <br /> STATUS: STABLE</div>
    </div>
  )
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className={`relative min-h-screen bg-background p-4 md:p-8 font-body transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <CRTOverlay />
      <BackgroundDecor />
      
      <div className="relative z-10">
        {/* ── Header ── */}
        <header className="mx-auto max-w-6xl flex justify-between items-center mb-16">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="h-3 w-3 rounded-full bg-accent animate-pulse" />
              <div className="absolute inset-0 h-3 w-3 rounded-full bg-accent animate-ping opacity-50" />
            </div>
            <span className="font-mono text-xs tracking-widest text-primary">STATUS: SYSTEM ONLINE</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:block h-px w-24 bg-gradient-to-r from-transparent to-primary/30" />
            <div className="px-3 py-1 border border-primary/30 rounded-sm bg-primary/5">
              <span className="font-mono text-[10px] text-primary animate-flicker">V1.20.0-PRO</span>
            </div>
          </div>
        </header>

        {/* ── Hero Section ── */}
        <section className="mx-auto max-w-4xl text-center mb-24">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1 bg-accent/10 border border-accent/20 rounded-full">
            <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] font-mono text-accent tracking-[0.3em] uppercase">LIVE</span>
          </div>
          <h1 className="mb-6 font-heading text-6xl md:text-9xl font-black tracking-tighter leading-none">
            <GlitchText text="CYBER" /> <br />
            <span className="text-primary glow-primary relative inline-block">
              CITYSCAPE
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 blur-sm" />
            </span>
          </h1>
          <p className="mx-auto max-w-xl text-lg md:text-xl text-muted mb-10 leading-relaxed">
            Dive into a digital twilight. Experience the raw power of the pixelated noir future where data flows like rain.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="group relative px-10 py-5 bg-primary text-background font-heading font-bold uppercase tracking-[0.2em] transition-all hover:scale-105 hover:shadow-[0_0_40px_var(--color-primary)] active:scale-95">
              <span className="relative z-10">EXPLORE MATRIX</span>
              <div className="absolute inset-0 -z-10 bg-accent translate-x-1.5 translate-y-1.5 transition-transform group-hover:translate-x-3 group-hover:translate-y-3" />
            </button>
            <button className="px-8 py-4 border border-white/10 text-white/50 font-heading font-bold uppercase tracking-widest transition-all hover:bg-white/5 hover:text-white">
              VIEW ARCHIVE
            </button>
          </div>
        </section>

        {/* ── Grid Content ── */}
        <section className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <CyberCard 
            title="Module 01" 
            subtitle="Neural Uplink" 
            content="Connect your consciousness directly to the mainframe. High-bandwidth sync for the modern digital nomad." 
          />
          <CyberCard 
            title="Module 02" 
            subtitle="Data Havens" 
            content="Secure your assets in the most resilient nodes of the decentralized network. Encrypted, anonymous, eternal." 
          />
          <CyberCard 
            title="Module 03" 
            subtitle="Ghost Shell" 
            content="Operate in the shadows with advanced stealth protocols. Leave no trace in the sea of information." 
          />
        </section>

        {/* ── Terminal Section ── */}
        <section className="mx-auto max-w-3xl bg-surface/80 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden shadow-2xl relative">
          {/* Scanning line animation */}
          <div className="absolute top-0 left-0 w-full h-px bg-primary/40 animate-scanline z-20" />
          
          <div className="bg-white/5 px-4 py-3 flex justify-between items-center border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/50" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-500/50" />
              </div>
              <span className="font-mono text-[10px] text-muted ml-2 uppercase tracking-widest">System Monitor</span>
            </div>
            <span className="font-mono text-[8px] text-primary/50">CPU: 42% // MEM: 1.2GB</span>
          </div>
          <div className="p-8 font-mono text-sm text-primary/80 space-y-3">
            <div className="flex gap-2">
              <span className="text-accent">$</span>
              <span className="animate-pulse">initialize --noir-mode --ultra</span>
            </div>
            <div className="text-muted/60 flex items-center gap-2">
              <span className="h-1 w-1 bg-primary rounded-full" />
              Loading environment variables... <span className="text-primary">[OK]</span>
            </div>
            <div className="text-muted/60 flex items-center gap-2">
              <span className="h-1 w-1 bg-primary rounded-full" />
              Fetching remote data nodes... <span className="text-primary">[OK]</span>
            </div>
            <div className="text-muted/60 flex items-center gap-2">
              <span className="h-1 w-1 bg-primary rounded-full" />
              Optimizing pixel shaders... <span className="text-primary">[OK]</span>
            </div>
            <div className="text-primary pt-2 flex items-center gap-2">
              <span className="text-accent">»</span>
              <span className="glow-primary">[SUCCESS] Digital twilight engaged. Ultra mode active.</span>
            </div>
            <div className="flex gap-2 mt-6">
              <span className="text-accent">$</span>
              <span className="w-2 h-5 bg-primary animate-flicker shadow-[0_0_10px_var(--color-primary)]" />
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="mt-40 pb-12 text-center border-t border-white/5 pt-20">
          <div className="font-heading text-3xl font-black text-white/10 tracking-[1em] uppercase mb-6 hover:text-white/20 transition-colors">
            AXON
          </div>
          <div className="flex justify-center gap-8 mb-8 font-mono text-[10px] text-muted uppercase tracking-widest">
            <a href="#" className="hover:text-primary transition-colors">Network</a>
            <a href="#" className="hover:text-primary transition-colors">Nodes</a>
            <a href="#" className="hover:text-primary transition-colors">Protocol</a>
          </div>
          <p className="font-mono text-[9px] text-muted/40 tracking-widest">
            © 2026 X-TEMPLATE-020 // DESIGNED FOR THE VOID // BUILT WITH AXON-OS
          </p>
        </footer>
      </div>
    </main>
  )
}

export default App
