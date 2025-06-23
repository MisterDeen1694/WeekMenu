import { column, defineDb, defineTable } from "astro:db";

const Recipe = defineTable({
	columns: {
		id: column.text({ primaryKey: true }),
		title: column.text(),
		author: column.text({ optional: true }),
		source: column.text({ optional: true }),
		cover: column.text(),
		portionSize: column.number(),
	},
});

const Ingredient = defineTable({
	columns: {
		id: column.text({ primaryKey: true }),
		name: column.text(),
		unit: column.text(),
		slug: column.text({ unique: true }),
	},
});

const RecipeIngredient = defineTable({
	columns: {
		id: column.text({ primaryKey: true }),
		recipeId: column.text(),
		ingredientId: column.text(),
		amount: column.number(),
	},
	foreignKeys: [
		{
			columns: ["recipeId"],
			references: () => [Recipe.columns.id],
		},
		{
			columns: ["ingredientId"],
			references: () => [Ingredient.columns.id],
		},
	],
});

const RecipeInstruction = defineTable({
	columns: {
		id: column.text({ primaryKey: true }),
		recipeId: column.text(),
		stepNumber: column.number(),
		instruction: column.text(),
		image: column.text({ optional: true }),
	},
	foreignKeys: [
		{
			columns: ["recipeId"],
			references: () => [Recipe.columns.id],
		},
	],
});

// https://astro.build/db/config
export default defineDb({
	tables: { Recipe, Ingredient, RecipeIngredient, RecipeInstruction },
});
