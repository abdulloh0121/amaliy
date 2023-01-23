
const elForem = document.querySelector("#forem");

elForem.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const img = evt.target.img.value;
  const name = evt.target.name.value;
  const subtatal = evt.target.subtatal.value;
  const posts = {
    avatar: img,
    name: name,
    Title: subtatal,
  };
  fetch("https://63ca9761d0ab64be2b5635b2.mockapi.io/posts", {
    method: "POST",

    body: JSON.stringify(posts),
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
    
  })
    .then((res) => res.json())
    .then((date) => alert("post mofaqiyatli qoshildi"));
});

