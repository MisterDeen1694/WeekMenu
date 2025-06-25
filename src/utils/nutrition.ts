import type { IngredientWithNutrients } from "@/types";

export function calculateTotalNutrients(
	ingredients: IngredientWithNutrients[]
) {
	const totalNutrientsMap: Record<
		string,
		{ id: string; name: string; unit: string; amount: number }
	> = {};

	ingredients.forEach((ing) => {
		ing.nutrients.forEach((nutrient) => {
			const factor = ing.amount / nutrient.perAmount;
			const scaledAmount = nutrient.amount * factor;

			if (!totalNutrientsMap[nutrient.id]) {
				totalNutrientsMap[nutrient.id] = {
					id: nutrient.id,
					name: nutrient.name,
					unit: nutrient.unit,
					amount: 0,
				};
			}
			totalNutrientsMap[nutrient.id].amount += scaledAmount;
		});
	});

	return Object.values(totalNutrientsMap);
}
