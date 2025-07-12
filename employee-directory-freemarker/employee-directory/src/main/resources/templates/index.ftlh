<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Employee Directory</title>
    <link rel="stylesheet" href="/static/css/styles.css">
</head>
<body>
    <div class="header">
        <h1>Employee Directory</h1>
        <input type="text" id="searchInput" placeholder="Search by name or email">
        <button onclick="showAddForm()">Add Employee</button>
    </div>
    <div id="employee-list-container">
        <#list employees as employee>
        <div class="employee-card" data-id="${employee.id}">
            <h3>${employee.firstName} ${employee.lastName}</h3>
            <p>Email: ${employee.email}</p>
            <p>Department: ${employee.department}</p>
            <p>Role: ${employee.role}</p>
            <button onclick="editEmployee(${employee.id})">Edit</button>
            <button onclick="deleteEmployee(${employee.id})">Delete</button>
        </div>
        </#list>
    </div>
    <script src="/static/js/data.js"></script>
    <script src="/static/js/app.js"></script>
</body>
</html>
