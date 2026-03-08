import { BalldontlieAPI } from "https://cdn.jsdelivr.net/npm/@balldontlie/sdk@1.2.2/+esm";
const token = "39ca8ef3-3c8e-4334-9dad-191f2040d87f";
let array1;

document.addEventListener("DOMContentLoaded", () => {
  const api = new BalldontlieAPI({ apiKey: token });

  async function getInfo() {
    try {
      const teams = await api.nba.getTeams({});
      array1 = teams.data;

      const yharin = document.getElementById("carr_inner");

      array1.forEach((element) => {
        const secondiv = document.createElement("div");
        secondiv.classList.add("carousel-item");
        if (element.id === 1) {
          secondiv.classList.add("active");
        }

        const banner = document.createElement("img");
        banner.classList.add("d-block");
        banner.classList.add("w-100");
        banner.classList.add("carmin");

        const team_name = element.full_name.toLowerCase().replace(/\s/g, "");

        banner.src = "/images/teams/" + team_name + ".jpg";
        banner.alt = "Foto do time: " + element.full_name;
        secondiv.appendChild(banner);

        yharin.appendChild(secondiv);
      });
    } catch (error) {
      console.error(error);
    }
  }

  getInfo();
});
