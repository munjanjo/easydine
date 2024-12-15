import "../styles/formPage.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function FormPage() {
  const [values, setValues] = useState({
    name: "",
    surname: "",
    email: "",
    phoneNumber: "",
    numOfPeople: "",
    preorder: "",
  });

  function submit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8081/reserve", values)
      .then((res) => {
        navigate("/home");
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <h1>Fill in the form:</h1>
      <div className="forma">
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={(e) =>
                setValues((prev) => {
                  return { ...prev, name: e.target.value };
                })
              }
            />
          </label>
          <label>
            Surname:
            <input
              type="text"
              name="surname"
              onChange={(e) =>
                setValues((prev) => {
                  return { ...prev, surname: e.target.value };
                })
              }
            />
          </label>
          <label>
            Phone number:
            <input
              type="text"
              name="number"
              onChange={(e) =>
                setValues((prev) => {
                  return { ...prev, phoneNumber: e.target.value };
                })
              }
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              onChange={(e) =>
                setValues((prev) => {
                  return { ...prev, email: e.target.value };
                })
              }
            />
          </label>
          <label>
            Number of people:
            <input
              type="number"
              name="number"
              min={1}
              max={15}
              onChange={(e) =>
                setValues((prev) => {
                  return { ...prev, numOfPeople: e.target.value };
                })
              }
            />
          </label>
          <label>
            Preorder meals:
            <input
              type="comment"
              name="comment"
              onChange={(e) =>
                setValues((prev) => {
                  return { ...prev, preorder: e.target.value };
                })
              }
            />
          </label>
          <input type="submit" name="submit" onClick={(e) => submit(e)} />
        </form>
      </div>
    </>
  );
}
