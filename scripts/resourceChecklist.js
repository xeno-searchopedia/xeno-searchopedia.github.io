import { LIST_GROUP_OPEN, LIST_GROUP_CLOSED, RESOURCES_DATA } from "../utils/frontendConstants.js";

let contentStr = LIST_GROUP_OPEN;

RESOURCES_DATA.forEach(function(o){
  let newName = o.name.replace(/\s/g, "");
  contentStr += '<li class="list-group-item"><p><a class="btn btn-white text-primary" data-bs-toggle="collapse" href="#' + newName +'" role="button" aria-expanded="false" aria-controls="' + newName + '">' + o.name + '</a></p><div class="collapse text-dark" id="' + newName + '"><div class="card card-body">Sites: ' + o.sites + '</div></div></li>';
});

contentStr += LIST_GROUP_CLOSED;

document.getElementById('resource-tab-pane').innerHTML = contentStr;