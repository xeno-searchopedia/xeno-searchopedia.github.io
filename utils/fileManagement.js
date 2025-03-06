import { readFile, writeFile } from "fs/promises";

function loadSiteData(url) {
  return new Promise(() => {
    fetch(url).then(rep => rep.json())
    .then(data => {
      currentDataState = data;
    });
  });
}

async function loadData(url) {
  return await readFile(url, function (err, data) {
    if (err) {
      throw err;
    }
    
    processedData = data;
  });
}

async function saveData(fileName, json) {
  const data = JSON.stringify(json);

  return await writeFile(fileName, data, (error) => {
    if (error) {
      console.error(error);
      throw error;
    }

    console.log(`${fileName} written correctly`);
  });
}

export { loadData, loadSiteData, saveData };