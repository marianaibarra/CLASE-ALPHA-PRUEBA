let tUsersDOM = document.querySelector("#t-users");

const fetchApi = async () => {
  let response = await fetch("http://localhost:3004/users");
  let resInJson = await response.json();
  if (resInJson !== undefined) displayUsersDOM(resInJson);
};

const displayUsersDOM = (registers) => {
  let li = "";
  registers.forEach((element) => {
    li += `<tr><th scope="row">${element.id}</th><td>${element.n_department}</td><td>${element.name}</td><td>${element.percentage}</td><td>${element.password}</td></tr>`;
  });

  tUsersDOM.innerHTML = li;
};

fetchApi();
