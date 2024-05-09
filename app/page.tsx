import Bounded from "@/components/bounded";
import Intro from "@/components/intro";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/heading";
import { Shop, shop } from "#site/content";
import People from "@/components/people";
import ProductItem from "@/components/product-item";

export default function Home() {

  const n = 6;
  const randomProducts = shop
    .filter((product) => product.published)
    .map((x) => ({ x, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map((a) => a.x)
    .slice(0, n);

  // const publishedProducts = shop.filter((product) => product.published);
  // const filteredProducts = publishedProducts.sort((product1, product2) =>
  //   product1.slnumber > product2.slnumber ? 1 : -1
  // );

  return (
    <main>
      <Bounded width="marginxy" >
        <Intro />

        <section className="my-20">
          <Heading>The craft</Heading>
          {/* {filteredProducts?.length > 0 ? ( */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-6">
              {randomProducts.splice(3).map((product: Shop) => (
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
          {/* ) : (
            <p> No Products yet!</p>
          )} */}
        </section>

        <People />
      </Bounded>
    </main>
  );
}
