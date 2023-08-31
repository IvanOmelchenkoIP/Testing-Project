"use strict";

import AbstractConstructor from "../../../../generic/abstract-constructor.js";
import GenericLayerPreset from "./presets/generic-layer-preset.js";
import GenericLayerChildrenPreset from "./presets/generic-layer-children-preset.js";
import CurrentRowWrapperPreset from "./presets/current-layer/current-row-wrapper-preset.js";
import CurrentLayerUnderlinePreset from "./presets/current-layer/current-row-underline-preset.js";
import CurrentLayerPreset from "./presets/current-layer/current-layer-preset.js";
import RowContentsGenericPreset from "./presets/current-layer/row-contents-generic-preset.js";
import RowOptionsPreset from "./presets/current-layer/row-options-preset.js";

class TaskLayer extends AbstractConstructor {
	constructor(count) {
		return GenericLayerPreset.new(
			"task-row",
			CurrentRowWrapperPreset.new(
				CurrentLayerPreset.new(
					"task-layer",
					RowContentsGenericPreset.new(
						"T",
						"Task " + count,
						"task-selection-indicator"
					),
					RowOptionsPreset.new()
				),
				CurrentLayerUnderlinePreset.new("task-underline")
			),
			GenericLayerChildrenPreset.new("task-child-layers", "task-underline")
		);
	}

	static new(count) {
		return new TaskLayer(count);
	}
}

export default TaskLayer;
