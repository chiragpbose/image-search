const access_key = "rwLYMTinzu5jMyVc6R7DsG0J4awHG57ppvbY7PY0jr4";
const random_photo_url = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=10`;
const gallery = document.querySelector(".gallery");
let allImages = ""; //this will store all images

const getImages = () => {
	fetch(random_photo_url)
		.then((res) => res.json())
		.then((data) => {
			allImages = data;
			//console.log(allImages);
			makeImages(allImages);
		});
};

function makeImages(allImages) {
	for (let index = 0; index < allImages.length; index++) {
		let img = document.createElement("img");
		img.src = allImages[index].urls.regular;
		img.classList.add("gallery-img");
		gallery.appendChild(img);
	}
}
getImages();

let searchBoxInput = document.querySelector(".search-box");
//console.log(searchBoxInput.value);
let searchParam = "";
let searchBtn = document.querySelector(".search-btn");
searchBtn.addEventListener("click", (e) => {
	e.preventDefault();
	//console.log(searchBoxInput.value);
	searchParam = searchBoxInput.value;
	const search_photo_url = `https://api.unsplash.com/search/photos?client_id=${access_key}&query=${searchParam}&per_page=10`;
	console.log(searchParam);
	gallery.innerHTML = "";
	fetch(search_photo_url)
		.then((res) => res.json())
		.then((data) => {
			allImages = data.results;
            // console.log(allImages);
			// for (let index = 0; index < allImages.length; index++) {
			// 	let img = document.createElement("img");
			// 	img.src = allImages[index].urls.regular;
			// 	img.classList.add("gallery-img");
			// 	gallery.appendChild(img);
              
			// }
            makeImages(allImages);
		});
});
