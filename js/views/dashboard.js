function renderDashBoard(){

    const viewContainer = document . querySelector(".view-container")

    viewContainer . innerHTML=` <section class="profile-card">


                    <div class="profile-image">

                        <img id="avatar" src="assets/images/avatar-placeholder.png" alt="Profile Avatar">

                    </div>

                    <div class="profile-info">

                        <div class="profile-header">

                            <div>

                                <h2 id="name">
                                    
                                </h2>

                                <p id="username">
                                    
                                </p>

                            </div>

                            <a href="#" class="profile-btn" id="profile-link">
                                Visit Profile
                            </a>

                        </div>

                        <p id="bio">
                            
                        </p>

                    </div>

                </section>

                <section class="stats-grid">

                    <article class="stat-card">

                        <h3>Followers</h3>

                        <p id="followers">
                            
                        </p>

                    </article>

                    <article class="stat-card">

                        <h3>Following</h3>

                        <p id="following">
                         
                        </p>

                    </article>

                    <article class="stat-card">

                        <h3>Repositories</h3>

                        <p id="repositories">
                            
                        </p>

                    </article>

                </section>

                <!-- =====================================
            Repository Section
====================================== -->

                <section class="repo-section">

                    <div class="repo-header">

                        <h2>Repositories</h2>

                        <a href="#" id="viewallrepo">View All →</a>

                    </div>

                    <div class="repo-grid">

                        <!-- Repo Card 1 -->


                    </div>

                </section>`
}