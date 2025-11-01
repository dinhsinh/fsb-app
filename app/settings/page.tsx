"use client"

import AppShell from "@/components/layout/app-shell"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bell, Lock, Eye, Database } from "lucide-react"

export default function Settings() {
  return (
    <AppShell>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-1">Settings</h1>
          <p className="text-muted-foreground text-sm">Manage your account preferences</p>
        </div>

        <div className="space-y-4">
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <div className="flex items-center gap-3">
                <Bell className="text-fpt-orange" size={24} />
                <div>
                  <CardTitle className="text-lg">Notifications</CardTitle>
                  <p className="text-sm text-muted-foreground">Email and push notifications</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Edit
              </Button>
            </CardHeader>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <div className="flex items-center gap-3">
                <Lock className="text-fpt-blue" size={24} />
                <div>
                  <CardTitle className="text-lg">Security</CardTitle>
                  <p className="text-sm text-muted-foreground">Password and login security</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Edit
              </Button>
            </CardHeader>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <div className="flex items-center gap-3">
                <Eye className="text-green-600" size={24} />
                <div>
                  <CardTitle className="text-lg">Privacy</CardTitle>
                  <p className="text-sm text-muted-foreground">Data sharing and visibility</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Edit
              </Button>
            </CardHeader>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <div className="flex items-center gap-3">
                <Database className="text-orange-600" size={24} />
                <div>
                  <CardTitle className="text-lg">Data Export</CardTitle>
                  <p className="text-sm text-muted-foreground">Download your academic records</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Download
              </Button>
            </CardHeader>
          </Card>
        </div>
      </div>
    </AppShell>
  )
}
