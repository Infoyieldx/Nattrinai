import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Search,
  AlertTriangle,
  Package,
  TrendingDown,
  RefreshCw
} from "lucide-react";

const inventory = [
  { id: "INV001", product: "Organic Bananas", sku: "BAN-ORG-001", currentStock: 150, minStock: 50, maxStock: 300, location: "A1-B2", lastUpdated: "2 hours ago", status: "good" },
  { id: "INV002", product: "Fresh Milk", sku: "MLK-FRS-001", currentStock: 45, minStock: 30, maxStock: 200, location: "C3-D1", lastUpdated: "1 hour ago", status: "good" },
  { id: "INV003", product: "Whole Wheat Bread", sku: "BRD-WHT-001", currentStock: 28, minStock: 40, maxStock: 120, location: "E2-F3", lastUpdated: "30 min ago", status: "low" },
  { id: "INV004", product: "Free Range Eggs", sku: "EGG-FRE-001", currentStock: 67, minStock: 25, maxStock: 150, location: "B1-C2", lastUpdated: "3 hours ago", status: "good" },
  { id: "INV005", product: "Organic Apples", sku: "APL-ORG-001", currentStock: 8, minStock: 30, maxStock: 200, location: "A3-B1", lastUpdated: "45 min ago", status: "critical" },
  { id: "INV006", product: "Greek Yogurt", sku: "YOG-GRK-001", currentStock: 0, minStock: 20, maxStock: 100, location: "D2-E1", lastUpdated: "5 hours ago", status: "out" }
];

const getStatusColor = (status) => {
  switch (status) {
    case "good":
      return "bg-green-100 text-green-700 border border-green-200";
    case "low":
      return "bg-yellow-100 text-yellow-700 border border-yellow-200";
    case "critical":
      return "bg-red-100 text-red-700 border border-red-200";
    case "out":
      return "bg-gray-200 text-gray-600 border border-gray-300";
    default:
      return "bg-gray-200 text-gray-600 border border-gray-300";
  }
};

const getStockPercentage = (current, max) => Math.round((current / max) * 100);

const Inventory = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-start">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Inventory</h2>
        <p className="text-gray-500">Monitor stock levels and manage warehouse inventory.</p>
      </div>
      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
        <RefreshCw className="h-4 w-4 mr-2" />
        Update Stock
      </Button>
    </div>

    {/* Summary Cards */}
    <div className="grid gap-6 md:grid-cols-4">
      <SummaryCard title="Total Items" value="298" icon={<Package />} />
      <SummaryCard title="Low Stock Items" value="3" icon={<AlertTriangle className="text-yellow-500" />} color="text-yellow-500" />
      <SummaryCard title="Out of Stock" value="1" icon={<TrendingDown className="text-red-500" />} color="text-red-500" />
      <SummaryCard title="Stock Value" value="$12,450" icon={<Package />} />
    </div>

    {/* Inventory Table */}
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-gray-900">Inventory Overview</CardTitle>
          <div className="relative w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input placeholder="Search inventory..." className="pl-8" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>SKU</TableHead>
              <TableHead>Current Stock</TableHead>
              <TableHead>Stock Level</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Updated</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventory.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <div className="font-medium text-gray-900">{item.product}</div>
                  <div className="text-sm text-gray-500">{item.id}</div>
                </TableCell>
                <TableCell className="text-gray-500 font-mono text-sm">{item.sku}</TableCell>
                <TableCell>
                  <div className="font-medium">{item.currentStock}</div>
                  <div className="text-sm text-gray-500">
                    Min: {item.minStock} | Max: {item.maxStock}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="space-y-2">
                    <Progress value={getStockPercentage(item.currentStock, item.maxStock)} className="h-2" />
                    <div className="text-sm text-gray-500">{getStockPercentage(item.currentStock, item.maxStock)}% capacity</div>
                  </div>
                </TableCell>
                <TableCell className="text-gray-500 font-mono text-sm">{item.location}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(item.status)}>
                    {{
                      good: "Good",
                      low: "Low Stock",
                      critical: "Critical",
                      out: "Out of Stock"
                    }[item.status] || "Unknown"}
                  </Badge>
                </TableCell>
                <TableCell className="text-gray-500 text-sm">{item.lastUpdated}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
);

const SummaryCard = ({ title, value, icon, color = "text-gray-900" }) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
      <div className={`h-4 w-4 ${color}`}>{icon}</div>
    </CardHeader>
    <CardContent>
      <div className={`text-2xl font-bold ${color}`}>{value}</div>
      <p className="text-xs text-gray-500">Across all locations</p>
    </CardContent>
  </Card>
);

export default Inventory;
