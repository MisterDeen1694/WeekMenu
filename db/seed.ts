import { db, Product, Recipe, RecipeProducts } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Product).values([
		{
			id: "knoflook",
			name: "Knoflook",
			measureUnits: "teen",
		},
	]);

	await db.insert(Recipe).values([
		{
			id: "soep",
			title: "Knoflook Soep",
			author: "Jason",
			source: "https://action.com/",
			cover: "https://i.ytimg.com/an_webp/vTht0OygLWA/mqdefault_6s.webp?du=3000&sqp=CIDI08EG&rs=AOn4CLBuOvZEppjDKjPnGfMqxJKa-nbt2g",
		},
	]);

	await db.insert(RecipeProducts).values([
		{
			productId: "knoflook",
			recpieId: "soep",
			amount: 6,
		},
	]);
}
