import React from "react";

const BikeSpecs = ({ specs }) => {
	return (
		<div className="mb-3">
			<h2 className="mb-4">Specification</h2>
			<div
				className="rounded p-1 pb-0 w-100 "
				style={{ background: "#DCDADA" }}
			>
				<div className="container">
					<div className="row">
						{Object.entries(specs).map(([key, value]) => (
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

export default BikeSpecs;
