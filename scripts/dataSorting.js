import { readdirSync } from "fs";
import {
  AFFINITY_MISSIONS_URL,
  AUGMENTS_URL,
  BASIC_MISSIONS_URL,
  BESTIARY_URL,
  COLLECTIBLES_URL,
  FN_URL,
  FN_RESOURCES_URL,
  FORMATTED_ARRAY_DATABASE_URL,
  GROUND_ARMOR_URL,
  NORMAL_MISSIONS_URL,
  RECOMMENDATIONS_URL,
  SHEETS_PATH,
  SKELL_FRAME_URL,
  SPECIES_SAVE_URL,
  SUPERWEAPONS_URL,
  AFFINITY_MISSION_TYPE,
  AUGMENT_TYPE,
  BASIC_MISSION_TYPE,
  ENEMY_TYPE,
  COLLECTIBLE_TYPE,
  GROUND_ARMOR_TYPE,
  MATERIAL_TYPE,
  NORMAL_MISSION_TYPE,
  RESOURCE_TYPE,
  SKELL_FRAME_TYPE,
  SUPERWEAPON_TYPE,
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
        isCompletable: trimString(rowArray[rowArray.length - 1]) === "Y",
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

async function affinityMissionSorting() {
  const loadedData = (await loadData(AFFINITY_MISSIONS_URL)).toString();
  const missionData = [];

  let missionInfo = loadedData.split('\n');
  // Start at 2 to skip notes
  for (let i = 2; i < missionInfo.length; i++) {
    const rowArray = missionInfo[i].split('\t');
    const rewards = rowArray[11].split(',');
    for (let i = 0; i < rewards.length; i++) {
      if (rewards[i][0] === "*") {
        rewards[i] = `Learned Art: ${rewards[i].split('*')}`;
      }
    }

    missionData.push({
      name: rowArray[0],
      type: AFFINITY_MISSION_TYPE,
      client: rowArray[1],
      location: rowArray[2],
      requiredMembers: rowArray[6].split(','),
      prohibitedMembers: rowArray[7].split(','),
      prereq: rowArray[8].split(','),
      rewards: rewards,
      isCompletable: true,
    });
  }

  return missionData;
}

async function basicMissionSorting() {
  const loadedData = (await loadData(BASIC_MISSIONS_URL)).toString();
  const missionData = [];

  let missionInfo = loadedData.split('\n');
  // Start at 2 to skip notes
  for (let i = 2; i < missionInfo.length; i++) {
    const rowArray = missionInfo[i].split('\t');
    let prereq = rowArray[6].split(',');
    if (prereq[0] === "-") prereq = [];

    missionData.push({
      name: rowArray[0],
      type: BASIC_MISSION_TYPE,
      rank: rowArray[1],
      client: rowArray[2],
      location: rowArray[3],
      storyReq: rowArray[5],
      prereq: prereq,
      rewards: rowArray[9],
      isCompletable: true,
    });
  }

  return missionData;
}

async function normalMissionSorting() {
  const loadedData = (await loadData(NORMAL_MISSIONS_URL)).toString();
  const missionData = [];

  let missionInfo = loadedData.split('\n');
  // Start at 2 to skip notes
  for (let i = 2; i < missionInfo.length; i++) {
    const rowArray = missionInfo[i].split('\t');

    missionData.push({
      name: rowArray[0],
      type: NORMAL_MISSION_TYPE,
      client: rowArray[1],
      location: rowArray[2],
      storyReq: rowArray[3],
      prereq: rowArray[4].split(';'),
      rewards: rowArray[7].split(';'),
      isCompletable: true,
    });
  }

  return missionData;
}

async function augmentSorting() {
  const loadedData = (await loadData(AUGMENTS_URL)).toString();
  const augData = [];

  let augInfo = loadedData.split('\n');
  // Start at 2 to skip notes
  for (let i = 2; i < augInfo.length; i++) {
    const rowArray = augInfo[i].split('\t');
    const materials = [trimString(rowArray[2])];
    if (!rowArray[0].includes("Reflect:") && !rowArray[0].includes("Reflect.P")) {
      if (rowArray[3] !== "-" && rowArray[3].length > 0) materials.push(trimString(rowArray[3]));
      if (rowArray[4] !== "-" && rowArray[4].length > 0) materials.push(trimString(rowArray[4]));
      materials.push(trimString(rowArray[5]));
    }

    augData.push({
      name: rowArray[0],
      type: AUGMENT_TYPE,
      effect: rowArray[1],
      materials: materials,
      isCompletable: true,
    });
  }

  return augData;
}

async function groundArmorSorting() {
  const loadedData = (await loadData(GROUND_ARMOR_URL)).toString();
  const armorData = [];

  let armorInfo = loadedData.split('\n');
  // Start at 1 to skip notes
  for (let i = 1; i < armorInfo.length; i++) {
    const rowArray = armorInfo[i].split('\t');
    const materials = [];
    for (let j = 0; j < 7; j++) {
      const material = rowArray[j + 9];
      if (material !== "-" && material.length > 0) materials.push(trimString(material));
    }

    armorData.push({
      name: rowArray[0],
      type: GROUND_ARMOR_TYPE,
      slot: rowArray[1],
      maker: rowArray[2],
      traits: rowArray[6].split(','),
      materials: materials,
      isCompletable: true,
    });
  }

  return armorData;
}

async function skellFrameSorting() {
  const loadedData = (await loadData(SKELL_FRAME_URL)).toString();
  const frameData = [];

  let frameInfo = loadedData.split('\n');
  // Start at 2 to skip notes
  for (let i = 2; i < frameInfo.length; i++) {
    const rowArray = frameInfo[i].split('\t');
    const materials = [];
    for (let j = 0; j < 7; j++) {
      const material = rowArray[j + 17];
      if (material !== "\t" && material.length > 0) materials.push(trimString(material));
    }

    frameData.push({
      name: rowArray[0],
      type: SKELL_FRAME_TYPE,
      frameType: rowArray[1],
      cost: rowArray[2],
      level: rowArray[4],
      materials: materials,
      isCompletable: true,
    });
  }

  return frameData;
}

async function superweaponSorting() {
  const loadedData = (await loadData(SUPERWEAPONS_URL)).toString();
  const weaponData = [];

  let weaponInfo = loadedData.split('\n');
  // Start at 2 to skip notes
  for (let i = 2; i < weaponInfo.length; i++) {
    const rowArray = weaponInfo[i].split('\t');
    const materials = [];
    for (let j = 0; j < 5; j++) {
      materials.push(trimString(rowArray[j + 11]));
    }

    weaponData.push({
      name: rowArray[0],
      type: SUPERWEAPON_TYPE,
      location: rowArray[1],
      slot: rowArray[2],
      level: rowArray[3],
      attribute: rowArray[8],
      traits: rowArray[9].split(','),
      materials: materials,
      isCompletable: true,
    });
  }

  return weaponData;
}

async function buildArrayDatabase() {
  const sheetsData = await sheetsDataSorting();
  const bestiaryData = await bestiaryDataSorting();
  const collectiblesData = await collectiblesDataSorting();
  const fnResourcesData = await fnResourcesDataSorting();
  const affinityMissionData = await affinityMissionSorting();
  const basicMissionData = await basicMissionSorting();
  const normalMissionData = await normalMissionSorting();
  const augmentData = await augmentSorting();
  const groundArmorData = await groundArmorSorting();
  const skellFrameData = await skellFrameSorting();
  const superweaponData = await superweaponSorting();
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
    .concat(mergedMaterialsData)
    .concat(affinityMissionData)
    .concat(basicMissionData)
    .concat(normalMissionData)
    .concat(augmentData)
    .concat(groundArmorData)
    .concat(skellFrameData)
    .concat(superweaponData);

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

export { buildArrayDatabase, buildSpecies };