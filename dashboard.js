import { useEffect } from "react";

function Dashboard() {

    useEffect(() => {

        const token = localStorage.getItem("token");

        fetch("http://localhost:5000/profile", {

            headers: {

                authorization: token

            }

        })

        .then((res) => res.json())

        .then((data) => {

            console.log(data);

        });

    }, []);

    return (

        <div>

            <h2>Dashboard</h2>

        </div>

    );

}

export default Dashboard;