import { COLLECTIBLE_TYPE, ENEMY_TYPE, MATERIAL_TYPE, RESOURCE_TYPE } from "../utils/constants.js";

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
    returnString += `- ${materials[i]} from ${sources[i]} Appendage`;
    if (sources[i] === "All" || sources[i].includes("&")) {
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
        + `Appendage: ${datum.appendage}`;
      break;
    }
  }

  rowString += "</div>";
  return rowString;
}

export { renderRow };
