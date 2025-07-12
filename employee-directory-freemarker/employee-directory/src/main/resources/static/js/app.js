let currentEmployees = [...mockEmployees];
let currentPage = 1;
let itemsPerPage = 10;

document.getElementById("searchInput").addEventListener("input", function(e) {
  const term = e.target.value.toLowerCase();
  const filtered = mockEmployees.filter(emp =>
    emp.firstName.toLowerCase().includes(term) ||
    emp.lastName.toLowerCase().includes(term) ||
    emp.email.toLowerCase().includes(term)
  );
  currentEmployees = filtered;
  renderPaginatedEmployees(currentPage);
});

document.getElementById("sortSelect").addEventListener("change", function() {
  const sortBy = this.value;
  if (sortBy) {
    currentEmployees.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    renderPaginatedEmployees(currentPage);
  }
});

document.getElementById("itemsPerPage").addEventListener("change", function() {
  itemsPerPage = parseInt(this.value);
  renderPaginatedEmployees(1);
});

function showAddForm() {
  document.getElementById("formTitle").innerText = "Add Employee";
  document.getElementById("employeeForm").reset();
  document.getElementById("employeeId").value = "";
  document.getElementById("employeeFormModal").classList.add("show");
}

function closeForm() {
  document.getElementById("employeeFormModal").classList.remove("show");
}

document.getElementById("employeeForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const id = document.getElementById("employeeId").value;
  const newEmp = {
    id: id ? parseInt(id) : Date.now(),
    firstName: document.getElementById("firstName").value.trim(),
    lastName: document.getElementById("lastName").value.trim(),
    email: document.getElementById("email").value.trim(),
    department: document.getElementById("department").value.trim(),
    role: document.getElementById("role").value.trim()
  };

  if (!newEmp.firstName || !newEmp.lastName || !newEmp.email || !newEmp.department || !newEmp.role) {
    alert("All fields are required.");
    return;
  }

  const emailPattern = /^[^@]+@[^@]+\\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(newEmp.email)) {
    alert("Enter a valid email.");
    return;
  }

  if (id) {
    const index = mockEmployees.findIndex(e => e.id === parseInt(id));
    if (index !== -1) {
      mockEmployees[index] = newEmp;
    }
  } else {
    mockEmployees.push(newEmp);
  }

  currentEmployees = [...mockEmployees];
  closeForm();
  renderPaginatedEmployees(currentPage);
});

function renderEmployees(list) {
  const container = document.getElementById("employee-list-container");
  container.innerHTML = "";
  list.forEach(emp => {
    const card = document.createElement("div");
    card.className = "employee-card";
    card.innerHTML = `
      <h3>${emp.firstName} ${emp.lastName}</h3>
      <p>Email: ${emp.email}</p>
      <p>Department: ${emp.department}</p>
      <p>Role: ${emp.role}</p>
      <button onclick="editEmployee(${emp.id})">Edit</button>
      <button onclick="deleteEmployee(${emp.id})">Delete</button>
    `;
    container.appendChild(card);
  });
}

function renderPaginatedEmployees(page = 1) {
  currentPage = page;
  const start = (page - 1) * itemsPerPage;
  const paginated = currentEmployees.slice(start, start + itemsPerPage);
  renderEmployees(paginated);
}

function editEmployee(id) {
  const emp = mockEmployees.find(e => e.id === id);
  if (!emp) return;

  document.getElementById("formTitle").innerText = "Edit Employee";
  document.getElementById("firstName").value = emp.firstName;
  document.getElementById("lastName").value = emp.lastName;
  document.getElementById("email").value = emp.email;
  document.getElementById("department").value = emp.department;
  document.getElementById("role").value = emp.role;
  document.getElementById("employeeId").value = emp.id;
  document.getElementById("employeeFormModal").classList.add("show");
}

function deleteEmployee(id) {
  if (!confirm("Are you sure you want to delete this employee?")) return;

  const index = mockEmployees.findIndex(e => e.id === id);
  if (index !== -1) {
    mockEmployees.splice(index, 1);
    currentEmployees = [...mockEmployees];
    renderPaginatedEmployees(currentPage);
  }
}

// Initial render
renderPaginatedEmployees(1);


//newly added by me toggle
function toggleFilterPanel() {
  document.getElementById("filterPanel").classList.toggle("show");
}

function clearFilters() {
  document.getElementById("filterFirstName").value = "";
  document.getElementById("filterDepartment").value = "";
  document.getElementById("filterRole").value = "";
  document.getElementById("filterPanel").classList.remove("show");

  currentEmployees = [...mockEmployees];
  renderPaginatedEmployees(1);
}

document.getElementById("filterForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fname = document.getElementById("filterFirstName").value.trim().toLowerCase();
  const dept = document.getElementById("filterDepartment").value.trim().toLowerCase();
  const role = document.getElementById("filterRole").value.trim().toLowerCase();

  const filtered = mockEmployees.filter(emp => {
    return (
      (fname === "" || emp.firstName.toLowerCase().includes(fname)) &&
      (dept === "" || emp.department.toLowerCase().includes(dept)) &&
      (role === "" || emp.role.toLowerCase().includes(role))
    );
  });

  currentEmployees = filtered;
  document.getElementById("filterPanel").classList.remove("show");
  renderPaginatedEmployees(1);
});
