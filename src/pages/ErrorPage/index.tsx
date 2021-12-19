import React from 'react';
import CustomCover from "../../components/CustomCover";
import { Link } from "react-router-dom";
import CustomCard from "../../components/CustomCard";
const index =()=>{
    return (
        <div className="PError">
            <CustomCover>
        <CustomCard 
        titre="404"
        text="page not found"
        >
        <Link to="/" className="btn-primary">return home</Link>
        </CustomCard>
    </CustomCover>
        </div>
    );};
export default index;