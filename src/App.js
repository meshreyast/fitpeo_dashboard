import MainContainer from "./components/MainContainer";
import Sidebar from "./components/Sidebar";
import "./app.css"
import { useState } from "react";

function App() {

  const [showSidebar, setShowSidebar] = useState(true)

  const handleViewSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  console.log(showSidebar)

  return (
    <div className="parentDiv">
      <Sidebar isOpen={showSidebar} />
      <MainContainer isOpen={showSidebar} toggleSidebar={handleViewSidebar} />
    </div>
  );
}

export default App;
