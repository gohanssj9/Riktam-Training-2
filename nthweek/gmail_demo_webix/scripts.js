function getData(){
	var data = [];
	for(var i=0; i<50; i++){
		data.push({
			check: Math.random() > 0.85 ? 1 : 0,
			star: Math.random() > 0.4 ? 1 : 0,
			from: "<p>Tigersheet.com</p>",
			subject: "<p>People WFH today - Hello all, People working from home today: Please login below to check the details. Click here. Cheers, Tigersheet.com Team </p>",
			date: "<p>Oct " + (19+Math.round(Math.random()*10)) + "</p>"
		});
	}
	return data;
}

var topHeader = {template: "top", height: 64};

var categories = [
	{icon: 'fa fa-inbox', value: 'Inbox'},
	{icon: 'fa fa-star', value: 'Starred'},
	{icon: 'fa fa-clock-o', value: 'Snoozed'},
	{icon: 'fa fa-comments', value: 'Sent Mail'},
	{icon: 'fa fa-file', value: 'Drafts'},
	{icon: 'fa fa-tags', value: 'Tigersheet'},
	{icon: 'fa fa-chevron-circle-down', value: 'More'}
];

var menuSection = {
	padding: 10,
	margin: 10,
	height: 250,
	rows: [
		{view: 'button', type: 'image', image: 'plus_logo.png', label: 'Compose', height: 55, width: 150},
		{view: 'list', 
			select: true,
			columns: [
				{id: 'icon', height: 20, width: 20, marginRight: 18},
				{id: 'menuOption', fillspace: true}
			],
			header: false,
			data: categories, 
			scroll: true}
	]
};
var profileSection = {type: 'clean', height: 50, cols: [
		{view: 'button', css: 'profile_image', type: 'image', image: 'user_avatar.png', height: 32, width: 32},
		{value: 'Sriteja', width: 17},
		{view: 'button', type: 'iconButton', icon: 'fa fa-caret-down', width: 7, height: 4},
		{},
		{view: 'button', type: 'iconButton', icon: 'fa fa-plus', width: 30, height: 30}
	]
};
var chatSection = {template: "Chat", height: 360};

var leftSidebar = {rows: [
	menuSection,
	profileSection,
	chatSection
], width: 256};

var rightSidebar = {template: "right", width: 55};

var appHeader = {template: "Menu tabs", height: 48};
var mainContent = {
	view: 'datatable', scroll: 'y',
	columns: [
		{id: "check", css: "checkbox_section", template: "{common.checkbox()}", width: 40},
		{id: "star", css: "star_section", template: function(obj){
				return "<span class = 'webix_icon orange_star fa fa-star"+(obj.star?"":"-o")+"'></span>"
			}, width: 40},
		{id: "from", css: "sender_section", width: 150},
		{id: "subject",css: "subject_section", fillspace: true},
		{id: "date", css: "date_section"}		
	], header: false, 
		data:getData(), 
		select: true,
};

var infoTabs = {rows: [
	appHeader,
	mainContent
]};

webix.ui({
	rows: [
		topHeader,
		{
			cols: [
				leftSidebar,
				infoTabs,
				rightSidebar
			]
		}
	]
});