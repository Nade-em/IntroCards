const container = document.querySelector(".container");

const scrollSpeed = 1; 

container.addEventListener("wheel", (e) => {
  const scrollAmount = e.deltaY * scrollSpeed;
  container.scrollLeft += scrollAmount;
});

fetch("./data.json")
  .then((res) => {
    return res.json(); // Add a return statement here
  })
  .then((data) => {
    data.forEach((ele, index, arr) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const img = document.createElement("img");
      const name = document.createElement("h3");
      const it = document.createElement("p");

      name.textContent = ele.fname;
      img.src = ele.img;
      it.innerText = ele.intro;

      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(it);

      container.appendChild(card);
    });
  })
  .catch((err) => console.log("Error", err));

//   add mew user to data.json

// const form = document.getElementById("user-form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const fname = document.getElementById("fname").value;

//   const intro = document.getElementById("intro").value;
//   //const img = document.getElementById("img").value;

//   const newUser = {
//     fname: fname,
//     intro: intro,
//     // img: img,
//   };

//   fetch("./data.json")
//     .then((response) => response.json())
//     .then((data) => {
//       data.push(newUser);

//       return fetch("./data.json", {
//         method: "PUT", // Use PUT method to update the file
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });
//     })
//     .then(() => {
//       console.log("New user added successfully.");
//       // Optionally, you can reload the page or update the UI here
//     })
//     .catch((error) => console.error("Error adding new user:", error));
// });
