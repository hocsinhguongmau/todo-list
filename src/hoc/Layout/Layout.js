import React, {Component} from "react";
import Ax from "../Ax/Ax";
import {Title, SmallTitle} from "../../components/Title/Title";
import AddTodo from "../../components/AddTodo/AddTodo";
import TodoRow from "../../components/TodoRow/TodoRow";

class Layout extends Component {
	state = {
		tasks: [
			{action: "Buy flowers", done: true},
			{action: "Doing homework", done: true},
			{action: "Cleaning", done: false},
			{action: "Laundry", done: false},
			{action: "Sleep", done: false}
		],
		newTask: "",
		showCompleted: true
	};

	dataHandler = () =>
		localStorage.setItem("todos", JSON.stringify(this.state));

	checkboxHandler = todo => {
		this.setState(
			{
				tasks: this.state.tasks.map(item =>
					item.action === todo.action
						? {...item, done: !item.done}
						: item
				)
			},
			this.dataHandler
		);
	};

	todoDeleteHandler = todo => {
		const updatedTasks = this.state.tasks.filter(
			item => item.action !== todo.action
		);
		this.setState({tasks: updatedTasks}, this.dataHandler);
	};

	inputTaskHandler = event => {
		this.setState({newTask: event.target.value});
	};

	addTaskHandler = e => {
		e.preventDefault();
		if (
			!this.state.tasks.find(
				item => item.action === this.state.newTask
			) &&
			this.state.newTask !== ""
		) {
			this.setState(
				{
					tasks: [
						...this.state.tasks,
						{action: this.state.newTask, done: false}
					],
					newTask: ""
				},
				this.dataHandler
			);
		}
	};

	toggleCompletedHandler = () => {
		this.setState({showCompleted: !this.state.showCompleted});
	};

	componentDidMount = () => {
		let data = localStorage.getItem("todos");
		this.setState(
			data != null
				? JSON.parse(data)
				: {
						tasks: [
							{action: "Buy flowers", done: true},
							{action: "Doing homework", done: true},
							{action: "Cleaning", done: false},
							{action: "Laundry", done: false},
							{action: "Sleep", done: false}
						],
						newTask: "",
						showCompleted: true
				  }
		);
	};
	render() {
		return (
			<Ax>
				<Title tasks={this.state.tasks} />
				<div className="Display">
					<AddTodo
						submitted={this.addTaskHandler}
						changed={this.inputTaskHandler}
						values={this.state.newTask}
					/>
					<div className="List Todo">
						{this.state.tasks.filter(task => !task.done).length >
							0 && (
							<table>
								<thead>
									<tr>
										<th>Description</th>
										<th>Done</th>
										<th>Delete</th>
									</tr>
								</thead>
								<tbody>
									{this.state.tasks
										.filter(item => item.done === false)
										.map(item => (
											<TodoRow
												key={item.action}
												items={item}
												checked={this.checkboxHandler}
												deleted={this.todoDeleteHandler}
												deleteBtn={true}
											/>
										))}
								</tbody>
							</table>
						)}
					</div>
					<SmallTitle
						toggled={this.toggleCompletedHandler}
						showCompleted={this.state.showCompleted}
					/>
					{this.state.showCompleted && (
						<div className="List Completed">
							<table>
								<thead>
									<tr>
										<th>Description</th>
										<th>Done</th>
									</tr>
								</thead>
								<tbody>
									{this.state.tasks
										.filter(item => item.done === true)
										.map((item, index) => (
											<TodoRow
												key={item.action}
												items={item}
												checked={this.checkboxHandler}
												deleted={this.todoDeleteHandler}
												deleteBtn={false}
											/>
										))}
								</tbody>
							</table>
						</div>
					)}
				</div>
			</Ax>
		);
	}
}

export default Layout;
