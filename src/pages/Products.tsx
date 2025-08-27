import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { productCategories } from "@/data/products";
import Navbar from "@/components/Navbar";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive range of professional weighing solutions from leading manufacturers
            including Cardinal, Mettler Toledo, Flintec, and Baykon.
          </p>
        </div>

        <div className="space-y-12">
          {productCategories.map((category) => (
            <div key={category.id} className="space-y-6">
              <div className="text-center">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h2 className="text-3xl font-bold mb-2">{category.name}</h2>
                <p className="text-lg text-muted-foreground">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.products.map((product) => (
                  <Card key={product.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{product.brand}</Badge>
                        <span className="text-sm text-muted-foreground">{product.category}</span>
                      </div>
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                          <span className="text-muted-foreground">Product Image</span>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Key Features:</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {product.features.slice(0, 3).map((feature, index) => (
                              <li key={index}>• {feature}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex gap-2">
                          <Button asChild className="flex-1">
                            <Link to={`/products/${product.id}`}>
                              View Details
                            </Link>
                          </Button>
                          <Button variant="outline">
                            Contact Us
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;