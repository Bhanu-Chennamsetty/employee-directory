<form id="employeeForm">
    <h2 id="form-title">Add/Edit Employee</h2>
    <label>First Name: <input type="text" id="firstName" required></label>
    <label>Last Name: <input type="text" id="lastName" required></label>
    <label>Email: <input type="email" id="email" required></label>
    <label>Department: <input type="text" id="department" required></label>
    <label>Role: <input type="text" id="role" required></label>
    <input type="hidden" id="employeeId">
    <div class="form-actions">
        <button type="submit">Save</button>
        <button type="button" onclick="cancelEdit()">Cancel</button>
    </div>
</form>
