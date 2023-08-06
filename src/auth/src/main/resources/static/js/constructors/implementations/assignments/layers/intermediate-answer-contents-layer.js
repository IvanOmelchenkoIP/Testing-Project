"use strict";

import IntermediateContentsLayer from "./generic/intermediate-contents-layer.js";

const TYPE_LABEL = "Answer";

class IntermediateAnswerContentsLayer extends IntermediateContentsLayer {
	constructor(...children) {
		return super(TYPE_LABEL, ...children);
	}
	
	static new(...children) {
		return new IntermediateAnswerContentsLayer(...children);
	}
}

export default IntermediateAnswerContentsLayer;
