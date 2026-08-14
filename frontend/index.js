//alert("welcome to web bootcamp!");
var user=[
    {
        "name": "john doe",
        "gender": "male",
        "image": "john.png"
    },
    {
         "name": "jane doe",
        "gender": "female",
        "image": "jane.png"
    },
    {
     "name": "summer",
        "gender": "season",
        "image": "img.jpeg"
    } 
]
var curId = 0;

function toggleUser(){
    curId = (curId + 1) % user.length;
    var userName = document.getElementById("user-name");    
    var userGender = document.getElementById("user-gender");
    var userImage = document.getElementById("user-image");

    userName.innerHTML = user[curId].name;
    userGender.innerHTML = user[curId].gender;
    userImage.src = user[curId].image;
}