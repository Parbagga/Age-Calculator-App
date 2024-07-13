

const DisplayResult = ({day='--',month='--',year='--'}) => {
  return (
    
    <div className="display-output">
        <p>
          <span>{year}</span> years{" "}
        </p>
        <p>
         
          <span>{month}</span> months{" "}
        </p>
        <p>
          <span>{day}</span> days{" "}
        </p>
      </div>
  )
}

export default DisplayResult;