import "./App.css";
import { Navbar, Footer } from './components'
import { Outlet } from "react-router-dom";

function App() {

  return (
    <div className="min-h-screen max-w-screen bg-white dark:bg-gray-950 text-black dark:text-white">
      <Navbar />

      <Outlet />
      
      <Footer />
    </div>
  );
}

export default App;
