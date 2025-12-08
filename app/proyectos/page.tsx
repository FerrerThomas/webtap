
import { ProjectCard } from "@/components/project-card"
import { FloatingNav } from "@/components/floating-nav"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { projects } from "@/lib/projects"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
            <ScrollProgress />
            <FloatingNav />

            <section className="py-24 relative min-h-screen">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
                </div>

                <div className="container relative z-10 px-4 md:px-6">
                    <div className="mb-8">
                        <Link href="/">
                            <Button className="bg-gradient-to-r from-yellow-500 to-red-500 hover:from-red-500 hover:to-yellow-500 border-0 text-white">
                                <ArrowLeft className="mr-2 h-4 w-4" /> Volver al Inicio
                            </Button>
                        </Link>
                    </div>

                    <SectionHeading title="Todos Nuestros Proyectos" subtitle="Explora nuestro portfolio completo" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                tags={project.tags}
                                image={project.image}
                                demoUrl={project.demoUrl}
                                repoUrl={project.repoUrl}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
