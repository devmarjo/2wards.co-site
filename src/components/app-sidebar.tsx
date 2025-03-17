import * as React from "react"
import {
  BookOpen,
  Bot,
  Frame,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

// graduation-cap

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { ProfileSwitcher } from "@/components/profile-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"

import StudentSvg from "@/assets/icons/student.svg"
import AssessorSvg from "@/assets/icons/assessor.svg"
import IQASvg from "@/assets/icons/IQA.svg"
import EQASvg from "@/assets/icons/EQA.svg"
import StaffSvg from "@/assets/icons/staff.svg"
import AdminSvg from "@/assets/icons/admin.svg"
import { ModeToggle } from "./mode-toggle"
import { LogoIcon } from "./Icons"

export interface SidebarUserProfileI {
    name: string;
    logoSvg: string;
}
export interface SidebarUserDataI {
  user: {
    name: string;
    email: string;
    avatar: string;
  },
  profiles: SidebarUserProfileI[]
}

// This is sample data.
const data: SidebarUserDataI = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  profiles: [
    {
      name: "Student",
      logoSvg: StudentSvg
    },
    {
      name: "Assessor",
      logoSvg: AssessorSvg
    },
    {
      name: "IQA",
      logoSvg: IQASvg
    },
    {
      name: "EQA",
      logoSvg: EQASvg
    },
    {
      name: "Staff",
      logoSvg: StaffSvg
    },
    {
      name: "Admin ",
      logoSvg: AdminSvg
    }
  ]
}


const navMain = [
  {
    title: "Playground",
    url: "#",
    icon: SquareTerminal,
    isActive: true,
    items: [
      {
        title: "History",
        url: "#",
      },
      {
        title: "Starred",
        url: "#",
      },
      {
        title: "Settings",
        url: "#",
      },
    ],
  },
  {
    title: "Models",
    url: "#",
    icon: Bot,
    items: [
      {
        title: "Genesis",
        url: "#",
      },
      {
        title: "Explorer",
        url: "#",
      },
      {
        title: "Quantum",
        url: "#",
      },
    ],
  },
  {
    title: "Documentation",
    url: "#",
    icon: BookOpen,
    items: [
      {
        title: "Introduction",
        url: "#",
      },
      {
        title: "Get Started",
        url: "#",
      },
      {
        title: "Tutorials",
        url: "#",
      },
      {
        title: "Changelog",
        url: "#",
      },
    ],
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings2,
    items: [
      {
        title: "General",
        url: "#",
      },
      {
        title: "Team",
        url: "#",
      },
      {
        title: "Billing",
        url: "#",
      },
      {
        title: "Limits",
        url: "#",
      },
    ],
  },
]
const projects = [
  {
    name: "Design Engineering",
    url: "#",
    icon: Frame,
  },
  {
    name: "Sales & Marketing",
    url: "#",
    icon: PieChart,
  },
  {
    name: "Travel",
    url: "#",
    icon: Map,
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { open } = useSidebar()
  return (
    <Sidebar collapsible="icon" {...props} >
      <SidebarHeader>
        <div className="flex justify-center my-5">
          <LogoIcon height={80} small={!open} />
        </div>
        <ProfileSwitcher profiles={data.profiles} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
        <NavProjects projects={projects} />
      </SidebarContent>
      <SidebarFooter>
        <ModeToggle />
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
