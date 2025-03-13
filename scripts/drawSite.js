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
    <h3 style="text-align: center"><a href="${FEEDBACK_FORM_URL}" target="_blank">Leave feedback or bug reports here!</a></h3>
    <br /><br />
    <h3>How to use:</h3>
    <ul>
      <li>Simply search for whatever enemy, collectible, drop, FrontierNav resource, or species needed!</li>
      <li>Clicking on the ▼ will extend the cell and show more information for any entity available.</li>
      <li>Clicking on the Pin text will add that entity to the Pinned tab for easy and fast reference. This can be especially helpful when having to grind for a large amount of materials that can potentially take 10s of hours to acquire. Think of it as a shopping list!</li>
      <li>Clicking on searchable elements within a cell will automatically search for that element.</li>
      <li>Links on the cell title will open a new tab to the Xeno Series Wiki entry for that entity.</li>
      <li>Links on FN sites will open a new tab to the same site on the interactive map on FrontierNav, the Interactive Video Game Wiki.</li>
      <li>Listed in dropped materials data are recommendations. These are opinion based and hand picked suggestions for which enemy is the best to fight to grind for each specific drop. If you know of a recommendation that is better than what is displayed on the site, please let me know via the feedback form! Do keep in mind that the recommendations are not based on a optimal builds and should assume the best recommendation for the casual player.</li>
    </ul>
    <br />
    <h5>TODO:</h5>
    <ul>
      <li>Dark Mode</li>
      <li>Sorting</li>
      <li>Filters</li>
      <li>More elements to search by</li>
      <li>FN Site data</li>
      <li>Add Xenoblade Chronicles X: Definitive Edition data</li>
    </ul>
    <br />
    <hr>
    <br /><br />
    The Xenoblade Chronicles X Searchopedia site was conceptualized after I completed a grueling 100% run of Xenoblade Chronicles X on the Wii U in 2022. While I loved the experience and the game, keeping track of all the things I needed to grind in order to beat the hardest fights in the game was quite a pain. This frustration mostly came from having to go back and forth through a handful of sources to research enemies and materials. The goal of this website is to be a (mostly) one-stop shop to get the main information needed for those grinds, while also supplying FrontierNav and wiki links for further, deeper information. At the very least, even if these links are necessary, at least users should be able to just come to this site, quickly search for what they need, and move on to a source that is more helpful for them. Additionally, I hope to keep open communication with the community so that requests and ideas can be integrated into the site without having to worry about navigating and modifying these other heavily-structured resources. The website is built with simple HTML, CSS, and Javascript and utilizes the flexibilty of JSON objects and arrays to easily modify and structure data.<br />
    <br />
    No user data is collected through the site. No analytics will be implemented and any data collected about the user experience will be through user-submitted feedback.<br />
    <br />
    Cookies are implemented to allow pinned elements to persist when the site is left or refreshed. They contain no session data or user data. Cookies are deleted when a pinned element is un-pinned.<br />
    <br />
    <h5>Credits:</h5>
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
      const filteredName = `${datum.name.replace(/\s/g, "").replace(/'/g, "").replace(/,/g, "").replace(/-/g, "")}${datum.type === BASIC_MISSION_TYPE && datum.isTyrant ? "Mission" : ""}`;
      const id = `${filteredName}${listId === "pinList" ? "-clone" : ""}`;
      let urlFragment = "";
      if (datum.type === BASIC_MISSION_TYPE && datum.isTyrant) {
        urlFragment = `${datum.name}_(mission)`;
      } else if (datum.type === AUGMENT_TYPE) {
        const splitName = datum.name.split(" ");
        if (splitName[splitName.length - 1] === "I"
          || splitName[splitName.length - 1] === "V"
          || splitName[splitName.length - 1] === "X"
          || splitName[splitName.length - 1] === "XV"
          || splitName[splitName.length - 1] === "XX") {
          for (let i = 0; i < splitName.length - 1; i++) {
            urlFragment += `${splitName[i]} `;
          }
          urlFragment = urlFragment.trim();
        } else {
          urlFragment = datum.name;
        }   
      } else {
        urlFragment = datum.name;
      }
      contentStr += `<li class="list-group-item"><div class="d-flex justify-content-between">`
        + `<div><a href="${WIKI_URL}${urlFragment}" target="_blank">${datum.name}</a>`
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

