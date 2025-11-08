"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { Menu, Search, Bell, Settings, User, LogOut, Shield, GraduationCap, Users } from "lucide-react"
import { Input } from "@/components/ui/input"
import { LanguageSwitcher } from "@/components/ui/language-switcher"
import { useLanguage } from "@/contexts/language-context"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header({
  onMenuClick,
  sidebarCollapsed,
}: { onMenuClick: () => void; sidebarCollapsed: boolean }) {
  const router = useRouter()
  const { t } = useLanguage()

  return (
    <header className="h-16 bg-white border-b border-border shadow-sm px-6 flex items-center justify-between gap-4">
      <button onClick={onMenuClick} className="p-2 hover:bg-muted rounded-lg transition-colors md:hidden">
        <Menu size={20} />
      </button>

      { sidebarCollapsed && 
        <div className={cn("hidden md:flex items-center transition-all duration-300", sidebarCollapsed && "md:flex")}>
          <Image src="/fpt-logo-large.png" alt="FPT" width={48} height={48} className="h-10 w-auto" priority />
        </div>
      }

      <div className="flex-1 max-w-md hidden md:flex">
        <div className="relative w-full">
          <Search className="absolute left-3 top-3 text-muted-foreground" size={18} />
          <Input
            type="text"
            placeholder={t('searchPlaceholder')}
            className="pl-10 bg-light-gray border-0 focus:ring-2 focus:ring-fpt-orange"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <LanguageSwitcher />
        <button
          onClick={() => router.push("/notifications")}
          className="relative p-2 hover:bg-muted rounded-lg transition-colors"
        >
          <Bell size={20} className="text-foreground" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>
        <button onClick={() => router.push("/settings")} className="p-2 hover:bg-muted rounded-lg transition-colors">
          <Settings size={20} className="text-foreground" />
        </button>
        <DropdownMenu>
          <DropdownMenuTrigger className="w-10 h-10 bg-gradient-to-br from-fpt-orange to-fpt-blue rounded-full hover:opacity-80 transition-opacity" />
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem onClick={() => router.push("/profile")}>
              <User className="mr-2 h-4 w-4" />
              {t('myProfile')}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => router.push("/admin")}>
              <Shield className="mr-2 h-4 w-4" />
              {t('switchToAdminPortal')}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push("/lecturer")}>
              <GraduationCap className="mr-2 h-4 w-4" />
              {t('switchToLecturerPortal')}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push("/")}>
              <Users className="mr-2 h-4 w-4" />
              {t('studentPortal')}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">
              <LogOut className="mr-2 h-4 w-4" />
              {t('logout')}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
