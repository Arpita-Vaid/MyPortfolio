import { Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './BrandIcons'
import { personal } from '../../data/portfolio'

const links = [
  { icon: GitHubIcon, href: personal.github, label: 'GitHub', external: true },
  { icon: LinkedInIcon, href: personal.linkedin, label: 'LinkedIn', external: true },
  { icon: Mail, href: `mailto:${personal.email}`, label: 'Email', external: false },
]

interface SocialLinksProps {
  className?: string
  size?: 'sm' | 'md'
}

export function SocialLinks({ className = '', size = 'md' }: SocialLinksProps) {
  const iconSize = size === 'sm' ? 18 : 22
  const btnSize = size === 'sm' ? 'h-10 w-10' : 'h-12 w-12'

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map(({ icon: Icon, href, label, external }) => (
        <a
          key={label}
          href={href}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          aria-label={label}
          className={`liquid-glass ${btnSize} flex items-center justify-center rounded-full text-foreground transition-transform hover:scale-[1.03]`}
        >
          <span className="relative z-[1]">
            <Icon size={iconSize} />
          </span>
        </a>
      ))}
    </div>
  )
}
