const errors = {
    INVALID: 'Invalid color set'
};
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const childProcess = require('child_process');

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

    const proc = childProcess.spawn('pbcopy');
    proc.stdin.write(hex);
    proc.stdin.end();
    console.log(
        `\nResult(${hex}) is copied to clipboard, Use the result directly by [Ctrl + v]\n`
    );
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
