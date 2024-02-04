"use strict"

import { domSelector } from "../../../../../../utils/html/html-utils.js";
import setNavigationSettingsListenerHandler from "./set-navigation-settings-handler.js";
import setNavigationLayersListenerHandler from "./set-navigation-layers-handler.js";
import setNavigationPreviewListenerHandler from "./set-navigation-preview-handler.js";

const NAVIGATION_ITEMS_HANDLERS = {
	"menu-select-settings": () => {
		setNavigationSettingsListenerHandler();
	},
	"menu-select-layers": () => {
		setNavigationLayersListenerHandler();
	},
	"menu-select-preview": () => {
		setNavigationPreviewListenerHandler();
	}
};

const setNavigationListenerHandler = (event) => {
	const target = event.target.closest(".menu-navigation-item");
	const prevSelected = domSelector.document.selectFirstByClass("menu-navigation-item selected");
	if (prevSelected) {
		if (prevSelected == target) return;
		prevSelected.classList.remove("selected");
	}
	target.classList.add("selected");
	const handler = NAVIGATION_ITEMS_HANDLERS[target.id];
	handler();
}

export default setNavigationListenerHandler;
