import { SocialLinks } from '../ui/SocialLinks'
import { ResumeDownload } from '../ui/ResumeDownload'
import { osConfig, personal } from '../../data/portfolio'

export function OsTaskbar() {
  return (
    <footer className="os-taskbar">
      <div className="flex items-center gap-3">
        <a href="#home" className="os-taskbar-start">
          ◆ {osConfig.name}
        </a>
        <span className="hidden text-xs text-muted-foreground sm:inline">
          {personal.name} — Software Engineer
        </span>
      </div>
      <div className="flex items-center gap-4">
        <SocialLinks size="sm" />
        <ResumeDownload className="os-taskbar-link hidden sm:inline">
          {personal.resumeFileName}
        </ResumeDownload>
        <span className="os-status-pill text-[10px]">
          <span className="os-status-dot" />
          {osConfig.status}
        </span>
      </div>
    </footer>
  )
}
