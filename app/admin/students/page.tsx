"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Download, Upload } from "lucide-react"

export default function StudentsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#0B3553]">Student Management</h1>
        <div className="flex gap-2">
          <Button variant="outline"><Download size={16} /> Export</Button>
          <Button><Upload size={16} /> Import</Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input placeholder="Search students..." className="pl-10" />
            </div>
            <select className="border rounded px-3 py-2">
              <option>All Campus</option>
              <option>Hanoi</option>
              <option>Ho Chi Minh</option>
            </select>
            <select className="border rounded px-3 py-2">
              <option>All Majors</option>
              <option>Computer Science</option>
              <option>Business</option>
            </select>
            <select className="border rounded px-3 py-2">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 sticky top-0">
                <tr>
                  <th className="text-left p-4">Student ID</th>
                  <th className="text-left p-4">Name</th>
                  <th className="text-left p-4">Class</th>
                  <th className="text-left p-4">Campus</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4">SE12345</td>
                  <td className="p-4">Nguyen Van A</td>
                  <td className="p-4">SE1801</td>
                  <td className="p-4">Hanoi</td>
                  <td className="p-4">
                    <Badge className="bg-green-100 text-green-800">Active</Badge>
                  </td>
                  <td className="p-4">
                    <Button variant="ghost" size="sm">View</Button>
                    <Button variant="ghost" size="sm">Edit</Button>
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