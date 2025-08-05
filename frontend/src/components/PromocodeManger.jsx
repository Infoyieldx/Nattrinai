import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  Plus,
  Upload,
  Calendar,
  Percent
} from "lucide-react";

const promoCodes = [
  {
    id: "PROMO001",
    code: "WELCOME10",
    discount: "10%",
    type: "percentage",
    status: "active",
    uses: 45,
    maxUses: 100,
    expiryDate: "2024-03-15"
  },
  {
    id: "PROMO002", 
    code: "FREESHIP",
    discount: "$5.00",
    type: "fixed",
    status: "active",
    uses: 23,
    maxUses: 50,
    expiryDate: "2024-02-28"
  },
  {
    id: "PROMO003",
    code: "SUMMER25",
    discount: "25%",
    type: "percentage", 
    status: "expired",
    uses: 100,
    maxUses: 100,
    expiryDate: "2024-01-31"
  }
];

export default function PromoCodeManager() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    code: "",
    discountType: "percentage",
    discountValue: "",
    maxUses: "",
    expiryDate: ""
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "expired":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "disabled":
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, discountType: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically call an API to create the promo code
    console.log("Creating promo code:", formData);
    setOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold">Promo Codes</h3>
          <p className="text-muted-foreground">Manage discount codes and promotions</p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Promo Code
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create New Promo Code</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="code">Promo Code</Label>
                <Input 
                  id="code" 
                  value={formData.code}
                  onChange={handleChange}
                  placeholder="Enter promo code" 
                  required 
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="discountType">Discount Type</Label>
                  <Select 
                    value={formData.discountType}
                    onValueChange={handleSelectChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="percentage">Percentage</SelectItem>
                      <SelectItem value="fixed">Fixed Amount</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="discountValue">Discount Value</Label>
                  <Input 
                    id="discountValue" 
                    type="number" 
                    value={formData.discountValue}
                    onChange={handleChange}
                    placeholder="0" 
                    required 
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="maxUses">Max Uses</Label>
                  <Input 
                    id="maxUses" 
                    type="number" 
                    value={formData.maxUses}
                    onChange={handleChange}
                    placeholder="100" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="expiryDate">Expiry Date</Label>
                  <Input 
                    id="expiryDate" 
                    type="date" 
                    value={formData.expiryDate}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-2 pt-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit">Create Promo Code</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Codes
            </CardTitle>
            <Percent className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {promoCodes.filter(p => p.status === 'active').length}
            </div>
            <p className="text-xs text-muted-foreground">
              Currently available
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Uses
            </CardTitle>
            <Upload className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {promoCodes.reduce((sum, promo) => sum + promo.uses, 0)}
            </div>
            <p className="text-xs text-muted-foreground">
              All time
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Savings Given
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$8,234</div>
            <p className="text-xs text-muted-foreground">
              Total discounts
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Promo Code List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Code</TableHead>
                <TableHead>Discount</TableHead>
                <TableHead>Usage</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Expiry Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {promoCodes.map((promo) => (
                <TableRow key={promo.id}>
                  <TableCell className="font-medium">{promo.code}</TableCell>
                  <TableCell>{promo.discount}</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      {promo.uses} / {promo.maxUses}
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                        <div 
                          className="bg-blue-600 h-1.5 rounded-full" 
                          style={{ 
                            width: `${Math.min(100, (promo.uses / promo.maxUses) * 100)}%` 
                          }}
                        />
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(promo.status)}>
                      {promo.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{promo.expiryDate}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        {promo.status === 'active' ? 'Disable' : 'Enable'}
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}