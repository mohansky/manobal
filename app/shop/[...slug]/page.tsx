// import { P } from "@/components/styled-tags/p";
import Bounded from "@/components/bounded";
import { Heading } from "@/components/heading";
// import { getProductBySlug } from "@/lib/mdx/products";
import Image from "next/image";
import { shop } from "#site/content";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { MDXContent } from "@/components/mdx-components";

interface ProductPageProps {
  params: {
    slug: string[];
  };
}

async function getProductFromParams(params: ProductPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = shop.find((product) => product.slugAsParams === slug);

  return post;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = await getProductFromParams(params);

  if (!product) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", product.productName);

  return {
    title: product.productName,
    description: product.description,
    // authors: { name: siteConfig.author },
    openGraph: {
      title: product.productName,
      description: product.description,
      type: "article",
      url: product.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: product.productName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.productName,
      description: product.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

export async function generateStaticParams(): Promise<
  ProductPageProps["params"][]
> {
  return shop.map((product) => ({ slug: product.slugAsParams.split("/") }));
}

export default async function ProductsPage({ params }: ProductPageProps) {
  const product = await getProductFromParams(params);

  if (!product || !product.published) {
    notFound();
  }

  return (
    <Bounded width="marginxy">
      <div className="grid lg:grid-cols-2 gap-8">
        <Image
          src={product.images!}
          alt={product.productName}
          width={600}
          height={600}
          className="w-full"
        />
        <div>
          <Heading size="md" className="mb-10">{product.productName}</Heading>
          <p>{product.description}</p>
          <div className="my-3 flex gap-4">
            <p>
              <b>Category:</b> {product.category}
            </p>
            <p>
              <b>Material:</b> {product.material}
            </p>
            <p>
              <b>Colour:</b> {product.colour}
            </p>
          </div>
          <div className="my-3 flex gap-4">
            <p>
              <b>Dimensions:</b> {product.dimensions}
            </p>
            <p>
              <b>Weight:</b> {product.weight} gms.
            </p>
          </div>

          <p className="my-3">
            <b>Artisan:</b> {product.artisanName}
          </p>
          {/* <p>
            <b>Code:</b> {product.code}
          </p> */}
          <p>
            <b>Price:</b> Rs. {product.total}
          </p>
          {/* <MDXContent code={product.body} /> */}
        </div>
      </div>
    </Bounded>
  );
}
