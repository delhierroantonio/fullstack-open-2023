const Filter = ({ setFilterName }) => {
  return (
    <>
      <div className="filterInput inputField">
        <label htmlFor="search">Filter shown with: </label>
        <input type="search" placeholder="Search for a contact" onChange={(e) => setFilterName(e.target.value)} />
      </div>
    </>
  )
}

export default Filter