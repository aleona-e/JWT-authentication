import React from "react";
import { Link } from "react-router-dom";

export const Welcome = () => {
    return (
        <div>
    	<div className="container">
        	<div className="row">
				<h4 className="text-center my-5"> User created, please login</h4>
				<div className="col-1 mx-auto">
					<Link to="/login">
  						<button className="btn btn-lg btn-warning" type="button">Login</button>
  					</Link>
  					
				</div>	
        	</div>
		</div>
    </div>
    )
}