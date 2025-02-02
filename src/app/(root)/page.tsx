import CTA from "@/components/sections/cta/default";
import FAQ from "@/components/sections/faq/default";
import Hero from "@/components/sections/hero/default";
import Items from "@/components/sections/items/default";
import Stats from "@/components/sections/stats/default";

// import { sql } from "drizzle-orm";
// import { db } from "@/db";

export default async function Home() {
  // const results = await db.execute(sql`SELECT current_database()`);
  // console.log(results);
  return (
    <>
      <Hero />
      {/* {JSON.stringify(results)} */}
      <Items />
      <Stats />
      <FAQ />
      <CTA />
    </>
  );
}
