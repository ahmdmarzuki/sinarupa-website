// src/utils/fingerprint.js

import FingerprintJS from "@fingerprintjs/fingerprintjs";

// Promise yang akan meng-inisialisasi FingerprintJS sekali
const fpPromise = FingerprintJS.load();

export default fpPromise;
