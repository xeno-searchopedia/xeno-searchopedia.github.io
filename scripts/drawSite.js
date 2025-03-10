// --- CONSTANTS ---

const ENEMY_TYPE = "Enemy";
const COLLECTIBLE_TYPE = "Collectible";
const RESOURCE_TYPE = "Resource";
const MATERIAL_TYPE = "Material";
const FORMATTED_ARRAY_DATABASE_URL = "./data/formattedArrayDatabase.json";

let siteData = [];
let pinnedData = [];

// --- MAIN SITE FUNCTIONS ---

window.addEventListener("DOMContentLoaded", () => {
  loadPage();
});

function loadPage() {
  loadSiteData(FORMATTED_ARRAY_DATABASE_URL);
  loadPinData();
}

function loadSiteData(url) {
  const searchBar = document.getElementById("searchBar");
  searchBar.value = "";

  return new Promise(() => {
    fetch(url).then(rep => rep.json())
    .then(data => {
      // data = sortByName(data, -1);
      siteData = data;
      document.getElementById("main-tab-pane").innerHTML = renderCells(data, "mainList");
    });
  });
}

function loadPinData() {
  const storedPins = JSON.parse(localStorage.getItem("pins"));
  if (storedPins !== null && storedPins !== undefined) {
    pinnedData = storedPins;
    renderPinnedList();
  }
}

// --- CELL FUNCTIONS

function renderCells(data, listId) {
  let contentStr = `<ul id="${listId}" class="list-group">`;
  data.forEach((datum) => {
    if (!(datum.type === ENEMY_TYPE && datum.materials === undefined)) {
      let filteredName = datum.name.replace(/\s/g, "").replace(/'/g, "").replace(/,/g, "");
      contentStr += `<li class="list-group-item"><p>`
        + `<a href="https://www.xenoserieswiki.org/wiki/${datum.name}" target="_blank">${datum.name}</a>`
        + `<a class="btn btn-white text-primary" href="#${filteredName}" text-primary" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="${filteredName}">▼</a>`
        // + `<input type="checkbox" id="${filteredName}-pin" data-name="${datum.name}" onclick="pinToggle(this)" ${localStorage.getItem(filteredName + "-pin") ? 'checked' : ''}>`
        + `<a id="${filteredName}-pin" class="btn btn-white text-primary" text-primary" role="button" onclick="pinToggle(this)" data-pinned="${!!(localStorage.getItem(filteredName + "-pin"))}" data-name="${datum.name}">${localStorage.getItem(filteredName + "-pin") ? "Pinned" : "Pin"}</a>`
        + `</p><div class="collapse text-dark" id="${filteredName}">`;
      contentStr += renderRow(datum) + `</div></li>`;
    }
  });
  contentStr += `</ul>`;

  return contentStr;
}

// -- ROW FUNCTIONS

function printList(label, locations) {
  let returnString = label;
  if (locations.length > 1 && label[label.length - 1] !== "s") {
    returnString += "s";
  }
  returnString += ": "
  for (let i = 0; i < locations.length; i++) {
    returnString += locations[i];
    if (i !== locations.length - 1) {
      returnString += ", ";
    }
  }
  return returnString;
}

function printMaterialSourcePairs(materials, sources) {
  let returnString = "Drops:<br />";
  for (let i = 0; i < materials.length; i++) {
    returnString += `- ${materials[i]} from `;
    if (sources[i] === "All") {
      returnString += "Main Body";
    } else {
       returnString += `${sources[i]} Appendage`;
    }
    if (sources[i].includes("&")) {
      returnString += `s`;
    }
    if (i !== materials.length - 1) {
      returnString += "<br />";
    }
  }
  return returnString;
}

function renderRow(datum) {
  let rowString = "";
  switch (datum.type) {
    case ENEMY_TYPE: {
      // TODO: ADD WEAPON BRAND AND WEIGHT LOGIC
      rowString += `<div class="card card-body" data-species=${datum.species}>`
        + `Species: ${datum.species} <br />`
        + `Continent: ${datum.continent} <br />`
        + `${printList("Location", datum.location)} <br />`;
      if (datum.minLevel === datum.maxLevel) {
        rowString += `Level: ${datum.minLevel}`;
      } else {
        rowString += `Level Range: ${datum.minLevel}-${datum.maxLevel}`;
      }
      rowString += `<br />${printMaterialSourcePairs(datum.materials, datum.droppedSource)}`;
      break;
    }
    case COLLECTIBLE_TYPE: {
      rowString += `<div class="card card-body">`
        + `Continent: ${datum.continent} <br />`
        + `${printList("Location", datum.location)}`;
      break;
    }
    case RESOURCE_TYPE: {
      rowString += `<div class="card card-body">`
        + `${printList("Site", datum.sites)}`;
      break;
    }
    case MATERIAL_TYPE: {
      rowString += `<div class="card card-body">`
        + `${printList("Species", datum.species)} <br />`
        + `Appendage: ${datum.appendage === "All" ? "Main Body" : datum.appendage} <br />`
        + `Recommended Source: ${datum.enemy}`;
      break;
    }
  }

  rowString += "</div>";
  return rowString;
}

// --- PIN FUNCTIONS

function pinToggle(pin) {
  pin.setAttribute("data-pinned", !(pin.dataset.pinned === "true"));
  if (pin.dataset.pinned === "true") {
    addPin(pin);
  } else {
    removePin(pin);
  }
  renderPinnedList();
}

function addPin(pin) {
  localStorage.setItem(pin.id, pin.dataset.pinned);
  if (!pinnedData.includes(pin)) {
    const datum = siteData.find((itmInner) => itmInner.name === pin.dataset.name);
    pinnedData.push(datum);
    pin.innerText = "Pinned";
  }
}

function removePin(pin) {
  const pinnedPair = document.getElementById(pin.id);
  localStorage.removeItem(pin.id);
  pinnedData = pinnedData.filter((element) => element.name !== pin.dataset.name);
  pin.innerText = "Pin";
  pinnedPair.innerText = "Pin";
  pinnedPair.setAttribute("data-pinned", pin.dataset.pinned);
}

function renderPinnedList() {
  localStorage.setItem("pins", JSON.stringify(pinnedData));
  const pinnedList = document.getElementById("pin-tab-pane");
  pinnedList.innerHTML = renderCells(pinnedData, "pinList");
}

function search() {
  const searchBar = document.getElementById("searchBar");
  const input = searchBar.value.toUpperCase();
  // TODO: apply to both tabs
  const ul = document.getElementById("mainList");
  const li = ul.getElementsByTagName("li");

  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    let species = li[i].getElementsByTagName("div")[0].getElementsByTagName("div")[0].dataset.species;
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(input) > -1 || (species !== undefined && species.toUpperCase().indexOf(input) > -1)) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
