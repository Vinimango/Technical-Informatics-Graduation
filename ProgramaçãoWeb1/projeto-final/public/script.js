import { BalldontlieAPI } from "https://cdn.jsdelivr.net/npm/@balldontlie/sdk@1.2.2/+esm";

let array1;
const token = "39ca8ef3-3c8e-4334-9dad-191f2040d87f";

document.addEventListener("DOMContentLoaded", () => {
  const api = new BalldontlieAPI({ apiKey: token });
  document.querySelector("video").removeAttribute("controls");
  // Using async/await
  async function getInfo() {
    try {
      const players = await api.nba.getPlayers({});
      array1 = players.data;
      const yharin = document.getElementById("69");
      array1.forEach((element) => {
        const moonlord = document.createElement("div");
        moonlord.classList.add("col-md-4");

        const calamitas = document.createElement("div");

        calamitas.classList.add("card");
        calamitas.classList.add("m-5");
        calamitas.classList.add("shadow");
        calamitas.classList.add("width");
        calamitas.classList.add("overflow-hidden");
        moonlord.appendChild(calamitas);

        const devourerofgods = document.createElement("img");
        devourerofgods.classList.add("card-img-top");
        devourerofgods.classList.add("bg-primary");
        devourerofgods.classList.add("austrumaureus");
        const fargosouls = (element.first_name + element.last_name)
          .toLowerCase()
          .replace(/\s/g, "");
        devourerofgods.src = "/images/players/" + fargosouls + ".jpg";
        devourerofgods.alt =
          "foto do jogador" + element.first_name + " " + element.last_name;
        calamitas.appendChild(devourerofgods);

        const slimegod = document.createElement("div");
        slimegod.classList.add("row");
        calamitas.appendChild(slimegod);

        const slimeking = document.createElement("div");
        slimeking.classList.add("col");
        slimegod.appendChild(slimeking);

        const perforator = document.createElement("div");
        perforator.classList.add("card-body");
        perforator.classList.add("text-center");
        slimeking.appendChild(perforator);

        const hivemind = document.createElement("h5");
        hivemind.classList.add("card-title");
        perforator.appendChild(hivemind);
        hivemind.innerText = element.first_name + " " + element.last_name;

        const udyr = document.createElement("p");
        udyr.classList.add("card-text");
        perforator.appendChild(udyr);
        if (element.draft_year == null) {
          udyr.innerText =
            element.first_name +
            " " +
            element.last_name +
            " não foi draftado " +
            ". Nasceu em " +
            element.country +
            ", " +
            "e fez sua carreira no " +
            element.team.city +
            " " +
            element.team.name +
            ". " +
            "Usou o número " +
            element.jersey_number +
            ".";
        } else {
          udyr.innerText =
            element.first_name +
            " " +
            element.last_name +
            " foi draftado no ano de " +
            "" +
            element.draft_year +
            ", na posição " +
            element.draft_number +
            ". Nasceu em " +
            element.country +
            ", " +
            "e fez sua carreira no " +
            element.team.city +
            " " +
            element.team.name +
            ". " +
            "Usou o número " +
            element.jersey_number +
            ".";
        }

        const baron = document.createElement("a");
        baron.classList.add("btn");
        baron.classList.add("btn-primary");
        baron.textContent = "Expandir";
        baron.href = "/perfil/" + element.first_name + " " + element.last_name;
        perforator.appendChild(baron);

        yharin.appendChild(moonlord);
      });
    } catch (error) {
      console.error(error);
    }
  }

  getInfo();
});
