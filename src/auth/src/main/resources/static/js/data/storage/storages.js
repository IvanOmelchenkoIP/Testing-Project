"use strict";

import CookiesProcessor from "./cookies-processor.js";
import LocalStorageProcessor from "./local-storage-processor.js";
import SessionStorageProcessor from "./session-storage-processor.js";

const cookiesProcessor = CookiesProcessor();
const localStorageProcessor = LocalStorageProcessor();
const sessionStorageProcessor = SessionStorageProcessor();

export { cookiesProcessor, localStorageProcessor, sessionStorageProcessor };