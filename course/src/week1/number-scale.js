const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+-'
function encode64(num){
    if(isNaN(num)) {
        throw new Error('请输入正确的数字')
    }
    var numstrArr = String(num).split('.'),
        integer = '',
        decimal = '',
        r = [];
    for(let i = 0; i < numstrArr.length; i++){
        var cur = Number(numstrArr[i]);
        while(cur > 0){
            r[i] = r[i] || [];
            r[i].unshift(chars[cur%64]);
            cur = Math.floor(cur/64);
        }  
    }

    integer = r[0] && r[0].join('');
    decimal = r[1] && r[1].join('');

    return decimal ? integer + '.' + decimal : integer;
}

function decode64(str){
    var resultArr  = [], 
        strArr = str.split('.'),
        integer = '',
        decimal = '';
    
    for(let i = 0; i < strArr.length; i++){
        var cur = strArr[i],
            curArr = cur.split('').reverse();
        for(let j= 0; j < curArr.length; j++){
            resultArr[i] = resultArr[i] || 0;
            resultArr[i] += ( chars.indexOf(curArr[j])* Math.pow(64, j))
        }
    }

    integer = resultArr[0];
    decimal = resultArr[1];

    return decimal ? integer + '.' + decimal : integer;
    
}

export {
    encode64,
    decode64
}