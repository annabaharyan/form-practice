import React from "react";

export default function UserList({
  userList,
  onDelete,
  onSalaryUp,
  onSalaryDown,
  ondouleSalary
}) {
  return (
    <div>
      <h2>User List</h2>
      <table border={1} style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>surname</th>
            <th>salary</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((item, index) => {
            const css = item.salary > 300000 ? "high" : "null";
            return (
              <tr key={item.id} className={css}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.surname}</td>
                <td>{item.salary}</td>
                <td>
                  <button onClick={() => onSalaryUp(item.id)}>
                    sallary up
                  </button>
                  <button onClick={() => onSalaryDown(item.id)}>
                    sallary down
                  </button>
                  <button onClick={() => onDelete(item.id)}>delete</button>
                  <button onClick={()=>ondouleSalary(item.id)}>double salary</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
