"use client"

import { useState } from "react"
import { useLanguage } from '@/contexts/language-context'
import { translations } from '@/lib/i18n'
import AppShell from "@/components/layout/app-shell"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, MapPin, Users, Link2 } from "lucide-react"

const scheduleData = [
  {
    time: "08:00",
    classes: [{ code: "PRJ301", name: "Advanced Web Dev", room: "A102", instructor: "Dr. John", type: "Offline" }],
  },
  { time: "09:30", classes: [] },
  {
    time: "10:00",
    classes: [{ code: "PRJ302", name: "Mobile Dev", room: "B205", instructor: "Ms. Jane", type: "Online" }],
  },
  { time: "11:30", classes: [] },
  {
    time: "13:00",
    classes: [{ code: "PRJ303", name: "Database Design", room: "C301", instructor: "Prof. Mike", type: "Offline" }],
  },
  { time: "14:30", classes: [] },
]

// removed static daysOfWeek here; localized days are defined inside the component using t()

export default function Schedule() {
  const { t, language } = useLanguage()

  const [selectedDay, setSelectedDay] = useState(0)
  const [viewMode, setViewMode] = useState<"week" | "day">("week")
  // localized days and filters
  const daysOfWeek = [
    t('dayMonday'),
    t('dayTuesday'),
    t('dayWednesday'),
    t('dayThursday'),
    t('dayFriday'),
    t('daySaturday'),
    t('daySunday'),
  ]

  const filters: Array<keyof typeof translations.vi> = [
    'filterCampus',
    'filterCourse',
    'filterClass',
    'filterInstructor',
  ]

  // compute dynamic week range (Monday - Sunday) formatted according to current language
  const weekRange = (() => {
    const now = new Date()
    // calculate Monday as start of week
    const diff = (now.getDay() + 6) % 7
    const start = new Date(now)
    start.setDate(now.getDate() - diff)
    const end = new Date(start)
    end.setDate(start.getDate() + 6)

    const monthFmt = new Intl.DateTimeFormat(language, { month: 'short' })
    const startMonth = monthFmt.format(start)
    const endMonth = monthFmt.format(end)
    const startDay = start.getDate()
    const endDay = end.getDate()
    const startYear = start.getFullYear()
    const endYear = end.getFullYear()

    if (startYear !== endYear) {
      // different years
      return `${monthFmt.format(start)} ${startDay}, ${startYear} - ${monthFmt.format(end)} ${endDay}, ${endYear}`
    }
    if (startMonth === endMonth) {
      // same month
      return `${startMonth} ${startDay}-${endDay}, ${startYear}`
    }
    return `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${startYear}`
  })()

  return (
    <AppShell>
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground mb-1">{t('scheduleTitle')}</h1>
            <p className="text-muted-foreground text-sm">{`${t('scheduleWeekOf')} ${weekRange}`}</p>
          </div>
          <div className="flex gap-2">
            <Button variant={viewMode === "week" ? "default" : "outline"} size="sm" onClick={() => setViewMode("week") }>
              {t('viewWeek')}
            </Button>
            <Button variant={viewMode === "day" ? "default" : "outline"} size="sm" onClick={() => setViewMode("day") }>
              {t('viewDay')}
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {filters.map((key) => (
            <div
              key={key}
              className="px-3 py-2 bg-white border border-border rounded-lg text-sm text-muted-foreground cursor-pointer hover:border-fpt-orange"
            >
              {t(key)}
            </div>
          ))}
        </div>

        {/* Day Navigation */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
          <button className="p-2 hover:bg-muted rounded-lg flex-shrink-0">
            <ChevronLeft size={20} />
          </button>
          {daysOfWeek.map((day, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedDay(idx)}
              className={`px-4 py-2 rounded-lg font-medium text-sm flex-shrink-0 transition-colors ${
                selectedDay === idx
                  ? "bg-fpt-orange text-white"
                  : "bg-white border border-border text-foreground hover:border-fpt-orange"
              }`}
            >
              {day.slice(0, 3)}
            </button>
          ))}
          <button className="p-2 hover:bg-muted rounded-lg flex-shrink-0">
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Schedule Grid */}
        <Card className="shadow-card">
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {scheduleData.map((slot, idx) => (
                <div key={idx} className="flex border-b border-border last:border-0">
                  <div className="w-24 p-4 bg-light-gray font-semibold text-sm text-foreground border-r border-border flex-shrink-0">
                    {slot.time}
                  </div>
                  <div className="flex-1 p-4">
                    {slot.classes.length > 0 ? (
                      <div className="space-y-2">
                        {slot.classes.map((cls, cidx) => (
                          <div
                            key={cidx}
                            className="p-4 bg-gradient-to-r from-fpt-orange/10 to-fpt-blue/10 border-l-4 border-fpt-orange rounded-lg hover:shadow-md transition-all cursor-pointer"
                          >
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <p className="font-semibold text-foreground">{cls.name}</p>
                                <p className="text-xs text-muted-foreground">{cls.code}</p>
                              </div>
                              <span className="text-xs bg-fpt-orange/20 text-fpt-orange px-2 py-1 rounded">
                                {cls.type}
                              </span>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-xs text-foreground">
                              <div className="flex items-center gap-1">
                                <MapPin size={14} className="text-muted-foreground" />
                                <span>{cls.room}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Users size={14} className="text-muted-foreground" />
                                <span>{cls.instructor}</span>
                              </div>
                            </div>
                            {cls.type === "Online" && (
                              <button className="mt-2 text-xs flex items-center gap-1 text-fpt-blue hover:underline">
                                <Link2 size={12} /> {t('joinMeeting')}
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground text-sm italic">{t('noClasses')}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  )
}
