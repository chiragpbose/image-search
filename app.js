const access_key = "H3xJKfc7t1gX-zLpzczmhu63pRoVQ5N8FTKw6u8Yn5U";
const random_photo_url = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=30`;
const gallery = document.querySelector(".gallery");
let allImages = ""; //this will store all images

const getImages = () => {
	fetch(random_photo_url)
		.then((res) => res.json())
		.then((data) => {
			allImages = data;
			makeImages(allImages);
		});
};
function makeImages(allImages) {
	allImages.forEach((image, index) => {
		//console.log(image);
		let img = document.createElement("img");
		img.src = image.urls.regular;
		img.classList.add("gallery-img");
		gallery.appendChild(img);
	});
}
getImages();
