function fetchWhosHome() {
    const db = firebase.firestore();
    const userList = document.getElementById("userList");

    db.collection("whosHome").get().then(querySnapshot => {
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            console.log(data)
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    let status = data[key];
                    const li = document.createElement("li");
                    li.textContent = `${key}: ${status ? "HOME" : "AWAY"}`;
                    li.classList.add(status ? "home" : "away");
                    li.addEventListener("click", () => {
                        status = !status; // Toggle the status
                        li.textContent = `${key}: ${status ? "HOME" : "AWAY"}`;
                        li.className = status ? "home" : "away";

                        // Update the Firestore database with the new status
                        db.collection("whosHome").doc(doc.id).update({
                            [key]: status
                        });
                    });
                    userList.appendChild(li);
                }
            }
        });
    });
}

window.onload = fetchWhosHome;
