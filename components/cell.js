import { ENEMY_TYPE } from "../utils/constants.js";
import { LIST_GROUP_OPEN, LIST_GROUP_CLOSED } from "../utils/frontendConstants.js";
import { renderRow } from "./row.js";

function renderCells(data) {
  let contentStr = LIST_GROUP_OPEN;
  // + `<a class="btn btn-white text-primary" data-bs-toggle="collapse" href="#${filteredName}" role="button" aria-expanded="false" aria-controls="${filteredName}">`


  data.forEach((datum) => {
    if (!(datum.type === ENEMY_TYPE && datum.materials === undefined)) {
      let filteredName = datum.name.replace(/\s/g, "").replace(/'/g, "").replace(/,/g, "");
      contentStr += `<li class="list-group-item"><p>`
        + `<a href="https://www.xenoserieswiki.org/wiki/${datum.name}" target="_blank">${datum.name}</a>`
        + `<a class="btn btn-white text-primary" href="#${filteredName}" text-primary" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="${filteredName}">▼</a>`
        + `</p><div class="collapse text-dark" id="${filteredName}">`;
      contentStr += renderRow(datum) + `</div></li>`;
    }
  });

  contentStr += LIST_GROUP_CLOSED;

  return contentStr;
}

export { renderCells };
