
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
import {
  Search,
  Eye,
  Download,
  ShoppingCart,
  Clock,
  CheckCircle,
  XCircle
} from "lucide-react";

const orders = [
  {
    id: "#3201",
    customer: "Sarah Johnson",
    email: "sarah.j@email.com",
    items: 3,
    total: "$89.99",
    status: "completed",
    date: "2024-01-15",
    time: "2 hours ago",
    address: "123 Oak St, Downtown"
  },
  {
    id: "#3200",
    customer: "Mike Chen",
    email: "mike.chen@email.com",
    items: 7,
    total: "$234.50",
    status: "processing",
    date: "2024-01-15",
    time: "4 hours ago",
    address: "456 Pine Ave, Uptown"
  },
  {
    id: "#3199",
    customer: "Emma Davis",
    email: "emma.d@email.com",
    items: 2,
    total: "$45.25",
    status: "completed",
    date: "2024-01-15",
    time: "6 hours ago",
    address: "789 Elm Rd, Midtown"
  },
  {
    id: "#3198",
    customer: "John Smith",
    email: "john.smith@email.com",
    items: 5,
    total: "$156.78",
    status: "pending",
    date: "2024-01-14",
    time: "8 hours ago",
    address: "321 Maple Dr, Suburb"
  },
  {
    id: "#3197",
    customer: "Lisa Wilson",
    email: "lisa.w@email.com",
    items: 4,
    total: "$112.30",
    status: "shipped",
    date: "2024-01-14",
    time: "1 day ago",
    address: "654 Birch Ln, Eastside"
  },
  {
    id: "#3196",
    customer: "David Brown",
    email: "david.b@email.com",
    items: 8,
    total: "$298.75",
    status: "cancelled",
    date: "2024-01-14",
    time: "1 day ago",
    address: "987 Cedar St, Westside"
  }
];

const getStatusColor = (status) => {
  switch (status) {
    case "completed":
      return "bg-success/10 text-success border-success/20";
    case "processing":
      return "bg-info/10 text-info border-info/20";
    case "shipped":
      return "bg-primary/10 text-primary border-primary/20";
    case "pending":
      return "bg-warning/10 text-warning border-warning/20";
    case "cancelled":
      return "bg-destructive/10 text-destructive border-destructive/20";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

const Orders = () => {
  const totalOrders = orders.length;
  const completedOrders = orders.filter((o) => o.status === "completed").length;
  const processingOrders = orders.filter((o) => o.status === "processing").length;
  const pendingOrders = orders.filter((o) => o.status === "pending").length;

  return (
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Orders</h2>
            <p className="text-muted-foreground">
              Track and manage customer orders from your grocery store.
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Download className="h-4 w-4 mr-2" />
            Export Orders
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Orders
              </CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{totalOrders}</div>
              <p className="text-xs text-muted-foreground">All time orders</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Completed
              </CardTitle>
              <CheckCircle className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">{completedOrders}</div>
              <p className="text-xs text-muted-foreground">Successfully delivered</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Processing
              </CardTitle>
              <Clock className="h-4 w-4 text-info" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-info">{processingOrders}</div>
              <p className="text-xs text-muted-foreground">Currently processing</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Pending
              </CardTitle>
              <XCircle className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">{pendingOrders}</div>
              <p className="text-xs text-muted-foreground">Awaiting action</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Recent Orders</CardTitle>
              <div className="relative w-64">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search orders..." className="pl-8" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>
                      <div className="font-medium text-foreground">{order.id}</div>
                      <div className="text-sm text-muted-foreground">{order.time}</div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium text-foreground">{order.customer}</div>
                      <div className="text-sm text-muted-foreground">{order.email}</div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {order.items} items
                    </TableCell>
                    <TableCell className="font-medium">{order.total}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{order.date}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

  );
};

export default Orders;
