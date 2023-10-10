/**
 * Knuth Morris Pratt (KMP) 算法
 */
class BaseKMP {

    constructor(pat) {
        this.pat = pat;
        this.next = this.calcNext(pat);
    }

    calcNext(pat) {

        const next = [-1];

        for (let i = 1, len = pat.length; i < len; i++) {

            const str = pat.substring(0, i);

            if (str.length === 1) {
                next[i] = 0;
            } else {
                for (let strLen = str.length, k = strLen - 1; k > 0; k--) {
                    const prefix = str.slice(0, k),
                        suffix = str.slice(strLen - k);
                    if (prefix === suffix) {
                        next[i] = prefix.length;
                        break;
                    }
                }
                if (!next[i]) {
                    next[i] = 0;
                }
            }

        }

        return next;

    }

    search(txt) {

        const txtLen = txt.length,
            patLen = this.pat.length;
        let i = 0,
            j = 0;
        while (i < txtLen) {
            if (txt.charAt(i) === this.pat.charAt(j)) {
                i++;
                j++;
                if (j === patLen) {
                    return i - j;
                }
            } else {
                if (j === 0) {
                    i++;
                } else {
                    j = this.next[j - 1] + 1;
                }
            }
        }

        return -1;

    }

}

const kmp = new BaseKMP('ABCDABD');
console.log(kmp.search('BBC ABCDAB ABCDABCDABDE'));

const km2 = new BaseKMP('aaab');
console.log(km2.search('aaaaaaab'));
