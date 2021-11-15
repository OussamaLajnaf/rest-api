
import './App.css';
import AddUser from './Components/AddUser';
import Footer from './Components/Footer';

import UserList from './Components/UserList';

function App() {
  return (
    <div className="App">
      <UserList/>
      <AddUser/>
      <Footer/>
    </div>
  );
}

export default App;
