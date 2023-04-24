export default function createContactContent() {
  const contactContent = document.createElement("div");
  contactContent.classList.add("contact_content");
  contactContent.textContent = "contacts testing";

  return contactContent;
}
