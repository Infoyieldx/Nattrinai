import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell
} from "recharts";
import {
  TrendingUp, DollarSign, ShoppingBag, Users,
  Download, Calendar
} from "lucide-react";

const salesData = [
  { name: "Jan", sales: 4000, revenue: 12000 },
  { name: "Feb", sales: 3000, revenue: 9500 },
  { name: "Mar", sales: 5000, revenue: 15800 },
  { name: "Apr", sales: 4500, revenue: 14200 },
  { name: "May", sales: 6000, revenue: 18900 },
  { name: "Jun", sales: 5500, revenue: 17300 },
  { name: "Jul", sales: 7000, revenue: 22100 },
];

const categoryData = [
  { name: "Fruits & Vegetables", value: 35, color: "#4f46e5" },  // Indigo
  { name: "Dairy & Eggs", value: 25, color: "#10b981" },        // Emerald
  { name: "Meat & Seafood", value: 20, color: "#f59e0b" },      // Amber
  { name: "Bakery", value: 12, color: "#3b82f6" },              // Blue
  { name: "Others", value: 8, color: "#9ca3af" },               // Gray
];

const topProducts = [
  { name: "Organic Bananas", sales: 890, revenue: 2670 },
  { name: "Fresh Milk", sales: 756, revenue: 2646 },
  { name: "Free Range Eggs", sales: 634, sales_change: "+12%" },
  { name: "Whole Wheat Bread", sales: 542, sales_change: "+8%" },
  { name: "Organic Apples", sales: 498, sales_change: "-3%" },
];

const Analytics = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Analytics</h2>
          <p className="text-gray-500">
            Comprehensive insights into your grocery store performance.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="text-gray-700 border-gray-300">
            <Calendar className="h-4 w-4 mr-2 text-gray-500" />
            Last 30 Days
          </Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Total Revenue
            </CardTitle>
            <DollarSign className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">$125,430</div>
            <p className="text-xs text-emerald-500">+12.5% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Total Orders
            </CardTitle>
            <ShoppingBag className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">3,240</div>
            <p className="text-xs text-emerald-500">+8.2% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Active Customers
            </CardTitle>
            <Users className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">1,89</div>
            <p className="text-xs text-emerald-500">+15.3% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Avg. Order Value
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">$38.72</div>
            <p className="text-xs text-amber-500">-2.1% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 1 */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-gray-900">Sales & Revenue Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#4f46e5"  // Indigo
                  strokeWidth={2}
                  dot={{ fill: "#4f46e5", strokeWidth: 2 }}
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#10b981"  // Emerald
                  strokeWidth={2}
                  dot={{ fill: "#10b981", strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-gray-900">Sales by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-gray-900">Monthly Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Bar
                  dataKey="revenue"
                  fill="#4f46e5"  // Indigo
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-gray-900">Top Performing Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div
                  key={product.name}
                  className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-sm font-medium text-indigo-800">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{product.name}</div>
                      <div className="text-sm text-gray-500">
                        {product.sales} units sold
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    {product.revenue && (
                      <div className="font-medium text-gray-900">${product.revenue}</div>
                    )}
                    {product.sales_change && (
                      <div
                        className={`text-sm ${product.sales_change.startsWith('+')
                          ? 'text-emerald-500'
                          : 'text-red-500'
                          }`}
                      >
                        {product.sales_change}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;