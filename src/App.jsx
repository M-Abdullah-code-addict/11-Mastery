import "./App.css";
import { Navbar, Footer } from './components'
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <div className="min-h-screen max-w-screen bg-white dark:bg-gray-950 text-black dark:text-white">
      <Toaster position="top-right" />
      <Navbar />

      <Outlet />
      
      <Footer />
    </div>
  );
}

export default App;
