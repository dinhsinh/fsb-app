"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import {
  LayoutDashboard,
  Calendar,
  BarChart3,
  FileText,
  User,
  DollarSign,
  BookOpen,
  Bell,
  Settings,
  ChevronLeft,
  Menu,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Schedule", href: "/schedule", icon: Calendar },
  { name: "Marks", href: "/marks", icon: BarChart3 },
  { name: "Attendance", href: "/attendance", icon: FileText },
  { name: "Profile", href: "/profile", icon: User },
  { name: "Finance", href: "/finance", icon: DollarSign },
  { name: "Seminar", href: "/seminar", icon: BookOpen },
  { name: "Notifications", href: "/notifications", icon: Bell },
  { name: "Settings", href: "/settings", icon: Settings },
]

export default function Sidebar({
  open,
  onToggle,
  onCollapsedChange,
}: { open: boolean; onToggle: () => void; onCollapsedChange: (collapsed: boolean) => void }) {
  const [collapsed, setCollapsed] = useState(!open)

  const handleToggle = () => {
    const newCollapsed = !collapsed
    setCollapsed(newCollapsed)
    onCollapsedChange(newCollapsed)
  }

  return (
    <>
      <aside
        className={cn(
          "bg-white border-r border-border shadow-sm transition-all duration-300 ease-in-out flex flex-col",
          collapsed ? "w-20" : "w-64",
        )}
      >
        <div className="h-16 flex items-center justify-center px-4 border-b border-border">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <Image
                src="/fpt-logo-large.png"
                alt="FPT Education"
                width={180}
                height={80}
                className="h-12 w-auto"
                priority
              />
            </div>
          )}
          <button
            onClick={handleToggle}
            className="p-1 hover:bg-muted rounded-lg transition-colors"
          >
            {collapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-2 overflow-y-auto">
          {navigation.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm font-medium",
                  "hover:bg-fpt-orange/10 text-foreground",
                  collapsed && "justify-center",
                )}
              >
                <Icon size={20} />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            )
          })}
        </nav>

        {/* User Info */}
        <div className="border-t border-border p-3">
          <div className={cn("flex items-center gap-3 p-2 rounded-lg bg-muted", collapsed && "justify-center")}>
            <div className="w-10 h-10 bg-gradient-to-br from-fpt-orange to-fpt-blue rounded-full flex-shrink-0" />
            {!collapsed && (
              <div className="min-w-0">
                <div className="text-sm font-semibold text-foreground truncate">Jordan</div>
                <div className="text-xs text-muted-foreground truncate">SE162345</div>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  )
}
