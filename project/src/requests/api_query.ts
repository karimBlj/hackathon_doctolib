import { hospitals, requestForHostpitals } from "./network";

export async function requestHostpitalMean(
    hospitalPort : string
)
{
    // const url = `${process.env.REACT_APP_BASE_URL}:${hospitalPort}/sum_prats_consults/`;
    const url = `http://127.0.0.1:${hospitalPort}/sum_prats_consults`;

    return fetch(
		url,
		{
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			}
		}
	).then(response => {
		if (!response.ok) {
			const errorMessage = response.text()
			// throw new Error(`HTTP error! Status: ${response.statusText}, Message: ${errorMessage}`);
            return [0, 0]
		}
		return response.json()
	}).then(data => {
		return data;
	})
}


export async function requestMean()
{
    const meanList = await requestForHostpitals(requestHostpitalMean)
    const reduced = meanList.reduce((prev, current) => [prev[0] + current[0], prev[1] + current[1]], [0, 0])
    const res = reduced[1]/reduced[0]
    return res
}