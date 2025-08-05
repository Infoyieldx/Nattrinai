import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TrendingUp,
  TrendingDown,
  Package,
  ShoppingCart,
  Users,
  DollarSign,
} from "lucide-react";
import SalesChart from "../components/SalesChart";
import TopProducts from "../components/TopProducts";
import RecentOrders from "../components/RecentOrders";
import ProductsAdmin from "../components/ProductsAdmin";
import Inventory from "../components/Inventory";
import Orders from "../components/Orders";
import Customers from "../components/Customer";
import Analytics from "../components/Analytics";
import CategoryPage from "../components/CatagoryPage";
const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    trend: "up",
    icon: DollarSign,
    description: "from last month",
  },
  {
    title: "Orders",
    value: "2,345",
    change: "+10.5%",
    trend: "up",
    icon: ShoppingCart,
    description: "from last month",
  },
  {
    title: "Products",
    value: "1,234",
    change: "+5.2%",
    trend: "up",
    icon: Package,
    description: "in inventory",
  },
  {
    title: "Customers",
    value: "892",
    change: "-2.1%",
    trend: "down",
    icon: Users,
    description: "active users",
  },
];

const sections = [
  "Dashboard",
  "Products",
  "Categories",
  "Orders",
  "Users",
  "Inventory",
  "Reviews",
  "Analytics",
  "Reports",
  "Settings",
];

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("Dashboard");

  const renderSectionContent = () => {
    switch (activeSection) {
      case "Dashboard":
        return (
          <div className="flex flex-col gap-5">
            <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">Dashboard</h2>
              <p className="text-muted-foreground">
                Welcome back! Here's what's happening with your grocery store
                today.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <Card key={stat.title} className="relative overflow-hidden">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        {stat.title}
                      </CardTitle>
                      <Icon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-foreground">
                        {stat.value}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        {stat.trend === "up" ? (
                          <TrendingUp className="h-3 w-3 text-success" />
                        ) : (
                          <TrendingDown className="h-3 w-3 text-destructive" />
                        )}
                        <span
                          className={
                            stat.trend === "up"
                              ? "text-success"
                              : "text-destructive"
                          }
                        >
                          {stat.change}
                        </span>
                        <span>{stat.description}</span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <SalesChart />
              <TopProducts />
            </div>
            <RecentOrders />
          </div>
        );

      case "Products":
        return (
          <div className="space-y-6">
            <ProductsAdmin />
          </div>
        );

      case "Categories":
        return (
         <CategoryPage/>
        );

      case "Orders":
        return <Orders />;

      case "Users":
        return <Customers />;

      case "Inventory":
        return <Inventory />;

      case "Reviews":
        return (
          <div className="space-y-4">
            <p>Moderate reviews from customers.</p>
            <div className="border p-4 bg-gray-50 rounded">
              <p>
                <strong>User:</strong> alice@example.com
              </p>
              <p>
                <strong>Review:</strong> Great product!
              </p>
              <div className="space-x-2 mt-2">
                <button className="bg-green-600 text-white px-3 py-1 rounded">
                  Approve
                </button>
                <button className="bg-red-600 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </div>
            </div>
          </div>
        );

      case "Analytics":
        return (
         <Analytics/>
        );

      case "Reports":
        return (
          <div className="space-y-4">
            <p>Sales and analytics reports.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 shadow">
                📈 Sales This Week: ₹12,000
              </div>
              <div className="bg-white p-4 shadow">👥 New Users: 32</div>
            </div>
          </div>
        );

      case "Settings":
        return (
          <div className="space-y-4">
            <h2 className="font-semibold">Admin Settings</h2>
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>Enable Maintenance Mode</span>
            </label>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#4A5A2A] text-white flex-shrink-0">
        <div className="p-6 text-2xl font-bold border-b border-[#A6A37E]">
          Admin Panel
        </div>
        <nav className="mt-6">
          {sections.map((section) => (
            <button
              key={section}
              className={`block w-full text-left px-6 py-3 hover:bg-[#3D3F24] transition ${
                activeSection === section ? "bg-[#3D3F24]" : ""
              }`}
              onClick={() => setActiveSection(section)}
            >
              {section}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="bg-white rounded-lg shadow p-6 min-h-[300px]">
          {renderSectionContent()}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
