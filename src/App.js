import logo from './logo.svg';
import './App.css';
import { RegisterComp } from './components/authentication/RegisterComp';
import { LoginComp } from './components/authentication/LoginComp';
import { AuthProvider } from './context/AuthContext';
import { NavComp } from './components/authentication/NavComp';
import {Body} from './components/auctions/Body'

function App() {
  return <>
    <AuthProvider>
  <NavComp/>
  <Body/>
    </AuthProvider>
  
  </>
  
}

export default App;
