import {JetView} from "webix-jet";

export default class StatusPopup extends JetView {
	config() {
		var statusPopup = {
			view: "popup", width: 150, id: "statusPopup", borderless: true, head: "Submenu",
			body: {rows: [
				{view: "datatable", id: "status_multiselect", header: false, width: 150,
					columns: [
						{id: "check", template: "{common.checkbox()}", width: 25, css: "checkbox_section"},
						{id: "status", width: 125, css: "status_section"}
					],
					data: [
						{check: 0, status: "Open"},
						{check: 0, status: "Available soon"},
						{check: 0, status: "Last deals"},
					],
					select: true,
					autoheight: true,
					scroll: false,
				},
				{view: "button", type: "form", value: "Select", click: function() {
					this.$scope.app.callEvent("checkboxes:check");
				}}
			]}
		};
		return statusPopup;
	}

	showPopup(pos){
		this.getRoot().show(pos);
	}
}