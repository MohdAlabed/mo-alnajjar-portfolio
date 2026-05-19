import { memo } from "react";
import { IToolsBase } from "../../types/tools";
import TechIcon from "../icons/tech-icons";

const themeStyles = {
  cyan: {
    glow: 'group-hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] group-active:shadow-[0_0_30px_rgba(6,182,212,0.4)]',
    shadow: 'drop-shadow-[0_20px_60px_rgba(6,182,212,0.6)]',
  },
  orange: {
    glow: 'group-hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] group-active:shadow-[0_0_30px_rgba(249,115,22,0.4)]',
    shadow: 'drop-shadow-[0_20px_60px_rgba(249,115,22,0.6)]',
  },
} as const;

type ColorKeys = keyof typeof themeStyles;

interface ToolsCardProps extends Omit<IToolsBase, 'id'> {
  theme: ColorKeys;
}

const ToolsCard = ({ icon_tag, label, desc, theme }: ToolsCardProps) => {
  const themeColor = themeStyles[theme];

  return (
    <li className={`cursor-default select-none ${themeColor.shadow}`}>
        <div className="group flex flex-col items-center text-center">
          <div className={`relative top-4 flex items-center justify-center rounded-full bg-gradient-to-b from-zinc-800/80 to-transparent border border-zinc-700/50 w-18 h-18 
            transition-all duration-600 group-hover:-translate-y-8 group-active:-translate-y-8 via-white/10 overflow-hidden group-hover:bg-white/20 group-active:bg-white/20 ${themeColor.glow} group-hover:scale-110 group-active:scale-110`}
          >
            {/* Shimmer Effect */}
            <div className="absolute -inset-0 bg-gradient-to-r from-white/10 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] group-active:translate-x-[150%] transition-transform duration-600 ease-in-out"></div>
            <TechIcon name= {icon_tag ?? 'default'} size={40} />
          </div>
          <div className="pointer-events-none w-[120px] h-[48px] bg-[url('/images/cushion.avif')] bg-contain bg-no-repeat" aria-hidden="true"/>
          <h3 className="text-white font-extrabold font-sans tracking-wide pt-2">{label}</h3>
          <p className="font-semibold text-sm text-zinc-500 font-sans pt-1 leading-tight transition-colors duration-300 group-hover:text-zinc-300 group-active:text-zinc-300">{desc}</p>
        </div>
    </li>
  );
};
export default memo(ToolsCard);