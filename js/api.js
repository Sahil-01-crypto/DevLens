async function getProfileDetails(username) {

    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        console.log(response.ok);
        console.log(response.status);
        const data = await response.json();

        console.log(data)

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
        renderDashBoard();
        showProfileDetails(data);
        getRepository(data.login);




    }
    catch (error) {

         console.error(error);
        showToast({
            message: "Network Error",
            description: "Please check your internet connection.",
            type: "error"
        });
    }



}






async function getRepository(username) {
    try {

        console.log("Inside getRepository");
        const response  = await fetch(`https://api.github.com/users/${username}/repos`)
        const Repodata =  await response.json();
        console.log( response.status);
        console.log(response.ok);
         const viewAllBtn = document.getElementById("viewallrepo");
     viewAllBtn.href = `https://github.com/${username}?tab=repositories`
     

      showRepository(Repodata);
        
    }
    catch (error) {
   console.log(error);

}

    
}

