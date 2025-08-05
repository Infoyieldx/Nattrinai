import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const products = [
  {
    name: "Organic Bananas",
    sales: 245,
    revenue: "$490.00",
    percentage: 85
  },
  {
    name: "Fresh Milk",
    sales: 189,
    revenue: "$567.00",
    percentage: 72
  },
  {
    name: "Whole Wheat Bread",
    sales: 156,
    revenue: "$312.00",
    percentage: 68
  },
  {
    name: "Free Range Eggs",
    sales: 134,
    revenue: "$402.00",
    percentage: 58
  },
  {
    name: "Organic Apples",
    sales: 98,
    revenue: "$294.00",
    percentage: 45
  }
];

export default function TopProducts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-foreground">Top Products</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {products.map((product) => (
          <div key={product.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">{product.name}</p>
                <p className="text-sm text-muted-foreground">{product.sales} units sold</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-foreground">{product.revenue}</p>
              </div>
            </div>
            <Progress value={product.percentage} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
