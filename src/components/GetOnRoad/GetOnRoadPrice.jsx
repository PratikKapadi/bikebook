import React from "react";
import ShowOnRoadPrice from "./ShowOnRoadPrice";
import { useParams } from "react-router-dom";

const GetOnRoadPrice = () => {
	const { model } = useParams();
	return (
		<div className="container">
			<ShowOnRoadPrice model={model} />
		</div>
	);
};

export default GetOnRoadPrice;
