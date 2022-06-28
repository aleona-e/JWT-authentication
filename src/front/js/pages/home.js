import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
    	<div className="container">
        	<div className="row">
				<h4 className="text-center my-5"> Are you a new user?</h4>
				<div className="col-1 mx-auto">
					<Link to="/signup">
  						<button className="btn btn-lg btn-warning" type="button">Signup</button>
  					</Link>
  					
				</div>	
        	</div>
		</div>
    </div>
     
  );
};
