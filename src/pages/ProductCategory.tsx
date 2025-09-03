import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { productCategories } from "@/data/products";
import truck from "@/assets/truck.jpeg"

const ProductCategory = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = productCategories.find((c) => c.id === (categoryId || ""));

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
          <p className="text-muted-foreground mb-8">The category you are looking for does not exist.</p>
          <Button asChild>
            <Link to="/products">Back to All Categories</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-10">
          <div className="mb-4 flex justify-center">
            <img src={category.img} alt={category.name} className="h-42 object-contain" />
          </div>
          <h1 className="text-4xl font-bold mb-2">{category.name}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{category.description}</p>
        </section>

        {/* Grid with equal-height cards */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {category.products.map((product) => (
            <Card
              key={product.id}
              className="flex flex-col h-full hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{product.brand}</Badge>
                  <span className="text-sm text-muted-foreground">{product.category}</span>
                </div>
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>

              {/* Push this to bottom */}
              <CardContent className="flex flex-col mt-auto">
                <div className="space-y-4 flex-1">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                   <img src={product.image} alt="" />
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {product.features.slice(0, 4).map((feature, index) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button asChild className="flex-1">
                    <Link to={`/products/${product.id}`}>View Details</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/products">All Categories</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
    </div>
  );
};

export default ProductCategory;
