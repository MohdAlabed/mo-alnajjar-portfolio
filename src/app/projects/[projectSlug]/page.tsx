import { notFound } from 'next/navigation';
import { getProjectBySlug } from '@/services/project/getProjectBySlug';
import { getProjectSlugs } from '@/services/project/getProjectSlugs';
import { GithubIcon } from '@/components/icons/social-icons';
import { dateFormatter } from '@/utils/dateformatter';
import { Metadata } from "next";
import ProjectGallery from '@/components/projects-modal/ProjectGallery';

type ProjectPageProps = {
  params: Promise<{ projectSlug: string }>
}

export async function generateStaticParams() {
  return getProjectSlugs();
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { projectSlug } = await params;
  const project = await getProjectBySlug(projectSlug);
  
  if (!project) {
    return { 
      title: "Project Not Found",
      description: "The requested project could not be found or may have been moved.",
      robots: {
        index: false, // Tells Google not to index this broken URL
        follow: true
      }
    };
  }
  
  const fallbackImage = "/images/profile.webp"; 
  const projectImage = project.images[0]?.url || fallbackImage;
  
  return {
    title: project.title, 
    description: project.description || `Details about ${project.title}`,
    openGraph: {
      title: project.title,
      description: project.description,
      url: `https://mohammedalnajjar.site/projects/${projectSlug}`,
      type: "article",
      images: [
        {
          url: projectImage,
          width: 1200,
          height: 630,
          alt: `${project.title} Preview Image`,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { projectSlug } = await params;
    const project = await getProjectBySlug(projectSlug) 
    if (!project) notFound();

    const galleryImages = project.images.map((image) => ({
        imageUrl: image.url,
        altText: image.alt,
    }));

    return (
        <main className='min-h-screen text-white bg-black'>
            <div className='container max-w-7xl mx-auto px-6 pb-6 my-24 lg:px-10 lg:pb-10  grid grid-cols-1 lg:grid-cols-12 gap-10 items-start'>
                
                {/* Left Column: Images, and metadata */}
                <aside className='lg:col-span-4 lg:sticky lg:top-10 space-y-6'>
                    {/* Image Section */}
                    <ProjectGallery images={galleryImages} autoPlayInterval={3500} />

                    {/* Data Section */}
                    <div className='bg-zinc-500 border border-zinc-700 rounded-xl p-6 space-y-6'>
                        {/* Timeline */}
                        <div className='flex justify-between items-center border-b border-zinc-700 pb-4'>
                            <span className='text-zinc-800 text-xs font-bold uppercase tracking-widest'>Timeline</span>
                            <span className='text-sm font-mono'>{dateFormatter(project.startDate)} — {dateFormatter(project.endDate)}</span>
                        </div>

                        {/*  Github link */}
                        {project.githubUrl && (
                            <div className='flex justify-between items-center pb-4'>
                                <span className='text-zinc-800 text-xs font-bold uppercase tracking-widest'>Source</span>
                                
                                <a href={project.githubUrl} rel="noopener noreferrer" target="_blank" className='flex items-center gap-2 hover:text-zinc-800 transition-colors text-sm font-medium font-mono cursor-pointer'>
                                    <GithubIcon strokeWidth={2.5} className='w-5 w-5' ></GithubIcon>
                                    View Repository
                                </a>
                            </div>
                        )}
                        
                        {/* Tags List */}
                        <ul className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => {
                                return (
                                    <li key={tag} className="inline-flex items-center justify-center text-zinc-300 text-[10px] uppercase leading-none tracking-wider font-bold rounded-lg p-2.5 border border-zinc-700 bg-zinc-800/50 whitespace-nowrap">{tag}</li>
                                )
                            })}
                        </ul>
                    </div>
                </aside>

                {/* Right Column: Description */}
                <article className="lg:col-span-8 space-y-8">
                    <div className='space-y-4'>
                        <h1 className='font-black text-4xl tracking-tight italic uppercase break-words'>{project.title}</h1>
                        <div className='h-1 w-24 bg-zinc-600 rounded-full' />
                    </div>
                    
                    <p className='text-zinc-200 text-md leading-relaxed whitespace-pre-line max-w-none'>{project.description}</p>
                </article>
            </div>
        </main>
    );
}