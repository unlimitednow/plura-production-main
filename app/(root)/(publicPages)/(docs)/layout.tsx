import Link from "next/link"

import { DocsSearch } from "@/components/docs/search"
import { DocsSidebarNav } from "@/components/docs/sidebar-nav"
import { NavBar } from "@/components/layout/navbar"
import { Icons } from "@/components/shared/icons"
import { docsConfig } from "@/config/docs"
import { siteConfig } from "@/config/site"
import { getCurrentUser } from "@/lib/session"
import Widget from "@/app/components/devrev"
import {DevProvider} from "./provider"
interface DocsLayoutProps {
  children: React.ReactNode
}

const rightHeader = () => (
  <div className="flex flex-1 items-center space-x-4 sm:justify-end">
    <div className="hidden lg:flex lg:grow-0">
      <DocsSearch />
    </div>
    <div className="flex lg:hidden">
      <Icons.search className="size-6 text-muted-foreground" />
    </div>
    <nav className="flex space-x-4">
      <Link
        href={siteConfig.links.github}
        target="_blank"
        rel="noreferrer"
      >
        <Icons.gitHub className="size-7" />
        <span className="sr-only">GitHub</span>
      </Link>
    </nav>
  </div>
)



export default async function DocsLayout({ children }: DocsLayoutProps) {
  const user = await getCurrentUser();
console.log(user)
  return (
    <>
    
      {/* Include the SDK scripts using the Script component */}

<DevProvider>
      <div className="flex min-h-screen flex-col">      <Widget
/>

        <NavBar user={user} items={docsConfig.mainNav} rightElements={rightHeader()}>
          <DocsSidebarNav items={docsConfig.sidebarNav} />
        </NavBar>
        <div className="container flex-1">{children}</div>
      </div></DevProvider>
    </>
  );
}