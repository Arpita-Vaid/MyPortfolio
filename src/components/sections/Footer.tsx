import { personal } from '../../data/portfolio'

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-5 py-10 text-center sm:px-8 md:px-10">
      <p className="text-sm font-medium uppercase tracking-widest text-foreground">
        Designed &amp; Developed by {personal.name}
      </p>
      <p className="mt-2 text-xs text-muted-foreground">
        © {new Date().getFullYear()} {personal.name}. All Rights Reserved.
      </p>
    </footer>
  )
}
