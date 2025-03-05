import { renderCells } from "../components/cell.js";
import { FORMATTED_ARRAY_DATABASE_URL } from "../utils/constants.js";
import { sortByName } from "../utils/conversions.js"
import { loadData } from "../utils/fileManagement.js";
// import data from "../data/formattedDatabase.json" with { type: "json" };

// SEARCH BAR
// ABOUT/CREDITS PAGE
// PINNED LIST
// LOCAL STORAGE
// SORT BY NAME, TYPE
const data = sortByName(await loadData(FORMATTED_ARRAY_DATABASE_URL));

renderCells(data);

document.getElementById('enemy-tab-pane').innerHTML = contentStr;
