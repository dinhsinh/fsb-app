"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function ClassesPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
      {/* Left Side - Class List */}
      <div className="lg:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle>Classes</CardTitle>
            <div className="space-y-2">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Semester" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fall2024">Fall 2024</SelectItem>
                  <SelectItem value="spring2024">Spring 2024</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Program" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cs">Computer Science</SelectItem>
                  <SelectItem value="ba">Business Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">
                <div className="font-medium">PRN211</div>
                <div className="text-sm text-gray-600">Room: A101 | Dr. Smith</div>
              </div>
              <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">
                <div className="font-medium">SWE201</div>
                <div className="text-sm text-gray-600">Room: B202 | Prof. Johnson</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right Side - Calendar */}
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Weekly Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2 mb-4">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                <div key={day} className="text-center font-medium p-2 bg-[#0B3553] text-white rounded">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2 h-96">
              {Array.from({length: 7}).map((_, i) => (
                <div key={i} className="border rounded p-2 min-h-full">
                  {i === 0 && (
                    <div className="bg-[#FF7A00] text-white p-2 rounded text-xs mb-2">
                      <div>PRN211</div>
                      <div>A101</div>
                      <div>9:00-11:00</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}