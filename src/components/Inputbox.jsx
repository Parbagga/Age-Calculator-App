import React from "react";

const Inputbox = (props) => {
  const { color,value, error,message, onChange, ...inputs } = props;

  return (
    <div className="inputTab">
      <h4 style={ {color:error &&'red'}} className="label">
        {props.name}
      </h4>
      <input style={{outline:error&&"none",border:error&&'1px red solid'}} {...inputs} onChange={onChange} />

      {error && <span>{message}</span>}
    </div>
  );
};

export default Inputbox;
