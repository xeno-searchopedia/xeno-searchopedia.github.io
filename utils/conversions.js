function sortByName(data) {
  return data.sort((e1, e2) => {
    return e1.name - e2.name;
  });
}

function extractCollectibleAreaContainsCollectible(obj) {
  const array = [];
  Object.keys(obj).forEach(function eachKey(key) { 
    array.push(key);
  });
  return array;
}

function extractRarity(obj) {
  if (obj === undefined) return "All";

  const key = Object.keys(obj)[0];
  if (key.includes("common")) {
    return "Common";
  } else if (key.includes("rare")) {
    return "Rare";
  } else if (key.includes("unique")) {
    return "Unique";
  } else if (key.includes("prime")) {
    return "Prime";
  }
  console.log(key);
  return "All";
}

function extractRegion(obj) {
  if (obj === undefined) return "Any";

  const key = Object.keys(obj)[0];
  if (key.includes("primordia")) {
    return "Primordia";
  } else if (key.includes("noctilum")) {
    return "Noctilum";
  } else if (key.includes("oblivia")) {
    return "Oblivia";
  } else if (key.includes("sylvalum")) {
    return "Sylvalum";
  } else if (key.includes("cauldros")) {
    return "Cauldros";
  }
  console.log(key);
  return "Any";
}

function extractSpecies(obj) {
  if (obj === undefined) return "-";

  const key = Object.keys(obj)[0];
  const splitKey = key.split("__");

  return splitKey[2].toUpperCase();
}

function extractTime(obj) {
  if (obj === undefined) return "All";

  const key = Object.keys(obj)[0];
  if (key.includes("early-morning")) {
    return "Early Morning";
  } else if (key.includes("morning")) {
    return "Morning";
  } else if (key.includes("afternoon")) {
    return "Afternoon";
  } else if (key.includes("evening")) {
    return "Evening";
  } else if (key.includes("night")) {
    return "Night";
  } else if (key.includes("late-night")) {
    return "Late Night";
  }
  console.log(key);
  return "All";
}

function extractWeather(obj) {
  if (obj === undefined) return "Any";

  const key = Object.keys(obj)[0];
  if (key.includes("clear")) {
    return "Clear";
  } else if (key.includes("cloudy")) {
    return "Cloudy";
  } else if (key.includes("rainbow")) {
    return "Rainbow";
  } else if (key.includes("brimstone-rain")) {
    return "Brimstone Rain";
  } else if (key.includes("heavy-rain")) {
    return "Heavy Rain";
  } else if (key.includes("rain")) {
    return "Rain";
  } else if (key.includes("thunderstorm")) {
    return "Thunderstorm";
  } else if (key.includes("rising-energy-mist")) {
    return "Rising Energy Mist";
  } else if (key.includes("energy-mist")) {
    return "Energy Mist";
  } else if (key.includes("sandstorm")) {
    return "Sandstorm";
  } else if (key.includes("em-storm")) {
    return "EM Storm";
  } else if (key.includes("meteor-shower")) {
    return "Meteor Shower";
  } else if (key.includes("dense-fog")) {
    return "Dense Fog";
  } else if (key.includes("spores")) {
    return "Spores";
  } else if (key.includes("crimson-aurora")) {
    return "Crimson Aurora";
  } else if (key.includes("aurora")) {
    return "Aurora";
  } else if (key.includes("heat-wave")) {
    return "Heat Wave";
  }
  console.log(key);
  return "Any";
}

function trimString(string) {
  if (string !== undefined && string !== null && string.length > 0) {
    return string.trim();
  }
  return string;
} 

export {
  sortByName as alphabetize,
  extractCollectibleAreaContainsCollectible,
  extractRarity,
  extractRegion,
  extractSpecies,
  extractTime,
  extractWeather,
  trimString,
};