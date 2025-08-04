import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", sales: 2400 },
  { name: "Tue", sales: 1398 },
  { name: "Wed", sales: 10800 },
  { name: "Thu", sales: 3908 },
  { name: "Fri", sales: 4800 },
  { name: "Sat", sales: 3800 },
  { name: "Sun", sales: 4300 },
];

export default function SalesChart() {
  return (
   <Card>
  <CardHeader>
    <CardTitle className="text-gray-900">Sales Overview</CardTitle>
  </CardHeader>
  <CardContent>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" /> {/* Tailwind gray-200 */}
        <XAxis dataKey="name" stroke="#6b7280" /> {/* Tailwind gray-500 */}
        <YAxis stroke="#6b7280" /> {/* Tailwind gray-500 */}
        <Bar dataKey="sales" fill="#3b82f6" radius={[4, 4, 0, 0]} /> {/* Tailwind blue-500 */}
      </BarChart>
    </ResponsiveContainer>
  </CardContent>
</Card>

  );
}
