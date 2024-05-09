import Bounded from "@/components/bounded";
import Intro from "@/components/intro";
import { Heading } from "@/components/heading";
import { shop } from "#site/content";
import People from "@/components/people";
import ProductList from "@/components/product-list";

export default function Home() {
  const n = 3;
  const randomProducts = shop
    .filter((product) => product.published)
    .map((x) => ({ x, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map((a) => a.x)
    .slice(0, n);

  return (
    <main>
      <Bounded width="marginxy">
        <Intro />

        <section className="my-20">
          <Heading>The craft</Heading>
          <ProductList products={randomProducts} />
        </section>

        <People />
      </Bounded>
    </main>
  );
}
