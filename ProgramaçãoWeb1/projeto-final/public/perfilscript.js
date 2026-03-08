let array1 = [1, 2, 3];
let array2 = [];

document.addEventListener("DOMContentLoaded", () => {
  var gokussj4 = document
    .getElementById("12")
    .textContent.toLowerCase()
    .replace(/\s/g, "");

  async function getInfo() {
    try {
      const yharin = document.getElementById("carr_inner");
      array1.forEach((element) => {
        const skeletron = document.createElement("div");
        skeletron.classList.add("carousel-item");
        if (element === 1) {
          skeletron.classList.add("active");
        }

        const trinityforce = document.createElement("img");
        trinityforce.classList.add("d-block");
        trinityforce.classList.add("w-100");
        trinityforce.classList.add("carmin");
        trinityforce.src = "/images/players/" + gokussj4 + element + ".jpg";
        trinityforce.alt = "Slide" + element;

        skeletron.appendChild(trinityforce);

        yharin.appendChild(skeletron);
      });
    } catch (error) {
      console.error(error);
    }
  }

  getInfo();
});
