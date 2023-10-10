/**
 * 改进的 Knuth Morris Pratt (KMP) 算法
 */
class DPKMPAdvanced {

    constructor(pat) {

        this.pat = pat;
        const patLength = pat.length;

        // 初始化 dp
        // dp[状态][字符] = 下个状态
        this.dp = new Array(patLength);
        for (let i = 0; i < patLength; i++) {
            this.dp[i] = {};
        }

        // 初始值
        this.dp[0][pat.charAt(0)] = 1;

        // 回归状态 prev 初始为 0
        let prev = 0;

        this.patCharSet = new Set(pat.split(''));

        // 当前状态 j 从 1 开始
        for (let j = 1; j < patLength; j++) {

            debugger;

            const char = pat.charAt(j);

            for (let c of this.patCharSet) {
                this.dp[j][c] = char === c ?
                    j + 1
                    :
                    this.dp[prev][c] || 0;
            }

            // 更新回归状态
            prev = this.dp[prev][char] || 0;

        }

    }

    search(txt) {

        const patLength = this.pat.length,
            txtLength = txt.length;

        if (patLength > txtLength) {
            return -1;
        }

        // pat 的初始态为 0
        let j = 0;
        for (let i = 0; i < txtLength; i++) {

            const char = txt.charAt(i);
            if (!this.patCharSet.has(char)) {
                j = 0;
                continue;
            }

            // 当前是状态 j，遇到字符 txt[i]，
            // pat 应该转移到哪个状态？
            j = this.dp[j][txt.charAt(i)];

            // 如果达到终止态，返回匹配开头的索引
            if (j == patLength) {
                return i - patLength + 1;
            }

        }

        // 没到达终止态，匹配失败
        return -1;

    }
}

const kmp = new DPKMPAdvanced('aaab');
console.log(kmp.search('aaacaaab')); // 4
console.log(kmp.search('aaaaaaab')); // 4

const kmpCn = new DPKMPAdvanced('你分开是对你可是你');
console.log(kmpCn.search('数九寒冬你分开是对你可是你都可能是看到你')); // 4
console.log(kmpCn.search('都开始你分开是对你可是你贾夫纳市离开的菲尼克斯的')); // 3
