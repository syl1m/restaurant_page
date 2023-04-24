export default function createContactContent() {
  const contactContent = document.createElement("div");
  contactContent.classList.add("contact_content");

  const title = document.createElement("div");
  title.classList.add("contact_title");
  title.textContent = "Hours & Location";

  const address = document.createElement("div");
  address.classList.add("address");
  address.textContent =
    "12345 A Street\r\nFake City, NE 65497\r\n(123) 456-7890";

  const hours = document.createElement("div");
  hours.classList.add("hours");
  hours.textContent =
    "Monday - Friday: 10:30 am to 9:00 pm\r\nSaturday & Sunday: 10:00 am to 11:00 pm";

  const map = document.createElement("iframe");
  map.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4749.604657933601!2d-86.80730030890466!3d36.15031618942182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886467d9797ef477%3A0x6e59e4d8d9b2aa40!2sI%20Love%20Sushi!5e0!3m2!1sen!2sus!4v1682369281773!5m2!1sen!2sus";

  contactContent.appendChild(title);
  contactContent.appendChild(address);
  contactContent.appendChild(hours);
  contactContent.appendChild(map);

  return contactContent;
}
