import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { productCategories } from "@/data/products"; // contains ids & image paths only
import { useState } from "react";
import { useTranslation } from "react-i18next";

const ProductCategory = () => {
  const { t } = useTranslation();
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = productCategories.find((c) => c.id === (categoryId || ""));
  const [query, setQuery] = useState("");
  const [brandFilter, setBrandFilter] = useState("all");
  const [catFilter, setCatFilter] = useState("all");

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-extrabold mb-4 text-red-600">
            {t("products.notFound.title")}
          </h1>
          <p className="text-muted-foreground mb-8 text-lg">
            {t("products.notFound.subtitle")}
          </p>
          <Button asChild className="px-6 py-2 text-lg rounded-full">
            <Link to="/products">{t("products.notFound.back")}</Link>
          </Button>
        </div>
      </div>
    );
  }

  const uniqueBrands = Array.from(new Set(category.products.map((p) => p.brand)));
  const uniqueCategories = Array.from(new Set(category.products.map((p) => p.category)));

  const filteredProducts = category.products.filter((product) => {
    const q = query.toLowerCase();
    const name = t(`products.items.${product.id}.name`).toLowerCase();
    const desc = t(`products.items.${product.id}.description`).toLowerCase();
    const brand = product.brand.toLowerCase();
    const cat = product.category.toLowerCase();

    const matchesSearch =
      name.includes(q) || desc.includes(q) || brand.includes(q) || cat.includes(q);

    const matchesBrand = brandFilter === "all" || product.brand === brandFilter;
    const matchesCat = catFilter === "all" || product.category === catFilter;

    return matchesSearch && matchesBrand && matchesCat;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        {/* Category Header */}
        <section className="text-center mb-12">
          <div className="mb-6 flex justify-center">
            <img
              src={category.img}
              alt={t(`products.categories.${category.id}`)}
              className="h-44 object-contain drop-shadow-md"
            />
          </div>
          <h1 className="text-5xl font-extrabold mb-4 text-primary tracking-tight">
            {t(`products.categories.${category.id}.name`)}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t(`products.categories.${category.id}.description`)}
          </p>
        </section>

        {/* 🔍 Filters */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12 bg-card p-4 rounded-xl shadow-sm border">
          <Input
            type="text"
            placeholder={t("products.searchPlaceholder")}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="md:w-1/3"
          />

          <Select value={brandFilter} onValueChange={setBrandFilter}>
            <SelectTrigger className="md:w-1/4">
              <SelectValue placeholder={t("products.filterBrand")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t("products.allBrands")}</SelectItem>
              {uniqueBrands.map((brand) => (
                <SelectItem key={brand} value={brand}>
                  {brand}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={catFilter} onValueChange={setCatFilter}>
            <SelectTrigger className="md:w-1/4">
              <SelectValue placeholder={t("products.filterCategory")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t("products.allCategories")}</SelectItem>
              {uniqueCategories.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Product grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="flex flex-col h-full hover:shadow-xl hover:scale-[1.02] transition-all rounded-2xl border"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="px-3 py-1 text-sm">
                      {product.brand}
                    </Badge>
                    <span className="text-xs uppercase tracking-wide text-muted-foreground">
                      {t(`products.items.${product.id}.category`)}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold line-clamp-1">
                    {t(`products.items.${product.id}.name`)}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-2">
                    {t(`products.items.${product.id}.description`)}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex flex-col flex-1 justify-between">
                  <div>
                    <div className="h-48 bg-muted rounded-lg overflow-hidden flex items-center justify-center shadow-inner mb-4">
                      <img
                        src={product.image}
                        alt={t(`products.items.${product.id}.name`)}
                        className="object-contain max-h-full"
                      />
                    </div>

                    <h4 className="font-semibold mb-2 text-primary">
                      {t("products.keyFeatures")}
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      {[0, 1, 2].map((i) => (
                        <li key={i} className="line-clamp-1">
                          {t(`products.items.${product.id}.features.${i}`)}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3 pt-4 mt-auto">
                    <Button asChild className="flex-1 rounded-full">
                      <Link to={`/products/${product.id}`}>
                        {t("products.viewDetails")}
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="rounded-full">
                      <Link to="/products">{t("products.backCategories")}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-xl font-medium text-muted-foreground">
                {t("products.noMatch.title")}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                {t("products.noMatch.subtitle")}
              </p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default ProductCategory;
