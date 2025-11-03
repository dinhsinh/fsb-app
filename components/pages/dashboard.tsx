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
import { TrendingUp, Book, AlertCircle, Clock, CheckCircle, FileText, Bell } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { colorClasses } from "@/lib/colors"

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
  const { t } = useLanguage();
  
  return (
    <AppShell>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">{t('welcomeBack')}, Jordan</h1>
          <p className="text-muted-foreground">{t('academicOverview')}</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Current GPA */}
          <Card className="shadow-card hover:shadow-md transition-shadow">
            <CardContent className="pt-4 pb-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">{t('currentGPA')}</p>
                  <p className="text-2xl font-bold text-orange-500 text-foreground mb-1">3.50</p>
                  <p className="text-xs text-green-500 font-medium">+0.12 from previous semester</p>
                </div>
                <div className="relative w-12 h-12">
                  <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                    <path className="text-gray-200" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path className="text-orange-500" strokeWidth="3" strokeDasharray="87.5, 100" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Classes */}
          <Card className="shadow-card hover:shadow-md transition-shadow">
            <CardContent className="pt-4 pb-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">{t('upcomingClasses')}</p>
                  <p className="text-2xl font-bold text-blue-600">PRN231</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Clock size={12} className="text-muted-foreground" />
                    <p className="text-xs text-muted-foreground">45 minutes left</p>
                  </div>
                </div>
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Book className="text-blue-500" size={20} />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tuition Due */}
          <Card className="shadow-card hover:shadow-md transition-shadow">
            <CardContent className="pt-4 pb-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">{t('tuitionFee')}</p>
                  <p className="text-2xl font-bold text-red-500">$2,450</p>
                  <p className="text-xs text-muted-foreground mt-1">Deadline: 15/11/2024</p>
                </div>
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                  <AlertCircle className="text-red-500" size={20} />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Unread Notifications */}
          <Card className="shadow-card hover:shadow-md transition-shadow">
            <CardContent className="pt-4 pb-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">{t('notifications')}</p>
                  <p className="text-2xl font-bold text-foreground text-green-500 ">8</p>
                  <p className="text-xs text-red-500 mt-1">4 {t('unread')}</p>
                </div>
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                  <Bell className="text-green-500" size={20} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mb-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-3 flex-wrap">
                <button className={colorClasses.btnPrimary}>Submit Assignment</button>
                <button className={colorClasses.btnSecondary}>Send Feedback</button>
                <button className={colorClasses.btnSuccess}>Register Seminar</button>
                <button className="px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors">View Schedule</button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <Card className="shadow-card lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg">{t('gpaTrend')}</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={gpaData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E8E8E8" />
                  <XAxis dataKey="month" stroke="#999999" />
                  <YAxis stroke="#999999" domain={[2.8, 3.6]} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#fff", border: "1px solid #E8E8E8" }}
                    formatter={(value) => Number(value).toFixed(2)}
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
              <CardTitle className="text-lg">{t('attendance')}</CardTitle>
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
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Today's Schedule</CardTitle>
                <button className="text-xs text-orange-500 hover:text-orange-600 font-medium">View all</button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingClasses.map((cls, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-orange-200 transition-colors cursor-pointer relative"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold text-blue-500">{cls.code}</span>
                      <div className="flex items-center gap-2">
                        <span className={`badge-${idx === 0 ? 'success' : 'info'}`}>
                          {idx === 0 ? 'Offline' : 'Online'}
                        </span>
                        <span className="text-xs text-muted-foreground">{cls.time}</span>
                      </div>
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
              <CardTitle className="text-lg">Recent Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentActivities.map((activity, idx) => {
                  const getIcon = () => {
                    switch (activity.type) {
                      case 'grade':
                        return <CheckCircle className="text-green-500" size={20} />;
                      case 'form':
                        return <FileText className="text-blue-500" size={20} />;
                      case 'notification':
                        return <Bell className="text-orange-500" size={20} />;
                      default:
                        return <Bell className="text-gray-500" size={20} />;
                    }
                  };
                  
                  return (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                        {getIcon()}
                      </div>
                      <div className="flex-1 min-w-0">
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
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  )
}
