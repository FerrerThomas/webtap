import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, MessageCircle, Instagram } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/projects"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex justify-center md:inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-0 mt-4">
                <span className="relative z-10">Agencia de Desarrollo Web</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-500/20 to-red-500/20 animate-pulse"></span>
              </div>
            </div>
            <div className="block md:hidden mb-0">
              <img
                src="/webtapLogo.png"
                alt="Webtap Logo"
                className="w-[450px] h-[350px] max-w-full object-contain mx-auto"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-center md:text-left">
              <span className="md:block mr-2 md:mr-0">Somos</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-600">
                Webtap
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px] text-center md:text-left mx-auto md:mx-0">
              Nos dedicamos a diseñar y crear Webs/App para clientes
            </p>
            <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
              <Link href="#projects">
                <Button className="relative overflow-hidden group bg-gradient-to-r from-yellow-500 to-red-500 border-0">
                  <span className="relative z-10 flex items-center">
                    Ver Proyectos <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  variant="outline"
                  className="border-zinc-700 text-red-500 hover:text-red-700 hover:border-zinc-500 bg-transparent"
                >
                  Contactanos
                </Button>
              </Link>
            </div>
            <div className="flex gap-4 pt-4 justify-center md:justify-start">
              <Link href="https://github.com/ferrerthomas" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="mailto:tomasferrer_web@hotmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
              <Link href="https://wa.me/2355506234" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span className="sr-only">WhatsApp</span>
                </Button>
              </Link>
              <Link href="https://instagram.com/webtap.dev" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <CreativeHero />
          </div>
        </div>

        <div className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Sobre Nosotros" subtitle="¿Quienes somos?" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative hidden md:block">
              {/*<div className="relative max-w-md mx-auto">*/}
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-yellow-500/20 to-red-500/20 blur-xl opacity-70"></div>
              <div className="relative h-[500px] w-full rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="/webtapLogo2.png?height=600&width=600"
                  alt="Webtap Logo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">Disponible</span>
                  </div>
                </div>
                {/*</div>*/}
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                  En Webtap impulsamos tu marca o emprendimiento hacia el mundo digital con soluciones diseñadas a medida.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  Nos especializamos en crear sitios web y aplicaciones modernos, funcionales y alineados a los objetivos de cada cliente, utilizando tecnologías actuales y un enfoque propio basado en vibe coding: desarrollo fluido, eficiente y con identidad.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  Ya sea que necesites un sistema de gestión, una web informativa, una landing para captar clientes o una plataforma completa, te acompañamos en todo el proceso para que tu presencia online sea sólida, profesional y acorde a lo que tu proyecto merece.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  En Webtap, transformamos ideas en experiencias digitales.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">

                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Ubicacion</div>
                    <div className="font-medium">La Plata, Argentina</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Estado</div>
                    <div className="font-medium text-green-500">Disponible</div>
                  </div>
                </div>

              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Nuestros Proyectos" subtitle="Algunos trabajos recientes" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {projects.slice(0, 3).map((project, index) => (
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

          <div className="flex justify-center mt-12">
            <Link href="/proyectos">
              <Button size="lg" className="relative overflow-hidden group bg-gradient-to-r from-yellow-500 to-red-500 border-0">
                <span className="relative z-10 flex items-center">
                  Ver Todos los Proyectos <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="siguiendo estos pasos" subtitle="¿Como obtener tu web?" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Ponte en contacto" subtitle="Trabajemos juntos" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Informacion de Contacto</h3>
              <div className="space-y-6">
                {/*<div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">tomasferrer_web@hotmail.com</div>
                  </div>
                </div>*/}
                {/*<div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <div className="font-medium">linkedin.com/in/tomasferrer</div>
                  </div>
                </div>*/}
                {/*<div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <div className="font-medium">github.com/ferrerthomas</div>
                  </div>
                </div>*/}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">WhatsApp</div>
                    <div className="font-medium">+54 9 2355 506234</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Instagram className="h-5 w-5 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Instagram</div>
                    <div className="font-medium">@webtap.dev</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span>Disponible</span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-600">Webtap</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} Webtap. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/ferrerthomas" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://wa.me/2355506234" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </Button>
            </Link>
            <Link href="https://instagram.com/webtap.dev" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div >
  )
}
