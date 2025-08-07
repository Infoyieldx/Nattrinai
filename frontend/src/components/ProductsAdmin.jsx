import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  Package,
  Edit,
  Trash2,
  Percent,
  Layers,
  ShoppingCart,
} from "lucide-react";
import AddProductDialog from "./AddProductDialog";
import PromoCodeManager from "./PromocodeManger";
import CategoryManager from "./CategoryManager";

const getStatusColor = (status) => {
  switch (status) {
    case "active":
      return "bg-success/10 text-success border-success/20";
    case "low_stock":
      return "bg-warning/10 text-warning border-warning/20";
    case "out_of_stock":
      return "bg-destructive/10 text-destructive border-destructive/20";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

const ProductsAdmin = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);

  // Calculate metrics
  const totalProducts = products.length;
  const lowStockCount = products.filter(
    (product) => product.stock < 10
  ).length;
  const outOfStockCount = products.filter(
    (product) => product.stock == 0
  ).length;

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product?.productName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div className="p-6">Loading products...</div>;
  }

  if (error) {
    return (
      <div className="p-6 text-destructive">
        Error loading products: {error}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2">
            <ShoppingCart className="w-6 h-6 text-primary" />
            Products & Promotions
          </h2>
          <p className="text-muted-foreground">
            Manage your grocery store products, inventory, and promotional codes.
          </p>
        </div>
        <AddProductDialog />
      </div>

      <Tabs defaultValue="products" className="w-full ">
        <TabsList className="flex justify-around  ">
          <TabsTrigger value="products" className="flex items-center gap-2">
            <Package className="h-4 w-4" />
            Products
          </TabsTrigger>
          <TabsTrigger value="categories" className="flex items-center gap-2">
            <Layers className="h-4 w-4" />
            Categories
          </TabsTrigger>
          <TabsTrigger value="promocodes" className="flex items-center gap-2">
            <Percent className="h-4 w-4" />
            Promo Codes
          </TabsTrigger>
        </TabsList>

        {/* Products Section */}
        <TabsContent value="products" className="space-y-6">
          {/* Product Metrics */}
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Products
                </CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">
                  {totalProducts}
                </div>
                <p className="text-xs text-muted-foreground">
                  All available products
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Low Stock
                </CardTitle>
                <Package className="h-4 w-4 text-warning" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-warning">
                  {lowStockCount}
                </div>
                <p className="text-xs text-muted-foreground">Needs attention</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Out of Stock
                </CardTitle>
                <Package className="h-4 w-4 text-destructive" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-destructive">
                  {outOfStockCount}
                </div>
                <p className="text-xs text-muted-foreground">
                  Immediate restock needed
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Product Table */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Product List</CardTitle>
                <div className="relative w-64">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search products..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <TableRow key={product._id || product.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-lg">
                              {product.imageUrl ? (
                                <img
                                  src={product.imageUrl}
                                  alt={product.productName}
                                  className="w-full h-full object-cover rounded-lg"
                                />
                              ) : (
                                <Package className="w-5 h-5 text-muted-foreground" />
                              )}
                            </div>
                            <div>
                              <div className="font-medium text-foreground">
                                {product.productName}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {product.productId }
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {product.category.name}
                        </TableCell>
                        <TableCell className="font-medium">
                          ${product.price?.toFixed(2)}
                        </TableCell>
                        <TableCell>
                          <span
                            className={
                              product.stock < 10
                                ? "text-warning font-medium"
                                : "text-foreground"
                            }
                          >
                            {product.stock}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(product.status)}>
                            {product.status?.replace("_", " ") || "active"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center h-24">
                        {searchTerm
                          ? "No products match your search"
                          : "No products available"}
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Categories Section */}
        <TabsContent value="categories">
          <CategoryManager />
        </TabsContent>

        {/* Promo Codes Section */}
        <TabsContent value="promocodes">
          <PromoCodeManager />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductsAdmin;