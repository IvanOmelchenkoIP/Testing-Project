"use strict";

import AbstractConstructor from "../../../../generic/abstract-constructor.js";
import GenericLayerPreset from "./presets/generic-layer-preset.js";
import GenericLayerChildrenPreset from "./presets/generic-layer-children-preset.js";
import CurrentRowWrapperPreset from "./presets/current-layer/current-row-wrapper-preset.js";
import CurrentLayerUnderlinePreset from "./presets/current-layer/current-row-underline-preset.js";
import CurrentLayerPreset from "./presets/current-layer/current-layer-preset.js";
import RowContentsGenericPreset from "./presets/current-layer/row-contents-generic-preset.js";
import RowOptionsPreset from "./presets/current-layer/row-options-preset.js";

class QuestionPoolLayer extends AbstractConstructor {
	constructor(count) {
		return GenericLayerPreset.new(
			"qpool-row",
			CurrentRowWrapperPreset.new(
				CurrentLayerPreset.new(
					"qpool-layer",
					RowContentsGenericPreset.new(
						"P",
						"Question pool " + count,
						"qpool-selection-indicator"
					),
					RowOptionsPreset.new()
				),
				CurrentLayerUnderlinePreset.new("qpool-underline")
			),
			GenericLayerChildrenPreset.new("qpool-child-layers", "qpool-underline")
		);
	}

	static new(count) {
		return new QuestionPoolLayer(count);
	}
}

export default QuestionPoolLayer;
