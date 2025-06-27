const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const description = document.querySelector("#description").value;
  const status = document.querySelector(".status-message");

  fetch("http://localhost:3333/ideas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      description: description,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.error);
        });
      }
      return response.json();
    })
    .then((data) => (status.textContent = `${data}`))
    .catch((error) => console.error(error));

  form.reset();
});

const getUsers = async () => {
  const apiUrl = `http://localhost:3333/ideas`;

  const response = await fetch(apiUrl);
  const data = await response.json();

  return console.log(data);
};
