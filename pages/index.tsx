import React, { useState } from "react";
import MyNavbar from '../components/Navbar';
import Body from "@/components/body";
import Footer from  '../components/footer';

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
      <Body></Body>

      <div></div>
      <div></div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
