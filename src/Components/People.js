const People = ({ names }) => (
  
  names ? (
    <ul className="people">
      { names.map((person, index) => (
        <li className="list-item" key={ index }>{ person }</li>))}
    </ul>) : <p>Nothing to see here</p>

);

export default People;