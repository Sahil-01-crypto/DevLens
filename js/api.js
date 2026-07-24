async function getRepository(username) {
    try {
        const response  = await fetch(`https://api.github.com/users/${username}/repos`)
        const Repodata =  await response.json();
        console.log( response.status);
        console.log(response.ok);
         
     viewAllBtn.href = `https://github.com/${username}?tab=repositories`
     

      
        showRepository( Repodata);
    }
    catch(error){
        console.log(error)
    }

    
}

