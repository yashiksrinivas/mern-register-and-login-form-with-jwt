import { useState } from "react";

function Login() {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const LoginUser = async () => {

        const res = await fetch("http://localhost:5000/login", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                email,
                password

            })

        });

        const data = await res.json();

        localStorage.setItem("token", data.token);

        alert(data.message);

    };

    return (

        <div>

            <h2>Login</h2>

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

            <button onClick={LoginUser}>

                Login

            </button>

        </div>

    );

}

export default Login;