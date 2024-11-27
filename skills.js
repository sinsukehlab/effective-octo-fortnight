const DOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const window = new JSDOM('').window;
const purify = DOMPurify(window);

function calculateNumbers(var1, var2) {
    const sanitizedVar1 = purify.sanitize(var1);
    const sanitizedVar2 = purify.sanitize(var2);
    return sanitizedVar1 + sanitizedVar2;
}
