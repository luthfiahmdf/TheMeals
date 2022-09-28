import { Layout } from "antd";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "antd/dist/antd.css";
import "./comp.css";

import { GiForkKnifeSpoon } from "react-icons/gi";
import { MdFoodBank } from "react-icons/md";
const { Header } = Layout;

function Navbar() {
  const navigate = useNavigate();
  return (
    <Layout>
      <Header
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}
      >
        <div className="nav grid grid-cols-2 cursor-pointer ">
          <div
            className="logo text-2xl text-white  font-bold p-3 flex flex-wrap "
            onClick={() => navigate("/")}
          >
            <div className="logo p-1">
              <GiForkKnifeSpoon />
            </div>
            <h1 className=" text-white ml-2"> Kang Daging</h1>
          </div>
          <div className="list place-items-end flex flex-wrap text-lg font-light  text-white justify-end content-center ">
            <button className=" hover:bg-sky-500 h-16 w-20">Beef</button>
            <button className=" hover:bg-sky-500 h-16 w-20">Pork</button>
            <button className=" hover:bg-sky-500 h-16 w-20">Desert</button>
          </div>
        </div>
      </Header>
    </Layout>
  );
}

export default Navbar;
