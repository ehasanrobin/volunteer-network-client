import './App.css';
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import Login from './pages/Login/Login'
import {Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './pages/Registration/Registration';
import Vregistration from './pages/Vregistration/Vregistration';
import Private from './pages/Private/Private'
import AuthProvider from './context/AuthProvider';
import Events from './pages/Events/Events';
import AddCharity from './pages/AddCharity/AddCharity';
import Volunteers from './pages/Volunteers/Volunteers';
function App() {
  return (
    <>
    <AuthProvider>
      <Header></Header>
      <Routes>
        <Route path="/" exact element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Registration></Registration>} />
        <Route path="/volunteer/:id" element={
        <Private>
          <Vregistration></Vregistration>
        </Private>} />

        <Route path="/events" element={
        <Private>
          <Events></Events>
        </Private>} />

        <Route path="/add-charity" element={
        <Private>
          <AddCharity></AddCharity>
        </Private>} />

          <Route path="/volunteers" element={
        <Private>
          <Volunteers></Volunteers>
        </Private>} />


      </Routes>
      
      <Footer></Footer>
      </AuthProvider>
    </>
  );
}

export default App;
