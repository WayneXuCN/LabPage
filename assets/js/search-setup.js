let searchTheme = determineComputedTheme();
const ninjaKeys = document.querySelector("ninja-keys");

if (ninjaKeys) {
  if (searchTheme === "dark") {
    ninjaKeys.classList.add("dark");
  } else {
    ninjaKeys.classList.remove("dark");
  }
}

const openSearchModal = () => {
  if (!ninjaKeys) return;
  // collapse navbarNav if expanded on mobile
  const $navbarNav = $("#navbarNav");
  if ($navbarNav.hasClass("show")) {
    $navbarNav.collapse("hide");
  }
  ninjaKeys.open();
};
