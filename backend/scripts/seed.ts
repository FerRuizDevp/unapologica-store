import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import { products } from "../src/db/schema.js";

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle(pool);

const CATALOG = [
  {
    slug: "unapologica-oversized-blazer",
    name: "Unapologica Oversized Blazer",
    category: "Outerwear",
    description:
      "Structured shoulders, relaxed drape, fully lined. Italian wool-blend twill in a deep charcoal. Layer it open over knitwear or belt it for a sharper silhouette.",
    priceCents: 18900,
    imageUrl: "https://images.unsplash.com/photo-1747814896398-bdf36d11f596?w=800&q=80",
  },
  {
    slug: "midnight-wide-leg-trouser",
    name: "Midnight Wide-Leg Trouser",
    category: "Bottoms",
    description:
      "High-rise, pressed center crease, fluid drape from a matte crepe fabric. Side zip, no visible closures. Pairs with everything from sneakers to heels.",
    priceCents: 9800,
    imageUrl: "https://images.unsplash.com/photo-1778516632879-677df1acaf4d?w=800&q=80",
  },
  {
    slug: "raw-edge-denim-jacket",
    name: "Raw Edge Denim Jacket",
    category: "Outerwear",
    description:
      "Rigid 12oz denim, raw hem and cuffs, single chest pocket. Breaks in and softens with wear — built to fade the way you want it to.",
    priceCents: 12800,
    imageUrl: "https://images.unsplash.com/photo-1711594106011-b4db7e26d213?w=800&q=80",
  },
  {
    slug: "featherweight-cashmere-crew",
    name: "Featherweight Cashmere Crew",
    category: "Knitwear",
    description:
      "100% grade-A cashmere, 12-gauge knit, ribbed collar and cuffs. Light enough to layer, warm enough to wear alone.",
    priceCents: 21900,
    imageUrl: "https://images.unsplash.com/photo-1631541909061-71e349d1f203?w=800&q=80",
  },
  {
    slug: "bias-cut-slip-dress",
    name: "Bias-Cut Slip Dress",
    category: "Dresses",
    description:
      "Cut on the bias for a fluid, body-skimming fall. Adjustable straps, midi length, recycled satin. Dresses up with heels, down with a denim jacket over it.",
    priceCents: 13900,
    imageUrl: "https://images.unsplash.com/photo-1625499706422-998dd9e31a66?w=800&q=80",
  },
  {
    slug: "vantage-straight-jean",
    name: "Vantage Straight Jean",
    category: "Denim",
    description:
      "Mid-rise, straight through the leg, non-stretch selvedge denim in a rinsed indigo. Sits at the natural waist, breaks cleanly over the shoe.",
    priceCents: 11800,
    imageUrl: "https://images.unsplash.com/photo-1721637217881-f0ad35dd4829?w=800&q=80",
  },
  {
    slug: "ribbed-turtleneck",
    name: "Ribbed Turtleneck",
    category: "Knitwear",
    description:
      "Fine-gauge rib knit, fitted through the body, extra-long sleeves. A merino-blend base layer that holds its shape wash after wash.",
    priceCents: 6900,
    imageUrl: "https://images.unsplash.com/photo-1752486268414-39ca91421479?w=800&q=80",
  },
  {
    slug: "utility-cargo-pant",
    name: "Utility Cargo Pant",
    category: "Bottoms",
    description:
      "Six-pocket cargo silhouette in a brushed cotton twill, tapered leg, adjustable drawcord hem. Reinforced stitching at stress points.",
    priceCents: 10900,
    imageUrl: "https://images.unsplash.com/photo-1780566759823-6ab515d86760?w=800&q=80",
  },
  {
    slug: "featherlight-trench",
    name: "Featherlight Trench Coat",
    category: "Outerwear",
    description:
      "Water-resistant cotton gabardine, storm flap, belted waist, removable liner. A modern take on the classic silhouette in a longer, leaner cut.",
    priceCents: 24900,
    imageUrl: "https://images.unsplash.com/photo-1632149933606-fa45623682ee?w=800&q=80",
  },
  {
    slug: "everyday-cotton-tee",
    name: "Everyday Heavyweight Tee",
    category: "Basics",
    description:
      "Boxy fit, 240gsm combed cotton, garment-dyed for a lived-in hand-feel. Ribbed neckline that won't stretch out.",
    priceCents: 3900,
    imageUrl: "https://images.unsplash.com/photo-1622445270936-5dcb604970e7?w=800&q=80",
  },
  {
    slug: "pleated-midi-skirt",
    name: "Pleated Midi Skirt",
    category: "Bottoms",
    description:
      "Knife pleats in a satin-back crepe, elasticated waistband, fully lined. Movement-driven — designed to catch the light as it moves.",
    priceCents: 8900,
    imageUrl: "https://images.unsplash.com/photo-1768745534103-138debdf5ee3?w=800&q=80",
  },
  {
    slug: "coach-quarter-zip",
    name: "Coach Quarter-Zip Pullover",
    category: "Activewear",
    description:
      "Brushed-back fleece interior, half-zip mock neck, kangaroo pocket. Built for temperature swings between indoors and out.",
    priceCents: 8400,
    imageUrl: "https://images.unsplash.com/photo-1772107756927-a3975482b1ef?w=800&q=80",
  },
  {
    slug: "leather-chelsea-boot",
    name: "Leather Chelsea Boot",
    category: "Footwear",
    description:
      "Full-grain leather upper, elastic side gussets, stacked leather heel, Goodyear-welted sole for resoling. Breaks in fast, lasts for years.",
    priceCents: 22900,
    imageUrl: "https://images.unsplash.com/photo-1777987601423-f350ac29b3e9?w=800&q=80",
  },
  {
    slug: "canvas-low-top-sneaker",
    name: "Canvas Low-Top Sneaker",
    category: "Footwear",
    description:
      "Washed canvas upper, vulcanized rubber sole, cushioned insole. A everyday sneaker that gets better with every wear.",
    priceCents: 6900,
    imageUrl: "https://images.unsplash.com/photo-1633781960658-549f4596baaa?w=800&q=80",
  },
  {
    slug: "wool-felt-fedora",
    name: "Wool Felt Fedora",
    category: "Accessories",
    description:
      "100% wool felt, grosgrain ribbon band, pinched crown. Structured enough to hold shape, soft enough to pack for travel.",
    priceCents: 7900,
    imageUrl: "https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?w=800&q=80",
  },
  {
    slug: "structured-leather-tote",
    name: "Structured Leather Tote",
    category: "Accessories",
    description:
      "Vegetable-tanned leather, interior zip and slip pockets, fits a 15-inch laptop. Reinforced base and handles for daily carry.",
    priceCents: 19900,
    imageUrl: "https://images.unsplash.com/photo-1624687943971-e86af76d57de?w=800&q=80",
  },
  {
    slug: "silk-square-scarf",
    name: "Silk Square Scarf",
    category: "Accessories",
    description:
      "100% mulberry silk twill, hand-rolled edges, original print. 90x90cm — wear at the neck, on a bag, or tied at the waist.",
    priceCents: 5900,
    imageUrl: "https://images.unsplash.com/photo-1567521463859-f90919d7559d?w=800&q=80",
  },
  {
    slug: "compression-run-legging",
    name: "Compression Run Legging",
    category: "Activewear",
    description:
      "Four-way stretch, moisture-wicking, flat-seam construction to prevent chafing. High-rise waistband with a zip pocket for keys or a card.",
    priceCents: 7400,
    imageUrl: "https://images.unsplash.com/photo-1617085606193-6b17105cff2a?w=800&q=80",
  },
];

async function main() {
  const rows = CATALOG.map((p) => ({
    slug: p.slug,
    name: p.name,
    category: p.category,
    description: p.description,
    priceCents: p.priceCents,
    currency: "usd",
    imageUrl: p.imageUrl,
    active: true,
  }));

  for (const row of rows) {
    await db
      .insert(products)
      .values(row)
      .onConflictDoUpdate({
        target: products.slug,
        set: {
          name: row.name,
          category: row.category,
          description: row.description,
          priceCents: row.priceCents,
          currency: row.currency,
          imageUrl: row.imageUrl,
          active: row.active,
        },
      });
  }
  console.log(`Seed complete (${CATALOG.length} products upserted).`);
  await pool.end();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});