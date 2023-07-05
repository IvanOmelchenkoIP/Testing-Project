"use strict";

import setClassInnerHtml from "../set-class-html.js";
import curriedSet from "./implementation/curried-set.js"

const setClassInnerHtmlCurried = curriedSet(setClassInnerHtml);

export default setClassInnerHtmlCurried;
