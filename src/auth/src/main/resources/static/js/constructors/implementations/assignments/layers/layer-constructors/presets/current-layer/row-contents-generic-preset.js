"use strict";

import AbstractConstructor from "../../../../../../generic/abstract-constructor.js";
import { domConstructor } from "../../../../../../../utils/html/html-utils.js";
import LayerNameContainerPreset from "./layer-name-container-preset.js";
import LayerIconContainerPreset from "./layer-icon-container-preset.js";
import LayerSelectionPreset from "./layer-selection-preset.js";

class RowContentsGenericPreset extends AbstractConstructor {
	constructor(icon, name, selection) {
		return domConstructor.newDiv().addClasses("row-contents").addChildren(
			LayerIconContainerPreset.new(icon),
			LayerNameContainerPreset.new(name),
			LayerSelectionPreset.new(selection)
		).getElement();
	}
	
	static new(icon, name, selection) {
		return new RowContentsGenericPreset(icon, name, selection);
	}
}

export default RowContentsGenericPreset;
