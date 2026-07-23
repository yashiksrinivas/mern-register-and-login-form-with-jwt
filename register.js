import { useState } from "react";

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const RegisterUser = async () => {

        const res = await fetch("http://localhost:5000/register", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                name,
                email,
                password

            })

        });

        const data = await res.json();

        alert(data.message);

    };

    return (

        <div>

            <h2>Register</h2>

            <input
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
            />

            <br /><br />

            <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />

            <br /><br />

            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <br /><br />

            <button onClick={RegisterUser}>

                Register

            </button>

        </div>

    );

}

export default Register;