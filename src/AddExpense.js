import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { AppContext } from "./AppContext";

const AddExpenseForm = () => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const { dispatch } = useContext(AppContext);
  const handleonSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleonSubmit}>
      <div className="row">
        <div className="col-sm">
          <label for="name">Name</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>
        <div className="col-sm">
          <label for="cost">Cost</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="cost"
            value={cost}
            onChange={(e) => {
              setCost(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <button type="submit" className="btn btn-primary mt-3">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
