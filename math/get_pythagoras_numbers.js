
function if_it_is_square_root(numb, max) {
    for (var i = 0; i <= ((max ** 2) * 2) ** (1 / 2); i++) {
        if (i ** 2 === numb) {
            return true;
        }
    }
    return false;
}
function get_pythagoras_numbers(max) {
    var numb0 = 1; var rtv = [];
    while (numb0 <= max) {
        var numb1 = 1;
        while (numb1 <= max) {
            if (if_it_is_square_root(numb0 ** 2 + numb1 ** 2, max)) {
                rtv.push([numb0, numb1, (numb0 ** 2 + numb1 ** 2) ** (1 / 2)]);
            }
            numb1++;
        }
        numb0++;
    }
    return rtv;
}
