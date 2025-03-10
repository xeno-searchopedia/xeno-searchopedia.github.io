import { readdirSync } from "fs";
import {
  BESTIARY_URL,
  COLLECTIBLES_URL,
  FN_URL,
  FN_RESOURCES_URL,
  FORMATTED_ARRAY_DATABASE_URL,
  FORMATTED_DATABASE_URL,
  SHEETS_PATH,  
  SPECIES_SAVE_URL,
  ENEMY_TYPE,
  COLLECTIBLE_TYPE,
  RESOURCE_TYPE,
  MATERIAL_TYPE,
  RECOMMENDATIONS_URL,
} from "../utils/constants.js";
import {
  extractCollectibleAreaContainsCollectible,
  extractRarity,
  extractSpecies,
  extractTime,
  extractWeather,
  trimString,
} from "../utils/conversions.js";
import { loadData, saveData } from "../utils/fileManagement.js";

async function fnDataSorting() {
  const fnData = JSON.parse((await loadData(FN_URL)).toString());

  const collectibles = [];
  const drops = [];
  const enemies = [];
  const species = [];
  for (let key in fnData.entities) {
    let entity = fnData.entities[key];
    switch (entity.type) {
      case "Collectible": {
        collectibles.push({
          name: entity.data.name,
          rarity: extractRarity(entity.data.CollectibleRarity),
          time: extractTime(entity.data.CollectibleTime),
          weather: extractWeather(entity.data.CollectibleWeather),
          collectibleAreas: extractCollectibleAreaContainsCollectible(entity.data.CollectibleAreaContainsCollectible),
        });
        break;
      }
      case "Enemy": {
        enemies.push({
          name: entity.data.name,
          minLevel: !entity.data.level_range ? entity.data.level : entity.data.level_range.minimum,
          maxLevel: !entity.data.level_range ? entity.data.level : entity.data.level_range.maximum,
          location: entity.data.notes,
          species: extractSpecies(),
        });
        break;
      }
      case "EnemySubcategory": {
        species.push({name: entity.data.name.toString().toUpperCase()});
        break;
      }
      case "Material": {
        drops.push({name: entity.data.name});
        break;
      }
    }
  }

  return {
    "Collectibles": collectibles,
    "Enemies": enemies,
    "Species": species,
    "Drops": drops,
  }
}

async function sheetsDataSorting() {
  const enemyDataPath = SHEETS_PATH;
  const sheetsData = [];
  readdirSync(enemyDataPath).forEach(async file => {
    const enemyData = {
      species: '',
      materials: [],
      droppedSource: [],
    };
    const loadedData = (await loadData(`${enemyDataPath}${file}`)).toString();

    let enemyInfoRows = loadedData.split('\n');
    enemyData.species = enemyInfoRows[0].trim();

    for (let i = 0; i < enemyInfoRows.length; i++) {
      let enemyInfoRow = enemyInfoRows[i];
      let enemyInfoElements = enemyInfoRow.split('\t');

      if (enemyInfoElements[0] === "Materials") {
        for (let j = 1; j < enemyInfoElements.length; j++) {
          if (enemyInfoElements[j] === '\t' || enemyInfoElements[j] === '\r' || enemyInfoElements[j].length === 0) break;
          enemyData.materials.push(trimString(enemyInfoElements[j]));
        }
      }

      if (enemyInfoElements[0] === "Dropped From -") {
        for (let j = 1; j < enemyInfoElements.length; j++) {
          if (enemyInfoElements[j] === '\t' || enemyInfoElements[j] === '\r' || enemyInfoElements[j].length === 0) break;
          enemyData.droppedSource.push(trimString(enemyInfoElements[j]));
        }
      }

      // TODO: Add Appendages and Skell Targetable?
    }

    sheetsData.push(enemyData);
  });


  return sheetsData;
}

async function bestiaryDataSorting() {
  const loadedData = (await loadData(BESTIARY_URL)).toString();
  const bestiaryData = [];

  let enemyInfo = loadedData.split('\n');
  // Start at 2 to skip notes
  for (let i = 2; i < enemyInfo.length; i++) {
    if (enemyInfo[16] !== "---") {
      const rowArray = enemyInfo[i].split('\t');

      const locations = rowArray[4]
        .split(',')
        .map(function(item) {
          return item.trim();
        });

      const levels = rowArray[5].split('~');
      if (levels.length === 1) {
        levels.push(levels[0]);
      }

      const drops = [];
      for (let j = 0; j < 7; j++) {
        if (rowArray[16 + j] !== "---") {
          drops.push(rowArray[16 + j]);
        }
      }

      const weaponDrops = rowArray[25].split('-');

      bestiaryData.push({
        name: rowArray[0],
        type: ENEMY_TYPE,
        species: rowArray[1],
        continent: rowArray[3],
        location: locations,
        minLevel: levels[0],
        maxLevel: levels[1],
        weaponBrand: trimString(weaponDrops[0]),
        weaponWeight: trimString(weaponDrops[1]),
        isTyrant: trimString(rowArray[rowArray.length - 1]) === "Y",
      });
    }
  }

  return bestiaryData;
}

