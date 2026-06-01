import { HeroSection } from './components/sections/HeroSection'
import { MarqueeSection } from './components/sections/MarqueeSection'
import { AboutSection } from './components/sections/AboutSection'
import { TechStackSection } from './components/sections/TechStackSection'
import { ServicesSection } from './components/sections/ServicesSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { GitHubSection } from './components/sections/GitHubSection'
import { EducationSection } from './components/sections/EducationSection'
import { AchievementsSection } from './components/sections/AchievementsSection'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { ContactSection } from './components/sections/ContactSection'
import { OsTaskbar } from './components/os/OsTaskbar'
import { OsWindow } from './components/os/OsWindow'

function App() {
  return (
    <div className="os-root min-h-screen bg-background font-body text-foreground">
      <main className="overflow-x-clip pb-14">
        <HeroSection />
        <div className="os-desktop mx-auto max-w-6xl space-y-6 px-4 py-8 sm:px-6 md:space-y-8 md:py-12">
          <OsWindow title="system_processes.daemon — Tech Stack">
            <MarqueeSection />
          </OsWindow>
          <OsWindow title="about.sys — Profile" id="about">
            <AboutSection />
          </OsWindow>
          <OsWindow title="skills.dll — Tech Stack" id="tech-stack">
            <TechStackSection />
          </OsWindow>
          <OsWindow title="services.bundle — What I Do" id="services">
            <ServicesSection />
          </OsWindow>
          <OsWindow title="projects.app — Featured Work" id="projects">
            <ProjectsSection />
          </OsWindow>
          <OsWindow title="github.net — Source Code" id="github">
            <GitHubSection />
          </OsWindow>
          <OsWindow title="education.db — Academics">
            <EducationSection />
          </OsWindow>
          <OsWindow title="achievements.log — Milestones" id="achievements">
            <AchievementsSection />
          </OsWindow>
          <OsWindow title="experience.exe — Practical Experience" id="experience">
            <ExperienceSection />
          </OsWindow>
          <OsWindow title="contact.mail — Let's Connect" id="contact">
            <ContactSection />
          </OsWindow>
        </div>
      </main>
      <OsTaskbar />
    </div>
  )
}

export default App
