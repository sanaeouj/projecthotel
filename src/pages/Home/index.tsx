import React from 'react';
import "./index.css";
import CustomCover from "../../components/CustomCover";
import CustomCard from "../../components/CustomCard";
import CustumService from "../../components/CustumService";
import Featured from "../../components/Featured";
import { Link } from 'react-router-dom';
const index =()=>{
    return (
        <React.Fragment>
            <div className="Home">
             <CustomCover>
                <CustomCard 
                titre="Chambre Luxueuse"
                text="chambres de luxe à partir de 1500dhs"
                >
                <Link to="/rooms" className="btn-primary">nos chambres</Link>
                </CustomCard>
            </CustomCover></div>
            <CustumService/>
           
            </React.Fragment>
    )
}
export default index;