async function collectiblesDataSorting() {
  const loadedData = (await loadData(COLLECTIBLES_URL)).toString();
  const collectibleData = [];

  let collectibleInfo = loadedData.split('\n');
  let continent = "";
  // Start at 2 to skip notes
  for (let i = 2; i < collectibleInfo.length; i++) {
    const rowArray = collectibleInfo[i].split('\t');

    if (rowArray[2].length === 0) {
      continent = rowArray[0];
    } else {
      for (let j = 2; j < rowArray.length; j++) {
        const collectible = rowArray[j].split('|');

        if (trimString(collectible[0]).length > 0) {
          const locations = collectible[1]
            .split(',')
            .map(function(item) {
              return item.trim();
            });
          for (let k = 0; k < locations.length; k++) {
            const bounds = locations[k].split('~');
            if (bounds.length > 1) {
              locations.splice(k, 1);
              const min = Number(bounds[0]);
              const max = Number(bounds[1]);
              for (let num = min; num <= max; num++) {
                locations.push(`${num}`);
              }
            }
          }

          collectibleData.push({
            name: trimString(collectible[0]),
            type: COLLECTIBLE_TYPE,
            location: locations,
            continent: continent,
            category: rowArray[0],
          });
        }
      }
    }
  }

  return collectibleData;
}

async function fnResourcesDataSorting() {
  const loadedData = (await loadData(FN_RESOURCES_URL)).toString();
  const resourceData = [];

  let resourceInfo = loadedData.split('\n');
  // Start at 2 to skip notes
  for (let i = 2; i < resourceInfo.length; i++) {
    const rowArray = resourceInfo[i].split('\t');

    if (rowArray[5].length > 1) {
      const resourceArray = rowArray[5].split(',');
      for (let j = 0; j < resourceArray.length; j++) {
        const foundResource = resourceData.find((itmInner) => itmInner.name === resourceArray[j].trim());
        if (!!foundResource) {
          foundResource.sites.push(rowArray[0].trim());
        } else {
          resourceData.push({
            name: resourceArray[j].trim(),
            type: RESOURCE_TYPE,
            sites: [rowArray[0]],
          });
        }
      }
    }
  }

  return resourceData;
}

async function materialsDataSorting(enemyData) {
  const materialData = [];

  for (let i = 0; i < enemyData.length; i++) {
    const materials = enemyData[i].materials;
    if (materials !== undefined) {
      for (let j = 0; j < materials.length; j++) {
        const material = trimString(materials[j]);
        const foundMaterial = materialData.find((itmInner) => itmInner.name === material);
        if (!!foundMaterial) {
          if (!foundMaterial.species.includes(enemyData[i].species)) {
            foundMaterial.species.push(enemyData[i].species);
          }
        } else {
          materialData.push({
            name: material,
            type: MATERIAL_TYPE,
            species: [enemyData[i].species],
            appendage: trimString(enemyData[i].droppedSource[j]),
          });
        }
      }
    }
  }

  return materialData;
}

async function buildObjectDatabase() {
  // const fnData = await fnDataSorting();
  const sheetsData = await sheetsDataSorting();
  const bestiaryData = await bestiaryDataSorting();
  const collectiblesData = await collectiblesDataSorting();
  const fnResourcesData = await fnResourcesDataSorting();
  const mergedEnemyData = [];

  for (let i = 0; i < bestiaryData.length; i++) {
    const bestiaryDatum = bestiaryData[i];
    mergedEnemyData.push({
      ...bestiaryDatum, 
      ...(sheetsData.find((itmInner) => itmInner.species === bestiaryDatum.species))}
    );
  }

  const collectedData = {
    "Enemies": mergedEnemyData,
    "Collectibles": collectiblesData,
    "Resources": fnResourcesData,
  };

  saveData(FORMATTED_DATABASE_URL, collectedData);
}

async function buildArrayDatabase() {
  const sheetsData = await sheetsDataSorting();
  const bestiaryData = await bestiaryDataSorting();
  const collectiblesData = await collectiblesDataSorting();
  const fnResourcesData = await fnResourcesDataSorting();
  const mergedEnemyData = [];

  for (let i = 0; i < bestiaryData.length; i++) {
    const bestiaryDatum = bestiaryData[i];
    mergedEnemyData.push({
      ...bestiaryDatum, 
      ...(sheetsData.find((itmInner) => itmInner.species === bestiaryDatum.species))}
    );
  }

  const materialsData = await materialsDataSorting(mergedEnemyData);
  const recommendationsData = JSON.parse((await loadData(RECOMMENDATIONS_URL)).toString());
  const mergedMaterialsData = [];

  for (let i = 0; i < materialsData.length; i++) {
    const materialsDatum = materialsData[i];
    mergedMaterialsData.push({
      ...materialsDatum, 
      ...(recommendationsData.find((itmInner) => itmInner.name === materialsDatum.name))}
    );
  }

  const mergedData = mergedEnemyData
    .concat(collectiblesData)
    .concat(fnResourcesData)
    .concat(mergedMaterialsData);

  saveData(FORMATTED_ARRAY_DATABASE_URL, mergedData);
}

async function buildSpecies() {
  const bestiaryData = await bestiaryDataSorting();

  let mergedEnemyData = [];
  for (let bestiaryDatum in bestiaryData) {
    if (!mergedEnemyData.includes(bestiaryDatum.species)) {
      mergedEnemyData.push(bestiaryDatum.species);
    }
  }

  await saveData(SPECIES_SAVE_URL, mergedEnemyData);
}

export { buildArrayDatabase, buildObjectDatabase, buildSpecies };