function showToast(options) {

    // Find existing container
    let toastContainer = document.querySelector(".toast-container");

    // Create it only once
    if (!toastContainer) {

        toastContainer = document.createElement("div");
        toastContainer.classList.add("toast-container");

        document.body.appendChild(toastContainer);
    }

    // Create one toast
    const toast = document.createElement("div");
    toast.classList.add("toast", options.type);

    // Heading
    const heading = document.createElement("h3");
    heading.textContent = options.message;

    // Paragraph
    const paragraph = document.createElement("p");
    paragraph.textContent = options.description;

    // Build toast
    toast.appendChild(heading);
    toast.appendChild(paragraph);

    // Add toast to container
    toastContainer.appendChild(toast);

    // Auto remove
    setTimeout(() => {

    toast.classList.add("fade-out");

    setTimeout(() => {

        toast.remove();

    },350);

},3000);
}



function showProfileDetails(data) {

    const avatarImage = document.getElementById("avatar")
const ownerName = document.getElementById("name")
const ownerUserName = document.getElementById("username")
const ownerProfileLink = document.getElementById("profile-link")
const ownerBio = document.getElementById("bio");
const ownerFollower = document.getElementById("followers")
const ownerFollowing = document.getElementById("following")
const ownerRepo = document.getElementById("repositories")

    avatarImage.src = data.avatar_url;
    ownerName.textContent = data.name ?? data.login;

    ownerUserName.textContent = data.login;
    ownerProfileLink.href = data.html_url;
    ownerBio.textContent = data.bio ?? "No bio available.";
    ownerFollower.textContent = data.followers;
    ownerFollowing.textContent = data.following;
    ownerRepo.textContent = data.public_repos;

    let detail = {
        username: data.login,
        name: data.name,
        avatar: data.avatar_url,
        profileUrl: data.html_url,
    }
    addToLocalStorage(detail);

    
}


function showRepository(repositories) {

    console.log("bingo")
    const repoGrid = document.querySelector(".repo-grid");

    console.log("Inside showRepository");
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