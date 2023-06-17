import React, { useState } from "react";
import MyNavbar from '../components/Navbar';

const Main: React.FC = () => {
  const [showPersonal, setShowPersonal] = useState(false);

  const handleSearch = async () => {
  };

  const handleShowPersonal = () => {
    setShowPersonal(true);
  };

  return (
    <div>
      <MyNavbar handleSearch={handleSearch} handlePersonal={handleShowPersonal} activeTab={''}/>
    </div>
  );
};

export default Main;
