"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, ChevronDown, DollarSign, Tablet, Globe, Building2, Search, Filter, Columns, Upload, ArrowRight, MoreHorizontal, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Mock data for customers
const customers = [
  { id: "10001", accountHolder: "Alex Johnson", totalAccounts: 2, numberOfNetworks: 2 },
  { id: "10002", accountHolder: "Maria Smith", totalAccounts: 3, numberOfNetworks: 3 },
  { id: "10003", accountHolder: "David Brown", totalAccounts: 4, numberOfNetworks: 4 },
  { id: "10004", accountHolder: "Sophia Davis", totalAccounts: 5, numberOfNetworks: 5 },
]

export default function WorkspaceDetailPage({ params }: { params: { id: string } }) {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set())

  const toggleRow = (id: string) => {
    const newSelected = new Set(selectedRows)
    if (newSelected.has(id)) {
      newSelected.delete(id)
    } else {
      newSelected.add(id)
    }
    setSelectedRows(newSelected)
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Breadcrumbs */}
      <div className="border-b bg-white">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/workspaces" className="hover:text-gray-900">
              Workspace
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900">Workspace Name</span>
          </div>
        </div>
      </div>

      {/* Header Actions */}
      <div className="border-b bg-white">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-end gap-3">
            {/* Date Range */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="h-9 border-gray-300 text-gray-700 hover:bg-gray-50">
                  <Calendar className="mr-2 h-4 w-4" />
                  01/01/25 - 12/31/25
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Last 7 days</DropdownMenuItem>
                <DropdownMenuItem>Last 30 days</DropdownMenuItem>
                <DropdownMenuItem>Last 90 days</DropdownMenuItem>
                <DropdownMenuItem>Custom range</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Investigation Tools */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="h-9 border-gray-300 text-gray-700 hover:bg-gray-50">
                  Investigation Tools
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Export Report</DropdownMenuItem>
                <DropdownMenuItem>Generate Alert</DropdownMenuItem>
                <DropdownMenuItem>Create Investigation</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Overflow Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="h-9 w-9 border-gray-300 text-gray-700 hover:bg-gray-50">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Preferences</DropdownMenuItem>
                <DropdownMenuItem>Help</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-gray-900">Workspace Title</h1>
          <p className="text-gray-500 text-sm">
            Multiple customers using same Device ID and sharing Static IP Addresses.
          </p>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                    <DollarSign className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Total Amount</p>
                    <p className="text-2xl font-bold text-gray-900">$850,000</p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                    <Tablet className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Shared Devices</p>
                    <p className="text-2xl font-bold text-gray-900">10</p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                    <Globe className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Shared IP Addresses</p>
                    <p className="text-2xl font-bold text-gray-900">10</p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                    <Building2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Shared Counterparties</p>
                    <p className="text-2xl font-bold text-gray-900">20</p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Table Section */}
        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardContent className="p-0">
            {/* Search and Actions Bar */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search"
                  className="pl-9 h-9 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-9 border-gray-300 text-gray-700 hover:bg-gray-50">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
                <Button variant="outline" size="sm" className="h-9 border-gray-300 text-gray-700 hover:bg-gray-50">
                  <Columns className="mr-2 h-4 w-4" />
                  Columns
                </Button>
                <Button variant="outline" size="sm" className="h-9 border-gray-300 text-gray-700 hover:bg-gray-50">
                  <Upload className="mr-2 h-4 w-4" />
                  Export data
                </Button>
                <Button size="sm" className="h-9 bg-[#004b87] hover:bg-[#003d6b] text-white">
                  + Add customer
                </Button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50 hover:bg-gray-50 border-b border-gray-200">
                    <TableHead className="w-12">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedRows(new Set(customers.map((c) => c.id)))
                          } else {
                            setSelectedRows(new Set())
                          }
                        }}
                        checked={selectedRows.size === customers.length}
                      />
                    </TableHead>
                    <TableHead className="text-gray-700 font-semibold">Customer ID</TableHead>
                    <TableHead className="text-gray-700 font-semibold">Account Holder</TableHead>
                    <TableHead className="text-gray-700 font-semibold">Total Accounts</TableHead>
                    <TableHead className="text-gray-700 font-semibold">Number of Networks</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {customers.map((customer) => (
                    <TableRow 
                      key={customer.id}
                      className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                      <TableCell>
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          checked={selectedRows.has(customer.id)}
                          onChange={() => toggleRow(customer.id)}
                        />
                      </TableCell>
                      <TableCell className="font-medium text-gray-900">{customer.id}</TableCell>
                      <TableCell className="text-gray-700">{customer.accountHolder}</TableCell>
                      <TableCell className="text-gray-700">{customer.totalAccounts}</TableCell>
                      <TableCell className="text-gray-700">{customer.numberOfNetworks}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between p-6 border-t border-gray-200">
              <div className="text-sm text-gray-500">
                Page 1 of 1
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-9 border-gray-300 text-gray-700 hover:bg-gray-50" disabled>
                  Prev
                </Button>
                <Button variant="outline" size="sm" className="h-9 bg-[#004b87] text-white hover:bg-[#003d6b] border-[#004b87]">
                  1
                </Button>
                <Button variant="outline" size="sm" className="h-9 border-gray-300 text-gray-700 hover:bg-gray-50" disabled>
                  Next
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

