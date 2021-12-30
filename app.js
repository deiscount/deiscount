const Discounts = [
  {
    title: "Restauração",
    icon: "utensils",
    data: ["Alentejo"],
  },
  {
    title: "Cultura",
    icon: "theater-masks",
    data: ["TAGV"],
  },
  {
    title: "Ginásios",
    icon: "dumbbell",
    data: [],
  },
  {
    title: "Transportes",
    icon: "bus-alt",
    data: ["SMTUC"],
  },
];

const showList = () => {
  container = document.getElementById('list');

  Discounts.forEach(({ title, icon, data }) => {
    let div = document.createElement("div");
    div.classList.add("category");
    let image = document.createElement("i");
    image.classList.add('fas', 'fa-2x', `fa-${icon}`);
    div.append(image);
    let header = document.createElement("h1");
    header.innerText = title;
    div.append(header);
    container.append(div);
    if (data.length != 0) {
      let entries = document.createElement("div");
      entries.classList.add("entries", "hide");
      data.forEach(entry => {
        let span = document.createElement("span");
        span.innerText = entry;
        span.classList.add("entry");
        entries.append(span);
      });
      header.onclick = () => {
        entries.classList.toggle("hide");
      }
      container.append(entries);
    }
  });  
};

document.addEventListener("DOMContentLoaded", showList);