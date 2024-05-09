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
import { SortProducts } from "@/components/product-sort";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

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

const categoryVariants = ["All", "Macrame", "Stitching"];

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const selectedCategory = searchParams.category;
  const categoryFilter = shop.filter((product) => product.category === selectedCategory)

  const publishedProducts = shop.filter((product) => product.published);
  const sortedProducts = publishedProducts.sort((product1, product2) =>
    product1.slnumber > product2.slnumber ? 1 : -1
  );


  return (
    <Bounded width="marginxy">
      <div className="flex justify-between">
        <div>
          <Heading size="md" fontstyle="bold" className="mb-5">
            Products
          </Heading>
          {categoryVariants.map((item, index) => (
            <Link
              key={index}
              href={`?category=${item}`}
              scroll={false}
              className="mr-3 px-3 py-2 bg-muted rounded-md"
            >
              {item}
            </Link>
          ))}
        </div>
        {/* <SortProducts /> */}
        <div className="col-md">
          <h6 className="m-3">Suchen</h6>
          <input
            className="btn-search"
            id="brand-input"
            placeholder="Suchen..."
            // value={searchTerm}
            // onChange={handleSearchTermChange}
          />
        </div>
      </div>
      {categoryFilter?.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-6">
          {sortedProducts.map((product) => (
            <ProductItem
              key={product.slnumber}
              slnumber={product.slnumber}
              slug={product.slug}
              images={product.images}
              category={product.category}
              productName={product.productName}
              description={product.description}
              total={product.total}
              published={false}
              body={""}
              slugAsParams={""}
            />
          ))}
        </div>
      ) : (
        <p> No Products yet!</p>
      )}
    </Bounded>
  );
}
