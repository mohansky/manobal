"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/heading";
import Bounded from "@/components/bounded";
// import {
//   BASE_PATH,
//   SITE_TITLE,
//   SITE_DESC,
//   SITE_KEYWORDS,
// } from "@/lib/constants";
import { shop } from "#site/content";
import ProductItem from "@/components/product-item";
import ProductList from "@/components/product-list";
import Search from "@/components/product-search";

// export const metadata = {
//   title: `${product.title}`,
//   description: `${product.description}`,
//   metadataBase: new URL(`${product.basepath}`),
//   generator: "Next.js",
//   applicationName: `${product.name}`,
//   referrer: "origin-when-cross-origin",
//   keywords: [ `${product.keywords}` ],
//   authors: [ { name: `${product.author.name}`, url: `${product.author.url}` }, ],
//   creator: `${product.author.name}`,
//   publisher: `${product.author.name}`,
//   openGraph: {
//     title: `${product.title}`,
//     description: `${product.description}`,
//     url: `${product.basepath}`,
//     siteName: `${product.name}`,
//     images: [
//       {
//         url: "https://sridharmusicalinstitute.com/images/smilogo.png", // Must be an absolute URL
//         width: 720,
//         height: 230,
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   alternates: {
//     canonical: `${product.basepath}`,
//   },
//   robots: {
//     index: false,
//     follow: true,
//     nocache: true,
//     googleBot: {
//       index: true,
//       follow: false,
//       noimageindex: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
// };

const categoryVariants = [
  { name: "All", value: " " },
  { name: "Macrame", value: "Macrame" },
  { name: "Stitching", value: "Stitching" },
];

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  let selectedCategory = searchParams.category;

  let publishedProducts = shop
    .sort((a, b) => a.slnumber! - b.slnumber!)
    .filter((product) => product.published);

  let filteredProducts = publishedProducts.filter(
    (product) => product.category === selectedCategory
  );


  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;

  return (
    <Bounded width="marginxy">
      <div className="flex flex-wrap justify-between">
        <div>
          <Heading size="md" fontstyle="bold" className="mb-5">
            Products
          </Heading>
          {categoryVariants.map((item, index) => (
            <Link
              key={index}
              href={`?category=${item.value}`}
              scroll={false}
              className="mb-10 mr-3 px-4 py-2 text-sm font-semibold bg-muted rounded-lg hover:bg-black hover:text-muted focus:bg-black focus:text-muted transition duration-150 ease-out hover:ease-in"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <Search search={search} />
      </div>
      {/* {publishedProducts?.length > 0 ? ( */}

      {selectedCategory === "" || !selectedCategory ? (
        <ProductList products={publishedProducts} />
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </Bounded>
  );
}
