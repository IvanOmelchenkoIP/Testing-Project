"use strict";

import CookiesProcessor from "./cookies-processor.js";
import LocalStorageProcessor from "./local-storage-processor.js";
import SessionStorageProcessor from "./session-storage-processor.js";

const cookiesProcessor = new CookiesProcessor();
const localStorageProcessor = new LocalStorageProcessor();
const sessionStorageProcessor = new SessionStorageProcessor();

export { cookiesProcessor, localStorageProcessor, sessionStorageProcessor };
