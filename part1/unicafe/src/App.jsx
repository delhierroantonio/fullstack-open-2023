import { useState } from "react";

const StatisticLine = ({ stat, value }) => {
  return (
    <tr>
      <td>{stat}:</td>
      <td>{value}</td>
    </tr>
  );
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const btnsContainerStyle = {
    display: "flex",
    gap: "1rem",
  };

  const btnStyle = {
    color: "#ff8fa3",
    backgroundColor: "#343a40",
    padding: ".6rem 1.2rem",
    border: "none",
    borderRadius: ".2rem",
    cursor: "pointer",
  };

  const incrementFeed = (feed, setFeed) => {
    setFeed(feed + 1);
    setTotal(total + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <div className="feed-btns" style={btnsContainerStyle}>
        <Button
          handleClick={() => incrementFeed(good, setGood)}
          text="good"
          style={btnStyle}
        />
        <Button
          handleClick={() => incrementFeed(neutral, setNeutral)}
          text="neutral"
          style={btnStyle}
        />
        <Button
          handleClick={() => incrementFeed(bad, setBad)}
          text="bad"
          style={btnStyle}
        />
      </div>
      <div
        className="stats"
        style={{
          backgroundColor: "lightGrey",
          margin: "1rem 0",
          padding: "1rem .5rem",
          borderRadius: ".2rem",
        }}
      >
        {total > 0 ? (
          <>
            <table>
              <tbody>
                <StatisticLine stat="good" value={good} />
                <StatisticLine stat="neutral" value={neutral} />
                <StatisticLine stat="bad" value={bad} />
              </tbody>
            </table>
            <div>
            <p>Total of votes: {total}</p>
              <p>
              Avg: {total > 0 ? (good - bad) / (good + neutral + bad) : 0}
              </p>
              <p>
              Positive: {total > 0 ? good / (good + neutral + bad) : 0}%
            </p>
            </div>
          </>
        ) : (
          <p>No Feedback given</p>
        )}
      </div>
    </div>
  );
};

export default App;
