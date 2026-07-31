

const searchInput = document.getElementById("search-input")
const searchBtn = document.getElementById("search-btn")



const recentBtn = document.getElementById("recentNav");
const desktopBtn = document . getElementById("dashboardNav")











// adding EventListner to the searchbtn 
searchBtn.addEventListener("click", function () {

    const username = searchInput.value.trim();

    if (username === "") {
        showToast({
            message: "Empty Username",
            description: "Please enter a GitHub username.",
            type: "warning"
        });
        return;

    }

    getProfileDetails(username);


})




desktopBtn.addEventListener("click" , function(){
    renderHero();
    
})





recentBtn.addEventListener("click", function () {
    renderRecent();
})



renderHero();




