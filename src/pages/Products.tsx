import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { productCategories } from "@/data/products";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");

  // 🔍 Filtering logic
  const filteredCategories = productCategories.filter((category) => {
  const q = query.trim().toLowerCase();

  // Use translated strings for search
  const name = t(`productsCategory.categories.${category.id}.name`).toLowerCase();
  const description = t(`productsCategory.categories.${category.id}.description`).toLowerCase();

  const matchesQuery = q === "" || name.includes(q) || description.includes(q);
  const matchesFilter = filter === "all" || category.id === filter;


    return matchesQuery && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-10">
        {/* Header */}
        <section className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4 text-primary tracking-tight">
            {t("productsCategory.title")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("productsCategory.description")}
          </p>
        </section>

        {/* 🔍 Search + Filter bar */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12 bg-card p-4 rounded-xl shadow-sm border max-w-3xl mx-auto">
          <Input
            type="text"
            placeholder={t("productsCategory.searchPlaceholder")}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="md:w-1/2"
          />

          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="md:w-1/3">
              <SelectValue placeholder={t("productsCategory.filterPlaceholder")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t("productsCategory.allCategories")}</SelectItem>
              {productCategories.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {t(`productsCategory.categories.${category.id}.name`)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Categories grid */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <Card
                key={category.id}
                className="flex flex-col h-full hover:shadow-xl hover:scale-[1.02] transition-all rounded-2xl border"
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <img
                      src={category.img}
                      alt={t(`productsCategory.categories.${category.id}.name`)}
                      className="h-32 object-contain drop-shadow-md"
                    />
                  </div>
                  <CardTitle className="text-2xl font-bold">
                    {t(`productsCategory.categories.${category.id}.name`)}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {t(`productsCategory.categories.${category.id}.description`)}
                  </CardDescription>
                </CardHeader>

                <CardContent className="mt-auto flex flex-col">
                  <span className="text-sm text-muted-foreground mb-4">
                    {category.products.length} {t("productsCategory.products")}
                  </span>
                  <Button asChild className="w-full rounded-full">
                    <Link to={`/products/category/${category.id}`}>
                      {t(`productsCategory.categories.${category.id}.view`)}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-xl font-medium text-muted-foreground">
                {t("productsCategory.noMatch.title")}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                {t("productsCategory.noMatch.subtitle")}
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Products;
