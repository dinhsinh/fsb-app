"use client"

import Image from "next/image"
import { Search, Bell, ChevronDown, User, LogOut, ArrowLeftRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { LanguageSwitcher } from "@/components/ui/language-switcher"
import { useLanguage } from "@/contexts/language-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function AdminHeader() {
  const { t } = useLanguage()

  return (
    <header className="h-16 bg-white border-b border-border shadow-sm px-6 flex items-center justify-between gap-4 sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Image
          src="/fpt-logo-large.png"
          alt="FSB Academic Portal"
          width={180}
          height={80}
          className="h-10 w-auto"
          priority
        />
        <div className="hidden md:block">
          <h1 className="text-lg font-semibold text-[#0B3553]">FSB Academic Portal</h1>
          <p className="text-xs text-muted-foreground">Admin Dashboard</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-md hidden md:flex">
        <div className="relative w-full">
          <Search className="absolute left-3 top-3 text-muted-foreground" size={18} />
          <Input
            type="text"
            placeholder={t('searchPlaceholder')}
            className="pl-10 bg-gray-50 border-0 focus:ring-2 focus:ring-[#FF7A00]"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        <LanguageSwitcher />
        
        {/* Notifications */}
        <div className="relative">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell size={20} className="text-[#0B3553]" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 bg-[#FF7A00] text-white text-xs flex items-center justify-center">
              3
            </Badge>
          </button>
        </div>

        {/* User Avatar Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback className="bg-[#0B3553] text-white text-sm">AD</AvatarFallback>
            </Avatar>
            <div className="hidden md:block text-left">
              <div className="text-sm font-medium text-[#0B3553]">Admin User</div>
              <div className="text-xs text-muted-foreground">Administrator</div>
            </div>
            <ChevronDown size={16} className="text-muted-foreground" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              {t('myProfile')}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <ArrowLeftRight className="mr-2 h-4 w-4" />
              {t('switchToStudentPortal')}
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