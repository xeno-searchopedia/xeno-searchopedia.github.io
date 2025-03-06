import { renderCells } from "../components/cell.js";
import { FORMATTED_ARRAY_DATABASE_URL } from "../utils/constants.js";
import { sortByName } from "../utils/conversions.js"

function loadSiteData(url) {
  const searchBar = document.getElementById('searchBar');
  searchBar.value = "";

  return new Promise(() => {
    fetch(url).then(rep => rep.json())
    .then(data => {
      // data = sortByName(data, -1);
      document.getElementById('enemy-tab-pane').innerHTML = renderCells(data);
    });
  });
}

function loadPage() {
  loadSiteData(FORMATTED_ARRAY_DATABASE_URL);
}

window.addEventListener('DOMContentLoaded', () => {
  loadPage();
});