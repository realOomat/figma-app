window.addEventListener("load", () => {
  if(localStorage.getItem("isAuth" === "false")) {
    window.open("./register.html", "_self")
  }
})



search.addEventListener("input", e => {
  var event = e.target.value.toLowerCase();
  var selectedValue = select.value;

  if(selectedValue === "name") {
    var filtered = ninjas.filter(item => item.name.toLowerCase().includes(event))
    card(filtered)
  } else if(selectedValue === "clan") {
    var filtered = ninjas.filter(item => item.clan.toLowerCase().includes(event))
    card(filtered)
  } else {
    var filtered = ninjas.filter(item => item.village.toLowerCase().includes(event))
    card(filtered)
  }
})