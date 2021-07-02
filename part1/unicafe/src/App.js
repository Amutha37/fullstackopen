import React, { useState } from "react";
import "./App.css";

// Button component
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

// Statistics component
const Statistics = ({ good, neutral, bad, total }) => {
  const average = () => (good - bad / total).toFixed(1);
  const positive = () => ((good / total) * 100).toFixed(1);

  return (
    <table className="dml_table" cellPadding={0} cellSpacing={0}>
      <tbody>
        <Printlist text="Good" id="" value={good} />
        <Printlist text="Neutral" id="" value={neutral} />
        <Printlist text="Bad" id="" value={bad} />
        <Printlist text="Total" id="" value={total} />
        <Printlist text="Everage" id="" value={average()} />
        <Printlist text="Positive" id="%" value={positive()} />
      </tbody>
    </table>
  );
};

//Printlist  component
const Printlist = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>
        {props.value} {props.id}
      </td>
    </tr>
  );
};

const App = () => {
  // save clicks of each button to its own state
  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);
  // const [total, setTotal] = (0);
  const [clicks, setClicks] = useState({
    Good: 0,
    Neutral: 0,
    Bad: 0,
    Total: 0,
  });

  // handler for good feedback
  const goodFeedback = () =>
    setClicks({ ...clicks, Good: clicks.Good + 1, Total: clicks.Total + 1 });
  // handler for neutral feedback
  const neutralFeedback = () =>
    setClicks({
      ...clicks,
      Neutral: clicks.Neutral + 1,
      Total: clicks.Total + 1,
    });
  // handler for bad feedback
  const badFeedback = () =>
    setClicks({ ...clicks, Bad: clicks.Bad + 1, Total: clicks.Total + 1 });

  //   const objlength = Object.keys(clicks).length;
  //  if
  //   setClicks({ ...clicks, Average: clicks.Total / objlength })
  //   setClicks({ ...clicks, Average: clicks.Positive / objlength })
  return (
    <div className="unicafecontainer">
      <h1>Give Feedback</h1>
      <Button handleClick={goodFeedback} text="Good" />
      <Button handleClick={neutralFeedback} text="Neutral" />
      <Button handleClick={badFeedback} text="Bad" />

      <h3>Statictics</h3>
      {/* <Display count={clicks.Good} text="Good" />
      <Display count={clicks.Neutral} text="Neutral" />
      <Display count={clicks.Bad} text="Bad" /> */}
      {/* {!clicks.Total && <p>No feedback given.</p>} */}
      {clicks.Total ? (
        <Statistics
          total={clicks.Total}
          good={clicks.Good}
          neutral={clicks.Neutral}
          bad={clicks.Bad}
        />
      ) : (
        <p>No feedback given.</p>
      )}
    </div>
  );
};

export default App;
