"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { authClient } from "@/lib/auth-client"

import {
  Bookmark,
  Briefcase,
  Building2,
  FileText,
  LayoutDashboard,
  PlusCircle,
  Settings,
  Users,
  Wallet,
} from "lucide-react"
import Link from "next/link"

const menuItemByRole = {
  seeker: [
    {
      id: "dashboard",
      name: "Dashboard",
      url: "/dashboard/seeker",
      icon: LayoutDashboard,
    },
    {
      id: "jobs",
      name: "Jobs",
      url: "/dashboard/seeker/jobs",
      icon: Briefcase,
    },
    {
      id: "saved-jobs",
      name: "Saved Jobs",
      url: "/dashboard/seeker/saved-jobs",
      icon: Bookmark,
    },
    {
      id: "applications",
      name: "Applications",
      url: "/dashboard/seeker/applications",
      icon: FileText,
    },
    {
      id: "billing",
      name: "Billing",
      url: "/dashboard/seeker/billing",
      icon: Wallet,
    },
    {
      id: "settings",
      name: "Settings",
      url: "/dashboard/seeker/settings",
      icon: Settings,
    },
  ],

  recruiter: [
    {
      id: "dashboard",
      name: "Dashboard",
      url: "/dashboard/recruiter",
      icon: LayoutDashboard,
    },
    {
      id: "my-company",
      name: "My Company",
      url: "/dashboard/recruiter/my-company",
      icon: Building2,
    },
    {
      id: "manage-jobs",
      name: "Manage Jobs",
      url: "/dashboard/recruiter/jobs",
      icon: Briefcase,
    },
    {
      id: "add-job",
      name: "Add Job",
      url: "/dashboard/recruiter/jobs/new",
      icon: PlusCircle,
    },
    {
      id: "applications",
      name: "Applications",
      url: "/dashboard/recruiter/applications",
      icon: FileText,
    },
    {
      id: "settings",
      name: "Settings",
      url: "/dashboard/recruiter/settings",
      icon: Settings,
    },
  ],

  admin: [
    {
      id: "dashboard",
      name: "Dashboard",
      url: "/dashboard/admin",
      icon: LayoutDashboard,
    },
    {
      id: "users",
      name: "Users",
      url: "/dashboard/admin/users",
      icon: Users,
    },
    {
      id: "companies",
      name: "Companies",
      url: "/dashboard/admin/companies",
      icon: Building2,
    },
    {
      id: "jobs",
      name: "Jobs",
      url: "/dashboard/admin/jobs",
      icon: Briefcase,
    },
    {
      id: "payments",
      name: "Payments",
      url: "/dashboard/admin/payments",
      icon: Wallet,
    },
    {
      id: "settings",
      name: "Settings",
      url: "/dashboard/admin/settings",
      icon: Settings,
    },
  ],
}

type UserRole = keyof typeof menuItemByRole

export function DashboardSidebar() {
  const { data: session } = authClient.useSession()

  const userRole = session?.user?.role

  const role: UserRole =
    userRole && userRole in menuItemByRole ? (userRole as UserRole) : "seeker"

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="px-4 py-3">
          <h2 className="text-lg font-bold">Job Portal</h2>
          <p className="text-xs text-muted-foreground capitalize">
            {role} Dashboard
          </p>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {menuItemByRole[role].map((item) => (
              <SidebarMenuItem key={item.id}>
                <SidebarMenuButton
                  render={<Link href={item.url} />}
                  tooltip={item.name}
                >
                  <item.icon className="size-4" />
                  <span>{item.name}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="px-4 py-3">
          <p className="text-xs text-muted-foreground">Logged in as</p>
          <p className="text-sm font-medium capitalize">{role}</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
