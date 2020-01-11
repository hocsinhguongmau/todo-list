import React from "react";
import Ax from "../Ax/Ax";

const Layout = props => {
	return (
		<Ax>
			<h1 className="Title">Todo list (4 items todo)</h1>
			<div className="Display">
				<div className="AddTodo">
					<input type="text" />
					<button>Add</button>
				</div>
				<div className="List Todo">
					<table>
						<tr>
							<th>Description</th>
							<th>Done</th>
						</tr>
						<tr>
							<td>Buy flower</td>
							<td>
								<input type="checkbox" />
							</td>
						</tr>
						<tr>
							<td>Buy flower</td>
							<td>
								<input type="checkbox" />
							</td>
						</tr>
					</table>
				</div>
				<p className="SmallTitle">
					<input type="checkbox" />
					Show completed tasks
				</p>
				<div className="List Completed">
					<table>
						<tr>
							<th>Description</th>
							<th>Done</th>
						</tr>
						<tr>
							<td>Buy flower</td>
							<td>
								<input type="checkbox" />
							</td>
						</tr>
						<tr>
							<td>Buy flower</td>
							<td>
								<input type="checkbox" />
							</td>
						</tr>
					</table>
				</div>
			</div>
		</Ax>
	);
};

export default Layout;
