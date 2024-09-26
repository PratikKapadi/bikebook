import React from "react";

const BikeFeatures = ({ feature }) => {
	return (
		<div className="mb-3">
			<h2 className="mb-4">Features</h2>
			<div
				className="rounded p-1 pb-0 w-100 "
				style={{ background: "#DCDADA" }}
			>
				<div className="container pt-0">
					<div className="row">
						{Object.entries(feature).map(([key, value]) => (
							<div className="col-12 col-md-6" key={key}>
								<table className="table my-md-3">
									<tr>
										<td className="text-start ">{key}</td>
										<td className="text-end fw-semibold">{value}</td>
									</tr>
								</table>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default BikeFeatures;
