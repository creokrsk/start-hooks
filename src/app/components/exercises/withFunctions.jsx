import React, { useState } from "react";
import Card from "../common/Card";

const withFunctions = (Component) => (props) => {
    const [isAuth, setIsAuth] = useState(
        JSON.parse(localStorage.getItem("auth"))
    );
    const handleLogin = () => {
        localStorage.setItem("token", true);
        setIsAuth(true);
    };
    const handleLogOut = () => {
        localStorage.setItem("auth", false);
        setIsAuth(false);
    };

    return (
        <Card>
            <Component
                {...props}
                isAuth={isAuth}
                onLogIn={handleLogin}
                onLogOut={handleLogOut}
            />
        </Card>
    );
};

export default withFunctions;
