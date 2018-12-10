import {JetView} from "webix-jet";

export default class FormStatusPopup extends JetView {
	config() {
		var statusPopup = {
			view: "popup", width: 250, id: "formstatusPopup", borderless: true, head: "Submenu",
			body: {rows: [
				{view: "datatable", id: "form_status_multiselect", header: false, width: 250,
					columns: [
						{id: "check", template: "{common.checkbox()}", width: 25, css: "checkbox_section"},
						{id: "status", width: 225, css: "status_section"}
					],
					data: [
						{id: 1, check: 0, status: "Open"},
						{id: 2, check: 0, status: "Available soon"},
						{id: 3, check: 0, status: "Last deals"},
					],
					select: true,
					autoheight: true,
					scroll: false,
				},
				{view: "button", type: "form", value: "Select", click: function() {
					this.$scope.app.callEvent("checkboxes:check:form:label");
				}}
			]}
		};
		return statusPopup;
	}

	showPopup(pos){
		this.getRoot().show(pos);
	}
}