import logo from './logo.svg';
import './App.css';
import Nav_Drawer from './Nav_Drawer/Nav_Drawer';
import ChatList from './ChatList/ChatList';
import ChatBox from './ChatBox/ChatBox';

function App() {
  return (
    <div className="App">
      <Nav_Drawer/>
      <ChatList/>
      <ChatBox/>
    </div>
  );
}

export default App;
