"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, Edit, History, Check, X } from "lucide-react"

export default function MarksPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#0B3553]">Marks Management</h1>
        <Button><Upload size={16} /> Import Scores</Button>
      </div>

      {/* GPA Summary */}
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#0B3553]">3.45</div>
              <div className="text-sm text-gray-600">Average GPA</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">85%</div>
              <div className="text-sm text-gray-600">Pass Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#FF7A00]">12</div>
              <div className="text-sm text-gray-600">Pending Grades</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">5</div>
              <div className="text-sm text-gray-600">Regrade Requests</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="scores">
        <TabsList>
          <TabsTrigger value="scores">Scores</TabsTrigger>
          <TabsTrigger value="requests">Regrade Requests</TabsTrigger>
        </TabsList>

        <TabsContent value="scores">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left p-4">Student</th>
                      <th className="text-left p-4">Subject</th>
                      <th className="text-left p-4">Class</th>
                      <th className="text-left p-4">Midterm</th>
                      <th className="text-left p-4">Final</th>
                      <th className="text-left p-4">Assignment</th>
                      <th className="text-left p-4">Total</th>
                      <th className="text-left p-4">Status</th>
                      <th className="text-left p-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-4">Nguyen Van A</td>
                      <td className="p-4">PRN211</td>
                      <td className="p-4">SE1801</td>
                      <td className="p-4">8.5</td>
                      <td className="p-4">9.0</td>
                      <td className="p-4">8.0</td>
                      <td className="p-4 font-bold">8.5</td>
                      <td className="p-4">
                        <Badge className="bg-green-100 text-green-800">Pass</Badge>
                      </td>
                      <td className="p-4">
                        <Button variant="ghost" size="sm"><Edit size={16} /></Button>
                        <Button variant="ghost" size="sm"><History size={16} /></Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="requests">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left p-4">Student</th>
                      <th className="text-left p-4">Subject</th>
                      <th className="text-left p-4">Reason</th>
                      <th className="text-left p-4">Submitted</th>
                      <th className="text-left p-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-4">Tran Thi B</td>
                      <td className="p-4">SWE201</td>
                      <td className="p-4">Calculation Error</td>
                      <td className="p-4">2024-01-15</td>
                      <td className="p-4">
                        <Button variant="ghost" size="sm" className="text-green-600">
                          <Check size={16} /> Approve
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600">
                          <X size={16} /> Reject
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}