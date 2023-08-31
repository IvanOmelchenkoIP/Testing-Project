"use strict";

import AbstractConstructor from "../../../../generic/abstract-constructor.js";
import GenericLayerPreset from "./presets/generic-layer-preset.js";
import CurrentRowWrapperPreset from "./presets/current-layer/current-row-wrapper-preset.js";
import CurrentLayerPreset from "./presets/current-layer/current-layer-preset.js";
import RowContentsGenericPreset from "./presets/current-layer/row-contents-generic-preset.js";

class QuesionLayer extends AbstractConstructor {
	constructor(count) {
		return GenericLayerPreset.new(
			"question-row",
			CurrentRowWrapperPreset.new(
				CurrentLayerPreset.new(
					"question-layer",
					RowContentsGenericPreset.new(
						"Q",
						"Question " + count,
						"question-selection-indicator"
					),
				),
			),
		);
	}

	static new(count) {
		return new QuesionLayer(count);
	}
}

export default QuesionLayer;
