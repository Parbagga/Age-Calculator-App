import { useState } from "react";
import Inputbox from "./Inputbox";
import DisplayResult from "./DisplayResult";
import { ReactComponent as Icon } from "./icon-arrow.svg";
import {
  validationSchema,
  daySchema,
  monthSchema,
  yearSchema,
} from "./Validation/validation";
import { calcTime } from "./Functions/calculation";

const Calculator = (props) => {
  // use State
  const [DOB, setDOB] = useState({ Day: "", Month: "", Year: "" });
  const [display, setDisplay] = useState({
    Day: "--",
    Month: "--",
    Year: "--",
  });
  const [error, setError] = useState({ Day: false, Month: false, Year: false });
  const [message, setMessage] = useState(["", "", ""]);

  // Handlers

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isvalid = await validationSchema.isValid(DOB);

    if (isvalid) {
      calcTime(DOB, setDisplay, display);
      setDOB({ Day: "", Month: "", Year: "" });
    } else {
      setError({ Day: true, Month: true, Year: true });
      setMessage(["Must be a Valid Date"]);
    }
  };

  const onchange = async (e) => {
    const { name, value } = e.target;
    const updatedDOB = { ...DOB, [name]: value ? Number(value) : "" };

    let dayIsValid;
    let monthIsValid;
    let yearIsValid;

    if (updatedDOB.Day !== "") {
      setMessage(["Must be valid day", "", ""]);
      dayIsValid = await daySchema.isValid(updatedDOB);
    }
    if (updatedDOB.Month !== "") {
      setMessage(["", "Must be valid month", ""]);
      monthIsValid = await monthSchema.isValid(updatedDOB);
    }
    if (updatedDOB.Year !== "") {
      setMessage(["", "", "Must be valid year"]);
      yearIsValid = await yearSchema.isValid(updatedDOB);
    }

    setError({
      Day: updatedDOB.Day !== "" && !dayIsValid,
      Month: updatedDOB.Month !== "" && !monthIsValid,
      Year: updatedDOB.Year !== "" && !yearIsValid,
    });

    setDOB(updatedDOB);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-days">
          <Inputbox
            error={error.Day}
            message={message[0]}
            type="number"
            name="Day"
            value={DOB.Day}
            onChange={onchange}
          />
          <Inputbox
            error={error.Month}
            message={message[1]}
            type="number"
            name="Month"
            value={DOB.Month}
            onChange={onchange}
          />
          <Inputbox
            error={error.Year}
            message={message[2]}
            type="number"
            name="Year"
            value={DOB.Year}
            onChange={onchange}
          />
        </div>
        <div className="submit">
          <button className="btn">
            <Icon className="icon" />
          </button>
        </div>
      </form>

      <DisplayResult
        day={display.Day}
        month={display.Month}
        year={display.Year}
      />
    </div>
  );
};

export default Calculator;
