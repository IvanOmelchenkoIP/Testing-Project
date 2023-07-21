"use strict";

import setScriptedClassInnerHtml from "../../scripted/set-class-html.js";
import curriedSet from "../../../generic-setters/curried/curried-set.js";

const setScriptedClassInnerHtmlCurried = curriedSet(setScriptedClassInnerHtml);

export default setScriptedClassInnerHtmlCurried;
