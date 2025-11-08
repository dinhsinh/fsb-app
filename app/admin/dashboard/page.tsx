"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, GraduationCap, BookOpen, FileText } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-[#FF7A00]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#0B3553]">2,847</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Lecturers</CardTitle>
            <GraduationCap className="h-4 w-4 text-[#FF7A00]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#0B3553]">156</div>
            <p className="text-xs text-muted-foreground">+3 new this month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Classes</CardTitle>
            <BookOpen className="h-4 w-4 text-[#FF7A00]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#0B3553]">89</div>
            <p className="text-xs text-muted-foreground">Current semester</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending E-Forms</CardTitle>
            <FileText className="h-4 w-4 text-[#FF7A00]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#0B3553]">23</div>
            <p className="text-xs text-muted-foreground">Awaiting approval</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>GPA Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
              <span className="text-muted-foreground">GPA Chart Placeholder</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Attendance Rate Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
              <span className="text-muted-foreground">Attendance Chart Placeholder</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent E-Forms Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent E-form Submissions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Student</th>
                  <th className="text-left p-2">Form Type</th>
                  <th className="text-left p-2">Date</th>
                  <th className="text-left p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2">Nguyen Van A</td>
                  <td className="p-2">Leave Request</td>
                  <td className="p-2">2024-01-15</td>
                  <td className="p-2"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Pending</span></td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Tran Thi B</td>
                  <td className="p-2">Grade Appeal</td>
                  <td className="p-2">2024-01-14</td>
                  <td className="p-2"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Approved</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}