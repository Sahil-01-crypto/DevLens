function renderHero() {

    const viewContainer = document.querySelector(".view-container");

    viewContainer.innerHTML = `
    
    <section class="hero">

        <p class="hero-tag">
            POWERED BY GITHUB REST API
        </p>

        <h1 class="hero-title">
            Search Any
            <span>GitHub Developer</span>
        </h1>

        <p class="hero-description">
            Explore developer profiles, repositories,
            followers and coding activity through
            a beautiful modern dashboard.
        </p>

        <div class="hero-features">

            <div class="feature">
                👤 Profile Analytics
            </div>

            <div class="feature">
                📂 Repository Explorer
            </div>

            <div class="feature">
                🕒 Recent Searches
            </div>

        </div>

    </section>

    `;

}