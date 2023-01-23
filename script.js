import { findElement } from "./utils/helpers.js";
const bookBox = document.querySelector(".book_itim");
const elTemplate = document.querySelector("#template");
const wrapper = document.querySelector(".swiper-wrapper");
const bookCart = document.querySelector(".bookmarks");
const bookItim = document.querySelector(".book_itim");
const elSearch = document.querySelector(".input_search");
const elXicon = document.querySelector(".img_iconx");
const elBoxBook = document.querySelector(".book_modall");
const elMonth = document.querySelector(".input_month")

// modall 

bookBox.addEventListener("click", (e) => {
  if (e.target.matches(".python_button2")) {
    const id = e.target.dataset.id;
    elBoxBook.style.transform = "translateX(0)";
    fetch("https://63ca9761d0ab64be2b5635b2.mockapi.io/posts/" + id)
      .then((res) => res.json())
      .then((data) => {
        const name = document.querySelector(".book_nav strong");
        const img = document.querySelector(".modal_imgBook");
        const Title = document.querySelector(".modal_textPP");

        Title.textContent = data.Title;
        name.textContent = data.name;
        img.src = data.avatar;
      });
  }

});

// modal xx

elXicon.addEventListener("click", (e) => {
  e.preventDefault();
  elBoxBook.style.transform = "translateX(150%)";
});

// search qismi
function searchHandler(data) {
  elSearch.addEventListener("input", () => {
    const value = elSearch.value;
    const elSearchReg = new RegExp(value, "gi");
    const filer = data.filter((item) => item.name.match(elSearchReg));
    renderPosts(filer);
  });
}


let posts = [];

fetch("https://63ca9761d0ab64be2b5635b2.mockapi.io/posts")
  .then((res) => res.json())
  .then((data) => {
    posts = data;
    renderPosts(posts);
    searchHandler(posts);
  });

function renderPosts(posts, parent = bookBox) {
  parent.innerHTML = "";
  const frgMentPosts = document.createDocumentFragment();

  posts.forEach((post) => {
    const template = elTemplate.content.cloneNode(true);

    const Title = findElement(".python_p", template);
    const name = findElement(".python_strong", template);
    const createdAt = findElement(".python_p2", template);
    const avatar = findElement(".avatar_img", template);
    const bookmark = findElement(".python_button", template);
    const moreInfo = findElement(".python_button2", template);

    //const data = ganerteDate(post.createdAt)

    avatar.setAttribute("src", post.avatar);
    createdAt.textContent = post.createdAt;
    name.textContent = post.name;
    Title.textContent = post.Title;
    bookmark.dataset.id = post.id;
    moreInfo.dataset.id = post.id;

    frgMentPosts.appendChild(template);

    //  swipper img avatar
    const swiper = document.createElement("div");
    swiper.className = "swiper-slide";
    swiper.innerHTML = `
    <img src="${post.avatar}" class="post_img" />
    `;
    wrapper.appendChild(swiper);
  });
  parent.appendChild(frgMentPosts);
}

// bookmarks
const result = JSON.parse(localStorage.getItem("items"));

const book = [];

bookItim.addEventListener("click", (e) => {
  e.preventDefault();
  const target = e.target;

  const id = target.dataset.id;
  console.log(id);

  fetch(`https://63ca9761d0ab64be2b5635b2.mockapi.io/posts/${id}`)
    .then((res) => res.json())
    .then((data) => {
      const newPost = {
        id: data.id,
        bookShoop: data.Title,
        name: data.name,
      };
      book.push(newPost);
      localStorage.setItem("Items", JSON.stringify(book));
    });
});
console.log(result);

//swipper

const swiper = new Swiper(".swiper", {
  direction: "vertical",
  loop: true,
  autoplay: true,
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,

    slideShadows: true,
    shadowOffset: 0,
    shadowScale: 0,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
