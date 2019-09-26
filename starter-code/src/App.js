import React from "react";
import "./App.css";
import users from "./users";
import UserList from "./UserList";
class App extends React.Component {
  state = {
    usersList: users,
    search: "",
    student: true,
    teacher: true,
    select: "All"
  };

  searchInput = event => {
    const value = event.target.value;

    this.setState({
      search: value
    });
  };

  checked = event => {
    const checkval = event.target.checked;
    this.setState({
      [event.target.name]: checkval
    });
  };

  select = event => {
    this.setState({
      select: event.target.value
    });
  };

  render() {
    console.log("seach val" + this.state.search);
    console.log("student checked :" + this.state.student);
    console.log("teacher checked :" + this.state.teacher);
    return (
      <div className="App">
        <input
          type="text"
          name="search"
          title="search"
          value={this.state.search}
          onChange={this.searchInput}
          style={{ width: "50vw", height: "5vh", fontSize: "4vh" }}
        />
        <input
          type="checkbox"
          name="student"
          title="student"
          checked={this.state.student}
          onChange={this.checked}
          style={{ width: "3vw", height: "3vh", fontSize: "2vh" }}
        />
        <span style={{ height: "3vh", width: "5vw", fontSize: "2.5vh" }}>
          Student
        </span>
        <input
          type="checkbox"
          name="teacher"
          title="teacher"
          checked={this.state.teacher}
          onChange={this.checked}
          style={{ width: "3vw", height: "3vh", fontSize: "2vh" }}
        />
        <span style={{ height: "3vh", width: "5vw", fontSize: "2.5vh" }}>
          Teacher
        </span>
        <select
          name="campus"
          id="campus"
          style={{
            width: "5vw",
            height: "3vh",
            fontSize: "2vh",
            marginLeft: 20
          }}
          onChange={this.select}
        >
          <option value="All">All</option>
          <option value="Berlin">Berlin</option>
          <option value="Paris">Paris</option>
          <option value="Lisbon">Lisbon</option>
        </select>
        <table>
          <tbody>
            <tr>
              <td>
                <strong>First Name</strong>
              </td>
              <td>
                <strong>Last Name</strong>
              </td>
              <td>
                <strong>Campus</strong>
              </td>
              <td>
                <strong>Role</strong>
              </td>
              <td>
                <strong>Links</strong>
              </td>
            </tr>
            <UserList
              usersList={this.state.usersList}
              search={this.state.search}
              state={this.state}
            />
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
