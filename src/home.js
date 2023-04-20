export default function createHomeContent() {
  const homeContent = document.createElement("div");
  homeContent.classList.add("home_content");
  homeContent.textContent =
    "Traditional Japanese cuisine.\r\nAlways fresh, always delicious.";

  return homeContent;
}
