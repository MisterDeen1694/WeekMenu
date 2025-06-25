import type { Ingredient } from "./ingredient";
import type { Nutrient } from "./nutrient";

export type IngredientWithNutrients = Ingredient & {
	nutrients: Nutrient[];
};
