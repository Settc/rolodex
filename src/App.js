import { Component } from "react"
import './App.css';
import { CardList} from "./components/card-list/card-list.component"

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState( { monsters: users } ))
  }
  
  render() {
    return (
      <div className="App">
        <CardList />
        {
          this.state.monsters.map(monster => 
          <h1> { monster.name } </h1>)
        }
      </div>
    );
  }
}
export default App;
