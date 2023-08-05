"use strict";

import LayerPreset from "../presets/layer-preset.js";
import AbstractConstructor from "../../../../generic/abstract-constructor.js";

class IntermediateContentsLayer extends AbstractConstructor {
	constructor(type, ...children) {
		const name = type + " contents";
		return LayerPreset.new(name, ...children);
	}

	static new(type, ...children) {
		return new IntermediateContentsLayer(type, ...children);
	}
}

export default IntermediateContentsLayer;
