"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Download, Sync, Eye } from "lucide-react"

export default function AttendancePage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#0B3553]">Attendance Management</h1>
        <div className="flex gap-2">
          <Button variant="outline"><Download size={16} /> Export CSV</Button>
          <Button><Sync size={16} /> Sync LMS</Button>
        </div>
      </div>

      {/* Attendance Rate Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Attendance Rate Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-32 bg-gradient-to-r from-green-100 to-green-200 rounded flex items-center justify-center">
            <span className="text-green-800 font-semibold">92% Average Attendance Rate</span>
          </div>
        </CardContent>
      </Card>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input type="date" placeholder="From Date" />
            <Input type="date" placeholder="To Date" />
            <select className="border rounded px-3 py-2">
              <option>All Classes</option>
              <option>SE1801</option>
              <option>SE1802</option>
            </select>
            <select className="border rounded px-3 py-2">
              <option>All Subjects</option>
              <option>PRN211</option>
              <option>SWE201</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Attendance Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-4">Date</th>
                  <th className="text-left p-4">Slot</th>
                  <th className="text-left p-4">Room</th>
                  <th className="text-left p-4">Subject</th>
                  <th className="text-left p-4">Class</th>
                  <th className="text-left p-4">Lecturer</th>
                  <th className="text-left p-4">Present</th>
                  <th className="text-left p-4">Absent</th>
                  <th className="text-left p-4">Late</th>
                  <th className="text-left p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4">2024-01-15</td>
                  <td className="p-4">Slot 1</td>
                  <td className="p-4">A101</td>
                  <td className="p-4">PRN211</td>
                  <td className="p-4">SE1801</td>
                  <td className="p-4">Dr. Smith</td>
                  <td className="p-4 text-green-600 font-semibold">28</td>
                  <td className="p-4 text-red-600 font-semibold">2</td>
                  <td className="p-4 text-yellow-600 font-semibold">1</td>
                  <td className="p-4">
                    <Button variant="ghost" size="sm">
                      <Eye size={16} /> Details
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}