import {JetView} from 'webix-jet';

import FormStatusPopup from 'views/formstatuses';
import TestCustomList from 'views/testcustomlist';

var changingRowItem = 0;
var changingStatus = "";

export default class SaveFormView extends JetView {
	config(){
		var ui = {type: "form", rows: [
			{view: "CustomMultiselect", label: "Status", labelAlign: "center",
				options: [
					{id: 1, check: 0, status: "Open"},
					{id: 2, check: 0, status: "Available soon"},
					{id: 3, check: 0, status: "Last deals"},
					{id: 4, check: 0, status: "Not Available"},					
				], value: "Add Up"
			},
			{view: "text", label: "First Name", placeholder: "Matthew", labelAlign: "right", labelWidth: 100},
			{view: "text", label: "Email", placeholder: "mattclark@some.com", labelAlign: "right", labelWidth: 100},
			{cols: [
				{view: "label", label: "Status", maxWidth: 100, css: "status_label_section"},
				{view: "label", label: "Open", id: "existing_status", css: "status_value_section", click: function(id, e) {
					this.$scope.statuses.showPopup(this.$view);
					changingRowItem = id.row;

					var changing_status = $$("existing_status");
					var changing_status_array = changing_status.config.label.split(",");

					const notif = $$("form_status_multiselect");
					if(changing_status_array.length === 1){
						var changingStatus = changing_status_array[0];
						notif.eachRow(function(id) {
							if(this.getItem(id).status === changingStatus) {
								var updated_item = notif.getItem(id);
								updated_item["check"] = 1;
							}
							else {
								var updated_item = notif.getItem(id);
								updated_item["check"] = 0;
							}
						});
					}
					else {
						var cnt = 0;
						notif.eachRow(function(id) {
							if(this.getItem(id).status === changing_status_array[cnt]) {
								var updated_item = notif.getItem(id);
								updated_item["check"] = 1;
								cnt++;
							}
							else {
								var updated_item = notif.getItem(id);
								updated_item["check"] = 0;
							}
						});
					}
					notif.refresh();
				}}
			]},
			{view: "button", type: "form", value: "Save"}
		]};
		return ui;
	}

	init() {
		this.statuses = this.ui(FormStatusPopup);

		this.on(this.app, "checkboxes:check:form:label", () => {
			var output_string = "";
			const notif = $$("form_status_multiselect");

			notif.eachRow(function(id) {
				if(this.getItem(id).check) output_string += this.getItem(id).status + ",";
			});

			output_string = output_string.substring(0, output_string.length - 1);

			$$("existing_status").define("label", output_string);
			$$("existing_status").refresh();

			$$("formstatusPopup").hide();

			notif.eachRow(function(id) {
				var updated_item = notif.getItem(id);
				updated_item["check"] = 0;
			});
			notif.refresh();
		});
	}
}