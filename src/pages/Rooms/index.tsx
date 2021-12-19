import React from "react";
import CustomBG from "../../components/CustomBG";
import CustomCover from "../../components/CustomCover";
import CustomCard from "../../components/CustomCard";
import { Link } from "react-router-dom";
import "./index.css";
const index = () => {
  return (
    <React.Fragment>
      <div className="Room">
        <CustomCover coverClass="roomsCustomBG">
          <CustomCard titre="Nos Chambres" text="">
            <Link to="/" className="btn-primary">
              return home
            </Link>
          </CustomCard>
        </CustomCover>
      </div>{" "}
    </React.Fragment>
  );
};

export default index;
