"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  Calendar,
  BarChart3,
  UserCheck,
  FileText,
  TrendingUp,
  Settings,
  ChevronLeft,
  Menu,
} from "lucide-react"
import { cn } from "@/lib/utils"

const getAdminNavigation = (t: any) => [
  { name: t('dashboard'), href: "/admin", icon: LayoutDashboard },
  { name: t('students'), href: "/admin/students", icon: Users },
  { name: t('lecturers'), href: "/admin/lecturers", icon: GraduationCap },
  { name: t('classesSchedule'), href: "/admin/classes", icon: Calendar },
  { name: t('marksManagement'), href: "/admin/marks", icon: BarChart3 },
  { name: t('attendance'), href: "/admin/attendance", icon: UserCheck },
  { name: t('academicEForms'), href: "/admin/forms", icon: FileText },
  { name: t('reports'), href: "/admin/reports", icon: TrendingUp },
  { name: t('settings'), href: "/admin/settings", icon: Settings },
]

export default function AdminSidebar({
  open,
  onToggle,
  onCollapsedChange,
}: { open: boolean; onToggle: () => void; onCollapsedChange: (collapsed: boolean) => void }) {
  const { t } = useLanguage()
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(!open)
  const navigation = getAdminNavigation(t)

  const handleToggle = () => {
    const newCollapsed = !collapsed
    setCollapsed(newCollapsed)
    onCollapsedChange(newCollapsed)
  }

  return (
    <aside
      className={cn(
        "bg-[#0B3553] text-white shadow-lg transition-all duration-300 ease-in-out flex flex-col",
        collapsed ? "w-20" : "w-64",
      )}
    >
      {/* Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-white/10">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <Image
              src="/fpt-logo-small.png"
              alt="FSB"
              width={32}
              height={32}
              className="h-8 w-8"
              priority
            />
            <div>
              <div className="text-sm font-semibold">Admin Portal</div>
              <div className="text-xs text-white/70">Management System</div>
            </div>
          </div>
        )}
        <button
          onClick={handleToggle}
          className="p-1 hover:bg-white/10 rounded-lg transition-colors"
        >
          {collapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navigation.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href))
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-3 rounded-lg transition-colors text-sm font-medium",
                isActive 
                  ? "bg-[#FF7A00] text-white shadow-md" 
                  : "hover:bg-white/10 text-white/90 hover:text-white",
                collapsed && "justify-center",
              )}
            >
              <Icon size={20} />
              {!collapsed && <span>{item.name}</span>}
            </Link>
          )
        })}
      </nav>

      {/* Admin Info */}
      <div className="border-t border-white/10 p-3">
        <div className={cn("flex items-center gap-3 p-2 rounded-lg bg-white/5", collapsed && "justify-center")}>
          <div className="w-10 h-10 bg-[#FF7A00] rounded-full flex-shrink-0 flex items-center justify-center">
            <span className="text-white font-semibold text-sm">AD</span>
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <div className="text-sm font-semibold text-white truncate">Admin User</div>
              <div className="text-xs text-white/70 truncate">System Administrator</div>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}