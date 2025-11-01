"use client"

import { cn } from "@/lib/utils"

import { useState } from "react"
import AppShell from "@/components/layout/app-shell"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, ExternalLink } from "lucide-react"

const notifications = [
  {
    id: 1,
    type: "academic",
    title: "New Grade Posted",
    message: "Your grade for PRJ301 is now available - 8.5/10",
    time: "2 hours ago",
    read: false,
    actionUrl: "/marks",
  },
  {
    id: 2,
    type: "finance",
    title: "Payment Reminder",
    message: "Your Spring 2025 tuition is due by January 15, 2025",
    time: "5 hours ago",
    read: false,
    actionUrl: "/finance",
  },
  {
    id: 3,
    type: "system",
    title: "System Maintenance",
    message: "Scheduled maintenance on portal from 2-4 AM tomorrow",
    time: "1 day ago",
    read: true,
    actionUrl: "#",
  },
  {
    id: 4,
    type: "academic",
    title: "Seminar Registration Open",
    message: "AI & Machine Learning Workshop registration is now open",
    time: "2 days ago",
    read: true,
    actionUrl: "/seminar",
  },
  {
    id: 5,
    type: "academic",
    title: "E-Form Approved",
    message: "Your course extension request has been approved",
    time: "3 days ago",
    read: true,
    actionUrl: "#",
  },
]

export default function Notifications() {
  const [notifs, setNotifs] = useState(notifications)
  const [dismissedIds, setDismissedIds] = useState<number[]>([])

  const handleDismiss = (id: number) => {
    setDismissedIds([...dismissedIds, id])
  }

  const handleMarkAsRead = (id: number) => {
    setNotifs(notifs.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const unreadCount = notifs.filter((n) => !n.read && !dismissedIds.includes(n.id)).length
  const visibleNotifs = notifs.filter((n) => !dismissedIds.includes(n.id))

  return (
    <AppShell>
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground mb-1">Notifications</h1>
            <p className="text-muted-foreground text-sm">Stay updated with your academic progress</p>
          </div>
          <Button variant="outline" size="sm">
            Mark all as read
          </Button>
        </div>

        {/* Notification Center */}
        <div className="space-y-3">
          {visibleNotifs.length > 0 ? (
            visibleNotifs.map((notif) => (
              <Card
                key={notif.id}
                className={cn(
                  "shadow-card cursor-pointer hover:shadow-md transition-all",
                  !notif.read && "border-l-4 border-fpt-orange bg-fpt-orange/5",
                )}
                onClick={() => handleMarkAsRead(notif.id)}
              >
                <CardContent className="p-4 flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold text-foreground">{notif.title}</p>
                      {!notif.read && <span className="w-2 h-2 bg-fpt-orange rounded-full flex-shrink-0" />}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{notif.message}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{notif.time}</span>
                      {notif.actionUrl !== "#" && (
                        <a
                          href={notif.actionUrl}
                          className="text-xs flex items-center gap-1 text-fpt-blue hover:underline"
                        >
                          View <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDismiss(notif.id)
                    }}
                    className="p-1 hover:bg-muted rounded transition-colors flex-shrink-0"
                  >
                    <X size={18} className="text-muted-foreground" />
                  </button>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card className="shadow-card">
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground">No notifications yet</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </AppShell>
  )
}
