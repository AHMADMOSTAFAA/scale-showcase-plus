import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Phone, Mail, FilePlus } from "lucide-react";
import { getProductById } from "@/data/products";
import Navbar from "@/components/Navbar";
import { Document, Page, pdfjs } from "react-pdf";
import { useEffect, useState } from "react";

// PDF CSS for proper rendering
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Configure worker for Vite (robust way)
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;

  // State for PDF preview
  const [pdfObjectUrl, setPdfObjectUrl] = useState<string | null>(null);
  const [pdfError, setPdfError] = useState<string | null>(null);

  // Fetch PDF as Blob to avoid any path/headers quirks
  useEffect(() => {
    setPdfError(null);
    setPdfObjectUrl(null);

    if (!product?.attachmentUrl) return;

    let revokeUrl: string | null = null;

    fetch(product.attachmentUrl)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.blob();
      })
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        revokeUrl = url;
        setPdfObjectUrl(url);
      })
      .catch((e) => setPdfError(e?.message || "Failed to fetch PDF"));

    return () => {
      if (revokeUrl) URL.revokeObjectURL(revokeUrl);
    };
  }, [product?.attachmentUrl]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
            <p className="text-xl text-muted-foreground mb-8">
              The product you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link to="/products">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="ghost" asChild>
            <Link to="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            {/* Product image */}
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <img src={product.image} alt={product.name} />
            </div>

            {/* Attachment Section */}
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center overflow-hidden">
              {!product.attachmentUrl ? (
                <div className="text-center text-muted-foreground">
                  <FilePlus className="mx-auto h-12 w-12 mb-2" />
                  <p>No attachment available</p>
                </div>
              ) : pdfError ? (
                <a
                  href={product.attachmentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center text-center px-4"
                >
                  <FilePlus className="h-10 w-10 mb-2" />
                  <p className="text-sm">Open attachment</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Preview failed: {pdfError}
                  </p>
                </a>
              ) : pdfObjectUrl ? (
                <a
                  href={product.attachmentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <Document
                    file={pdfObjectUrl}
                    onLoadError={(e: any) =>
                      setPdfError(e?.message || "PDF render error")
                    }
                  >
                    {/* Use a fixed width for stable layout; fits the aspect-video nicely */}
                    <Page pageNumber={1} width={600} />
                  </Document>
                </a>
              ) : (
                <div className="text-sm text-muted-foreground">Loading preview…</div>
              )}
            </div>
          </div>

          {/* Product details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="default" className="text-sm">
                  {product.brand}
                </Badge>
                <Badge variant="secondary">{product.category}</Badge>
              </div>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-xl text-muted-foreground">{product.description}</p>
            </div>

            <Separator />

            <div>
              <h3 className="text-2xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2 mt-1">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4">
              <Button size="lg" className="flex-1">
                <Phone className="mr-2 h-4 w-4" />
                Call for Quote
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                <Mail className="mr-2 h-4 w-4" />
                Email Inquiry
              </Button>
            </div>
          </div>
        </div>

        {/* Specifications + Applications */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Technical Specifications</CardTitle>
              <CardDescription>
                Detailed technical specifications for {product.name}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b pb-2">
                    <span className="font-medium">{key}:</span>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Applications</CardTitle>
              <CardDescription>Common use cases and applications</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {product.applications.map((application, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {application}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
