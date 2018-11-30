import {JetView} from "webix-jet";

export default class LanguagesView extends JetView {
	config(){
		var languagesPopup = {
			view: "popup", id: "languagesPopup", head: "Submenu",
			body: {
				view: "list",
				data: [
					{id: 1, lang: "English"},
					{id: 2, lang: "한국어"},
					{id: 3, lang: "Deutsch"},
					{id: 4, lang: "漢語"},
					{id: 5, lang: "Español"},
					{id: 6, lang: "Русский"},
				],
				template: "#lang#",
				select: true,
				autoheight: true,
				scroll: false
			}
		};
		return languagesPopup;
	}
}