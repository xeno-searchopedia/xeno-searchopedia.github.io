// --- CONSTANTS ---

const AFFINITY_MISSION_TYPE = "Affinity";
const AUGMENT_TYPE = "Augment";
const BASIC_MISSION_TYPE = "Basic";
const ENEMY_TYPE = "Enemy";
const COLLECTIBLE_TYPE = "Collectible";
const GROUND_ARMOR_TYPE = "Ground";
const MATERIAL_TYPE = "Material";
const NORMAL_MISSION_TYPE = "Normal";
const RESOURCE_TYPE = "Resource";
const SKELL_FRAME_TYPE = "Frame";
const SUPERWEAPON_TYPE = "Superweapon";
const FN_MAP_URL = "https://frontiernav.net/wiki/xenoblade-chronicles-x/visualisations/maps/entities/site";
const FORMATTED_ARRAY_DATABASE_URL = "./data/formattedArrayDatabase.json";
const WIKI_URL = "https://www.xenoserieswiki.org/wiki/";

const FEEDBACK_FORM_URL = "https://form.jotform.com/250710695236154";

let siteData = [];
let pinnedData = [];

// --- MAIN SITE FUNCTIONS ---

window.addEventListener("DOMContentLoaded", () => {
  loadPage();
});

function loadPage() {
  loadSiteData(FORMATTED_ARRAY_DATABASE_URL);
  loadPinData();
  loadAboutTab();
  loadEventHandlers();
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
    })
  });
}

function loadPinData() {
  const storedPins = JSON.parse(localStorage.getItem("pins"));
  if (storedPins !== null && storedPins !== undefined) {
    pinnedData = storedPins;
    renderPinnedList();
  }
}

function loadAboutTab() {
  document.getElementById("about-tab-pane").innerHTML = `
    <a href="${FEEDBACK_FORM_URL}" target="_blank">Leave feedback or bug reports here!</a><br />
    <br /><br />
    How to use:<br />
    - Simply search for whatever enemy, collectible, drop, FrontierNav resource, or species needed!<br />
    - Clicking on the ▼ will extend the cell and show more information for any entity available.<br />
    - Clicking on the Pin text will add that entity to the Pinned tab for easy and fast reference. This can be especially helpful when having to grind for a large amount of materials that can potentially take 10s of hours to acquire. Think of it as a shopping list!<br />
    - Clicking on searchable elements within a cell will automatically search for that element. This will allow for quicker access to information. For example, you need specific drop information from Simius. You search "Simius", you open "Iron Simius". You click into "Green Simius Mane" and pin it. You click "Demetrio, the Tempestuous". You click "Simius" and repeat!<br />
    - Links on the cell title will open a new tab to the Xeno Series Wiki entry for that entity.<br />
    - Links on FN sites will open a new tab to the same site on the interactive map on FrontierNav, the Interactive Video Game Wiki.<br />
    - Listed in dropped materials data are recommendations. These are opinion based and hand picked suggestions for which enemy is the best to fight to grind for each specific drop. These may not be the truly optimal enemies to fight as there are over 500 dropped materials (and counting) in the game. If you know of a recommendation that is better than what is displayed on the site, please reach out with information! These were all hand picked over the course of two days and therefore there is potential for mistakes. However, do keep in mind that the recommendations are based on a layman's experience with the game and anything that would be more optimal with specific builds goes against that experience.
    <br /><br />
    TODO:<br />
    - Dark Mode<br />
    - Sorting<br />
    - Filters<br />
    - More elements to search by<br />
    - FN Site data<br />
    - Add Xenoblade Chronicles X: Definitive Edition data<br />
    <br /><br />
    ---<br />
    <br /><br />
    The Xenoblade Chronicles X Searchopedia site was conceptualized after I completed a grueling 100% run of Xenoblade Chronicles X on the Wii U in 2022. While I loved the experience and the game, keeping track of all the things I needed to grind in order to beat the hardest fights in the game was quite a pain. This frustration mostly came from having to go back and forth through a handful of sources to research enemies and materials. The goal of this website is to be a (mostly) one-stop shop to get the main information needed for those grinds, while also supplying FrontierNav and wiki links for further, deeper information. At the very least, even if these links are necessary, at least users should be able to just come to this site, quickly search for what they need, and move on to a source that is more helpful for them. Additionally, I hope to keep open communication with the community so that requests and ideas can be integrated into the site without having to worry about navigating and modifying these other heavily-structured resources. The website is built with simple HTML, CSS, and Javascript and utilizes the flexibilty of JSON objects and arrays to easily modify and structure data.<br />
    <br />
    No user data is collected through the site. No analytics will be implemented and any data collected about the user experience will be through user-submitted feedback.<br />
    <br />
    Cookies are implemented to allow pinned elements to persist when the site is left or refreshed. They contain no session data or user data. Cookies are deleted when a pinned element is un-pinned.<br />
    <br />
    Credits:<br />
    <a href="https://fourthstrongest.github.io/" target="_blank">FourthStrongest</a> (they/them): Concept, Web Development, Data Manipulation, Data Collection<br />
    Addam Kosmos: UI, Rubber Ducking, and Moral Support<br />
    <a href="https://www.xenoserieswiki.org/wiki/Main_Page" target="_blank">Xeno Series Wiki</a> and related Discord Server: Consultation understanding the raw data and Wiki Templates, Additional Data<br />
    Jahed from <a href="https://frontiernav.net/wiki/xenoblade-chronicles-x" target="_blank">FrontierNav</a>: Suppling Core Data and just being an awesome site<br />
    <a href="https://www.reddit.com/r/XenobladeChroniclesX/comments/s70gjt/xcx_player_guides_complete_enemy_information_and/" target="_blank">u/ExpressPumpkin7736</a>: <a href="https://docs.google.com/spreadsheets/d/1m5kKS_69chohllO4r5xaP3_aMKbwmxeOMQq7CMhVyLc/edit?gid=0#gid=0" target="_blank">Well Concentrated Enemy Data</a><br />
    <br />
    Special shout out to <a href="https://www.reddit.com/r/XenobladeChroniclesX/comments/104yfgw/the_ultimate_100_guide/" target="_blank">u/Vapor0907</a> for their incredible work on the <a href="https://docs.google.com/spreadsheets/d/12WOSrIc5NIFiywWcukl1ADoXuTuboEXEJe8CNi9Jlr4/edit?gid=1284138622#gid=1284138622" target="_blank">Google Sheets 100% Completion Guide</a>. This guide heavily carried me through my own 100% playthrough and inspired me more than any other resource to make this site.<br />
    <br />
    Thank you all so much!<br />
  `;
}

