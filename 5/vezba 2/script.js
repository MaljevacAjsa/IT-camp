document.getElementById("searchInput").addEventListener("keyup", function () {
  let filter = this.value.toLowerCase();
  let rows = document.querySelectorAll("#dataTable tbody tr");

  rows.forEach((row) => {
    let name = row.cells[0].textContent.toLowerCase();
    row.style.display = name.includes(filter) ? "" : "none";
  });
});

function sortTable(columnIndex) {
  let table = document.getElementById("dataTable");
  let rows = Array.from(table.rows).slice(1);
  let ascending = table.getAttribute("data-sort") !== "asc";
  rows.sort((rowA, rowB) => {
    let cellA = rowA.cells[columnIndex].textContent;
    let cellB = rowB.cells[columnIndex].textContent;
    if (!isNaN(cellA) && !isNaN(cellB)) {
      return ascending ? cellA - cellB : cellB - cellA;
    } else {
      return ascending
        ? cellA.localeCompare(cellB)
        : cellB.localeCompare(cellA);
    }
  });
  table.setAttribute("data-sort", ascending ? "asc" : "desc");
  rows.forEach((row) => table.appendChild(row));
}

document.getElementById("addForm").addEventListener("submit", function (event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let surname = document.getElementById("surname").value;
  let age = document.getElementById("age").value;
  let gender = document.getElementById("gender").value;
  let city = document.getElementById("city").value;
  let newRow = document.createElement("tr");
  newRow.innerHTML = `<td>${name}</td><td>${surname}</td><td>${age}</td><td>${gender}</td><td>${city}</td>`;
  document.querySelector("#dataTable tbody").appendChild(newRow);
  document.getElementById("addForm").reset();
});
