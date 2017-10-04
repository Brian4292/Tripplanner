
const mapboxgl = require("mapbox-gl");
const { Map } = mapboxgl;
const buildMarker = require('./marker.js');

mapboxgl.accessToken = 'pk.eyJ1IjoiY2Fzc2lvemVuIiwiYSI6ImNqNjZydGl5dDJmOWUzM3A4dGQyNnN1ZnAifQ.0ZIRDup0jnyUFVzUa_5d1g';

const map = new Map({
	container: 'map',
	center : [-74.009, 40.705], // FullStack coordinates
	zoom: 12,
	style: "mapbox://styles/mapbox/streets-v10"
})

const marker = buildMarker('fs', [-74.009, 40.705])
marker.addTo(map)

window.fetch('/api')
.then(result => {
	return result.json()
})
.then(data => {
	const selectLoop = Object.keys(data)
	selectLoop.forEach((key) => {
		const select = document.getElementById(`${key}-choices`)
		data[key].forEach((elem) => {
			let option = document.createElement('option');
			option.value = elem.name;
			option.text = elem.name;
			select.appendChild(option)
		})
	})
})
