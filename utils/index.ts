export async function fetchCars() {
    const headers = {
		'X-RapidAPI-Key': '2425fb3742mshb21c73cf9265cd0p1c9daajsnc7d3388982db',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}


const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers: headers,
});

const result = await response.json();
return result;

}