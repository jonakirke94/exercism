const error = () => {
    throw new Error("Bad key");
}

const isValid = key => {
    const re = new RegExp('^[a-z]+$');
    return re.test(key);
}

const generateKey = () => {
    let key = '';
    for(let i = 0; i < 100; i++) {
        const code = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
        key += String.fromCharCode(code);
    }
    return key;
}

export class Cipher  {
    constructor(key) {
        if (isValid(key)) {
            this.key = generateKey();
        } else {
            return error();
        }

    }

    encode(word) {
        //a-z = 97-122
        return word
            .split('')
            .map(x => {
                let code = x.charCodeAt() - 3;
                if (code < 97) { //corner case
                    code = 122 - 95 % code;
                }
                return String.fromCharCode(code);
            })
            .join('');                    
    }

    decode() {

    }
};



