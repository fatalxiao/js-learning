/**
 * Knuth Morris Pratt (KMP) 算法
 */
export default class BaseKMP4Demo {

    constructor(pat) {
        this.pat = pat;
        this.next = this.calcNext(pat);
    }

    calcNext(pat) {

        const next = [-1];

        for (let i = 1, len = pat.length; i < len; i++) {

            const str = pat.substring(0, i);

            if (str.length == 1) {
                next[i] = 0;
            } else {
                for (let strLen = str.length, k = strLen - 1; k > 0; k--) {
                    const prefix = str.slice(0, k),
                        suffix = str.slice(strLen - k);
                    if (prefix == suffix) {
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

    * search(txt) {

        let j = 0,
            result;

        for (let i = 0, txtLen = txt.length, patLen = this.pat.length; i < txtLen; i++) {

            // 如果与主串匹配
            if (this.pat.charAt(j) === txt.charAt(i)) {

                // 如果是匹配完成
                if (j === patLen - 1) {
                    result = i - j;
                    yield [i, j];
                    break;
                }

                // 否则继续循环
                else {
                    j++;
                    yield [i, j - 1];
                }

            } else {
                j = this.next[j] + 1;
                yield [i, j - 1];
            }
        }

        if (result || result === 0) {
            return result;
        } else {
            return -1;
        }

    }

}
