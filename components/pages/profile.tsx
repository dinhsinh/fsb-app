"use client"

import { useState } from "react"
import AppShell from "@/components/layout/app-shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, MapPin, Edit2, Save } from "lucide-react"

const studentInfo = {
  name: "Jordan Anderson",
  studentId: "SE162345",
  email: "jordan.anderson@fpt.edu.vn",
  phone: "+84 912 345 678",
  program: "Software Engineering",
  campus: "Ho Chi Minh City",
  classRoom: "SE161A1",
  advisor: "Dr. John Smith",
  enrollmentDate: "September 1, 2023",
}

const classmates = [
  { name: "Alex Johnson", email: "alex.j@fpt.edu.vn", phone: "+84 901 234 567" },
  { name: "Maria Garcia", email: "maria.g@fpt.edu.vn", phone: "+84 902 345 678" },
  { name: "James Wilson", email: "james.w@fpt.edu.vn", phone: "+84 903 456 789" },
  { name: "Sarah Lee", email: "sarah.l@fpt.edu.vn", phone: "+84 904 567 890" },
]

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false)
  const [activeTab, setActiveTab] = useState("personal")

  return (
    <AppShell>
      <div className="max-w-5xl mx-auto">
        {/* Header with Student Avatar */}
        <Card className="shadow-card mb-6 bg-gradient-to-r from-fpt-orange/10 to-fpt-blue/10">
          <CardContent className="p-6 flex items-start justify-between">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-gradient-to-br from-fpt-orange to-fpt-blue rounded-lg flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                JA
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground mb-1">{studentInfo.name}</h1>
                <p className="text-muted-foreground mb-2">{studentInfo.program}</p>
                <div className="flex flex-wrap gap-3 text-sm text-foreground">
                  <span className="flex items-center gap-1">
                    <Mail size={16} className="text-muted-foreground" /> {studentInfo.email}
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone size={16} className="text-muted-foreground" /> {studentInfo.phone}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={16} className="text-muted-foreground" /> {studentInfo.campus}
                  </span>
                </div>
              </div>
            </div>
            <Button
              variant={isEditing ? "default" : "outline"}
              onClick={() => setIsEditing(!isEditing)}
              className="gap-2"
            >
              {isEditing ? (
                <>
                  <Save size={16} /> Save
                </>
              ) : (
                <>
                  <Edit2 size={16} /> Edit
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="classmates">Classmates</TabsTrigger>
            <TabsTrigger value="statistics">Statistics</TabsTrigger>
          </TabsList>

          <TabsContent value="personal" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg">Basic Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { label: "Full Name", value: studentInfo.name },
                    { label: "Student ID", value: studentInfo.studentId },
                    { label: "Email", value: studentInfo.email },
                    { label: "Phone", value: studentInfo.phone },
                  ].map((field, idx) => (
                    <div key={idx}>
                      <label className="text-sm text-muted-foreground block mb-1">{field.label}</label>
                      <input
                        type="text"
                        value={field.value}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-border rounded-lg bg-light-gray text-foreground disabled:cursor-not-allowed"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg">Academic Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { label: "Program", value: studentInfo.program },
                    { label: "Class", value: studentInfo.classRoom },
                    { label: "Campus", value: studentInfo.campus },
                    { label: "Academic Advisor", value: studentInfo.advisor },
                  ].map((field, idx) => (
                    <div key={idx}>
                      <label className="text-sm text-muted-foreground block mb-1">{field.label}</label>
                      <input
                        type="text"
                        value={field.value}
                        disabled={true}
                        className="w-full px-3 py-2 border border-border rounded-lg bg-light-gray text-foreground disabled:cursor-not-allowed"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="classmates">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Class Members ({classmates.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {classmates.map((mate, idx) => (
                    <div
                      key={idx}
                      className="p-4 border border-border rounded-lg hover:border-fpt-orange hover:shadow-md transition-all flex items-center justify-between"
                    >
                      <div>
                        <p className="font-medium text-foreground">{mate.name}</p>
                        <p className="text-xs text-muted-foreground">{mate.email}</p>
                      </div>
                      <Button size="sm" variant="outline">
                        {mate.phone}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="statistics">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Class Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-foreground">Male</span>
                        <span className="text-sm font-medium">65%</span>
                      </div>
                      <div className="h-2 bg-light-gray rounded-full overflow-hidden">
                        <div className="h-full bg-fpt-blue" style={{ width: "65%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-foreground">Female</span>
                        <span className="text-sm font-medium">35%</span>
                      </div>
                      <div className="h-2 bg-light-gray rounded-full overflow-hidden">
                        <div className="h-full bg-fpt-orange" style={{ width: "35%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Academic Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-foreground">Completed Courses</span>
                      <span className="text-sm font-medium">16/48</span>
                    </div>
                    <div className="h-2 bg-light-gray rounded-full overflow-hidden">
                      <div className="h-full bg-green-500" style={{ width: "33%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-foreground">Credits Earned</span>
                      <span className="text-sm font-medium">48/120</span>
                    </div>
                    <div className="h-2 bg-light-gray rounded-full overflow-hidden">
                      <div className="h-full bg-fpt-orange" style={{ width: "40%" }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppShell>
  )
}
