async function fetchData() {
  let x = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await x.json();
  return data;
}
fetchData().then((data) => {
  console.log(data);
  return data;
})
  .then((data) => {
    let postsList = document.querySelector("#posts");
    data.forEach((post) => {
      let li = document.createElement("li");
      li.innerHTML = `<strong>${post.title}</strong><br><p>${post.body}</p>`;
      postsList.appendChild(li);
    });
})
  .catch((error) => {
  console.error("Error fetching data:", error);
});