function loadEventHandlers() {
  var tabs = document.querySelectorAll("button[data-bs-toggle='tab']");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("shown.bs.tab", function (event) {
      if (event.target.id === "about-tab-button") {
        document.getElementById("searchBar").style.display = "none";
      } else {
        document.getElementById("searchBar").style.display = "block";
      }
    });
  }
}

// --- CELL FUNCTIONS

function renderCells(data, listId) {
  let contentStr = `<ul id="${listId}" class="list-group">`;
  data.forEach((datum) => {
    if (!(datum.type === ENEMY_TYPE && (datum.materials === undefined || datum.materials.length === 0))) {
      const filteredName = datum.name.replace(/\s/g, "").replace(/'/g, "").replace(/,/g, "").replace(/-/g, "");
      const id = `${filteredName}${listId === "pinList" ? "-clone" : ""}`;
      contentStr += `<li class="list-group-item"><div class="d-flex justify-content-between">`
        + `<div><a href="${WIKI_URL}${datum.name}" target="_blank">${datum.name}</a>`
        + `<a class="btn btn-white text-primary" href="#${filteredName}" text-primary" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="${filteredName}">▼</a></div>`
        + `<div><a id="${filteredName}-pin" class="btn btn-white text-primary" text-primary" role="button" onclick="pinToggle(this)" data-pinned="${!!(localStorage.getItem(filteredName + "-pin"))}" data-name="${datum.name}">`
        + `<img src="/assets/icons/pin-angle${localStorage.getItem(filteredName + "-pin") ? "-fill" : ""}.svg" alt="Bootstrap"></a>`;
      if (datum.isCompletable) {
        contentStr += `Complete: <input type="checkbox" id="${id}-checked" data-name="${datum.name}" data-parent-id="${id}" onchange="checkboxToggle(this)" ${localStorage.getItem(filteredName + "-checked") ? 'checked' : ''}>`
      }
      contentStr += `</div></div><div class="collapse text-dark" id="${id}">`;
      contentStr += renderRow(datum) + `</div></li>`;
    }
  });
  contentStr += `</ul>`;
  

  return contentStr;
}

// -- ROW FUNCTIONS

function printList(label, list) {
  let returnString = `<span>${label}`;
  if (list.length > 1 && label[label.length - 1] !== "s") {
    returnString += "s";
  }
  returnString += ": "
  for (let i = 0; i < list.length; i++) {
    if (isNaN(list[i][0])) {
      if (label === "Species") {
        returnString += `<span data-name="${list[i]}" onclick="search(this.dataset.name)">${list[i]}</span>`;
      } else {
        returnString += list[i];
      }
    } else {
      const site = list[i].slice(0, 3);
      returnString += `<a href="${FN_MAP_URL}${site}" target="_blank">${list[i]}</a>`;
    }
    if (i !== list.length - 1) {
      returnString += ", ";
    }
  }
  return returnString + "</span>";
}

function printMaterialSourcePairs(materials, sources) {
  let returnString = "<p>Drops:<br />";
  for (let i = 0; i < materials.length; i++) {
    returnString += `- <span data-name="${materials[i]}" onclick="search(this.dataset.name)">${materials[i]}</span> from `;
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
  return `${returnString}</p>`;
}

function renderRow(datum) {
  let rowString = "";
  switch (datum.type) {
    case ENEMY_TYPE: {
      // TODO: ADD WEAPON BRAND AND WEIGHT LOGIC
      rowString += `<div class="card card-body" data-species=${datum.species} data-is-tyrant=${datum.isTyrant}>`
        + `Species: <span data-name="${datum.species}" onclick="search(this.dataset.name)">${datum.species}</span> <br />`
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
        + `<p>Recommended Source: <span data-name="${datum.enemy}" onclick="search(this.dataset.name)">${datum.enemy}</span></p>`;
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
    const newPin = siteData.find((itmInner) => itmInner.name === pin.dataset.name);
    const icon = pin.getElementsByTagName("img")[0];
    icon.src = "/assets/icons/pin-angle-fill.svg";
    pinnedData.push(newPin);
  }
}

function removePin(pin) {
  const pinnedPair = document.getElementById(pin.id);
  localStorage.removeItem(pin.id);
  pinnedData = pinnedData.filter((element) => element.name !== pin.dataset.name);
  const icon = pin.getElementsByTagName("img")[0];
  icon.src = "/assets/icons/pin-angle.svg";
  const iconPair = pinnedPair.getElementsByTagName("img")[0];
  iconPair.src = "/assets/icons/pin-angle.svg";
  pinnedPair.setAttribute("data-pinned", pin.dataset.pinned);
}

function renderPinnedList() {
  localStorage.setItem("pins", JSON.stringify(pinnedData));
  const pinnedList = document.getElementById("pin-tab-pane");
  pinnedList.innerHTML = renderCells(pinnedData, "pinList");
}

// --- CHECKBOX FUNCTIONS

function checkboxToggle(checkbox) {
  if (checkbox.checked) {
    localStorage.setItem(checkbox.id, checkbox.checked);
  } else {
    localStorage.removeItem(checkbox.id);
  }
  const cell = siteData.find((itmInner) => itmInner.name === checkbox.dataset.name);
  const clonedCell = pinnedData.find((itmInner) => itmInner.name === checkbox.dataset.name);
  if (clonedCell !== undefined && cell.name === clonedCell.name) {
    let originalCheck;
    let clonedCheck;
    if (!checkbox.dataset.parentId.includes("-clone")) {
      originalCheck = document.getElementById(checkbox.id);
      clonedCheck = document.getElementById(`${checkbox.id.split("-")[0]}-clone-checked`);
      clonedCheck.checked = originalCheck.checked;
      if (checkbox.checked) {
        localStorage.setItem(`${checkbox.id.split("-")[0]}-clone-checked`, checkbox.checked);
      } else {
        localStorage.removeItem(`${checkbox.id.split("-")[0]}-clone-checked`);
      }
    } else {
      originalCheck = document.getElementById(`${checkbox.id.split("-")[0]}-checked`);
      clonedCheck = document.getElementById(checkbox.id);
      originalCheck.checked = clonedCheck.checked;
      if (checkbox.checked) {
        localStorage.setItem(`${checkbox.id.split("-")[0]}-checked`, checkbox.checked);
      } else {
        localStorage.removeItem(`${checkbox.id.split("-")[0]}-checked`);
      }
    }
  }
}

// --- SEARCH FUNCTIONS

function search(input) {
  const searchBar = document.getElementById("searchBar");
  if (input === null || input === undefined || input.length === 0) {
    input = searchBar.value.toUpperCase();
  } else {
    searchBar.value = input;
  }
  input = input.toUpperCase();
  // const input = searchBar.value.toUpperCase();
  // TODO: apply to both tabs
  const ul = document.getElementById("mainList");
  const li = ul.getElementsByTagName("li");

  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    let species = li[i].getElementsByTagName("div")[0].getElementsByTagName("div")[0].dataset.species;
    let isTyrant = li[i].getElementsByTagName("div")[0].getElementsByTagName("div")[0].dataset.isTyrant === "true";
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(input) > -1 || (species !== undefined && species.toUpperCase().indexOf(input) > -1) || (input.includes("TYRANT") && isTyrant)) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

// TODO
// function filter() {

// }
