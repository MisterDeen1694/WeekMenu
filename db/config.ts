import { column, defineDb, defineTable } from "astro:db";

const Recipe = defineTable({
	columns: {
		id: column.text({ primaryKey: true }),
		title: column.text(),
		author: column.text({ optional: true }),
		source: column.text({ optional: true }),
		cover: column.text(),
		portionSize: column.number(),
		totalKcal: column.number(),
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

const Nutrient = defineTable({
	columns: {
		id: column.text({ primaryKey: true }),
		name: column.text(),
		unit: column.text(),
	},
});

const IngredientNutrient = defineTable({
	columns: {
		id: column.text({ primaryKey: true }),
		ingredientId: column.text(),
		nutrientId: column.text(),
		amount: column.number(),
		perAmount: column.number(),
		perUnit: column.text(),
	},
	foreignKeys: [
		{
			columns: ["ingredientId"],
			references: () => [Ingredient.columns.id],
		},
		{
			columns: ["nutrientId"],
			references: () => [Nutrient.columns.id],
		},
	],
});

const RecipeTime = defineTable({
	columns: {
		id: column.text({ primaryKey: true }),
		recipeId: column.text(),
		defrostTime: column.number({ optional: true }),
		cookingTime: column.number({ optional: true }),
		ovenTime: column.number({ optional: true }),
		additionalWaitTime: column.number({ optional: true }),
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
	tables: {
		Recipe,
		Ingredient,
		RecipeIngredient,
		RecipeInstruction,
		Nutrient,
		IngredientNutrient,
		RecipeTime,
	},
});
