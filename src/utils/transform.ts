// transform.ts
import type { IngredientWithNutrients } from "@/types";

export function groupIngredientsWithNutrients(
	data: any[]
): IngredientWithNutrients[] {
	const grouped: Record<string, IngredientWithNutrients> = {};

	for (const row of data) {
		if (!grouped[row.productId]) {
			grouped[row.productId] = {
				id: row.productId,
				name: row.productName,
				unit: row.productUnit,
				slug: row.productSlug,
				amount: row.productAmount,
				nutrients: [],
			};
		}

		if (
			row.nutrientId &&
			row.nutrientName &&
			row.nutrientUnit &&
			row.perAmount &&
			row.perUnit &&
			row.nutrientAmount
		) {
			grouped[row.productId].nutrients.push({
				id: row.nutrientId,
				name: row.nutrientName,
				unit: row.nutrientUnit,
				amount: row.nutrientAmount,
				perAmount: row.perAmount,
				perUnit: row.perUnit,
			});
		}
	}

	return Object.values(grouped);
}
