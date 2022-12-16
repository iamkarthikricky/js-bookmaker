let bookmarks = [{
    bookmarkId: "bookmark1",
    name: "Learning Portal",
    url: "https://learning.ccbp.in/",
}, ];

console.log(bookmarks);
let formEl = document.getElementById("bookmarkForm");

let siteNameEl = document.getElementById("siteNameInput");
let siteNameErrEl = document.getElementById("siteNameErrMsg");

let siteUrlEl = document.getElementById("siteUrlInput");
let siteUrlErrEl = document.getElementById("siteUrlErrMsg");

let unorderedListEl = document.getElementById("bookmarksList");

let siteNameErr = function() {
    if (siteNameEl.value === "") {
        siteNameErrEl.textContent = "Required*";
    } else {
        siteNameErrEl.textContent = "";
    }
};

let siteUrlErr = function() {
    if (siteUrlEl.value === "") {
        siteUrlErrEl.textContent = "Required*";
    } else {
        siteUrlErrEl.textContent = "";
    }
};

let unorderedList = function() {
    if (siteNameEl.value === "") {
        unorderedListEl.classList.remove("bg-3");
        unorderedListEl.textContent = "";
    }
    if (siteUrlEl.value === "") {
        unorderedListEl.classList.remove("bg-3");
        unorderedListEl.textContent = "";
    } else {
        unorderedListEl.classList.add("bg-3");
        let listEl = document.createElement("li");
        unorderedListEl.appendChild(listEl);
        listEl.classList.add("siteName");
        listEl.textContent = siteNameEl.value;
        let urlEl = document.createElement("a");
        urlEl.href = siteUrlEl.value;
        urlEl.target = "_blank"
        urlEl.textContent = siteUrlEl.value;
        unorderedListEl.appendChild(urlEl);
    }
};

siteNameEl.addEventListener("change", siteNameErr);
siteUrlEl.addEventListener("change", siteUrlErr);

formEl.addEventListener("submit", function(event) {
    event.preventDefault();
    siteNameErr();
    siteUrlErr();
    unorderedList();
})