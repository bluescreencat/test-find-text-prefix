const findPrefix = (input) => {
    let charIndex = 0;
    let endProcess = false;
    let prefix = '';
    do {
        let firstChar = '';
        let currentChar = '';
        for (let strIndex = 0; strIndex < input.length; strIndex++) {
            const str = input[strIndex];
            if (str.length <= charIndex) {
                endProcess = true;
                break;
            }

            if (strIndex === 0) {
                firstChar = str[charIndex];
                continue;
            }

            currentChar = str[charIndex];
            
            if (firstChar !== currentChar) {
                endProcess = true;
                break;
            }
        }

        if (!endProcess) {
            prefix += firstChar;
            charIndex++;
        }
    } while(!endProcess);

    return prefix;
}

const test = () => {
    console.log('Start testing...');
    const testCases = [
        {
            input: ["flower","flow","flight"],
            expected: 'fl'
        },
        {
            input: ["dog","racecar","car"],
            expected: ''
        },
        {
            input: ["cc","cccc","ccc", ""],
            expected: ''
        },
        {
            input: ["cc","cccc","ccc", "gcc"],
            expected: ''
        },
        {
            input: ["ca","caa","caaa", "caaaa"],
            expected: 'ca'
        }
    ]

    for (const testCase of testCases) {
        const output = findPrefix(testCase.input);
        if (testCase.expected !== output) {
            console.log(`expexted: "${testCase.expected}" but got: "${output}"`);
        }
    }

    console.log('End testing...');
}

const start = () => {
    // ### Change input here ###
    const input = ["flower","flow","flight"];

    const output = findPrefix(input);

    console.log('Output:', output);
}

// test();
start();

