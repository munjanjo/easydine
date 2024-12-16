import "../styles/formPage.css";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function FormPage() {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({
    date: null,
    time: null,
    table: "",
    name: "",
    surname: "",
    email: "",
    phoneNumber: "",
    numOfPeople: "",
    preorder: "",
  });
  const navigate = useNavigate();
  function submit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8081/reserve", values)
      .then((res) => {
        navigate("/reservations");
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      {step === 1 ? (
        <>
          <label>
            <p>Choose a date: </p>{" "}
            <input
              type="date"
              id="Date"
              onChange={(e) =>
                setValues((prev) => {
                  return { ...prev, date: e.target.value };
                })
              }
            />
          </label>
          <label>
            <p>Choose a time: </p>{" "}
            <input
              type="time"
              id="time"
              onChange={(e) =>
                setValues((prev) => {
                  return { ...prev, time: e.target.value };
                })
              }
            />
          </label>
          <p>Choose a table:</p>
          <div>
            <div>
              <button
                id="table"
                onClick={() => {
                  setStep(2);
                  setValues((prev) => {
                    return { ...prev, table: "Table 1" };
                  });
                }}
              >
                Table 1
              </button>
              <button
                id="table"
                onClick={() => {
                  setStep(2);
                  setValues((prev) => {
                    return { ...prev, table: "Table 2" };
                  });
                }}
              >
                Table 2
              </button>
              <button
                id="table"
                onClick={() => {
                  setStep(2);
                  setValues((prev) => {
                    return { ...prev, table: "Table 3" };
                  });
                }}
              >
                Table 3
              </button>
            </div>
            <div>
              {" "}
              <button
                id="table"
                onClick={() => {
                  setStep(2);
                  setValues((prev) => {
                    return { ...prev, table: "Table 4" };
                  });
                }}
              >
                Table 4
              </button>
              <button
                id="table"
                onClick={() => {
                  setStep(2);
                  setValues((prev) => {
                    return { ...prev, table: "Table 5" };
                  });
                }}
              >
                Table 5
              </button>
              <button
                id="table"
                onClick={() => {
                  setStep(2);
                  setValues((prev) => {
                    return { ...prev, table: "Table 6" };
                  });
                }}
              >
                Table 6
              </button>
            </div>
          </div>
        </>
      ) : (
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
      )}
    </>
  );
}
