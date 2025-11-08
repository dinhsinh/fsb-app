"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, TrendingUp, TrendingDown } from "lucide-react"

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#0B3553]">Training Quality Reports</h1>
        <Button><Download size={16} /> Download PDF</Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Average GPA</p>
                <p className="text-2xl font-bold text-[#0B3553]">3.45</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
            <p className="text-xs text-green-600 mt-2">+0.12 from last semester</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Attendance Rate</p>
                <p className="text-2xl font-bold text-[#0B3553]">92%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
            <p className="text-xs text-green-600 mt-2">+3% from last semester</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pass Rate</p>
                <p className="text-2xl font-bold text-[#0B3553]">85%</p>
              </div>
              <TrendingDown className="h-8 w-8 text-red-500" />
            </div>
            <p className="text-xs text-red-600 mt-2">-2% from last semester</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Dropout Rate</p>
                <p className="text-2xl font-bold text-[#0B3553]">3.2%</p>
              </div>
              <TrendingDown className="h-8 w-8 text-green-500" />
            </div>
            <p className="text-xs text-green-600 mt-2">-0.8% from last semester</p>
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
            <div className="h-64 bg-gradient-to-r from-blue-50 to-blue-100 rounded flex items-center justify-center">
              <span className="text-blue-800">GPA Distribution Chart</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Pass/Fail Ratio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-r from-green-50 to-red-50 rounded flex items-center justify-center">
              <span className="text-gray-800">Pass/Fail Pie Chart</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Attendance Heatmap</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-r from-yellow-50 to-orange-100 rounded flex items-center justify-center">
              <span className="text-orange-800">Attendance Heatmap</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Student Status Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-r from-purple-50 to-purple-100 rounded flex items-center justify-center">
              <span className="text-purple-800">Dropout Trend Chart</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}