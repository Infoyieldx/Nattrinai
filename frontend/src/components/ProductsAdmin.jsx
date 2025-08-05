import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Package, Edit, Trash2 } from "lucide-react";
import AddProductDialog from "./AddProductDialog";
import PromoCodeManager from "./PromocodeManger";

const products = [
  {
    id: "P001",
    name: "Organic Bananas",
    category: "Fruits",
    price: "$2.99",
    stock: 150,
    status: "active",
    image: "🍌",
  },
  {
    id: "P002",
    name: "Fresh Milk",
    category: "Dairy",
    price: "$3.49",
    stock: 45,
    status: "active",
    image: "🥛",
  },
  {
    id: "P003",
    name: "Whole Wheat Bread",
    category: "Bakery",
    price: "$2.99",
    stock: 28,
    status: "active",
    image: "🍞",
  },
  {
    id: "P004",
    name: "Free Range Eggs",
    category: "Dairy",
    price: "$4.99",
    stock: 67,
    status: "active",
    image: "🥚",
  },
  {
    id: "P005",
    name: "Organic Apples",
    category: "Fruits",
    price: "$3.99",
    stock: 8,
    status: "low_stock",
    image: "🍎",
  },
  {
    id: "P006",
    name: "Greek Yogurt",
    category: "Dairy",
    price: "$1.99",
    stock: 0,
    status: "out_of_stock",
    image: "🍦",
  },
];

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
  return (
 
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Products & Promotions</h2>
            <p className="text-muted-foreground">
              Manage your grocery store products, inventory, and promotional codes.
            </p>
          </div>
          <AddProductDialog/>
        </div>

        <Tabs defaultValue="products" className="w-full">
          <TabsList>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="promocodes">Promo Codes</TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Total Products
                  </CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">1,234</div>
                  <p className="text-xs text-muted-foreground">+12 from last month</p>
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
                  <div className="text-2xl font-bold text-warning">23</div>
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
                  <div className="text-2xl font-bold text-destructive">5</div>
                  <p className="text-xs text-muted-foreground">Immediate restock needed</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Product List</CardTitle>
                  <div className="relative w-64">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search products..." className="pl-8" />
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
                    {products.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-lg">
                              {product.image}
                            </div>
                            <div>
                              <div className="font-medium text-foreground">{product.name}</div>
                              <div className="text-sm text-muted-foreground">{product.id}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-muted-foreground">{product.category}</TableCell>
                        <TableCell className="font-medium">{product.price}</TableCell>
                        <TableCell>
                          <span className={product.stock < 10 ? "text-warning font-medium" : "text-foreground"}>
                            {product.stock}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(product.status)}>
                            {product.status.replace("_", " ")}
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
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="promocodes">
<PromoCodeManager/>
          </TabsContent>
        </Tabs>
      </div>
  );
};

export default ProductsAdmin;
