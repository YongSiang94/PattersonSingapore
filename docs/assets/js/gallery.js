let album_name = document.querySelector(".gallery.intro.dark p span").innerHTML.split(" ").join('').toLowerCase();
console.log(album_name);
const list_items = window.completePhotoset[album_name].photo_array;

// const list_items = nfpa202018conference;
// const list_items = [];
const list_element = document.getElementById("list");
const pagination_element = document.getElementById("pagination");

let current_page = 1;
let items_per_page = 8;

function ClearImages() {
    for (let i = 0; i < items_per_page; i++) {
        let selector = "#list div:nth-child(" + (i+1) + ')';
        let item_element = document.querySelector(selector + ' img');
        let link_element = document.querySelector(selector + ' a');
        link_element.href = "";
        item_element.src = "";
    }
}
function DisplayList(items, wrapper, items_per_page, page) {
    ClearImages();//reset page
    page --;
    
    let start = items_per_page * page;
    let end = start + items_per_page
    let paginatedItems = items.slice(start, end);

    for (let i = 0; i < paginatedItems.length; i++) {
        let item = paginatedItems[i];
        
        let selector = '#list div:nth-child(' + (i+1) + ')';
        // console.log(document.querySelector(selector + ' img'));
        let item_element = document.querySelector(selector + ' img');
        let link_element = document.querySelector(selector + ' a');
        link_element.href = item;
        item_element.src = item;
    }
}

function SetupPagination (items, wrapper, items_per_page) {
    wrapper.innerHTML = ""; //reset page
    let page_count = Math.ceil(items.length / items_per_page);
    
    for (let i = 1; i < page_count + 1; i++) {
        let btn = PaginationButton(i, items);
        wrapper.appendChild(btn);
    }
}

function PaginationButton (page, items) {
    let button = document.createElement("button");
    button.innerText = page;
    
    if (current_page == page) {
        button.classList.add("active");
    }
    
    button.addEventListener('click', function() {
        current_page = page;
        DisplayList(items, list_element, items_per_page, current_page);
        
        let current_btn = document.querySelector('.pagenumbers button.active');
        current_btn.classList.remove("active");
        
        button.classList.add("active");
    })
    return button;
}

DisplayList(list_items, list_element, items_per_page, current_page);
SetupPagination(list_items, pagination_element, items_per_page);
