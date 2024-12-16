function calculateNumbers(var1, var2) {
    const sanitizedVar1 = parseFloat(var1);
    const sanitizedVar2 = parseFloat(var2);

    if (isNaN(sanitizedVar1) || isNaN(sanitizedVar2)) {
        throw new Error('Inputs must be valid numbers');
    }

    if (!Number.isFinite(sanitizedVar1) || !Number.isFinite(sanitizedVar2)) {
        throw new Error('Inputs must be finite numbers');
    }

    return sanitizedVar1 + sanitizedVar2;
}
