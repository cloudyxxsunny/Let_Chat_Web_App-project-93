function addUser()
{
    Username = document.getElementById("user_name").value;
    localStorage.setItem("username",Username);
    window.location="kwitter_room.html"
}