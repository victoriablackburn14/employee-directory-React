import React from "react";
import "../styles/DataBody.css";

function userData ({ users}){
    function Date (date){
        const dateArray = date.split("-");
        const year = dateArray[0];
        const month = dateArray[1];
        const dayArray = dateArray[2].split("T");
        const day = dayArray[0];
        const formattedDate = [month, day, year].join("-");
        return formattedDate;
    }

    return (
        <tbody>
            {users[0] }
        </tbody>
    )
}