function renderRow(datum) {
  let rowString = "";
  switch (datum.type) {
    case ENEMY_TYPE: {
      // TODO: ADD WEAPON BRAND AND WEIGHT LOGIC
      rowString += `<div class="card card-body" data-species=${datum.species} data-is-tyrant=${datum.isTyrant}>`
        + `<div>Species: <span data-name="${datum.species}" onclick="search(this.dataset.name)">${datum.species}</span></div><br />`
        + `<div>Continent: ${datum.continent}</div><br />`
        + `<div>${printList("Location", datum.location)}</div><br />`;
      if (datum.minLevel === datum.maxLevel) {
        rowString += `<div>Level: ${datum.minLevel}</div>`;
      } else {
        rowString += `<div>Level Range: ${datum.minLevel}-${datum.maxLevel}</div>`;
      }
      rowString += `<br /><div>${printMaterialSourcePairs(datum.materials, datum.droppedSource)}</div>`;
      break;
    }
    case COLLECTIBLE_TYPE: {
      rowString += `<div class="card card-body">`
        + `<div>Continent: ${datum.continent}</div><br />`
        + `<div>${printList("Location", datum.location)}</div>`;
      break;
    }
    case RESOURCE_TYPE: {
      rowString += `<div class="card card-body">`
        + `<div>${printList("Site", datum.sites)}</div>`;
      break;
    }
    case MATERIAL_TYPE: {
      rowString += `<div class="card card-body">`
        + `<div>${printList("Species", datum.species)}</div><br />`
        + `<div>Appendage: ${datum.appendage === "All" ? "Main Body" : datum.appendage}</div><br />`
        + `<div>Recommended Source: <span data-name="${datum.enemy}" onclick="search(this.dataset.name)">${datum.enemy}</span></div>`;
      break;
    }
    case AFFINITY_MISSION_TYPE: {
      rowString += `<div class="card card-body">`
        + `<div>Mission Type: ${datum.type}</div><br />`
        + `<div>Location: ${datum.location}</div><br />`
        + `<div>${printList("Required", datum.requiredMembers)}</div>`;
      if (datum.prohibitedMembers.length > 0) {
        rowString += `<br /><div>${printList("Prohibited", datum.prohibitedMembers)}</div>`;
      }
      if (datum.prereq.length > 0) {
        rowString += `<br /><div>${printList("Prerequisite", datum.prereq)}</div>`;
      }
      rowString += `<br /><div>${printList("Reward", datum.rewards)}</div>`;
      break;
    }
    case BASIC_MISSION_TYPE: {
      rowString += `<div class="card card-body">`
        + `<div>Mission Type: ${datum.type}</div><br />`
        + `<div>Rank: ${datum.rank}</div><br />`
        + `<div>Continent: ${datum.location}</div>`;
      if (datum.storyReq !== "-") {
        rowString += `<br /><div>Chapter Prerequistie: Chapter ${datum.storyReq}</div>`;
      }
      if (datum.prereq.length > 0) {
        rowString += `<br /><div>${printList("Prerequisite", datum.prereq)}</div>`;
      }
      if (datum.rewards !== "-") {
        rowString += `<br /><div>Reward: ${datum.rewards}</div>`;
      }
      break;
    }
    case NORMAL_MISSION_TYPE: {
      rowString += `<div class="card card-body">`
        + `<div>Mission Type: ${datum.type}</div><br />`
        + `<div>Client: ${datum.client}</div>`;
      if (datum.location !== "-") {
        rowString += `<br /><div>Location: ${datum.location}</div>`;
      }
      if (datum.storyReq !== "-") {
        rowString += `<br /><div>Chapter Prerequistie: Chapter ${datum.storyReq}</div>`;
      }
      if (datum.prereq.length > 0) {
        rowString += `<br /><div>${printList("Prerequisite", datum.prereq)}</div>`;
      }
      if (datum.rewards.length > 0) {
        rowString += `<br /><div>${printList("Reward", datum.rewards)}</div>`;
      }
      break;
    }
    case AUGMENT_TYPE: {
      rowString += `<div class="card card-body">`
        + `<div>Effect: ${datum.effect}</div><br />`
        + `<div>${printList("Material", datum.materials)}</div>`;
      break;
    }
    case GROUND_ARMOR_TYPE: {
      rowString += `<div class="card card-body">`
        + `<div>Equip Slot: ${datum.slot}</div><br />`
        + `<div>Maker: ${datum.maker}</div><br />`
        + `<div>${printList("Trait", datum.traits)}</div>`;
        + `<div>${printList("Material", datum.materials)}</div>`;
      break;
    }
    case SKELL_FRAME_TYPE: {
      rowString += `<div class="card card-body">`
        + `<div>Frame Type: ${datum.frameType}</div><br />`
        + `<div>Miranium Cost: ${datum.cost}</div><br />`
        + `<div>Level: ${datum.level}</div><br />`
        + `<div>${printList("Material", datum.materials)}</div>`;
      break;
    }
    case SUPERWEAPON_TYPE: {
      rowString += `<div class="card card-body">`
        + `<div>Recipe Source: ${datum.location}</div><br />`
        + `<div>Equip Slot: ${datum.slot}</div><br />`
        + `<div>Level: ${datum.level}</div><br />`
        + `<div>Attribute: ${datum.attribute}</div><br />`
        + `<div>${printList("Trait", datum.traits)}</div><br />`
        + `<div>${printList("Material", datum.materials)}</div>`;
      break;
    }
  }
  rowString += "</div>";
  return rowString;
}

function printList(label, list) {
  let returnString = `<span>${label}`;
  if (list.length > 1 && label[label.length - 1] !== "s") {
    returnString += "s";
  }
  returnString += ": "
  for (let i = 0; i < list.length; i++) {
    const numCheck = list[i].split(" ");
    if (isNaN(numCheck[0])) {
      if (label === "Species") {
        returnString += `<span data-name="${list[i]}" onclick="search(this.dataset.name)">${list[i]}</span>`;
      } else {
        returnString += list[i];
      }
    } else if (parseInt(numCheck[0]) < 100) {
      let rebuildMaterial = "";
      for (let j = 1; j < numCheck.length; j++) {
        rebuildMaterial += `${numCheck[j]} `;
      }
      returnString += `<span data-name="${rebuildMaterial.trim()}" onclick="search(this.dataset.name)">${list[i]}</span>`; 
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
  const lists = ["mainList", "pinList"];
  for (let j = 0; j < lists.length; j++) {
    const ul = document.getElementById(lists[j]);
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
}

// TODO
// function filter() {

// }
