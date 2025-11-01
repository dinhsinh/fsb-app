"use client"

import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import AppShell from "@/components/layout/app-shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Book, AlertCircle, Clock } from "lucide-react"

const gpaData = [
  { month: "Aug", gpa: 3.1 },
  { month: "Sep", gpa: 3.2 },
  { month: "Oct", gpa: 3.25 },
  { month: "Nov", gpa: 3.35 },
  { month: "Dec", gpa: 3.4 },
  { month: "Jan", gpa: 3.5 },
]

const attendanceData = [
  { name: "Present", value: 42, fill: "#8DC63F" },
  { name: "Late", value: 5, fill: "#FFB81C" },
  { name: "Absent", value: 3, fill: "#EF4444" },
]

const upcomingClasses = [
  { code: "PRJ301", name: "Advanced Web Development", time: "08:00 - 09:30", room: "A102" },
  { code: "PRJ302", name: "Mobile Development", time: "10:00 - 11:30", room: "B205" },
  { code: "PRJ303", name: "Database Design", time: "13:00 - 14:30", room: "C301" },
]

const recentActivities = [
  { type: "grade", title: "New grade posted", course: "PRJ301", score: "8.5/10", time: "2 hours ago" },
  { type: "form", title: "E-Form approved", form: "Study Extension", time: "1 day ago" },
  { type: "notification", title: "Seminar registration open", event: "AI Workshop 2025", time: "2 days ago" },
]

export default function Dashboard() {
  return (
    <AppShell>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, Jordan</h1>
          <p className="text-muted-foreground">Here's your academic overview for this semester</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="shadow-card hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Current GPA</p>
                  <p className="text-3xl font-bold text-foreground">3.50</p>
                </div>
                <div className="w-12 h-12 bg-fpt-orange/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-fpt-orange" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Upcoming Classes</p>
                  <p className="text-3xl font-bold text-foreground">3</p>
                </div>
                <div className="w-12 h-12 bg-fpt-blue/10 rounded-lg flex items-center justify-center">
                  <Book className="text-fpt-blue" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Tuition Due</p>
                  <p className="text-3xl font-bold text-foreground">$2,450</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <AlertCircle className="text-yellow-600" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Unread Notifications</p>
                  <p className="text-3xl font-bold text-foreground">5</p>
                </div>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Clock className="text-red-600" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <Card className="shadow-card lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg">GPA Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={gpaData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E8E8E8" />
                  <XAxis dataKey="month" stroke="#999999" />
                  <YAxis stroke="#999999" domain={[2.8, 3.6]} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#fff", border: "1px solid #E8E8E8" }}
                    formatter={(value) => value.toFixed(2)}
                  />
                  <Line
                    type="monotone"
                    dataKey="gpa"
                    stroke="#F37021"
                    strokeWidth={3}
                    dot={{ fill: "#F37021", r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg">Attendance</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={attendanceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {attendanceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Classes & Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg">Today's Classes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingClasses.map((cls, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-light-gray rounded-lg border border-border hover:border-fpt-orange/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold text-fpt-orange">{cls.code}</span>
                      <span className="text-xs text-muted-foreground">{cls.time}</span>
                    </div>
                    <p className="text-sm text-foreground font-medium">{cls.name}</p>
                    <p className="text-xs text-muted-foreground">Room: {cls.room}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentActivities.map((activity, idx) => (
                  <div key={idx} className="p-3 border-l-4 border-fpt-orange/30 bg-light-gray rounded-r-lg">
                    <div className="flex justify-between items-start mb-1">
                      <p className="text-sm font-semibold text-foreground">{activity.title}</p>
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {activity.type === "grade" && `${activity.course} - ${activity.score}`}
                      {activity.type === "form" && activity.form}
                      {activity.type === "notification" && activity.event}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  )
}
