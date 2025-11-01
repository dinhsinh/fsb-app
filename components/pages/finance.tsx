"use client"

import { useState } from "react"
import AppShell from "@/components/layout/app-shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"
import { CreditCard } from "lucide-react"

const financeData = [
  { name: "Paid", value: 12450, fill: "#8DC63F" },
  { name: "Due", value: 2450, fill: "#FFB81C" },
  { name: "Remaining", value: 3100, fill: "#E8E8E8" },
]

const paymentPlan = [
  { semester: "Fall 2024", amount: 5000, status: "Paid", date: "2024-09-15" },
  { semester: "Spring 2025", amount: 6000, status: "Due", date: "2025-01-15" },
  { semester: "Summer 2025", amount: 6000, status: "Due", date: "2025-05-15" },
]

const paymentHistory = [
  { date: "2024-09-15", amount: 5000, method: "Bank Transfer", status: "Completed" },
  { date: "2024-08-20", amount: 4000, method: "Credit Card", status: "Completed" },
  { date: "2024-07-10", amount: 3450, method: "Bank Transfer", status: "Completed" },
]

export default function Finance() {
  const [showPaymentModal, setShowPaymentModal] = useState(false)

  return (
    <AppShell>
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-1">Financial Information</h1>
          <p className="text-muted-foreground text-sm">Manage tuition payments and view transaction history</p>
        </div>

        {/* Finance Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-2">Total Tuition</p>
              <p className="text-2xl font-bold text-foreground">$18,000</p>
            </CardContent>
          </Card>
          <Card className="shadow-card border-l-4 border-green-500">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-2">Paid</p>
              <p className="text-2xl font-bold text-green-600">$12,450</p>
            </CardContent>
          </Card>
          <Card className="shadow-card border-l-4 border-yellow-500">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-2">Due</p>
              <p className="text-2xl font-bold text-yellow-600">$2,450</p>
            </CardContent>
          </Card>
          <Card className="shadow-card border-l-4 border-gray-400">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-2">Remaining</p>
              <p className="text-2xl font-bold text-gray-600">$3,100</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg">Payment Status</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={financeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {financeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `$${value}`} />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="shadow-card lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg">Payment Schedule</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {paymentPlan.map((plan, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-light-gray rounded-lg flex items-center justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    <p className="font-medium text-foreground">{plan.semester}</p>
                    <p className="text-xs text-muted-foreground">Due: {plan.date}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-foreground">${plan.amount}</span>
                    {plan.status === "Paid" ? (
                      <span className="badge-success">Paid</span>
                    ) : (
                      <span className="badge-warning">Due</span>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Payment Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="shadow-card border-l-4 border-fpt-orange lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg">Transaction History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {paymentHistory.map((trans, idx) => (
                  <div key={idx} className="p-3 flex items-center justify-between border-b border-border last:border-0">
                    <div>
                      <p className="font-medium text-foreground">{trans.method}</p>
                      <p className="text-xs text-muted-foreground">{trans.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-green-600">${trans.amount}</p>
                      <p className="text-xs text-muted-foreground">{trans.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card bg-gradient-to-br from-fpt-orange/10 to-fpt-blue/10 border-l-4 border-fpt-orange">
            <CardHeader>
              <CardTitle className="text-lg">Make Payment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Amount Due</p>
                <p className="text-3xl font-bold text-fpt-orange">$2,450</p>
              </div>
              <Button
                onClick={() => setShowPaymentModal(true)}
                className="w-full bg-fpt-orange hover:bg-orange-600 text-white gap-2"
              >
                <CreditCard size={18} />
                Pay Now
              </Button>
              <Button variant="outline" className="w-full bg-transparent">
                Set Up Auto-Pay
              </Button>
              <p className="text-xs text-muted-foreground text-center">Due by Jan 15, 2025</p>
            </CardContent>
          </Card>
        </div>

        {/* Payment Modal */}
        {showPaymentModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-md shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Make Payment</CardTitle>
                <button onClick={() => setShowPaymentModal(false)} className="text-2xl">
                  &times;
                </button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Select Semester</label>
                  <select className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-fpt-orange focus:border-0 bg-white">
                    <option>Spring 2025 - $2,450</option>
                    <option>Summer 2025 - $6,000</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Amount</label>
                  <input
                    type="number"
                    value="2450"
                    className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-fpt-orange"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Payment Method</label>
                  <select className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-fpt-orange focus:border-0 bg-white">
                    <option>Credit Card</option>
                    <option>Bank Transfer</option>
                    <option>E-Wallet</option>
                  </select>
                </div>
                <div className="bg-light-gray p-3 rounded-lg">
                  <p className="text-xs text-muted-foreground mb-1">Total Amount</p>
                  <p className="text-2xl font-bold text-fpt-orange">$2,450.00</p>
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1 bg-transparent"
                    onClick={() => setShowPaymentModal(false)}
                  >
                    Cancel
                  </Button>
                  <Button className="flex-1 bg-fpt-orange hover:bg-orange-600 text-white">Continue</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </AppShell>
  )
}
