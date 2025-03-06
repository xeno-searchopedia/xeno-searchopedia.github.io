function search() {
  const searchBar = document.getElementById('searchBar');
  const input = searchBar.value.toUpperCase();
  const ul = document.getElementById("list");
  const li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    let species = li[i].getElementsByTagName("div")[0].getElementsByTagName("div")[0].dataset.species;
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(input) > -1 || (species !== undefined && species.toUpperCase().indexOf(input) > -1)) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}