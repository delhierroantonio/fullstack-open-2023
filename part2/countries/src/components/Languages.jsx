const Languages = ({ languages }) => {
  const languagesArray = Object.values(languages)

  return (
    <>
      <h3>Languages Spoken:</h3>
      <ul>
        {languagesArray.map(lan => (
          <li key={lan}>{lan}</li>
        ))}
      </ul>
    </>
  )
}

export default Languages
