"use strict";

import AbstractConstructor from "../../../../generic/abstract-constructor.js";
import GenericLayerPreset from "./presets/generic-layer-preset.js";
import GenericLayerChildrenPreset from "./presets/generic-layer-children-preset.js";
import CurrentRowWrapperPreset from "./presets/current-layer/current-row-wrapper-preset.js";
import CurrentLayerUnderlinePreset from "./presets/current-layer/current-row-underline-preset.js";
import CurrentLayerPreset from "./presets/current-layer/current-layer-preset.js";
import RowContentsChapterPreset from "./presets/current-layer/row-contents-chapter-preset.js";
import RowOptionsPreset from "./presets/current-layer/row-options-preset.js";

class ChapterLayer extends AbstractConstructor {
	constructor(count) {
		return GenericLayerPreset.new(
			"chapter-row",
			CurrentRowWrapperPreset.new(
				CurrentLayerPreset.new(
					"chapter-layer",
					RowContentsChapterPreset.new(
						"C",
						"Chapter " + count,
						"chapter-selection-indicator"
					),
					RowOptionsPreset.new()
				),
				CurrentLayerUnderlinePreset.new("chapter-underline")
			),
			GenericLayerChildrenPreset.new("chapter-child-layers", "chapter-underline")
		);
	}

	static new(count) {
		return new ChapterLayer(count);
	}
}

export default ChapterLayer;
