var tbody = document.getElementById("git-table-body");

fetch("https://api.github.com/users/navtheraj/repos")
  .then((res) => res.json())
  .then((res) => {
    const data = res;
    console.log(data.length);
    data.map((val, index) => {
      console.log(val, index);
      var row = tbody.insertRow(index);

      // // Table cell creation
      var code = row.insertCell(0);
      var name = row.insertCell(1);
      var description = row.insertCell(2);
      var link = row.insertCell(3);

      code.innerHTML = val.id;
      name.innerHTML = val.name;
      description.innerHTML = val.description;
      link.innerHTML = `<a href="${val.html_url}" target="_blank">Repo Link</a>`;
    });
  })
  .catch((errorRes) => {
    console.log(errorRes);
  });
