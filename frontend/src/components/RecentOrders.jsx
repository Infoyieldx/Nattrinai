import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const orders = [
  {
    id: "#3201",
    customer: "Sarah Johnson",
    items: "3 items",
    total: "$89.99",
    status: "completed",
    time: "2 hours ago"
  },
  {
    id: "#3200",
    customer: "Mike Chen",
    items: "7 items",
    total: "$234.50",
    status: "processing",
    time: "4 hours ago"
  },
  {
    id: "#3199",
    customer: "Emma Davis",
    items: "2 items",
    total: "$45.25",
    status: "completed",
    time: "6 hours ago"
  },
  {
    id: "#3198",
    customer: "John Smith",
    items: "5 items",
    total: "$156.78",
    status: "pending",
    time: "8 hours ago"
  },
  {
    id: "#3197",
    customer: "Lisa Wilson",
    items: "4 items",
    total: "$112.30",
    status: "completed",
    time: "1 day ago"
  }
];

const getStatusColor = (status) => {
  switch (status) {
    case "completed":
      return "bg-success/10 text-success border-success/20";
    case "processing":
      return "bg-warning/10 text-warning border-warning/20";
    case "pending":
      return "bg-muted text-muted-foreground border-border";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

export default function RecentOrders() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-foreground">Recent Orders</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="flex items-center justify-between p-3 border border-border rounded-lg bg-card"
          >
            <div className="flex items-center gap-3">
              <div>
                <p className="font-medium text-foreground">{order.id}</p>
                <p className="text-sm text-muted-foreground">{order.customer}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="font-medium text-foreground">{order.total}</p>
                <p className="text-sm text-muted-foreground">{order.items}</p>
              </div>
              <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
