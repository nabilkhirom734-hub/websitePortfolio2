import { MAIN_NAV } from "@/config/site"
import { Separator } from "@/components/ui/separator"
import { NavDesktop } from "@/components/nav-desktop"
import { NavItemGitHub } from "@/components/nav-item-github"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 max-w-screen overflow-x-clip bg-background px-2">
      <div className="screen-line-top screen-line-bottom mx-auto flex h-(--header-height) items-center gap-2 border-x screen-line-bottom-border screen-line-top-border pr-2 pl-4 group-has-data-[slot=layout-wide]/layout:container after:z-1 sm:gap-4 md:max-w-3xl">
        <div className="flex-1" />

        <NavDesktop items={MAIN_NAV} />

        <div className="flex items-center">
          <NavItemGitHub />
          <Separator
            orientation="vertical"
            className="mx-2 data-vertical:h-5 data-vertical:self-center"
          />
          <ThemeToggle />
        </div>

        {/* <div className="absolute top-[-3.5px] left-[-4.5px] z-2 flex size-2 border border-line bg-background" /> */}
        {/* <div className="absolute top-[-3.5px] right-[-4.5px] z-2 flex size-2 border border-line bg-background" /> */}
      </div>
    </header>
  )
}
