/* 나 영어 잘 못함 */
function dec_to_another(dectoconvert, system) {
    var colnumb = (typeof dectoconvert === 'number') ? dectoconvert : 10;
    var special = (typeof system === 'string') ? system : '0123456789ABCDEF';
    var colnumbstr = '';
    var specialcols = special.split('');
    function dec_to_alphabets(dec, callback) {
        if (typeof dec !== 'number' || typeof callback !== 'function') {
            return null || false;
        }
        var i0 = 0;
        for (var i = 0; special.length ** i <= dec; i++) {
            i0 = i;
        }
        callback(i0);
        if (dec - (16 ** i0) > 0) {
            return dec_to_alphabets(dec - (special.length ** i0), callback);
        } else {
            return true;
        }
    }
    var specialarr = [];
    var specialarr2 = [];
    var bool0 = dec_to_alphabets(colnumb, function (i0param) {
        specialarr.push(i0param);
    });
    console.log(specialarr);
    if (bool0) {
        var i4 = 0;
        for (var i2 = 0; i2 < specialarr.length; i2++) {
            if (typeof specialarr2[specialarr[i2]] !== 'number') {
                for (i4; i4 < specialarr[i2]; i4++) {
                    specialarr2[i4] = 0;
                }
                specialarr2[specialarr[i2]] = 1;
            } else {
                specialarr2[specialarr[i2]] += 1;
            }
        }
        for (var i3 = 0; i3 < specialarr2.length; i3++) {
            console.log(specialarr2[i3]);
            colnumbstr = specialcols[specialarr2[i3]] + colnumbstr;
        }
    }
    return colnumbstr;
}

function another_to_dec(numbertoconvert, systemofanother) {
    var colnumb = (typeof numbertoconvert === 'string') ? numbertoconvert.toUpperCase() : 'A';
    var special = (typeof systemofanother === 'string') ? systemofanother : '0123456789ABCDEF';
    var specialarr = special.split('');
    var newarr = colnumb.split('').reverse();
    var rtv = 0;
    newarr.forEach((val, idx, arr) => {
        if (specialarr.indexOf(val) > -1) {
            rtv += specialarr.indexOf(val) * (special.length ** idx);
        }
    });
    return rtv;
}
var str = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
function systemstr(numb, str0) {
    var mystr = (typeof str0 === 'string') ? str0 : '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    mystr = mystr.slice(0, numb);
    return mystr;
}

function convert(from0, to0, to1) {
    if (isNaN(Number(to0)) || isNaN(Number(to1)) || !(typeof from0 === 'string')) {
        return from0 || false;
    }
    return dec_to_another(another_to_dec(from0, systemstr(Number(to0), str)), systemstr(Number(to1), str));
}

var obj = {
    str: str,
    convert: function (from0, to0, to1) {
        if (isNaN(Number(to0)) || isNaN(Number(to1)) || !(typeof from0 === 'string')) {
            return from0 || false;
        }
        return dec_to_another(another_to_dec(from0, systemstr(Number(to0), this.str)), systemstr(Number(to1), this.str));
    },
    change_numb_letters: function (newstr) {
        this.str = (typeof newstr === 'string') ? newstr : str;
    },
}