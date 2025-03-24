$(document).ready(function () {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userList = $("#userList");

    function renderUsers() {
        userList.empty();
        if (users.length === 0) {
            userList.html(`<li>No users registered yet.</li>`);
        } else {
            users.forEach(user => {
                userList.append(`<li>Name: ${user.name}, Email: ${user.email}, Number: ${user.number}</li>`);
            });
        }
    }

    renderUsers();

    // Delete functionality without needing page refresh
    $("#delete").click(function () {
        if (users.length > 0) {
            users.pop();
            localStorage.setItem("users", JSON.stringify(users));
            renderUsers(); // Update the user list dynamically
        }
    });
});
