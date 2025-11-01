"use client"

import { useState } from "react"
import AppShell from "@/components/layout/app-shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Download } from "lucide-react"

const marksData = [
  {
    code: "PRJ301",
    name: "Advanced Web Development",
    class: "SE161A1",
    credits: 3,
    midterm: 8.0,
    final: 8.5,
    score: 8.3,
    status: "Passed",
    gpa: 3.8,
  },
  {
    code: "PRJ302",
    name: "Mobile Development",
    class: "SE161A1",
    credits: 4,
    midterm: 7.5,
    final: 8.2,
    score: 7.9,
    status: "Passed",
    gpa: 3.6,
  },
  {
    code: "PRJ303",
    name: "Database Design",
    class: "SE161A1",
    credits: 3,
    midterm: 8.2,
    final: 8.8,
    score: 8.5,
    status: "Passed",
    gpa: 3.8,
  },
  {
    code: "PRJ304",
    name: "Systems Architecture",
    class: "SE161A1",
    credits: 4,
    midterm: 7.0,
    final: 7.5,
    score: 7.3,
    status: "Passed",
    gpa: 3.2,
  },
  {
    code: "PRJ305",
    name: "Project Management",
    class: "SE161A1",
    credits: 2,
    midterm: 8.5,
    final: 9.0,
    score: 8.8,
    status: "Passed",
    gpa: 4.0,
  },
]

const attendanceData = [
  { date: "2025-01-15", period: "Morning", course: "PRJ301", class: "SE161A1", status: "Present", notes: "" },
  { date: "2025-01-15", period: "Afternoon", course: "PRJ303", class: "SE161A1", status: "Present", notes: "" },
  { date: "2025-01-16", period: "Morning", course: "PRJ302", class: "SE161A1", status: "Late", notes: "Traffic jam" },
  { date: "2025-01-16", period: "Afternoon", course: "PRJ304", class: "SE161A1", status: "Present", notes: "" },
  { date: "2025-01-17", period: "Morning", course: "PRJ301", class: "SE161A1", status: "Absent", notes: "Sick" },
]

export default function Marks() {
  const [activeTab, setActiveTab] = useState<"marks" | "attendance">("marks")
  const [expandedRow, setExpandedRow] = useState<number | null>(null)

  return (
    <AppShell>
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-1">Academic Records</h1>
          <p className="text-muted-foreground text-sm">View your marks and attendance history</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-border">
          <button
            onClick={() => setActiveTab("marks")}
            className={`pb-3 px-2 font-medium text-sm transition-colors ${
              activeTab === "marks"
                ? "text-fpt-orange border-b-2 border-fpt-orange"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Marks & Grades
          </button>
          <button
            onClick={() => setActiveTab("attendance")}
            className={`pb-3 px-2 font-medium text-sm transition-colors ${
              activeTab === "attendance"
                ? "text-fpt-orange border-b-2 border-fpt-orange"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Attendance
          </button>
        </div>

        {activeTab === "marks" && (
          <div>
            {/* GPA Summary */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground mb-1">Current GPA</p>
                  <p className="text-3xl font-bold text-fpt-orange">3.68</p>
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground mb-1">Avg Score</p>
                  <p className="text-3xl font-bold text-fpt-blue">8.16</p>
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground mb-1">Total Credits</p>
                  <p className="text-3xl font-bold text-green-600">16</p>
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground mb-1">Passed Courses</p>
                  <p className="text-3xl font-bold text-green-600">5/5</p>
                </CardContent>
              </Card>
            </div>

            {/* Marks Table */}
            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Course Marks</CardTitle>
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Download size={16} />
                  Export PDF
                </Button>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-light-gray">
                        <th className="px-6 py-3 text-left text-xs font-semibold text-foreground">Code</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-foreground">Course Name</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-foreground">Credits</th>
                        <th className="px-6 py-3 text-center text-xs font-semibold text-foreground">Midterm</th>
                        <th className="px-6 py-3 text-center text-xs font-semibold text-foreground">Final</th>
                        <th className="px-6 py-3 text-center text-xs font-semibold text-foreground">Score</th>
                        <th className="px-6 py-3 text-center text-xs font-semibold text-foreground">Status</th>
                        <th className="px-6 py-3 text-center text-xs font-semibold text-foreground">GPA</th>
                      </tr>
                    </thead>
                    <tbody>
                      {marksData.map((mark, idx) => (
                        <tr
                          key={idx}
                          className="border-b border-border hover:bg-light-gray/50 transition-colors cursor-pointer"
                          onClick={() => setExpandedRow(expandedRow === idx ? null : idx)}
                        >
                          <td className="px-6 py-4 text-sm font-medium text-fpt-orange">{mark.code}</td>
                          <td className="px-6 py-4 text-sm text-foreground">{mark.name}</td>
                          <td className="px-6 py-4 text-sm text-foreground">{mark.credits}</td>
                          <td className="px-6 py-4 text-sm text-center text-foreground">{mark.midterm}</td>
                          <td className="px-6 py-4 text-sm text-center text-foreground">{mark.final}</td>
                          <td className="px-6 py-4 text-sm text-center font-semibold text-foreground">{mark.score}</td>
                          <td className="px-6 py-4 text-sm text-center">
                            <span className="badge-success">{mark.status}</span>
                          </td>
                          <td className="px-6 py-4 text-sm text-center font-semibold text-fpt-orange">{mark.gpa}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "attendance" && (
          <div>
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Attendance Record</CardTitle>
                  <div className="flex gap-2">
                    <Input type="date" className="w-32" />
                    <Button variant="outline" size="sm">
                      Filter
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                      <Download size={16} />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-light-gray">
                        <th className="px-6 py-3 text-left text-xs font-semibold text-foreground">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-foreground">Period</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-foreground">Course</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-foreground">Class</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-foreground">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-foreground">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {attendanceData.map((att, idx) => (
                        <tr key={idx} className="border-b border-border hover:bg-light-gray/50">
                          <td className="px-6 py-4 text-sm text-foreground">{att.date}</td>
                          <td className="px-6 py-4 text-sm text-foreground">{att.period}</td>
                          <td className="px-6 py-4 text-sm font-medium text-fpt-orange">{att.course}</td>
                          <td className="px-6 py-4 text-sm text-foreground">{att.class}</td>
                          <td className="px-6 py-4 text-sm">
                            {att.status === "Present" && <span className="badge-success">Present</span>}
                            {att.status === "Late" && <span className="badge-warning">Late</span>}
                            {att.status === "Absent" && <span className="badge-danger">Absent</span>}
                          </td>
                          <td className="px-6 py-4 text-sm text-muted-foreground">{att.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </AppShell>
  )
}
