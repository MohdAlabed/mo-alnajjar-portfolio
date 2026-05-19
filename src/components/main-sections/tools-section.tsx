import ToolsCard from "@/components/cards/tools-card";
import { TOOLS_LIST, PYLIBRARIES_LIST } from "@/data/tools-libraries"
import SectionHeader from "./section-header"; 

const ToolsSection = () => {
    return (
        <div className="flex flex-col gap-16 w-full">
          <section id="engineering">
            <SectionHeader 
              title="Product Engineering" 
              order='01'
              subtitle="Building high-performance web architecture with Next.js and modern design systems." 
              color="cyan" 
            />
            <ul className="grid w-full grid-cols-[repeat(auto-fill,minmax(120px,1fr))] px-3 lg:px-8 gap-x-5 gap-y-8">
              {TOOLS_LIST.map(({ id, ...tool }) => (
                <ToolsCard key={id} {...tool} theme="cyan"></ToolsCard>
              ))}
            </ul> 
          </section>

          <section id="intelligence">
            <SectionHeader 
              title="Data Intelligence" 
              order='02'
              subtitle="Extracting value through rigorous data cleaning, analysis, and foundational AI integration." 
              color="orange" 
            />
            <ul className="grid w-full grid-cols-[repeat(auto-fill,minmax(120px,1fr))] px-3 lg:px-8 gap-x-5 gap-y-8">
              {PYLIBRARIES_LIST.map(({ id, ...tool }) => (
                <ToolsCard key={id} {...tool} theme='orange'></ToolsCard>
              ))}
            </ul>
          </section>
        </div>
    );
};
export default ToolsSection;