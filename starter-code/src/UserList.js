import React from "react";

const UserList = props => {
  let filterlist = props.usersList
    .filter(val => {
      return (
        val.firstName.toLowerCase().includes(props.search.toLowerCase()) ||
        val.lastName.toLowerCase().includes(props.search.toLowerCase())
      );
    })
    .filter(val => props.state[val.role])
    .filter(val =>
      props.state.select === "All" ? true : props.state.select === val.campus
    );
  console.log(props.state);

  let userlist = filterlist.map(val => {
    return (
      <tr key={val.firstName + val.lastName}>
        <td>{val.firstName}</td>
        <td>{val.lastName}</td>
        <td>{val.campus}</td>
        <td>{val.role}</td>
        {val.linkedin ? (
          <td>
            <a href={val.linkedin}>
              <img
                src="../linkedin.png"
                alt="linkedinimg"
                style={{ height: 15, width: 15 }}
              />
            </a>
          </td>
        ) : (
          ""
        )}
      </tr>
    );
  });

  return <>{userlist}</>;
};

export default UserList;
