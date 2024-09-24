import React from "react";

const VariantPrice = ({ onRoadPrice, bike }) => {
	return (
		<div className="container mt-5 table-responsive">
			<table className="table w-100 table-striped-columns">
				<thead >
					<tr>
						<th>Variant</th>
						<th>Price</th>
						<th>Specification</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							{bike.brand} {bike.model} Top
						</td>
						<td>
							&#8377;
							{(onRoadPrice + 10000)
								.toString()
								.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
								.replace(/^(\d+),/, "$1,")}
							.00
							<br />
							*On Road Price
						</td>
						<td>
                        Brake:{bike.specifications.Brake_Type},Power:{bike.specifications.Max_Power}
						</td>
					</tr>
					<tr>
						<td>
							{bike.brand} {bike.model} Middle
						</td>
						<td>
							&#8377;
							{(onRoadPrice + 5000)
								.toString()
								.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
								.replace(/^(\d+),/, "$1,")}
							.00
							<br />
							*On Road Price
						</td>
						<td>
                        Brake:{bike.specifications.Brake_Type},Power:{bike.specifications.Max_Power}
						</td>
					</tr>
					<tr>
						<td>
							{bike.brand} {bike.model} Bottom
						</td>
						<td>
							&#8377;
							{(onRoadPrice + 0)
								.toString()
								.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
								.replace(/^(\d+),/, "$1,")}
							.00
							<br />
							*On Road Price
						</td>
						<td>
							Brake:{bike.specifications.Brake_Type},Power:
							{bike.specifications.Max_Power}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default VariantPrice;
