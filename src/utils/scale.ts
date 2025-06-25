export function getPortionMultiplier(
	desiredKcal: number | null,
	totalKcal: number | null,
	defaultPortion: number,
	portionParam: string | null
): number {
	if (desiredKcal && totalKcal && totalKcal > 0) {
		return desiredKcal / totalKcal;
	}
	if (portionParam) {
		const portionNumber = parseInt(portionParam);
		if (!isNaN(portionNumber)) {
			return portionNumber / defaultPortion;
		}
	}
	return 1;
}
