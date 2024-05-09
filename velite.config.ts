import { defineConfig, defineCollection, s } from "velite";
// import rehypeSlug from "rehype-slug";
// import rehypePrettyCode from "rehype-pretty-code";
// import rehypeAutolinkHeadings from "rehype-autolink-headings";

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
});


const shop = defineCollection({
  name: "Shop",  
  pattern: "shop/**/*.mdx", 
  schema: s
    .object({  
      slug: s.path(),
      published: s.boolean().default(true), 
      body: s.mdx(), 
      slnumber: s.number(),
      productName: s.string().max(99), 
      quantity: s.number().optional().nullable(),
      dimensions: s.string().optional(),
      weight: s.number().optional(),
      artisanName: s.string().optional(),
      code: s.string().optional(),
      description: s.string().optional(),
      image: s.string().optional(), 
      images: s.string().optional(),
      category:	s.string().optional(),
      material:	s.string().optional(),
      colour:s.string().optional(),
      mrp:s.number().optional().nullable(),
      gst: s.number().optional(),
      courier: s.string().optional().nullable(),
      total: s.number().optional(),
      sku: s.string().optional().nullable(),
      barcode: s.string().optional().nullable(),
    })
    .transform(computedFields),
});

const options = defineCollection({
  name: "Options",
  pattern: "options/index.yml",
  single: true,
  schema: s.object({
    name: s.string().max(99),
    title: s.string().max(99),
    basepath: s.string().url(),
    description: s.string().max(999).optional(),
    keywords: s.array(s.string()),
    author: s.object({
      name: s.string(),
      email: s.string().email(),
      url: s.string().url(),
    }),
    heroslider: s.array(s.object({ title: s.string(), subtitle: s.string().optional(), image: s.string().optional(), btnText: s.string(), link: s.string() })), 
    links: s.array(s.object({ text: s.string(), link: s.string() })),
    socials: s.array(
      s.object({
        name: s.string(),
        icon: s.string().optional(),
        link: s.string().optional(),
        image: s.image().optional(),
      })
    ),
    faq: s.array(s.object({ question: s.string(), answer: s.string() })),
  }),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { shop, options },
  mdx: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
});
