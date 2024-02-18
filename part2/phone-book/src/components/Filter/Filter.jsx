const Filter = ({ setNameToFilter }) => {
  return (
    <>
      <label>Filter by name: </label>
      <input type='text' onChange={(e) => setNameToFilter(e.target.value)} />
    </>
  )
}

export default Filter
