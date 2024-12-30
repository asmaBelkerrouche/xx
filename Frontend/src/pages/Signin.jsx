import React from "react";
import Login from "../components/Login/Login.jsx";
import SideElement from "../components/Login/SideElement.jsx";

const Signin = () => {
  return (
    <div className="flex w-full h-screen overflow-auto bg-gray-100">
      {/* Section gauche : Formulaire, occupe 50% de la largeur */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 lg:pt-40">
        <Login />
      </div>

      {/* Section droite : SideElement, occupe 50% de la largeur */}
      <div className="w-full lg:w-1/2 flex items-center justify-center h-full">
        <SideElement />
      </div>
    </div>
  );
};

export default Signin;
