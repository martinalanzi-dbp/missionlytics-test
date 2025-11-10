"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, ChevronDown, DollarSign, Tablet, Globe, Building2, Search, Filter, Columns, Upload, ArrowRight } from "lucide-react"
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
  { id: "10004", accountHolder: "Sarah Williams", totalAccounts: 5, numberOfNetworks: 5 },
  { id: "10005", accountHolder: "James Wilson", totalAccounts: 6, numberOfNetworks: 6 },
  { id: "10006", accountHolder: "Emily Davis", totalAccounts: 7, numberOfNetworks: 7 },
  { id: "10007", accountHolder: "Michael Miller", totalAccounts: 8, numberOfNetworks: 8 },
  { id: "10008", accountHolder: "Jessica Garcia", totalAccounts: 9, numberOfNetworks: 9 },
  { id: "10009", accountHolder: "Christopher Martinez", totalAccounts: 10, numberOfNetworks: 10 },
  { id: "10010", accountHolder: "Amanda Anderson", totalAccounts: 11, numberOfNetworks: 11 },
  { id: "10011", accountHolder: "Daniel Taylor", totalAccounts: 12, numberOfNetworks: 12 },
  { id: "10012", accountHolder: "Laura Thomas", totalAccounts: 13, numberOfNetworks: 13 },
  { id: "10013", accountHolder: "Matthew Jackson", totalAccounts: 14, numberOfNetworks: 14 },
  { id: "10014", accountHolder: "Ashley White", totalAccounts: 15, numberOfNetworks: 15 },
  { id: "10015", accountHolder: "Andrew Harris", totalAccounts: 16, numberOfNetworks: 16 },
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
    <div className="min-h-screen bg-gray-50/50">
      {/* Breadcrumbs */}
      <div className="border-b bg-white">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/workspaces" className="hover:text-foreground">
              Workspace
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Workspace Name</span>
          </div>
        </div>
      </div>

      {/* Header Actions */}
      <div className="border-b bg-white">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-end gap-4">
            {/* Date Range */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="h-9">
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
                <Button variant="outline" className="h-9">
                  Investigation tools
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Export Report</DropdownMenuItem>
                <DropdownMenuItem>Generate Alert</DropdownMenuItem>
                <DropdownMenuItem>Create Investigation</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Title Section */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Workspace Title</h1>
          <p className="text-muted-foreground">
            Multiple customers using same Device ID and sharing Static IP Addresses.
          </p>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Total activity</span>
                  </div>
                  <p className="text-2xl font-bold">$850,000</p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Tablet className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Shared devices</span>
                  </div>
                  <p className="text-2xl font-bold">10</p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Shared IP addresses</span>
                  </div>
                  <p className="text-2xl font-bold">10</p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Shared counterparties</span>
                  </div>
                  <p className="text-2xl font-bold">20</p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Table Section */}
        <Card className="bg-white">
          <CardContent className="p-0">
            {/* Search and Actions Bar */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search"
                  className="pl-9 h-9"
                />
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-9">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
                <Button variant="outline" size="sm" className="h-9">
                  <Columns className="mr-2 h-4 w-4" />
                  Columns
                </Button>
                <Button variant="outline" size="sm" className="h-9">
                  <Upload className="mr-2 h-4 w-4" />
                  Export data
                </Button>
                <Button size="sm" className="h-9 bg-[#004b87] hover:bg-[#003d6b]">
                  + Add customer
                </Button>
              </div>
            </div>

            {/* Table */}
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
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
                  <TableHead>Customer ID</TableHead>
                  <TableHead>Account Holder</TableHead>
                  <TableHead>Total Accounts</TableHead>
                  <TableHead>Number of Networks</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell>
                      <input
                        type="checkbox"
                        className="rounded border-gray-300"
                        checked={selectedRows.has(customer.id)}
                        onChange={() => toggleRow(customer.id)}
                      />
                    </TableCell>
                    <TableCell className="font-medium">{customer.id}</TableCell>
                    <TableCell>{customer.accountHolder}</TableCell>
                    <TableCell>{customer.totalAccounts}</TableCell>
                    <TableCell>{customer.numberOfNetworks}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {/* Pagination */}
            <div className="flex items-center justify-between p-4 border-t">
              <div className="text-sm text-muted-foreground">
                Page 1 of 1
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-9" disabled>
                  Prev
                </Button>
                <Button variant="outline" size="sm" className="h-9 bg-[#004b87] text-white hover:bg-[#003d6b]">
                  1
                </Button>
                <Button variant="outline" size="sm" className="h-9" disabled>
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

