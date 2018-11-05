var topHeader = {template: "top", height: 64};

var menuSection = {template: "Menu", height: 300};
var profileSection = {template: "Profile", height: 45}
var chatSection = {template: "Chat", height: 260};
var leftSidebar = {rows: [
	menuSection,
	profileSection,
	chatSection
], width: 256};
var rightSidebar = {template: "right", width: 55};

var appHeader = {template: "Menu tabs", height: 48};
var mainContent = {template: 'Main Content'};

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