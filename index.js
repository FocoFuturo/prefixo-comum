var longestCommonPrefix = function(strs) {
    if(strs.length == 0) return '';
    if(strs.length == 1) return strs[0];
    var prefix = strs[0];
    for(var i = 1; i < strs.length; i++) {
        var str = strs[i];
        var j = 0;
        for(; j < prefix.length; j++) {
            if(prefix[j] != str[j]) {
                break;
            }
        }
        prefix = prefix.substring(0, j);
    }
    return prefix;
    
};