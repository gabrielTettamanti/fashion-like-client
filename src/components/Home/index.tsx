import React from "react";

import NavBar from "../NavBar"
import Welcome from "../Welcome";

export default () => {
    return (
        <>
            <NavBar />
            <main>
                <Welcome />
            </main>
        </>
    )
}