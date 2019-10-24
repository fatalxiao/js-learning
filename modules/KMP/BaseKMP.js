class BaseKMP {

    constructor(pat) {
        this.pat = pat;
        this.next = this.calcNext(pat);
    }

    calcNext(pat) {

        const prefix = [],
            suffix = [],
            next = [];

        for (let i = 0, j = pat.length; i < j; i++) {
            const newStr = pat.substring(0, i + 1);
            if (newStr.length == 1) {
                next[i] = 0;
            } else {
                for (let k = 0; k < i; k++) {
                    // 取前缀
                    prefix[k] = newStr.slice(0, k + 1);
                    suffix[k] = newStr.slice(-k - 1);
                    if (prefix[k] == suffix[k]) {
                        next[i] = prefix[k].length;
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

        const patLength = this.pat.length;

        let result;

        // 最外层循环，主串
        for (let i = 0; i < txt.length; i++) {

            // 子循环
            for (let j = 0; j < patLength; j++) {
                // 如果与主串匹配
                if (this.pat.charAt(j) == txt.charAt(i)) {
                    // 如果是匹配完成
                    if (j == patLength - 1) {
                        result = i - j;
                        break;
                    } else {
                        // 如果匹配到了，就继续循环，i++是用来增加主串的下标位
                        i++;
                    }
                } else {
                    // 在子串的匹配中i是被叠加了
                    if (j > 1 && this.next[j - 1] > 0) {
                        i += (i - j - this.next[j - 1]);
                    } else {
                        // 移动一位
                        i = (i - j);
                    }
                    break;
                }
            }

            if (result || result === 0) {
                break;
            }
        }

        if (result || result === 0) {
            return result;
        } else {
            return -1;
        }

    }

}

const kmp = new BaseKMP('ABCDABD');
console.log(kmp.search('BBC ABCDAB ABCDABCDABDE'));
