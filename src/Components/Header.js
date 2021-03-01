// we use className to add classes for Bootstrap styling

const Header = ({ title, subtitle }) => (
  <header class="jumbotron">
  <h1>{ title }</h1>
  <p>{ subtitle }</p>
</header>
);
  
  export default Header;