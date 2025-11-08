"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Grid, List, Check, X, MessageCircle, Eye } from "lucide-react"
import { useState } from "react"

export default function FormsPage() {
  const [viewMode, setViewMode] = useState<'table' | 'card'>('table')

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#0B3553]">E-Form Approval Center</h1>
        <div className="flex gap-2">
          <Button 
            variant={viewMode === 'table' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setViewMode('table')}
          >
            <List size={16} />
          </Button>
          <Button 
            variant={viewMode === 'card' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setViewMode('card')}
          >
            <Grid size={16} />
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select className="border rounded px-3 py-2">
              <option>All Status</option>
              <option>Pending</option>
              <option>Approved</option>
              <option>Rejected</option>
            </select>
            <select className="border rounded px-3 py-2">
              <option>All Form Types</option>
              <option>Leave Request</option>
              <option>Grade Appeal</option>
              <option>Transfer Request</option>
            </select>
            <div></div>
          </div>
        </CardContent>
      </Card>

      {/* Table View */}
      {viewMode === 'table' && (
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4">Student</th>
                    <th className="text-left p-4">Form Type</th>
                    <th className="text-left p-4">Submitted At</th>
                    <th className="text-left p-4">Status</th>
                    <th className="text-left p-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">Nguyen Van A</td>
                    <td className="p-4">Leave Request</td>
                    <td className="p-4">2024-01-15 10:30</td>
                    <td className="p-4">
                      <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
                    </td>
                    <td className="p-4">
                      <Button variant="ghost" size="sm"><Eye size={16} /></Button>
                      <Button variant="ghost" size="sm" className="text-green-600">
                        <Check size={16} />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600">
                        <X size={16} />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-blue-600">
                        <MessageCircle size={16} />
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">Tran Thi B</td>
                    <td className="p-4">Grade Appeal</td>
                    <td className="p-4">2024-01-14 14:20</td>
                    <td className="p-4">
                      <Badge className="bg-green-100 text-green-800">Approved</Badge>
                    </td>
                    <td className="p-4">
                      <Button variant="ghost" size="sm"><Eye size={16} /></Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Card View */}
      {viewMode === 'card' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">Nguyen Van A</CardTitle>
                  <p className="text-sm text-gray-600">Leave Request</p>
                </div>
                <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">Submitted: 2024-01-15 10:30</p>
              <div className="flex gap-2">
                <Button size="sm" className="text-green-600" variant="outline">
                  <Check size={14} /> Approve
                </Button>
                <Button size="sm" className="text-red-600" variant="outline">
                  <X size={14} /> Reject
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}