import React, { useState } from "react";

export default function AddUser({ adduser }) {

  const initialValue = { name: "", surname: "", salary: 60000 };
  const [form, setform] = useState(initialValue);
  const [error, seterror] = useState("");
  const handleSumbit = (e) => {
    e.preventDefault();
    if (!form.name || !form.surname || !form.salary) {
      seterror("Fill all fields");
    } else {
      seterror("");
      setform(initialValue);
    }
   
    adduser(form);
  };
  return (
    <div className="addUser">
      <h2>Add User</h2>
      <form onSubmit={handleSumbit}>
        <div>
          <p style={{ color: "red" }}>{error}</p>
        </div>
        <label>name</label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setform({ ...form, name: e.target.value })}
        />
        <label>surname</label>
        <input
          type="text"
          value={form.surname}
          onChange={(e) => setform({ ...form, surname: e.target.value })}
        />
        <label>salary</label>
        <input
          type="number"
          value={form.salary}
          step={10000}
          onChange={(e) => e.target.value>=0?[setform({ ...form, salary: e.target.value }),seterror("")] :seterror("salary must be greater or equal to 0")}
        />
        <button>Save</button>
      </form>
    </div>
  );
}
