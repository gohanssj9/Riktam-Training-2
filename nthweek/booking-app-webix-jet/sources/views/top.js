import {JetView, plugins} from "webix-jet";
import StartView from 'views/start';

import LookForFlightView from 'views/lookforflight';
import HotelsView from 'views/hotels';
import CarsView from 'views/cars';
import RegisterView from 'views/register';
import SaveFormView from 'views/saveform';
import TestCustomList from 'views/testcustomlist';

const languagesPopup = {
	view: "popup", width: 100, id: "languagesPopup", borderless: true, head: "Submenu",
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
	},
};

const notificationsPopup = {
	view: "popup", css: "notifications", width: 250, borderless: true, head: "Submenu",
	body: {
		view: "list",
		template: "<div class = 'title'>#title#</div>" + "<div class = 'body'>#body#</div>",
		type: {
			height: "auto"
		},
		data: [
			{id: 1, title: "Fly to Paris!", body: "Hello Webix User! We welcome you to fly Paris this Summer by buying the Webix Pro pack."},
			{id: 2, title: "Welcome to Webix 2.0", body: "Hello Webix User, We are delighted to announce Webix 2.0 !"},
			{id: 3, title: "All the best!", body: "Hello Webix User, We wis you all the best in your future endeavours, and love from us all."},
		],
		select: false,
		scroll: "y"
	}
}


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
								{view: "icon", icon: "mdi mdi-bell", badge: 3, paddingX: 10, click: function() {
									this.$scope.notifications.show(this.$view);
								}},
								{view: "icon", icon: "mdi mdi-earth", paddingX: 10, click: function() {
									this.$scope.languages.show(this.$view);
								}},
							]
						},
					],
				},
				{width: 6}
			]
		};

		var menu = {
			view: "accordion", width: 400, id: "top:menu",
			rows: [
				{header: "Look for a Flight", body: LookForFlightView, collapsed: true},
				{header: "Hotels", body: HotelsView, collapsed: true},
				{header: "Cars", body: CarsView, collapsed: true},
				{header: "Register", body: RegisterView, collapsed: false},
				{header: "Save Form", body: SaveFormView, collapsed: true},
				{header: "TestCustomList", body: TestCustomList, collapsed: true},
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
		this.languages = this.ui(languagesPopup);
		this.notifications = this.ui(notificationsPopup);
	}
}