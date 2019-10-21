/**
 * Knuth Morris Pratt (KMP) 算法
 */
class KMP {

    constructor(pat) {

        this.pat = pat;
        const patLength = pat.length;

        // 初始化 dp
        // dp[状态][字符] = 下个状态
        this.dp = new Array(patLength);
        for (let j = 0; j < patLength; j++) {
            this.dp[j] = new Array(256).fill(0);
        }

        // 初始值
        this.dp[0][this.pat.charCodeAt(0)] = 1;

        // 回归状态 prev 初始为 0
        let prev = 0;

        // 当前状态 j 从 1 开始
        for (let j = 1; j < patLength; j++) {

            const char = this.pat.charCodeAt(j);

            for (let c = 0; c < 256; c++) {
                if (char === c) {
                    this.dp[j][c] = j + 1;
                } else {
                    this.dp[j][c] = this.dp[prev][c];
                }
            }

            // 更新回归状态
            prev = this.dp[prev][char];

        }

        console.log('dp::', this.dp);

    }

    search(txt) {

        const patLength = this.pat.length,
            txtLength = txt.length;

        // pat 的初始态为 0
        let j = 0;
        for (let i = 0; i < txtLength; i++) {

            // 当前是状态 j，遇到字符 txt[i]，
            // pat 应该转移到哪个状态？
            j = this.dp[j][txt.charCodeAt(i)];

            // 如果达到终止态，返回匹配开头的索引
            if (j == patLength) {
                return i - patLength + 1;
            }

        }

        // 没到达终止态，匹配失败
        return -1;

    }
}

const kmp = new KMP('aaab');
console.log(kmp.search('aaacaaab')); //4
console.log(kmp.search('aaaaaaab')); //4
