$(document).ready(function () {
    const form = $("#reg_Form");
    $("#sub").click(function () {

        const user = {
            name: $("#name").val(),
            number: $("#number").val(),
            email: $("#email").val()
        };

        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));

        alert("User Registered Successfully!");
        form.reset();
    })
})