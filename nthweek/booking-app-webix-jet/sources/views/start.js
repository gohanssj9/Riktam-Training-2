import {JetView} from "webix-jet";

export default class StartView extends JetView {
	config() {
		var ui = {css:"webix_shadow_medium app_start", rows: [
			{template:"Start page", height: 100},
			{$subview: true}
		]};

		return ui;
	}
}
