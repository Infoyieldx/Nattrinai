import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TrendingUp,
  TrendingDown,
  Package as PackageIcon,
  ShoppingCart,
  Users,
  DollarSign,
  Menu,
  X,
  Home,
  Package,
  Box,
  BarChart2,
  Settings,
  Star,
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
import ReviewsAdmin from "../components/ReviewsAdmin";

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
    icon: PackageIcon,
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
  { name: "Dashboard", icon: Home },
  { name: "Products", icon: Package },
  { name: "Orders", icon: ShoppingCart },
  { name: "Users", icon: Users },
  { name: "Inventory", icon: Box },
  { name: "Analytics", icon: BarChart2 },
  { name: "Reviews", icon: Star },
  { name: "Settings", icon: Settings },
];

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderSectionContent = () => {
    switch (activeSection) {
      case "Dashboard":
        return (
          <div className="flex flex-col gap-5">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Dashboard
              </h2>
              <p className="text-muted-foreground">
                Welcome back! Here's what's happening with your grocery store
                today.
              </p>
            </div>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
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
                      <div className="text-xl md:text-2xl font-bold text-foreground">
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
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
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

      case "Orders":
        return <Orders />;

      case "Users":
        return <Customers />;

      case "Inventory":
        return <Inventory />;

      case "Analytics":
        return <Analytics />;


      case "Reviews":
        return <ReviewsAdmin />;

      case "Settings":
  return (
    <div className="max-w-xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold mb-4">Admin Settings</h2>
      <div className="bg-gray-50 rounded-lg shadow p-6 space-y-6">
        <div>
          <label className="flex items-center justify-between">
            <span className="font-medium">Enable Maintenance Mode</span>
            <input
              type="checkbox"
              className="toggle toggle-success"
              // Add state and handler as needed
            />
          </label>
          <p className="text-xs text-gray-500 mt-1">
            Temporarily disable the storefront for customers.
          </p>
        </div>
        <div>
          <label className="flex items-center justify-between">
            <span className="font-medium">Allow New User Registrations</span>
            <input
              type="checkbox"
              className="toggle toggle-success"
              // Add state and handler as needed
            />
          </label>
          <p className="text-xs text-gray-500 mt-1">
            Control whether new customers can sign up.
          </p>
        </div>
        <button
          className="w-full bg-[#4A5A2A] text-white py-2 rounded hover:bg-[#3D3F24] transition"
          // Add save handler as needed
        >
          Save Settings
        </button>
      </div>
    </div>
  );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-[#4A5A2A] text-white">
        <div className="text-xl font-bold">Admin Panel</div>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "block fixed h-full z-50" : "hidden"
        } md:block w-full md:w-64 bg-[#4A5A2A] text-white flex-shrink-0`}
      >
        <div className="p-6 text-2xl font-bold border-b border-[#A6A37E] hidden md:block">
          Admin Panel
        </div>
        <nav className="mt-6">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.name}
                className={`flex items-center w-full text-left px-6 py-3 hover:bg-[#3D3F24] transition ${
                  activeSection === section.name ? "bg-[#3D3F24]" : ""
                }`}
                onClick={() => {
                  setActiveSection(section.name);
                  if (isMobile) setSidebarOpen(false);
                }}
              >
                <Icon className="w-5 h-5 mr-3" />
                {section.name}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 mt-16 md:mt-0">
        <div className="bg-white rounded-lg shadow p-4 md:p-6 min-h-[300px]">
          {renderSectionContent()}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;