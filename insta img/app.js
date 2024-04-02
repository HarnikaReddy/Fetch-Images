// let colors = ["red", "green", "blue"];

// let firstColor = colors[0];
// let secondColor = colors[1];
// let thirdColor = colors[2];


// let [firstColor, secondColor, thirdColor] = colors;

// function change(){
//     document.body.style.backgroundColor ='yellow'
// }

const letters = '0123456789ABCDEF';

function getRandomColor() {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.body.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomColor();
});





const url = "https://fakestoreapi.com/products";
const imageContainer = document.querySelector("#image-container");

async function fetchImages() {
    try {
        const response = await fetch(url);
        const products = await response.json();


        products.forEach(item => {
            const imageElement = document.createElement("img");
            imageElement.src = item.image;
            imageElement.alt = item.title;
            imageContainer.appendChild(imageElement);
        });
        // console.log(data)
    } catch (error){
        console.error("Error");
    }
}

fetchImages();

let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 3;

loadMoreBtn.onclick = () =>{
    let boxes = [...document.querySelector('#image-container')];
    for (var i=currentItem; i< currentItem+3; i++){
        boxes[i].style.display = 'inline-block';
    }
    currentItem += 3;
  }