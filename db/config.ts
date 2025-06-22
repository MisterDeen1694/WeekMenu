import { column, defineDb, defineTable } from "astro:db";

const Recipe = defineTable({
	columns: {
		id: column.text({ primaryKey: true }),
		title: column.text(),
		author: column.text(),
		source: column.text(),
		cover: column.text(),
	},
});

const Product = defineTable({
	columns: {
		id: column.text({ primaryKey: true }),
		name: column.text(),
		measureUnits: column.text(),
	},
});

const RecipeProducts = defineTable({
	columns: {
		id: column.text({ primaryKey: true }),
		recpieId: column.text(),
		productId: column.text(),
		amount: column.number(),
	},
	foreignKeys: [
		{
			columns: ["recpieId"],
			references: () => [Recipe.columns.id],
		},
		{
			columns: ["productId"],
			references: () => [Product.columns.id],
		},
	],
});

// https://astro.build/db/config
export default defineDb({
	tables: { Recipe, Product, RecipeProducts },
});
