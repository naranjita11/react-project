let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

const People = () => (
<ul className="people">
    { /* use map to output an <li> for each */ }
    { /* item in the array */ }
    { names.map((name, index) => (
      <li className="list-item" key={ index }>
        <a className="page-link" href={ "/page/" + name }>{ name }</a>
      </li>
    ))}
  </ul>
);

export default People;
