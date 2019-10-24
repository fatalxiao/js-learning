export function search(txt, pat) {

    const txtLength = txt.length,
        patLength = pat.length;

    for (let i = 0; i < txtLength - patLength; i++) {

        let j;

        for (j = 0; j < patLength; j++) {
            if (pat[j] != txt[i + j])
                break;
        }

        // pat 全都匹配了
        if (j == patLength) return i;

    }

    // txt 中不存在 pat 子串
    return -1;

}
