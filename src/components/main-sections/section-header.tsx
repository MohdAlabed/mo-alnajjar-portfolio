const COLOR_VARIANTS = {
  cyan: {
    text: 'from-cyan-300 to-blue-500',
    ping: 'bg-cyan-400',
    main: 'bg-cyan-500',
    border: 'border-cyan-500/30'
  },
  orange: {
    text: 'from-orange-300 to-rose-400',
    ping: 'bg-orange-400',
    main: 'bg-orange-500',
    border: 'border-orange-500/30',
  },
  zinc: {
    text: 'from-zinc-300 to-zinc-500',
    ping: 'bg-zinc-400',
    main: 'bg-zinc-500',
    border: 'border-zinc-500/30',
  },
} as const;

type ColorKeys = keyof typeof COLOR_VARIANTS;

interface SectionHeaderProps {
  title: string;
  order: string;
  subtitle?: string;
  color: ColorKeys;
}

const SectionHeader = ({ title, order, subtitle, color }: SectionHeaderProps) => {
    const sectionColor = COLOR_VARIANTS[color];

    return (
        <header className="flex flex-col mb-10 pt-16 mx-2">
            <div className="flex items-center gap-4 mb-2">
                <span className={`relative flex items-center justify-center w-5 h-5 border ${sectionColor.border} rounded-full`}>
                    <span className={`absolute animate-ping inline-flex h-full w-full rounded-full opacity-60 ${sectionColor.ping}`} style={{ willChange: 'transform, opacity' }}></span>
                    <span className={`inline-flex rounded-full h-3 w-3 ${sectionColor.main}`}></span>
                </span>
                <span className="text-zinc-600 font-mono text-[10px] tracking-widest uppercase">system._state.active_ [v0.1]</span>
            </div>
            <div className="flex flex-col">
                <div className="text-6xl lg:text-7xl font-black font-sans opacity tracking-tight leading-none" 
                    style={{ WebkitTextStroke: '1px #3f3f46',color: 'transparent' }}
                >
                    {order}
                </div>
                <h2 className={`relative -mt-9 ml-6 pb-[0.15em] text-5xl lg:text-6xl font-black text-transparent tracking-tighter bg-clip-text bg-gradient-to-r ${sectionColor.text} leading-none transition-all`}>{title}</h2>
                
                {subtitle && (
                    <p className="mt-3 text-zinc-500 text-lg md:text-xl max-w-2xl leading-relaxed font-medium">
                        {subtitle}
                    </p>
                )}
            </div>
        </header>
    );
};
export default SectionHeader;