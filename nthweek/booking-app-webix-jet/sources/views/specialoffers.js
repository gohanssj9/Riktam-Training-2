import {JetView} from "webix-jet";
import {data} from "models/specialoffers";

export default class SpecialOffersView extends JetView {
	config(){
		return { view:"datatable", autoConfig:true, css:"webix_shadow_medium" };
	}
	init(view){
		view.parse(data);
	}
}
