import { LIST_GROUP_OPEN, LIST_GROUP_CLOSED, COLLECTIBLES_DATA } from "../utils/frontendConstants.js";

let contentStr = LIST_GROUP_OPEN;

COLLECTIBLES_DATA.forEach(function(o){
  let newName = o.name.replace(/\s/g, "");
  contentStr += '<li class="list-group-item"><p><a class="btn btn-white text-primary" data-bs-toggle="collapse" href="#' + newName +'" role="button" aria-expanded="false" aria-controls="' + newName + '">' + o.name + '</a></p><div class="collapse text-dark" id="' + newName + '"><div class="card card-body">Continent: ' + o.continent + ' Location: ' + o.location +  '</div></div></li>';
});

contentStr += LIST_GROUP_CLOSED;

document.getElementById('collect-tab-pane').innerHTML = contentStr;