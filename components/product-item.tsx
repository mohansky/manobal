import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/heading";
import { Shop } from "@/.velite";
import clsx from "clsx";

export default function ProductItem({
  slnumber,
  slug,
  images,
  productName,
  category,
  description,
  total,
}: Shop) {
  return (
    <Link key={slnumber} href={slug}>
      <div className="relative">
        <Image
          src={images!}
          alt={productName}
          height="600"
          width="600"
          className="object-contain mb-3"
        />
        <div
          className={clsx( "text-white py-1 px-2 rounded-xl absolute bottom-2 right-2",
            category === "Macrame" && "bg-red-700",
            category === "Stitching" && "bg-green-700"
          )}
        >
          {category}
        </div>
      </div>
      <Heading size="sm">{productName}</Heading>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 mb-2">
        {description}
      </p>
      <p className="text-sm font-semibold text-neutral-600 dark:text-neutral-400">
        Rs. {total}
      </p>
      {/* <Button className="mt-3 "> Learn more </Button>  */}
    </Link>
  );
}
