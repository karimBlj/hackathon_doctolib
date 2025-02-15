import { hospitals, requestForHostpitals } from "./network";
import { executeQuery } from "./utils";

export async function requestHostpitalMean(
    hospitalPort : string
)
{
	return executeQuery("sum_prats_consults", hospitalPort)
}


export async function requestMean()
{
    const meanList = await requestForHostpitals(requestHostpitalMean)
    const reduced = meanList.reduce((prev, current) => [prev[0] + current[0], prev[1] + current[1]], [0, 0])
    const res = reduced[1]/reduced[0]
    return res
}

export async function requestAvgSpecialtiesPratsAmountOverYears(
	hospitalPort : string
)
{
	return executeQuery("avg_specialties_prats_amount_over_years", hospitalPort)
}

export async function requestAvgSpecialties()
{
	const dictsList = await requestForHostpitals(requestAvgSpecialtiesPratsAmountOverYears)
	// console.log(dictsList)
	const meanCardio  = dictsList.reduce((prev, current) => prev + current.cardiologists, 0)
	const meanDentist = dictsList.reduce((prev, current) => prev + current.dentists, 0)
	return {cardio : meanCardio, dentist : meanDentist}
}

export async function requestHospitalPosition(
	hospitalPort : string
)
{
	return executeQuery("metadata", hospitalPort)
}

export async function requestHospitalsPistion()
{
	const spread = 50;

	const hostPositions = await requestForHostpitals(requestHospitalPosition)
	// console.log(hostPositions)
	const res = hostPositions.map(value => ({id : value[0], x: parseInt(value[1]) * spread, y: parseInt(value[2]) * spread}))
	// const res = new Map<string, { x: number; y: number }>(
	// 	hostPositions.map(([name, x, y]) => [name, { x, y }])
	//   )
	return res
	
}