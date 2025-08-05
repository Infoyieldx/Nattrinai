import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Search, UserPlus, Users, Mail, Phone, MapPin } from "lucide-react";

const customers = [
  {
    id: "CUST001",
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    phone: "+1 (555) 123-4567",
    address: "123 Oak St, Downtown, NY 10001",
    totalOrders: 28,
    totalSpent: "$1,245.67",
    lastOrder: "2 hours ago",
    status: "active",
    joinDate: "2023-03-15"
  },
  {
    id: "CUST002",
    name: "Mike Chen",
    email: "mike.chen@email.com",
    phone: "+1 (555) 234-5678",
    address: "456 Pine Ave, Uptown, NY 10002",
    totalOrders: 45,
    totalSpent: "$2,890.23",
    lastOrder: "4 hours ago",
    status: "active",
    joinDate: "2023-01-10"
  },
  {
    id: "CUST003",
    name: "Emma Davis",
    email: "emma.d@email.com",
    phone: "+1 (555) 345-6789",
    address: "789 Elm Rd, Midtown, NY 10003",
    totalOrders: 12,
    totalSpent: "$567.89",
    lastOrder: "6 hours ago",
    status: "active",
    joinDate: "2023-08-22"
  },
  {
    id: "CUST004",
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+1 (555) 456-7890",
    address: "321 Maple Dr, Suburb, NY 10004",
    totalOrders: 67,
    totalSpent: "$4,123.45",
    lastOrder: "8 hours ago",
    status: "vip",
    joinDate: "2022-11-05"
  },
  {
    id: "CUST005",
    name: "Lisa Wilson",
    email: "lisa.w@email.com",
    phone: "+1 (555) 567-8901",
    address: "654 Birch Ln, Eastside, NY 10005",
    totalOrders: 3,
    totalSpent: "$178.45",
    lastOrder: "1 day ago",
    status: "new",
    joinDate: "2024-01-10"
  },
  {
    id: "CUST006",
    name: "David Brown",
    email: "david.b@email.com",
    phone: "+1 (555) 678-9012",
    address: "987 Cedar St, Westside, NY 10006",
    totalOrders: 89,
    totalSpent: "$6,789.12",
    lastOrder: "2 weeks ago",
    status: "inactive",
    joinDate: "2022-05-18"
  }
];

const getStatusColor = (status) => {
  switch (status) {
    case "active":
      return "bg-green-100 text-green-800 border-green-200";
    case "vip":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "new":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "inactive":
      return "bg-gray-100 text-gray-600 border-gray-200";
    default:
      return "bg-gray-100 text-gray-600 border-gray-200";
  }
};

const Customers = () => {
  const totalCustomers = customers.length;
  const activeCustomers = customers.filter(c => c.status === "active" || c.status === "vip").length;
  const newCustomers = customers.filter(c => c.status === "new").length;
  const vipCustomers = customers.filter(c => c.status === "vip").length;

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">Customers</h2>
          <p className="text-muted-foreground">
            Manage customer relationships and track purchase history.
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <UserPlus className="h-4 w-4 mr-2" />
          Add Customer
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Customers
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{totalCustomers}</div>
            <p className="text-xs text-muted-foreground">Registered users</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active Customers
            </CardTitle>
            <Users className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{activeCustomers}</div>
            <p className="text-xs text-muted-foreground">Recently active</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              New Customers
            </CardTitle>
            <Users className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{newCustomers}</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              VIP Customers
            </CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{vipCustomers}</div>
            <p className="text-xs text-muted-foreground">Premium members</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Customer Directory</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search customers..." className="pl-8" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead>Total Spent</TableHead>
                <TableHead>Last Order</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Member Since</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="font-medium text-foreground">{customer.name}</div>
                      <div className="text-sm text-muted-foreground">{customer.id}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1 text-sm">
                        <Mail className="h-3 w-3" />
                        <span className="text-muted-foreground">{customer.email}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Phone className="h-3 w-3" />
                        <span className="text-muted-foreground">{customer.phone}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <MapPin className="h-3 w-3" />
                        <span className="text-muted-foreground">{customer.address}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{customer.totalOrders}</TableCell>
                  <TableCell className="font-medium">{customer.totalSpent}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">{customer.lastOrder}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(customer.status)}>
                      {customer.status.toUpperCase()}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">{customer.joinDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Customers;
