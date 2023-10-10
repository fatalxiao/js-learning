/**
 * 用于演示的暴力查询算法
 * @param txt
 * @param pat
 * @returns {IterableIterator<*[]|number>}
 */
function* search(txt, pat) {

    for (let i = 0, txtLen = txt.length, patLen = pat.length; i <= txtLen - patLen; i++) {

        let j;

        for (j = 0; j < patLen; j++) {
            if (pat[j] !== txt[i + j]) {
                break;
            }
            yield [i + j, j];
        }

        // pat 全都匹配了
        if (j === patLen) {
            return i;
        }

    }

    // txt 中不存在 pat 子串
    return -1;

}
