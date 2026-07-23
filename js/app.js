

const searchInput = document.getElementById("search-input")
const searchBtn = document.getElementById("search-btn")

const avatarImage = document.getElementById("avatar")
const ownerName = document.getElementById("name")
const ownerUserName = document.getElementById("username")
const ownerProfileLink = document.getElementById("profile-link")
const ownerBio = document.getElementById("bio");
const ownerFollower = document.getElementById("followers")
const ownerFollowing = document.getElementById("following")
const ownerRepo = document.getElementById("repositories")






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

    getDetails(username);


})

async function getDetails(username) {

    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        console.log(response.ok);
        console.log(response.status);
        const data = await response.json();

        if (!response.ok) {
            showToast({
                message: "UserName Not Found",
                description: "Please enter a GitHub username.",
                type: "Error"
            });
            return;
        }
        
            showToast({
                message: "Profile Loaded",
                description: "GitHub profile fetched successfully.",
                type: "success"
            });
            showDetails(data);
        

    }
    catch (error) {
        showToast({
            message: "Network Error",
            description: "Please check your internet connection.",
            type: "error"
        });
    }



}

function showDetails(data) {

    avatarImage.src = data.avatar_url;
    ownerName.textContent =data.name ?? data.login ;

    ownerUserName.textContent = data.login;
    ownerProfileLink.href = data.html_url;
    ownerBio.textContent = data.bio ?? "No bio available.";
    ownerFollower.textContent = data.followers;
    ownerFollowing.textContent = data.following;
    ownerRepo.textContent = data.public_repos;





}




