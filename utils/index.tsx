export async function fetchCars() {
    const headers= {
		'X-RapidAPI-Key': '924620d0d7msh13df97b190d369ap119288jsn7444c8a7bfdf',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {
        headers: headers
    })

    const result = await response.json();

    return result;
};
