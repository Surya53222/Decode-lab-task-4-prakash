async function loadStudents() {

    const container =
        document.getElementById("students");

    try {

        container.innerHTML =
            "Loading...";

        const response =
            await fetch(
                "http://localhost:5000/students"
            );

        const data =
            await response.json();

        container.innerHTML = "";

        data.forEach(student => {

            container.innerHTML += `
                <div class="student">
                    <h3>${student.name}</h3>
                    <p>${student.course}</p>
                </div>
            `;
        });

    } catch(error) {

        container.innerHTML =
            "Failed to load data";

        console.log(error);
    }
}