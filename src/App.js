import "./App.css";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    { id: 101, name: "Anna", surname: "Baharyan", salary: 100000 },
    { id: 102, name: "Maria", surname: "Sarukhanyan", salary: 10000 },
    { id: 103, name: "Monte", surname: "Sarukhanyan", salary: 150000 },
    { id: 104, name: "Hovsep", surname: "Sarukhanyan", salary: 300000 },
  ]);
  const adduser = (newUser) => {
    setUsers([...users, { ...newUser, id: users[users.length - 1].id + 1 }]);
  };
  const handleSallaryUp = (id) => {
    let person = users.find((item) => item.id === id);
    if (person) {
      person.salary += 50000;
    }
    setUsers([...users]);
  };
  const handleSalaryDown = (id) => {
    let person = users.find((item) => item.id === id);
    if (person && person.salary >= 50000) {
      person.salary -= 50000;
    }
    setUsers([...users]);
  };
  const handleDelete = (id) => {
    setUsers([...users.filter((item) => item.id !== id)]);
  };
  const doubleSalary = (id) => {
    setUsers([
      ...users.map((item) => {
        if (item.id === id) {
          return { ...item, salary: item.salary * 2 };
        }
        return item;
      }),
    ]);
  };
  const down27 = () => {
    setUsers([
      ...users.map((item) => {
        let newSalary = (item.salary - (item.salary * 27) / 100).toFixed(0);
        return { ...item, salary: newSalary };
      }),
    ]);
  };
  return (
    <div className="app-component">
      <button className="down-sal-27" onClick={down27}>
        All salaries down 27%
      </button>

      <div className="App">
        <UserList
          userList={users}
          onDelete={handleDelete}
          onSalaryUp={handleSallaryUp}
          onSalaryDown={handleSalaryDown}
          ondouleSalary={doubleSalary}
        />
        <AddUser adduser={adduser} />
      </div>
    </div>
  );
}

export default App;
