

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
 const viewAllBtn = document . getElementById("viewallrepo");








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

        console.log( data )

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
        console.log(data);
        showDetails(data);
        getRepository(data.login);




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
    ownerName.textContent = data.name ?? data.login;

    ownerUserName.textContent = data.login;
    ownerProfileLink.href = data.html_url;
    ownerBio.textContent = data.bio ?? "No bio available.";
    ownerFollower.textContent = data.followers;
    ownerFollowing.textContent = data.following;
    ownerRepo.textContent = data.public_repos;
}


function showRepository(repositories) {

   
    

    

    const repoGrid = document.querySelector(".repo-grid");
    repoGrid.innerHTML = "";

    const firstSixRepositories = repositories.slice(0, 6);

    firstSixRepositories.forEach((repo) => {

     
        const article = document.createElement("article");
        article.classList.add("repo-card");

        
        const repoTop = document.createElement("div");
        repoTop.classList.add("repo-top");

        const repoName = document.createElement("h3");
        repoName.textContent = repo.name;

        const language = document.createElement("span");
        language.textContent = repo.language ?? "Unknown";

        repoTop.append(repoName, language);

      
        const description = document.createElement("p");
        description.textContent =
            repo.description ?? "No description available.";

        const repoBottom = document.createElement("div");
        repoBottom.classList.add("repo-bottom");

        const repoStats = document.createElement("div");
        repoStats.classList.add("repo-stats");

        const stars = document.createElement("span");
        stars.innerHTML = `<i class="fa-solid fa-star"></i> ${repo.stargazers_count}`;

        const forks = document.createElement("span");
        forks.innerHTML = `<i class="fa-solid fa-code-fork"></i> ${repo.forks_count}`;

        repoStats.append(stars, forks);

        const visitRepo = document.createElement("a");
   
        visitRepo.href = repo.html_url;
        visitRepo.target = "_blank";
        visitRepo.textContent = "Visit ->";

        repoBottom.append(repoStats, visitRepo);

        
        article.append(repoTop, description, repoBottom);

        repoGrid.append(article);

    });

}





