export class RotationalCipher {
  static rotate(plain, key) {
    return plain
      .split("")
      .map(x => {
        if (!x.match(/[a-zA-z]/)) return x;

        let code = x.charCodeAt();

        // small etter
        if (code >= 97 && code <= 122) {
          code = code + key > 122 ? 96 + ((code + key) % 122) : code + key;
        } else {
          console.log("was capital");
          code = code + key > 90 ? 64 + ((code + key) % 90) : code + key;
        }

        return String.fromCharCode(code);
      })
      .join("");
  }
}
