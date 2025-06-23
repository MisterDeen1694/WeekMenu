import {
	db,
	Ingredient,
	Recipe,
	RecipeIngredient,
	RecipeInstruction,
} from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Ingredient).values([
		{
			id: "i1",
			name: "Bloem",
			unit: "gram",
			slug: "bloem",
		},
	]);

	await db.insert(Ingredient).values([
		{
			id: "i2",
			name: "Suiker",
			unit: "gram",
			slug: "suiker",
		},
	]);

	await db.insert(Ingredient).values([
		{
			id: "i3",
			name: "Zacht of gezouten boter",
			unit: "gram",
			slug: "boterGezout",
		},
	]);

	await db.insert(Recipe).values([
		{
			id: "r1",
			title: "Shortbread",
			source: "Librero",
			cover: "https://www.thermobexta.com.au/wp-content/uploads/2021/12/Shortbread-thermomix-main-1024x683.jpg",
			portionSize: 4,
		},
	]);

	await db.insert(RecipeIngredient).values([
		{
			ingredientId: "i1",
			recipeId: "r1",
			amount: 200,
		},
	]);
	await db.insert(RecipeIngredient).values([
		{
			ingredientId: "i2",
			recipeId: "r1",
			amount: 40,
		},
	]);
	await db.insert(RecipeIngredient).values([
		{
			ingredientId: "i3",
			recipeId: "r1",
			amount: 125,
		},
	]);

	await db.insert(RecipeInstruction).values([
		{
			stepNumber: 1,
			instruction: "Verwarm de oven voor op 170c.",
			recipeId: "r1",
		},
	]);

	await db.insert(RecipeInstruction).values([
		{
			stepNumber: 2,
			instruction:
				"Meng de bloem({amount:bloem}) en de suiker({amount:suiker}), voeg de in stukjes gesneden boter({amount:boterGezout}) toe en meng alles met je vingertoppen to kruim",
			recipeId: "r1",
		},
	]);

	await db.insert(RecipeInstruction).values([
		{
			stepNumber: 3,
			instruction:
				"Druk het deeg in een taartvorm. Kerf er lijnen in met de punt van een mes (zodat je makkelijker punten kunt snijden)",
			recipeId: "r1",
		},
	]);

	await db.insert(RecipeInstruction).values([
		{
			stepNumber: 4,
			instruction:
				"Zet de vorm 20 tot 30 minuten in de oven tot het shortbread net goudgeel is. Laat afkoelen tot lauw, haal uit de vorm en snijd in punten.",
			recipeId: "r1",
		},
	]);
}
