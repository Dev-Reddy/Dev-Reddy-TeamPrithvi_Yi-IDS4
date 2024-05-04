async function getUsers() {
  let users = await fetch("https://dummyjson.com/users/1")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  console.log(users);
}
getUsers();
