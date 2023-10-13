import './App.css';
import FilterableSpendingList from './FilterableSpendingList';

function App() {
  return (
    <div className="container-fluid">
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <a href="#!" class="brand-logo">
              <i class="material-icons">storage</i>
              sprintform
            </a>
          </div>
        </nav>
      </div>
      <div class="container">
        <FilterableSpendingList />
      </div>
    </div>
  );
}

export default App;
