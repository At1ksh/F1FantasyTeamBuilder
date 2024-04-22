document.addEventListener("DOMContentLoaded", function() {
  const selectedDriver = document.querySelector(".selected-driver");
  const dropdownOptions = document.querySelector(".dropdown-options");
  const driverDropdown = document.getElementById("driver-dropdown");
  const selectedDriversContainer = document.getElementById("selected-drivers-container");
  const submitButton = document.querySelector(".submit-button");
  const resetButton = document.querySelector(".reset-button");

  const drivers = [
    { name: "Max Verstappen", image: "verstappen.png" },
    { name: "Sergio Perez", image: "perez.png" },
    { name: "Charles Leclerc", image: "leclerc.png" },
    { name: "Carlos Sainz", image: "sainz.png" },
    { name: "Lando Norris", image: "norris.png" },
    { name: "Oscar Piastri", image: "piastri.png" },
    { name: "Lewis Hamilton", image: "hamilton.png" },
    { name: "George Russel", image: "russel.png" },
    { name: "Fernando Alonso", image: "alonso.png" },
    { name: "Lance Stroll", image: "stroll.png" },
    { name: "Daniel Ricciardo", image: "ricciardo.png" },
    { name: "Yuki Tsunoda", image: "tsunoda.png" },
    { name: "Nico Hulkenberg", image: "hulkenberg.png" },
    { name: "Kevin Magnussen", image: "magnussen.png" },
    { name: "Alexander Albon", image: "albon.png" },
    { name: "Logan Sargeant", image: "sargeant.png" },
    { name: "Esteban Ocon", image: "ocon.png" },
    { name: "Pierre Gasly", image: "gasly.png" },
    { name: "Zhou Guanyu", image: "zhou.png" },
    { name: "Valtteri Bottas", image: "bottas.png" }
  ];

  function createDropdownOptions() {
    dropdownOptions.innerHTML = "";
    drivers.forEach(driver => {
      const li = document.createElement("li");
      li.innerHTML = `<img src="images/${driver.image}" alt="${driver.name}" class="driver-image"> ${driver.name}`;
      dropdownOptions.appendChild(li);
    });
  }

  function toggleDropdown() {
    dropdownOptions.style.display = dropdownOptions.style.display === "block" ? "none" : "block";
  }

  function handleOptionSelection(event) {
    const selectedOption = event.target.closest("li");
    if (!selectedOption) return;
    if (selectedDriversContainer.children.length >= 5) {
      alert("You can only select up to 5 drivers.");
      return;
    }
    const driverName = selectedOption.textContent.trim();
    const driverIndex = drivers.findIndex(driver => driver.name === driverName);
    if (driverIndex === -1) return;
    const selectedDriverDiv = document.createElement("div");
    selectedDriverDiv.classList.add("selected-driver");
    selectedDriverDiv.innerHTML = `<img src="images/${drivers[driverIndex].image}" alt="${driverName}" class="driver-image"> <span class="driver-name">${driverName}</span>`;
    selectedDriversContainer.appendChild(selectedDriverDiv);
    drivers.splice(driverIndex, 1);
    createDropdownOptions();
    dropdownOptions.style.display = "none";
    driverDropdown.value = "";
  }

  function submitTeam() {
    alert("Team submitted!");
  }
  

  function resetTeam() {
    selectedDriversContainer.innerHTML = "";
    createDropdownOptions();
  }

  createDropdownOptions();
  
  selectedDriver.addEventListener("click", toggleDropdown);
  dropdownOptions.addEventListener("click", handleOptionSelection);
  submitButton.addEventListener("click", submitTeam);
  resetButton.addEventListener("click", resetTeam);
});
