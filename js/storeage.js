function addToLocalStorage(searchData) {

    let data = JSON.parse(localStorage.getItem("previousdetails")) || [];

    const alreadyExists = data.some(user =>
        user.username === searchData.username
    );

    if (alreadyExists) {
        return;
    }

    data.push(searchData);

    localStorage.setItem("previousdetails", JSON.stringify(data));
}

