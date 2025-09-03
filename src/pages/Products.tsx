import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { productCategories } from "@/data/products";
import Navbar from "@/components/Navbar";

const Products = () => {  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Product Categories</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our full range of industrial weighing solutions. Select a category to view products and detailed specifications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.map((category) => (
            <Card
              key={category.id}
              className="flex flex-col h-full hover:shadow-lg transition-shadow border hover:border-primary/30"
            >
              <CardHeader className="text-center">
                <div className="mb-3">
                  <img 
                    src={category.img} 
                    alt={category.name} 
                    className="mx-auto h-32 object-contain"
                  />
                </div>
                <CardTitle className="text-2xl">{category.name}</CardTitle>
                <CardDescription className="text-base">
                  {category.description}
                </CardDescription>
              </CardHeader>

              {/* Footer pushed to bottom */}
              <CardContent className="mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">
                    {category.products.length} products
                  </span>
                </div>
                <Button asChild className="w-full">
                  <Link to={`/products/category/${category.id}`}>
                    View {category.name}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
