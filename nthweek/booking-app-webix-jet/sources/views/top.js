import {JetView, plugins} from "webix-jet";
import StartView from 'views/start';
import LookForFlightView from 'views/lookforflight';

export default class TopView extends JetView{
	config(){
		var header = {
			view :"toolbar", height: 56, elements: [
				{ paddingY: 7,
					rows: [
						{margin: 8,
							cols: [
								{view: "label", label: "Webix Booking App", width: 300},
								{},
								{view: "icon", icon: "mdi mdi-invert-colors", paddingX: 10},
								{view: "icon", icon: "mdi mdi-bell", badge: 3, paddingX: 10},
								{view: "icon", icon: "mdi mdi-earth", paddingX: 10},
							]
						},
					],
				},
				{width: 6}
			]
		};

		// var menu = {
		// 	view:"menu", id:"top:menu", 
		// 	css:"app_menu",
		// 	width:380, layout:"y", select:true,
		// 	template:"<span class='webix_icon #icon#'></span> #value# ",
		// 	data:[
		// 		{ value:"Dashboard", id:"start", icon:"wxi-columns" },
		// 		{ value:"Data",		 id:"data",  icon:"wxi-pencil" }
		// 	]
		// };

		var menu = {
			view: "accordion", width: 400, id: "top:menu",
			rows: [
				{header: "Look for a Flight", body: LookForFlightView},
				{header: "Hotels", body: "content 2", collapsed: true, height: 330},
				{header: "Cars", body: "content 3", collapsed: true, height: 330},
				{header: "Register", body: "content 4", collapsed: true, height: 330},
				{}
			]
		}

		var ui = {
			rows:[
				header,
				{type: "space", cols: [
					menu,
					{rows:[
						StartView
					]}
				]}
			]
		};

		return ui;
	}
	init(){
		this.use(plugins.Menu, "top:menu");
	}
}