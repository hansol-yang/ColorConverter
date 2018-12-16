const errors = {
    INVALID: 'Invalid color set'
};
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const convertDecToHex = (colors) => {
    let hex = '#';
    colors.forEach((c) => {
        if (typeof c !== 'string') {
            console.log(errors.INVALID);
        } else {
            hex += parseInt(c)
                .toString(16)
                .toUpperCase();
        }
    });
    console.log(hex);
};

rl.question("Put a decimals separated with '-' or ',': ", (decimals) => {
    const source = decimals.split(/[,-]/);
    if (source.length !== 3) {
        console.log(errors.INVALID);
    } else {
        const colors = source.filter((c) => {
            return c >= 0 && c <= 255;
        });

        if (colors.length !== 3) {
            console.log(errors.INVALID);
        } else {
            convertDecToHex(colors);
        }
    }
    process.exit();
});
