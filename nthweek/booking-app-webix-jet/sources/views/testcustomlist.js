import {JetView} from "webix-jet";

export default class TestCustomList extends JetView {
	config() {
		webix.protoUI({
			name: "CustomMultiselect",
			body: {
				view: "datatable", header: false,  
				columns: [
					{id: "check", template: "{common.checkbox()}", width: 25, css: "checkbox_section"},
					{id: "status", width: 225, css: "status_section"}
				],
				data:  [
					{id: 1, check: 0, status: "Open"},
					{id: 2, check: 0, status: "Available soon"},
					{id: 3, check: 0, status: "Last deals"},
				]
				// template: "Hello"
			}
		}, webix.ui.view);

		var protoReturn = {
			view: "CustomMultiselect"
		};
		return protoReturn;
	}
}