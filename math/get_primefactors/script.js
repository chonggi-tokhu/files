function check_if_the_type_of_a_v_is_number(a_v) {
    return typeof a_v === 'number';
}
function check_notNaN(a_v) {
    return !isNaN(a_v);
}
function check_number(a_v) {
    return check_if_the_type_of_a_v_is_number(a_v) && check_notNaN(a_v);
}
function check_integer(a_v) {
    return (!check_number(a_v)) ? false : (a_v === Math.floor(a_v));
}
function get_multiplying_table(least, greatest) {
    var rtarr = [];
    var rtarrpr = [];
    if (!(typeof least === 'number' && !isNaN(least)) || !(typeof greatest === 'number' && !isNaN(greatest))) {
        return false;
    }
    for (var i = least; i <= greatest; i++) {
        rtarrpr[i] = [];
        for (var i1 = least; i1 <= greatest; i1++) {
            if (!(Array.isArray(rtarrpr[i1]) && i1 !== i)) {
                /* to save table size. rtarrpr[i][i1] equals to rtarrpr[i1][i]. 
                * So, it is better for us to let this code not calculate a multiplying, which is already calculated. 
                * However, this code must calculate a multiplying WHEN the two numbers are the same(in other words, when the multiplying is square) */
                rtarrpr[i][i1] = i * i1;
            }
        }
    }
    rtarr = rtarrpr;
    return rtarr;
}
function check_prime(numb_1) {
    var rtbool = true;
    if (!check_integer(numb_1)) {
        return null;
    }
    var greatest = (numb_1 / 2) + 1;
    var multiplying_table = get_multiplying_table(2, greatest);
    for (var i = 2; i < multiplying_table.length; i++) {
        for (var i0 = 2; i0 < multiplying_table[i].length; i0++) {
            if (numb_1 === multiplying_table[i][i0]) {
                rtbool = false;
            }
        }
    }
    return rtbool;
}
/* function check_prime(numb_1,multiplying_table) { 
    var rtbool = true;
    if (!check_integer(numb_1)) {
        return null;
    }
    if (!Array.isArray(multiplying_table)){
        var greatest = (numb_1 / 2) + 1;
        multiplying_table = get_multiplying_table(2, greatest);
    }
    for (var i = 0; i < multiplying_table.length; i++){
        if (Array.isArray(multiplying_table[i])){
            for (var i0 = 0; i0 < multiplying_table[i].length; i0++){
                if (numb_1 === multiplying_table[i][i0]) {
                    rtbool = false;
                }
            }
        }
    }
    return rtbool;
} */
function next_primenumber(numb_1, stop) {
    var rtv = numb_1 + 1;
    if (check_prime(rtv) === null) {
        return false;
    }
    while (!check_prime(rtv)) {
        rtv++;
        if (rtv >= stop) {
            rtv = false || 'Number is too big. So we stopped increasing number';
            break;
        }
    }
    return rtv;
}
function get_primefactors(numb_1) {
    var rtarrpr = [];
    var rtarr = [];
    if (!check_integer(numb_1)) {
        return false;
    }
    if (check_prime(numb_1)) {
        return [numb_1];
    }
    var currnumb = 1;
    console.log(numb_1 / 2 + 2);
    for (var i = 2; currnumb < numb_1; i) {
        if ((numb_1 / currnumb) % i === 0) {
            rtarrpr.push(i);
            currnumb = currnumb * i;
            console.log(i);
        } else if ((numb_1 / currnumb) / i !== 1) {
            var speciali = next_primenumber(i, (numb_1 % 1 === 0) ? (numb_1 / 2) + 2 : (numb_1 + 1) / 2 + 2);
            if (!check_integer(speciali)) {
                console.log(speciali, i);
                rtarrpr = false;
                break;
            } else {
                i = speciali;
            }
        } else {
            break;
        }
    }
    rtarr = rtarrpr;
    return rtarr;
}
function get_primefactors_with_e(numb_1) {
    var rtarr = [];
    var primefactors = get_primefactors(numb_1);
    if (!primefactors) {
        return false;
    }
    var rtarrpr = [1];
    for (var i = 0; i < primefactors.length; i++) {
        if (!check_integer(rtarrpr[primefactors[i] - 1])) {
            rtarrpr[primefactors[i] - 1] = 0;
        }
        rtarrpr[primefactors[i] - 1] += 1;
    }
    for (var i0 = 0; i0 < rtarrpr.length; i0++) {
        var numbtopush = (!check_integer(rtarrpr[i0])) ? 0 : rtarrpr[i0];
        rtarr.push(numbtopush);
    }
    console.log(rtarr);
    return rtarr;
}
function get_divisors(numb_1) {
    var rtarr = [];
    if (!check_integer(numb_1)) {
        return false;
    }
    if (check_prime(numb_1)) {
        return [1, numb_1];
    }
    var primefactors = get_primefactors_with_e(numb_1);
    if (!primefactors) {
        return false;
    }
    /*var primefactors_2 = [];
    for (var i = 0; i < primefactors.length; i++){
        for (var i1 = 0; i1 < primefactors[i]; i1++){
            primefactors_2.push(i ** i1);
        }
    }*/
    var rtarrpr0 = [[1]];
    var rtarrpr = [];
    for (var i4 = 1; i4 < primefactors.length; i4++) {
        rtarrpr0[i4] = [];
        /*for (var i0 = 0; i0 < primefactors_2.length; i0++){
            for (var i2 = 0; i2 < primefactors_2.length; i2++){
                rtarrpr0[i4].push(primefactors_2[i0]*primefactors_2[i2]);
            }
        }*/
        for (var i0 = 0; i0 < primefactors[i4]; i0++) {
            rtarrpr0[i4][i0] = (i4 + 1) ** (i0 + 1);
        }
    }
    rtarrpr0[0] = [1];
    rtarrpr = [1];
    //console.log(rtarrpr0);
    for (var i5 = 1; i5 < rtarrpr0.length; i5++) {
        var rtarrprlen = rtarrpr.length;
        for (var i6 = 0; i6 < rtarrpr0[i5].length; i6++) {
            for (var i7 = 0; i7 < rtarrprlen; i7++) {
                //console.log(rtarrpr[i7] * rtarrpr0[i5][i6] + ' ' + i5 + ' ' + i6 + ' ' + i7);
                rtarrpr.push(rtarrpr[i7] * rtarrpr0[i5][i6]);
            }
        }
    }
    for (var i3 = 0; i3 < rtarrpr.length; i3++) {
        if (!rtarr.includes(rtarrpr[i3])) {
            rtarr.push(rtarrpr[i3]);
        }
    }
    return rtarr;
}