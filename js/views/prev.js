function renderRecent() {
    const viewcont = document.querySelector(".view-container")

    viewcont.innerHTML = `
    <section class="recent-searches">

    <h2>Recent Searches</h2>

    <section class="recentcontainer">

    </section>

</section>

`
    showrecent();
}


function showrecent() {


    const recentcont = document.querySelector(".recentcontainer");
    let recentDetail = JSON.parse(localStorage.getItem("previousdetails")) || [];
    recentcont.innerHTML = "";

    recentDetail.forEach(info => {
        const recentCard = document.createElement("article");
        recentCard.classList.add("recent-card");

        const avatar = document.createElement("img");
        avatar.src = info.avatar;
        avatar.alt = `${info.username}'s avatar`;

        const content = document.createElement("div");
        content.classList.add("recent-content");

        const name = document.createElement("h3");
        name.textContent = info.name || info.username;

        const username = document.createElement("p");
        username.textContent = `@${info.username}`;

        const link = document.createElement("a");
        link.href = info.profileUrl;
        link.target = "_blank";
        link.textContent = "View Profile";


        content.appendChild(name);
        content.appendChild(username);

        recentCard.appendChild(avatar);
        recentCard.appendChild(content);
        recentCard.appendChild(link);

        recentcont.appendChild(recentCard);
    });


}