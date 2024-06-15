const mainEl =document.querySelector("main");

console.log("mainEl");

mainEl.style.backgroundColor = "var(--main-bg)";

const h1 =document.createElement("hi");

h1.innerHTML = "DOM Manipulation";
//setting backgroumd color using var
mainEl.appendChild(h1);
//creating html Element
mainEl.appendChild(h1);
//attach text to h1 we created
mainEl.classList.add("flec-ctr");
//add class to html elelment
const topMenuEl = document.querySelector("#top-menu");

//set the ehight to 100%
topMenuEl.style.height = "100%";

topMenuEl.style.background = "var(--top-meni-bg";

const menuLinks = [
{ text: "about", href: "/about" },
{ text: "catalog", href: "/catalog" },
{ text: "orders", href: "/orders" },
{ text: "account", href: "/account" },
];

menuLinks.forEach((link) => {
    //create anchor element
    const aElement = document.createElement("a");
    //added href
    aElement.textContent = link.text;
    //append to 
    topMenuEl.appendaChild(aElement);
});

const subMenuEl = document.querySelector("#sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.background = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around"); 
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";
const topMenuLinks = topMenuEl.querySelector("a");

topMenuEl.addEventListener("click", (event) =>{
    event.preventDefault();
    if(event.target.tagName !== "A") return;

    const linkText = event.target.textContent.toLowerCase()
    const linkObject = menuLinks.find((link) => link.text === linkText)

    if (event.target.classList.contains("active")) {
        event.target.classList.remove("active");
    subMenuEl.style.top = "0";
} else {
    document.querySelectorAll("#top-menu a")
    .forEach((a) => a.classList.remove("active"));
    event.target.classList.add("active");
    if(linkObject.sub.Links) {
        subMenuEl.style.top = "100%";
} else {
    subMenuEl.style.top = "0";
    }
}
});

function buildSubmenu(sublinks) {
    subMenuEl.innerHTML = "";
    sublinks.forEach((link) =>{
        const aElement = document.createElement("a");
        aElement.href = link.ref;
        aElement.textContent = link.text;
        subMenuEl.appendChild(aElement);
    });
}

subMenuEl.addEventListener("click", (event) => {
    event.preventDefault();
    if(event.target.tagName !== "A") return;

    console.log("Submenu Link clicked", event.target.textContent);
    subMenuEl.style.top = '0'

    document.querySelectorAll("#top-menu a").forEach(a=>a.classList.remove("active"))

    mainEl.innerHTML='<h1>${event.target.textContent}</h1>'
});

