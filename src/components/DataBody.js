import React from "react";
import "../styles/DataBody.css";

function userData({ users }) {
  function Date(date) {
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
      {users[0] !== undefined && users[0].name !== undefined ? (
        users.map(
          ({ userName, name, picture, phoneNumber, email, birthDay }) => {
            return (
              <tr key={userName.uuid}>
                <td data-th="Image" className="align-middle">
                  <img
                    src={picture.medium}
                    alt={"profile picture for " + name.first + "" + name.last}
                    className="img-responsive"
                  />
                </td>
                <td data-th="Name" className="name-cell align middle">
                  {name.first} {name.last}
                </td>
                <td data-th="Phone" className="align-middle">
                  {phoneNumber}
                </td>
                <td data-th="Email" className="align-middle">
                  <a href={"email to" + email} target="_blank">
                    {email}
                  </a>
                </td>
                <td data-th="DOB" className="align-middle">
                  {formatDate(birthDay.date)}
                </td>
              </tr>
            );
          }
        )
      ) : (
        <></>
      )}
    </tbody>
  );
}

export default userData;