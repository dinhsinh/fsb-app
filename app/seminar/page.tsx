"use client"

import AppShell from "@/components/layout/app-shell"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, FileUp } from "lucide-react"

const seminars = [
  {
    id: 1,
    title: "AI & Machine Learning Fundamentals",
    date: "2025-02-15",
    time: "14:00-16:00",
    location: "Hall A",
    speaker: "Dr. Tech",
    capacity: 100,
    registered: 45,
    status: "Open",
  },
  {
    id: 2,
    title: "Cloud Computing in Practice",
    date: "2025-02-20",
    time: "10:00-12:00",
    location: "Hall B",
    speaker: "Mr. Cloud",
    capacity: 80,
    registered: 60,
    status: "Open",
  },
  {
    id: 3,
    title: "Cybersecurity Trends 2025",
    date: "2025-03-01",
    time: "15:00-17:00",
    location: "Hall C",
    speaker: "Ms. Secure",
    capacity: 60,
    registered: 60,
    status: "Full",
  },
]

export default function Seminar() {
  return (
    <AppShell>
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-1">Seminars & Workshops</h1>
          <p className="text-muted-foreground text-sm">Register for upcoming seminars and workshops</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {seminars.map((seminar) => (
            <Card key={seminar.id} className="shadow-card hover:shadow-lg transition-shadow flex flex-col">
              <div className="h-40 bg-gradient-to-br from-fpt-orange/20 to-fpt-blue/20 flex items-center justify-center">
                <div className="text-center">
                  <Calendar className="text-fpt-orange mx-auto mb-2" size={32} />
                  <p className="text-sm font-semibold text-foreground">{seminar.title}</p>
                </div>
              </div>
              <CardContent className="flex-1 pt-4 flex flex-col">
                <div className="space-y-2 mb-4 flex-1">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar size={16} className="text-muted-foreground" />
                    <span className="text-foreground">{seminar.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin size={16} className="text-muted-foreground" />
                    <span className="text-foreground">{seminar.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users size={16} className="text-muted-foreground" />
                    <span className="text-foreground">
                      {seminar.registered}/{seminar.capacity}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 pt-4 border-t border-border">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    {seminar.status === "Full" ? "Full" : "Register"}
                  </Button>
                  <Button size="sm" className="flex-1 gap-1 bg-fpt-orange hover:bg-orange-600 text-white">
                    <FileUp size={14} /> Upload
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppShell>
  )
}
