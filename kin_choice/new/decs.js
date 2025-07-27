(function (gTh, ConvertDec) { "object" == typeof exports && "undefined" != typeof module ? module.exports = ConvertDec() : "function" == typeof define && define.amd ? define(ConvertDec) : (gTh = "undefined" != typeof globalThis ? globalThis : gTh || self).CGRConvertDec = ConvertDec() })(this, function () {

    function cgr_convert_dec() {
    /* 나 영어 잘 못함 */
    function dec_to_another(dectoconvert, system) {
        var number = (typeof dectoconvert === 'number') ? dectoconvert : 10;
        var special = (typeof system === 'string') ? system : '0123456789ABCDEF';
        var numberstr = '';
        var specialnumbs = special.split('');
        function dec_to_alphabets(dec, callback) {
            if (typeof dec !== 'number' || typeof callback !== 'function') {
                return null || false;
            }
            var i0 = 0;
            for (var i = 0; special.length ** i <= dec; i++) {
                i0 = i;
            }
            callback(i0);
            if (dec - (special.length ** i0) > 0) {
                return dec_to_alphabets(dec - (special.length ** i0), callback);
            } else {
                return true;
            }
        }
        var specialarr = [];
        var specialarr2 = [];
        var bool0 = dec_to_alphabets(number, function (i0param) {
            specialarr.push(i0param);
        });
        //console.log(specialarr);
        if (bool0) {
            var i4 = 0;
            for (var i2 = 0; i2 < specialarr.length; i2++) {
                if (typeof specialarr2[specialarr[i2]] !== 'number') {
                    for (i4; i4 < specialarr[i2]; i4++) {
                        if (typeof specialarr2[i4] !== 'number') {
                            specialarr2[i4] = 0;
                            //console.log(i4);
                        }
                    }
                    if (specialarr[i2] !== 0) {
                        specialarr2[specialarr[i2]] = 1;
                    }
                } else {
                    specialarr2[specialarr[i2]] += 1;
                }
            }
            for (var i3 = 0; i3 < specialarr2.length; i3++) {
                //console.log(specialarr2[i3]);
                numberstr = specialnumbs[specialarr2[i3]] + numberstr;
            }
        }
        return numberstr;
    }

    function another_to_dec(numbertoconvert, systemofanother) {
        var number = (typeof numbertoconvert === 'string') ? numbertoconvert.toUpperCase() : 'A';
        var special = (typeof systemofanother === 'string') ? systemofanother : '0123456789ABCDEF';
        var specialarr = special.split('');
        var newarr = number.split('').reverse();
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

    function convert(will_be_converted, whichfrom, whichto) {
        if (isNaN(Number(whichfrom)) || isNaN(Number(whichto)) || !(typeof will_be_converted === 'string')) {
            return will_be_converted || false;
        }
        return dec_to_another(another_to_dec(will_be_converted, systemstr(Number(whichfrom), str)), systemstr(Number(whichto), str));
    }

    var obj = {
        str: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        convert: function (will_be_converted, whichfrom, whichto) {
            if (isNaN(Number(whichfrom)) || isNaN(Number(whichto)) || !(typeof will_be_converted === 'string' || will_be_converted instanceof String)) {
                return will_be_converted || false;
            }
            //console.log(will_be_converted);
            return dec_to_another(another_to_dec(will_be_converted, systemstr(Number(whichfrom), this.str)), systemstr(Number(whichto), this.str));
        },
        change_numb_letters: function (newstr) {
            this.str = (typeof newstr === 'string') ? newstr : str;
        },
    }
    return { converter: obj, convert: convert, systemstr: systemstr, str: str, dec_to_another: dec_to_another, another_to_dec: another_to_dec };
}
module.exports = cgr_convert_dec;
    return { converter: obj, convert: convert, systemstr: systemstr, str: str, dec_to_another: dec_to_another, another_to_dec: another_to_dec };
});
