"use strict";

import IntermediateContentsLayer from "./generic/intermediate-contents-layer.js";

const TYPE_LABEL = "Question";

class IntermediateQuestionContentsLayer extends IntermediateContentsLayer {
	constructor(...children) {
		return super.constructor(TYPE_LABEL, ...children);
	}
	
	static new(...children) {
		return new IntermediateQuestionContentsLayer(...children);
	}
}

export default IntermediateQuestionContentsLayer;
