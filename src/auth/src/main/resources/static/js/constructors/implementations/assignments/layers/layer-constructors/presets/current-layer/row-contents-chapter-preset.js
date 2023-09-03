"use strict";

import AbstractConstructor from "../../../../../../generic/abstract-constructor.js";
import { domConstructor } from "../../../../../../../utils/html/html-utils.js";
import LayerNameContainerPreset from "./layer-name-container-preset.js";
import LayerIconContainerPreset from "./layer-icon-container-preset.js";
import LayerSelectionPreset from "./layer-selection-preset.js";

class RowContentsChapterPreset extends AbstractConstructor {
	constructor(icon, name, selection) {
		return domConstructor.newDiv().addClasses("row-contents").addChildren(
			domConstructor.newDiv().addClasses("chapter-left-margin").getElement(),
			domConstructor.newDiv().addClasses("chapter-name-wrapper").addChildren(
				LayerSelectionPreset.new(selection),
				LayerIconContainerPreset.new(icon),
				LayerNameContainerPreset.new(name)
			).getElement(),
			domConstructor.newDiv().addClasses("chapter-right-margin").getElement()
		).getElement();
	}
	
	static new(icon, name, selection) {
		return new RowContentsChapterPreset(icon, name, selection);
	}
}

export default RowContentsChapterPreset;
