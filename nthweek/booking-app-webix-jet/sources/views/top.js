import {JetView, plugins} from "webix-jet";



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

		var menu = {
			view:"menu", id:"top:menu", 
			css:"app_menu",
			width:380, layout:"y", select:true,
			template:"<span class='webix_icon #icon#'></span> #value# ",
			data:[
				{ value:"Dashboard", id:"start", icon:"wxi-columns" },
				{ value:"Data",		 id:"data",  icon:"wxi-pencil" }
			]
		};

		var ui = {
			type:"clean", css:"app_layout", rows:[
				header,
				{  paddingX:5, paddingY:10, rows: [ {css:"webix_shadow_medium", rows:[menu]} ]},
				{ type:"wide", paddingY:10, paddingX:5, rows:[
					{ $subview:true } 
				]}
			]
		};

		return ui;
	}
	init(){
		this.use(plugins.Menu, "top:menu");
	}
}