import { useState, useRef } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pencil, Trash2 } from "lucide-react";

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const fileRef = useRef();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleAddOrUpdateCategory = () => {
    if (!categoryName || !image) return;

    const newCategory = {
      name: categoryName,
      image: preview,
    };

    if (editingIndex !== null) {
      const updated = [...categories];
      updated[editingIndex] = newCategory;
      setCategories(updated);
      setEditingIndex(null);
    } else {
      setCategories([...categories, newCategory]);
    }

    setCategoryName("");
    setImage(null);
    setPreview(null);
    fileRef.current.value = "";
  };

  const handleEdit = (index) => {
    const category = categories[index];
    setCategoryName(category.name);
    setPreview(category.image);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updated = categories.filter((_, i) => i !== index);
    setCategories(updated);
  };

  return (
    <div className="p-4 space-y-6">
      {/* Add / Edit Category */}
      <Card>
        <CardHeader>
          <CardTitle>{editingIndex !== null ? "Edit Category" : "Add Category"}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Category Name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <Input
            type="file"
            ref={fileRef}
            accept="image/*"
            onChange={handleImageChange}
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="h-32 w-full object-contain rounded border border-muted shadow bg-transparent"
            />
          )}
          <Button onClick={handleAddOrUpdateCategory}>
            {editingIndex !== null ? "Update" : "Add"}
          </Button>
        </CardContent>
      </Card>

      {/* Category List */}
      <div className="grid md:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <Card key={index} className="relative">
            <img
              src={category.image}
              alt={category.name}
              className="h-32 w-full object-contain bg-transparent rounded-t"
            />
            <CardContent className="flex justify-between items-center">
              <span className="font-semibold">{category.name}</span>
              <div className="flex gap-2">
                <Button size="icon" variant="ghost" onClick={() => handleEdit(index)}>
                  <Pencil className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="ghost" onClick={() => handleDelete(index)}>
                  <Trash2 className="w-4 h-4 text-destructive" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
