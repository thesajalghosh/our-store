let products = {
    data: [
      {
        productName: "cake item",
        category: "cake",
        price: "$5",
        image: "images/cake-1.jpg",
      },
      {
        productName: "CupCake item",
        category: "cupcake",
        price: "$5",
        image: "images/cupcake-1.jpg",
      },
      {
        productName: "sweet item",
        category: "sweet",
        price: "$5",
        image: "images/sweet-1.jpg",
      },
      {
        productName: "Doughnut item",
        category: "doughnut",
        price: "$5",
        image: "images/doughnut-1.jpg",
      },
      {
        productName: "Cake item",
        category: "cake",
        price: "$5",
        image: "images/cake-2.jpg",
      },
      {
        productName: "CupCake item",
        category: "cupcake",
        price: "$5",
        image: "images/cupcake-2.jpg",
      },
      {
        productName: "Sweet item",
        category: "sweet",
        price: "$5",
        image: "images/sweet-2.jpg",
      },
      {
        productName: "Doughnut item",
        category: "doughnut",
        price: "$5",
        image: "images/doughnut-2.jpg",
      },
      {
        productName: "Cake item",
        category: "cake",
        price: "$5",
        image: "images/cake-3.jpg",
      },
      {
        productName: "CupCake item",
        category: "cupcake",
        price: "$5",
        image: "images/cupcake-3.jpg",
      },
      {
        productName: "sweet item",
        category: "sweet",
        price: "$5",
        image: "images/sweet-3.jpg",
      },
      {
        productName: "Doughnut item",
        category: "doughnut",
        price: "$5",
        image: "images/doughnut-3.jpg",
      },
     
    ],
  };

  for(let i of products.data)
  {
      const card = document.createElement("div");
      card.classList.add("card", i.category, "hide");

      

      const imageContainer = document.createElement("div");
      imageContainer.classList.add("imageContainer");

      const image = document.createElement("img");
   
      image.setAttribute("src",i.image);

      imageContainer.appendChild(image);
      card.appendChild(imageContainer);

      const container = document.createElement("div");
      container.classList.add("container");

      const name = document.createElement("h5");
      name.classList.add("product__name");
      name.innerText = i.productName.toUpperCase();
      container.appendChild(name);

      const price = document.createElement("h5");
      price.classList.add("product__price");
      price.innerText = i.price;

      container.appendChild(price);

      card.appendChild(container);
      document.getElementById("product").appendChild(card);
  }

// let heading = document.createElement("h1");
// heading.textContent = "Hello, World!";

// document.getElementById("product").appendChild(heading)


function filterProduct(value)
{
    let buttons = document.querySelectorAll(".button");
    buttons.forEach((button) => {
     
      if (value.toUpperCase() === button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });


    let elements = document.querySelectorAll(".card");
    elements.forEach((element)=>{
        if(value === "all"){
        element.classList.remove("hide");
        }
        else {
          
            if (element.classList.contains(value)) {
           
              element.classList.remove("hide");
            }
            else{
                element.classList.add("hide")
            }
        }
    })
}
let input = document.getElementById("search__input")

document.getElementById("search__input").addEventListener('input', ()=>{


    let value = input.value.toUpperCase();
    

    let elements = document.querySelectorAll(".product__name");
    let cards = document.querySelectorAll(".card");

    elements.forEach((element, index) => {
        
        if (element.innerText.includes(value)) {
         
          cards[index].classList.remove("hide");
        } else {
         
          cards[index].classList.add("hide");
        }
      });

})

window.onload = () => {
    filterProduct("all");
  };