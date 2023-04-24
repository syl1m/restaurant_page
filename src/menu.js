export default function createMenuContent() {
  const menuContent = document.createElement("div");
  menuContent.classList.add("menu_content");

  const menuTitle = document.createElement("div");
  menuTitle.classList.add("menu_title");
  menuTitle.textContent = "MENU";

  const menuItemTitle = document.createElement("div");
  menuItemTitle.classList.add("menu_category");
  menuItemTitle.textContent = "NIGIRI & SASHIMI";

  const menuItemsContainer = document.createElement("div");
  menuItemsContainer.classList.add("menu_subcategory");

  const rawItems = document.createElement("div");
  rawItems.classList.add("raw");
  rawItems.textContent = "RAW";

  const cookedItems = document.createElement("div");
  cookedItems.classList.add("cooked");
  cookedItems.textContent = "COOKED";

  //   Raw items
  const maguro = createMenuItem("MAGURO", "Bluefin tuna", "14");
  const chutoro = createMenuItem("CHU-TORO", "Tuna belly", "16");
  const hamachi = createMenuItem("HAMACHI", "Yellowtail", "10");
  const sake = createMenuItem("SAKE", "Salmon", "10");
  const bintoro = createMenuItem("BINTORO", "Seared albacore", "11");
  const madai = createMenuItem("MADAI", "Japanese red snapper", "11");
  const escolar = createMenuItem("ESCOLAR", "Walu walu", "10");
  const hirame = createMenuItem("HIRAME", "Fluke", "10");
  const hotate = createMenuItem(
    "HOTATE HOKKAIDO",
    "Hokkaido jumbo sweet scallop",
    "13"
  );
  const amaebi = createMenuItem(
    "AMAEBI",
    "Jumbo sweet shrimp with fried heads",
    "13"
  );
  const tobiko = createMenuItem("TOBIKO", "Flying fish roe", "10");
  const ikura = createMenuItem("IKURA", "Salmon roe", "10");

  rawItems.appendChild(maguro);
  rawItems.appendChild(chutoro);
  rawItems.appendChild(hamachi);
  rawItems.appendChild(sake);
  rawItems.appendChild(bintoro);
  rawItems.appendChild(madai);
  rawItems.appendChild(escolar);
  rawItems.appendChild(hirame);
  rawItems.appendChild(hotate);
  rawItems.appendChild(amaebi);
  rawItems.appendChild(tobiko);
  rawItems.appendChild(ikura);

  //   Cooked items
  const inari = createMenuItem("INARI", "Fried bean curd", "7");
  const unagi = createMenuItem("UNAGI", "Fresh water eel", "11");
  const tako = createMenuItem("TAKO", "Octopus", "10");
  const kani = createMenuItem("KANI", "King crab", "12");
  const tamago = createMenuItem("TAMAGO", "Japanese Omelette", "7");

  cookedItems.appendChild(inari);
  cookedItems.appendChild(unagi);
  cookedItems.appendChild(tako);
  cookedItems.appendChild(kani);
  cookedItems.appendChild(tamago);

  menuContent.appendChild(menuTitle);
  menuContent.appendChild(menuItemTitle);

  menuItemTitle.appendChild(menuItemsContainer);

  menuItemsContainer.appendChild(rawItems);
  menuItemsContainer.appendChild(cookedItems);

  return menuContent;
}

function createMenuItem(name, detail, price) {
  const menu_item = document.createElement("div");
  menu_item.classList.add("menu_item");

  const menu_item_name = document.createElement("div");
  menu_item_name.classList.add("menu_item_name");
  menu_item_name.textContent = `${name}`;

  const menu_item_detail_container = document.createElement("div");
  menu_item_detail_container.classList.add("detail_container");

  const menu_item_description = document.createElement("div");
  menu_item_description.classList.add("detail");
  menu_item_description.textContent = `${detail}`;

  const item_price = document.createElement("div");
  item_price.classList.add("price");
  item_price.textContent = `${price}`;

  menu_item.appendChild(menu_item_name);
  menu_item.appendChild(menu_item_detail_container);
  menu_item_detail_container.appendChild(menu_item_description);
  menu_item_detail_container.appendChild(item_price);

  return menu_item;
}
