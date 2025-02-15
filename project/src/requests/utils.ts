export async function executeQuery(
    endpoint : string,
    port     : string,
)
{
    const url = `http://127.0.0.1:${port}/${endpoint}`;

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