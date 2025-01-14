function dectohex(dec) {
    var decCodeTable = {
        0: '0',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: 'a',
        11: 'b',
        12: 'c',
        13: 'd',
        14: 'e',
        15: 'f',
    };
    var newCode = parseInt(dec);
    var newCode1 = newCode;
    var rtv = '';
    var numberlog2 = [];
    var numberlog = [];
    var powernumber = (function () { var rtv0 = newCode; for (var i4 = 0; i4 < newCode; i4++) { if (rtv0 % 16 != 0) { return 0; } rtv0 = (rtv0 - (rtv0 % 16)) / 16; console.log(rtv0); if (rtv0 % 16 == rtv0) { return i4 + 1; } } })();
    var mpnumber = 0;
    var sthtobesubtracted = 0;
    var newval = 0;
    function getleftoverofdividingby16(prevval, repeat) {
        var rtv8 = (prevval - (prevval % 16)) / 16;
        if (rtv8 < 16) {
            return rtv8
        } else if (repeat == true) {
            var rtv90 = getleftoverofdividingby16(rtv8, true);

            return rtv90;
        } else {
            return rtv8;
        }
    }
    var repeatCount = 0;
    newval = newCode;
    for (var i2 = 0; i2 < newCode; i2++) {
        if (newval >= 16) {
            newCode1 = newval % 16
            newval = (newval - (newval % 16)) / 16;
            console.log((newval - (newval % 16)) / 16);
            if (typeof decCodeTable[newCode1] != "undefined")
                numberlog2[numberlog2.length] = decCodeTable[newCode1];
            if (newval < 16) {
                numberlog2[numberlog2.length] = decCodeTable[newval];
                break;
            }
            repeatCount++
        } else if (newCode < 16) {
            numberlog2[numberlog2.length] = decCodeTable[newval];
            break;
        }


    }
    for (var i = 0; i < numberlog2.length; i++) {
        rtv += numberlog2[numberlog2.length - i - 1];
    }
    return rtv;
}
function hextodec(hex) {
    var hexCodeTable = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        a: 10,
        b: 11,
        c: 12,
        d: 13,
        e: 14,
        f: 15,
    };
    var newCode = new String(hex);
    var rtv = 0;
    var numberlog = [];
    var numberlog2 = [];
    var powernumber = 0;
    for (var i = 0; i < newCode.length; i++) {
        var revnumber = newCode.length - 1 - i;
        var newNumb = hexCodeTable[newCode[i]];
        var decv = 0;
        if (!isNaN(newNumb)) {
            decv = newNumb * (16 ** revnumber);
        } else {
            decv = 0;
        }
        numberlog[numberlog.length] = decv;
    }
    for (var i1 = 0; i1 < numberlog.length; i1++) {
        rtv += numberlog[numberlog.length - i1 - 1];
    }
    return rtv;
}
function hexToRGBObj(code) {
    var hexCodeObj = {};
    var rtv = {};
    if (typeof code == 'string') {
        if (code.length == 6) {
            if (!code.includes('#')) {

                hexCodeObj['r'] = code[0] + code[1];
                hexCodeObj['g'] = code[2] + code[3];
                hexCodeObj['b'] = code[4] + code[5];
            } else {
                hexCodeObj['r'] = 'ff';
                hexCodeObj['g'] = '00';
                hexCodeObj['b'] = '00';
            }
        } else if (code.length == 7) {
            if (code.includes('#')) {
                var new6Code = code.replace('#', '');
                hexCodeObj['r'] = new6Code[0] + new6Code[1];
                hexCodeObj['g'] = new6Code[2] + new6Code[3];
                hexCodeObj['b'] = new6Code[4] + new6Code[5];
            } else {
                hexCodeObj['r'] = 'ff';
                hexCodeObj['g'] = '00';
                hexCodeObj['b'] = '00';
            }
        } else if (code.length == 4) {
            if (!code.includes('#')) {
                hexCodeObj['r'] = code[0] + code[1];
                hexCodeObj['g'] = code[2] + code[3];
                hexCodeObj['b'] = '00';
            } else {
                var new6Code = code.replace('#', '');
                hexCodeObj['r'] = new6Code[0] + new6Code[0];
                hexCodeObj['g'] = new6Code[1] + new6Code[1];
                hexCodeObj['b'] = new6Code[2] + new6Code[2];
            }
        } else if (code.length == 5) {
            if (code.includes('#')) {
                var new6Code = code.replace('#', '');
                hexCodeObj['r'] = new6Code[0] + new6Code[1];
                hexCodeObj['g'] = new6Code[2] + new6Code[3];
                hexCodeObj['b'] = '00';
            } else {
                hexCodeObj['r'] = 'ff';
                hexCodeObj['g'] = '00';
                hexCodeObj['b'] = '00';
            }
        } else if (code.length == 3) {
            if (!code.includes('#')) {
                hexCodeObj['r'] = code[0] + code[0];
                hexCodeObj['g'] = code[1] + code[1];
                hexCodeObj['b'] = code[2] + code[2];
            } else {
                var new6Code = code.replace('#', '');
                hexCodeObj['r'] = new6Code[0] + new6Code[0];
                hexCodeObj['g'] = new6Code[1] + new6Code[1];
                hexCodeObj['b'] = '00';
            }
        } else if (code.length == 9) {
            if (!code.includes('#')) {
                hexCodeObj['r'] = 'ff';
                hexCodeObj['g'] = '00';
                hexCodeObj['b'] = '00';
            } else {
                var new6Code = code.replace('#', '');
                hexCodeObj['r'] = new6Code[0] + new6Code[1];
                hexCodeObj['g'] = new6Code[2] + new6Code[3];
                hexCodeObj['b'] = new6Code[4] + new6Code[5];
                hexCodeObj['alpha'] = new6Code[6] + new6Code[7];
            }
        } else if (code.length == 8) {
            if (!code.includes('#')) {
                hexCodeObj['r'] = code[0] + code[1];
                hexCodeObj['g'] = code[2] + code[3];
                hexCodeObj['b'] = code[4] + code[5];
                hexCodeObj['alpha'] = code[6] + code[7];
            } else {

                hexCodeObj['r'] = 'ff';
                hexCodeObj['g'] = '00';
                hexCodeObj['b'] = '00';
            }
        } else {
            hexCodeObj['r'] = 'ff';
            hexCodeObj['g'] = '00';
            hexCodeObj['b'] = '00';
        }
        if (!hexCodeObj['alpha']) {
            hexCodeObj['alpha'] = 'ff';
        }
        rtv['r'] = hextodec(hexCodeObj.r);
        rtv['g'] = hextodec(hexCodeObj.g);
        rtv['b'] = hextodec(hexCodeObj.b);
        rtv['alpha'] = hextodec(hexCodeObj.alpha);
        return rtv;
    } else {
        rtv['r'] = hextodec('ff');
        rtv['g'] = hextodec('00');
        rtv['b'] = hextodec('00');
        return rtv;
    }
}
var colourpickerEls = document.getElementsByTagName("colourpicker");
function colourpickerClass(els) {
    this.elsinNode = (els instanceof NodeList) ? els : (function (doc, pareEl) { var anewcolourpicker = doc.createElement("colourpicker"); var appendedColourpicker = pareEl.appendChild(anewcolourpicker); return doc.getElementsByTagName("colourpicker"); })(document, document.body);
    this.elsinarr = [];
    for (var i = 0; i < this.elsinNode.length; i++) {
        this.elsinarr[this.elsinarr.length] = { el: this.elsinNode[i], picker: {}, els: { picker: null, }, }; /* (an array variable)[(the array variable).length]=(new something to be pushed to (the array variable)) is almost the same as (an array variable).push((new something to be pushed to (the array variable))) 
                so
                this.elsinarr.push(this.elsinNode[i]) also is another possible code. actually,XXX.push(NNN) might be simpler than XXX[XXX.length]=NNN.
                 */
    }
    this.els = this.elsinarr;
}
colourpickerClass.prototype = {
    colourMap: {
        _for: {
            scrollbar: {
                v: {

                    0: {
                        hex: '#ff0000',
                        idx: 0,
                    },
                    1: {
                        hex: '#ffff00',
                        idx: 1,
                    },
                    2: {
                        hex: '#00ff00',
                        idx: 2,
                    },
                    3: {
                        hex: '#00ffff',
                        idx: 3,
                    },
                    4: {
                        hex: '#0000ff',
                        idx: 4,
                    },
                    5: {
                        hex: '#ff00ff',
                        idx: 5,
                    },
                    6: {
                        hex: '#ff0000',
                        idx: 6,
                    },
                    length: 7,
                },
                h: {
                    0: {},
                    length: 1,
                }
            },
            palette: {
                v: {
                    0: {
                        colour: 1,
                        idx: 0,
                    },
                    1: {
                        colour: 0,
                        idx: 1,
                    },
                    length: 2,
                },
                h: {
                    0: {
                        colour: 1,
                        idx: 0,
                    },
                    1: {
                        colour: 0,
                        idx: 1,
                    },
                    length: 2,
                }
            }
        }
    },
    createPicker(ei) {
        var elidx = (typeof ei == "number" && !isNaN(ei)) ? ei : 0;
        var newPickerinnerpr = document.createElement("div");
        newPickerinnerpr.setAttribute("class", "picker-inner");
        var newPickerinner = this.els[elidx].el.appendChild(newPickerinnerpr);
        var newPaletteEl = document.createElement("div");
        newPaletteEl.setAttribute("class", "palette");

        var newPickerPalette = newPickerinner.appendChild(newPaletteEl);
        var newPaletteElinnerDivpr = document.createElement("div");
        newPaletteElinnerDivpr.setAttribute("class", "paletteInner");
        var newPaletteElinnerDiv = newPickerPalette.appendChild(newPaletteElinnerDivpr);

        var newScrollbarpr = document.createElement("div");
        newScrollbarpr.setAttribute("class", "scrollbar");
        var newScrollbar = newPickerinner.appendChild(newScrollbarpr);
        var newScrollpr = document.createElement("p");
        newScrollpr.setAttribute("class", "scroll");
        newScrollpr.setAttribute("draggable", "true");
        var newpointerpr = document.createElement("p");
        newpointerpr.setAttribute("class", "pointer");
        newpointerpr.setAttribute("draggable", "true");
        var newpointer = newPaletteEl.appendChild(newpointerpr);
        var newScroll = newScrollbar.appendChild(newScrollpr);
        return { el: newPickerinner, els: { palette: { el: newPickerPalette, els: { newPaletteInner: { el: newPaletteElinnerDiv, els: {} }, newpointer: newpointer } }, scrollbar: { el: newScrollbar, els: { scroll: { el: newScroll, els: {}, }, }, }, }, };
    },
    makeGrad(param, type) {
        var rtv = '';
        for (var i = 0; i < param.length; i++) {
            if (i == 0) {
                rtv += `${param[i][type]}`;
            } else {
                rtv += `, ${param[i][type]}`;
            }
        }
        return rtv;
    },
    makeGradforPalette(param, startingcolour) {
        var newColour = new String(startingcolour);
        var newColourobj = {
            r: newColour[0] + newColour[1],
            g: newColour[2] + newColour[3],
            b: newColour[4] + newColour[5],
        }
        var rtv = '';
        rtv += `,${newColour}00,000000ff`;
        return rtv;
    },
    makeGradforPaletteInner(param, startingcolour) {
        var newColour = new String(startingcolour);
        var newColourobj = {
            r: newColour[0] + newColour[1],
            g: newColour[2] + newColour[3],
            b: newColour[4] + newColour[5],
        }
        var rtv = '';
        rtv += `${startingcolour}ff,ffffff00`;
        return rtv;
    },
    hextodec(hex) {
        var hexCodeTable = {
            0: 0,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            a: 10,
            b: 11,
            c: 12,
            d: 13,
            e: 14,
            f: 15,
        };
        var newCode = new String(hex);
        var rtv = 0;
        var numberlog = [];
        var numberlog2 = [];
        var powernumber = 0;
        for (var i = 0; i < newCode.length; i++) {
            var revnumber = newCode.length - 1 - i;
            var newNumb = hexCodeTable[newCode[i]];
            var decv = 0;
            if (!isNaN(newNumb)) {
                decv = newNumb * (16 ** revnumber);
            } else {
                decv = 0;
            }
            numberlog[numberlog.length] = decv;
        }
        for (var i1 = 0; i1 < numberlog.length; i1++) {
            rtv += numberlog[numberlog.length - i1 - 1];
        }
        return rtv;
    },
    dectohex(dec) {
        var decCodeTable = {
            0: '0',
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
            8: '8',
            9: '9',
            10: 'a',
            11: 'b',
            12: 'c',
            13: 'd',
            14: 'e',
            15: 'f',
        };
        var newCode = parseInt(dec);
        var newCode1 = newCode;
        var rtv = '';
        var numberlog2 = [];
        var numberlog = [];
        var powernumber = (function () { var rtv0 = newCode; for (var i4 = 0; i4 < newCode; i4++) { if (rtv0 % 16 != 0) { return 0; } rtv0 = (rtv0 - (rtv0 % 16)) / 16; console.log(rtv0); if (rtv0 % 16 == rtv0) { return i4 + 1; } } })();
        var mpnumber = 0;
        var sthtobesubtracted = 0;
        var newval = 0;
        function getleftoverofdividingby16(prevval, repeat) {
            var rtv8 = (prevval - (prevval % 16)) / 16;
            if (rtv8 < 16) {
                return rtv8
            } else if (repeat == true) {
                var rtv90 = getleftoverofdividingby16(rtv8, true);

                return rtv90;
            } else {
                return rtv8;
            }
        }
        var repeatCount = 0;
        newval = newCode;
        for (var i2 = 0; i2 < newCode; i2++) {
            if (newval >= 16) {
                newCode1 = newval % 16
                newval = (newval - (newval % 16)) / 16;
                console.log((newval - (newval % 16)) / 16);
                if (typeof decCodeTable[newCode1] != "undefined")
                    numberlog2[numberlog2.length] = decCodeTable[newCode1];
                if (newval < 16) {
                    numberlog2[numberlog2.length] = decCodeTable[newval];
                    break;
                }
                repeatCount++
            } else if (newCode < 16) {
                numberlog2[numberlog2.length] = decCodeTable[newval];
                break;
            }
        }
        for (var i = 0; i < numberlog2.length; i++) {
            rtv += numberlog2[numberlog2.length - i - 1];
        }
        return rtv;
    },
    selectedColourNow: '#ff0000',
    rgbatohexcode(rgbaobj) {
        var red = rgbaobj.r;
        var green = rgbaobj.g;
        var blue = rgbaobj.b;
        var alpha = rgbaobj.a;
        var alphanumber = Math.floor(alpha * 255);
        var redc = dectohex(red);
        var greenc = dectohex(green);
        var bluec = dectohex(blue);
        if (dectohex(red).length == 1) {
            redc = '0' + redc;
        }
        if (red == 0) {
            redc = '00'
        }

        if (dectohex(green).length == 1) {
            greenc = '0' + greenc;
        }
        if (green == 0) {
            greenc = '00'
        }

        if (dectohex(bluec).length == 1) {
            bluec = '0' + bluec;
        }
        if (blue == 0) {
            bluec = '00'
        }

        var alphac = dectohex(alphanumber);
        if (alphac.length == 0) {
            alphac = '00';
        }
        if (alphac.length == 1) {
            alphac = '0' + alphac;
        }
        return redc + greenc + bluec + alphac;
    },
    rgbtohexcode(rgbaobj) {
        var red = rgbaobj.r;
        var green = rgbaobj.g;
        var blue = rgbaobj.b;
        var redc = dectohex(red);
        var greenc = dectohex(green);
        var bluec = dectohex(blue);
        if (dectohex(red).length == 1) {
            redc = '0' + redc;
        }
        if (red == 0) {
            redc = '00'
        }

        if (dectohex(green).length == 1) {
            greenc = '0' + greenc;
        }
        if (green == 0) {
            greenc = '00'
        }

        if (dectohex(bluec).length == 1) {
            bluec = '0' + bluec;
        }
        if (blue == 0) {
            bluec = '00'
        }
        return redc + greenc + bluec;
    },
    hexcodetorgba(hexcode) {
        var red = hexcode[0] + hexcode[1];
        var green = hexcode[2] + hexcode[3];
        var blue = hexcode[4] + hexcode[5];
        var alpha = hexcode[6] + hexcode[7];
        var rtv = {
            r: hextodec(red),
            g: hextodec(green),
            b: hextodec(blue),
            a: hextodec(alpha) / 255,
        };
        return rtv;
    },
    blendColours(c1, c2) {
        var base = c1;
        var added = c2;
        var mix = [];
        mix[3] = 1 - (1 - added[3]) * (1 - base[3]); // alpha
        mix[0] = Math.round((added[0] * added[3] / mix[3]) + (base[0] * base[3] * (1 - added[3]) / mix[3])); // red
        mix[1] = Math.round((added[1] * added[3] / mix[3]) + (base[1] * base[3] * (1 - added[3]) / mix[3])); // green
        mix[2] = Math.round((added[2] * added[3] / mix[3]) + (base[2] * base[3] * (1 - added[3]) / mix[3])); // blue
        return mix;
    },
    getMixedColour(c1, c2) {
        var rtv = '';
        var colour1 = new String(c1);
        var colour2 = new String(c2);
        var newColourobj1 = {
            r: colour1[0] + colour1[1],
            g: colour1[2] + colour1[3],
            b: colour1[4] + colour1[5],
            alpha: colour1[6] + colour1[7],
        };

        var newColourobj2 = {
            r: colour2[0] + colour2[1],
            g: colour2[2] + colour2[3],
            b: colour2[4] + colour2[5],
            alpha: colour2[6] + colour2[7],
        };
        var newalpha1 = hextodec(newColourobj1.alpha) / 255;
        var newalpha2 = 1;
        var alphaval = newalpha1 + (newalpha2 * (1 - newalpha1));
        /* (57 * 0.25 + 255 * 0.85 * (1 - 0.25)) / 0.8875  = 199.2 */

        var rgba1 = this.hexcodetorgba(colour1);
        var rgba2 = this.hexcodetorgba(colour2);
        var newred = rgba1.r * rgba1.a * (1 - rgba2.a) + rgba2.r * rgba2.a;
        var newgreen = rgba1.g * rgba1.a * (1 - rgba2.a) + rgba2.g * rgba2.a;
        var newblue = rgba1.b * rgba1.a * (1 - rgba2.a) + rgba2.b * rgba2.a;
        var newalpha = 255;

        var rgba3 = this.blendColours([rgba1.r, rgba1.g, rgba1.b, rgba1.a], [rgba2.r, rgba2.g, rgba2.b, rgba2.a]);
        var [newred0, newgreen0, newblue0, newalpha0] = rgba3;
        var hexcode4 = this.rgbatohexcode({ r: newred0, g: newgreen0, b: newblue0, a: newalpha0 });
        var [rk, gk, bk, ak] = this.blendColours([newred0, newgreen0, newblue0], [255, 255, 255, 1]);
        var hexcode33 = this.rgbatorgb({ r: newred0, g: newgreen0, b: newblue0, a: newalpha0 });
        var hexcode3 = this.rgbtohexcode(hexcode33);
        console.log(hexcode3);
        /*
                        document.getElementById('demo').style.background = `#${hexcode3}`;*/
        document.getElementById("demo").style.background = `rgba(${newred0},${newgreen0},${newblue0},${newalpha0})`;
        document.getElementById('demo').innerHTML = '#' + hexcode3;
        this.pickedColour = hexcode3;



        /*var red = ((hextodec(newColourobj1['r']) * newalpha1 * (1 - newalpha2)) + (hextodec(newColourobj2['r']) * newalpha2));
        var green = ((hextodec(newColourobj1['g']) * newalpha1 * (1 - newalpha2)) + (hextodec(newColourobj2['g']) * newalpha2));
        var blue = ((hextodec(newColourobj1['b']) * newalpha1 * (1 - newalpha2)) + (hextodec(newColourobj2['b']) * newalpha2));

        console.log(alphaval);
        console.log(red);
        console.log(green);
        console.log(blue);
        var redval = Math.floor(red);
        var greenval = Math.floor(green);
        var blueval = Math.floor(blue);
        var alphaval2 = Math.floor(alphaval * 255);
        alphaval2 = 255;
        var redtort = dectohex(redval);
        var greentort = dectohex(greenval);
        var bluetort = dectohex(blueval);
        var alphatort = dectohex(alphaval2);
        if (redval == 0) {
            redtort = '00';
        }
        if (greenval == 0) {
            greentort = '00';
        }
        if (blueval == 0) {
            bluetort = '00';
        }
        if (alphaval2 == 0) {
            alphatort = '00';
        }
        if (redtort.length == 1) {
            redtort = '0' + redtort;
        }
        if (greentort.length == 1) {
            greentort = '0' + greentort;
        }
        if (bluetort.length == 1) {
            bluetort = '0' + bluetort;
        }
        if (alphatort.length == 1) {
            alphatort = '0' + alphatort;
        }
        rtv = redtort + greentort + bluetort + alphatort;
        console.log(rtv);
        return rtv;*/
        return hexcode3;

    },
    hexToRGBObj(code) {
        var hexCodeObj = {};
        var rtv = {};
        if (typeof code == 'string') {
            if (code.length == 6) {
                if (!code.includes('#')) {

                    hexCodeObj['r'] = code[0] + code[1];
                    hexCodeObj['g'] = code[2] + code[3];
                    hexCodeObj['b'] = code[4] + code[5];
                } else {
                    hexCodeObj['r'] = 'ff';
                    hexCodeObj['g'] = '00';
                    hexCodeObj['b'] = '00';
                }
            } else if (code.length == 7) {
                if (code.includes('#')) {
                    var new6Code = code.replace('#', '');
                    hexCodeObj['r'] = new6Code[0] + new6Code[1];
                    hexCodeObj['g'] = new6Code[2] + new6Code[3];
                    hexCodeObj['b'] = new6Code[4] + new6Code[5];
                } else {
                    hexCodeObj['r'] = 'ff';
                    hexCodeObj['g'] = '00';
                    hexCodeObj['b'] = '00';
                }
            } else if (code.length == 4) {
                if (!code.includes('#')) {
                    hexCodeObj['r'] = code[0] + code[1];
                    hexCodeObj['g'] = code[2] + code[3];
                    hexCodeObj['b'] = '00';
                } else {
                    var new6Code = code.replace('#', '');
                    hexCodeObj['r'] = new6Code[0] + new6Code[0];
                    hexCodeObj['g'] = new6Code[1] + new6Code[1];
                    hexCodeObj['b'] = new6Code[2] + new6Code[2];
                }
            } else if (code.length == 5) {
                if (code.includes('#')) {
                    var new6Code = code.replace('#', '');
                    hexCodeObj['r'] = new6Code[0] + new6Code[1];
                    hexCodeObj['g'] = new6Code[2] + new6Code[3];
                    hexCodeObj['b'] = '00';
                } else {
                    hexCodeObj['r'] = 'ff';
                    hexCodeObj['g'] = '00';
                    hexCodeObj['b'] = '00';
                }
            } else if (code.length == 3) {
                if (!code.includes('#')) {
                    hexCodeObj['r'] = code[0] + code[0];
                    hexCodeObj['g'] = code[1] + code[1];
                    hexCodeObj['b'] = code[2] + code[2];
                } else {
                    var new6Code = code.replace('#', '');
                    hexCodeObj['r'] = new6Code[0] + new6Code[0];
                    hexCodeObj['g'] = new6Code[1] + new6Code[1];
                    hexCodeObj['b'] = '00';
                }
            } else {
                hexCodeObj['r'] = 'ff';
                hexCodeObj['g'] = '00';
                hexCodeObj['b'] = '00';
            }
            rtv['r'] = hextodec(hexCodeObj.r);
            rtv['g'] = hextodec(hexCodeObj.g);
            rtv['b'] = hextodec(hexCodeObj.b);
            return rtv;
        } else {
            rtv['r'] = hextodec('ff');
            rtv['g'] = hextodec('00');
            rtv['b'] = hextodec('00');
            return rtv;
        }
    },
    getColourOnPositionOfScroll(el, ev) {
        if (el instanceof HTMLElement && ev instanceof MouseEvent) {
            var rtv = '';
            var rule = this.colourMap._for.scrollbar;
            var eventTop = ev.offsetY;
            var eventTopOnScrollbar = eventTop;
            var colour1 = eventTopOnScrollbar;
            console.log(colour1);
            console.log(eventTop);
            console.log(el.parentElement.offsetTop);
            var colourtopicked = {};
            if (colour1 <= el.parentElement.offsetHeight / 6) {
                var red = 255;
                var green = hextodec('ff');
                colourtopicked['r'] = red;
                colourtopicked['g'] = green * ((colour1) / (el.parentElement.offsetHeight / 6));
                colourtopicked['b'] = 0;
                console.log((colour1) / (el.parentElement.offsetHeight / 6));
                console.log('between #ff0000 and #ffff00');
            } else if (colour1 <= el.parentElement.offsetHeight / 6 * 2) {
                var red = hextodec('ff')
                colourtopicked['r'] = red * ((el.parentElement.offsetHeight / 6) - ((colour1 - (el.parentElement.offsetHeight / 6)) / (el.parentElement.offsetHeight / 6)));
                colourtopicked['g'] = 255;
                colourtopicked['b'] = 0;
                console.log('between #ffff00 and #00ff00');
            } else if (colour1 <= el.parentElement.offsetHeight / 6 * 3) {
                var blue = hextodec('ff');
                colourtopicked['r'] = 0;
                colourtopicked['g'] = 255;
                colourtopicked['b'] = blue * ((colour1 - (el.parentElement.offsetHeight / 6 * 2)) / (el.parentElement.offsetHeight / 6));
                console.log('between #00ff00 and #00ffff');
            } else if (colour1 <= el.parentElement.offsetHeight / 6 * 4) {
                var blue = hextodec('ff');
                colourtopicked['r'] = 0;
                colourtopicked['g'] = blue * ((el.parentElement.offsetHeight / 6) - ((colour1 - (el.parentElement.offsetHeight / 6 * 3)) / (el.parentElement.offsetHeight / 6)));
                colourtopicked['b'] = 255;
                console.log('between #00ffff and #0000ff');
            } else if (colour1 <= el.parentElement.offsetHeight / 6 * 5) {
                var blue = hextodec('ff');
                colourtopicked['r'] = blue * ((colour1 - (el.parentElement.offsetHeight / 6 * 4)) / (el.parentElement.offsetHeight / 6));
                colourtopicked['g'] = 0;
                colourtopicked['b'] = 255;
                console.log('between #0000ff and #ff00ff');
            } else if (colour1 <= el.parentElement.offsetHeight / 6 * 6) {
                var blue = hextodec('ff');
                colourtopicked['r'] = 255;
                colourtopicked['g'] = 0;
                colourtopicked['b'] = blue * ((el.parentElement.offsetHeight / 6) - ((colour1 - (el.parentElement.offsetHeight / 6 * 5)) / (el.parentElement.offsetHeight / 6)));
                console.log(`following number is how blue colour you picked is` + ((el.parentElement.offsetHeight / 6) - (colour1 - (el.parentElement.offsetHeight / 6 * 5)) / (el.parentElement.offsetHeight / 6)));
                console.log('between #ff00ff and #ff0000');
            }
            var rtvred = dectohex(colourtopicked.r);
            if (rtvred.length == 1) {
                rtvred = '0' + rtvred;
            }
            if (rtvred.length == 0) {
                rtvred = '00';
            }
            var rtvgreen = dectohex(colourtopicked.g);
            if (rtvgreen.length == 1) {
                rtvgreen = '0' + rtvgreen;
            }
            if (rtvgreen.length == 0) {
                rtvgreen = '00';
            }
            console.log(colourtopicked.b);
            var rtvblue = dectohex(colourtopicked.b);
            if (rtvblue.length == 1) {
                rtvblue = '0' + rtvblue;
            }
            if (rtvblue.length == 0) {
                rtvblue = '00';
            }
            rtv = '#' + rtvred + rtvgreen + rtvblue;
            console.log(rtv);
            return rtv;
        } else {
            return '#ff0000';
        }
    },
    newGrad: class {
        constructor(c1, c2, style, direction) {
            this.gradient = {
                inObj: {
                    type: { type: style, },
                    colour1: {
                        colour: c1,
                    },
                    colour2: { colour: c2, },
                },
                inCssStyle: (style == 'linear') ? `linear-gradient(to ${direction}, ${c1} , ${c2} )` : (style == 'radial') ? `radial-gradient(${c1} ,${c2} )` : (style == 'conic') ? `conic-gradient(${c1} ,${c2} )` : `linear-gradient(${c1}, ${c2})`,
            };
            if (style == 'linear' && typeof direction != 'undefined') {
                this.gradient.inObj.type['direction'] = direction;
            };
        };
        resetGrad() {
            this.gradient = {};
        };
        resetAndCreateGrad(c1, c2, style, direction) {
            this.resetGrad();
            this.gradient = {
                inObj: {
                    type: { type: style, },
                    colour1: {
                        colour: c1
                    },
                    colour2: { colour: c2 },
                },
                inCssStyle: (style == 'linear') ? `linear-gradient(to ${direction}, ${c1} , ${c2}  )` : (style == 'radial') ? `radial-gradient(${c1} ,${c2} )` : (style == 'conic') ? `conic-gradient(${c1} ,${c2} )` : `linear-gradient(${c1}, ${c2})`,
            };
            if (style == 'linear' && typeof direction != 'undefined') {
                this.gradient.inObj.type['direction'] = direction;
            };
        };
        getColour(idx) {
            if (typeof this.gradient.inObj == 'object') return this.gradient.inObj['colour' + idx].colour;
            return false;
        };
        getColourInGrad(at, from) {
            if (typeof this.gradient.inObj == 'object') {
                var fcolour = this.getColour(1);
                var scolour = this.getColour(2);
                if (!(!fcolour || !scolour)) {
                    var fcolourinRGB = hexToRGBObj(fcolour);
                    var scolourinRGB = hexToRGBObj(scolour);
                    var newfrom = 1;
                    var alpha = 255;
                    if (typeof at == "number" && (at >= 0 && at <= 1)) {
                        if (typeof from == "number" && (from == 0 || from == 1)) {
                            newfrom = from;
                        } else if (typeof from == "string" && (from == "left" || from == "right" || from.toLowerCase() == "l" || from.toLowerCase() == "r" || from == "start" || from == "end")) {
                            if (from == "left" || from.toLowerCase() == "l" || from == "start") {
                                newfrom = 0;
                            }
                        } else {
                            newfrom = 0;
                        }
                        var nu = 0.5;
                        if (newfrom == 0) {
                            nu = newfrom + at;
                        } else if (newfrom == 1) {
                            nu = newfrom - at;
                        }

                        var rgbobj = {};
                        if (fcolourinRGB.r > scolourinRGB.r) {
                            rgbobj['r'] = (fcolourinRGB.r + scolourinRGB.r) * nu;
                        } else if (fcolourinRGB.r < scolourinRGB.r) {
                            rgbobj['r'] = (scolourinRGB.r + fcolourinRGB.r) * nu;
                        } else {
                            /* when it's (red of colour1 == red of colour2)==true. (when r value of first colour and r value of second colour are the same) */
                            rgbobj['r'] = fcolourinRGB.r;
                        }

                        if (fcolourinRGB.g > scolourinRGB.g) {
                            rgbobj['g'] = (fcolourinRGB.g + scolourinRGB.g) * nu;
                        } else if (fcolourinRGB.g < scolourinRGB.g) {
                            rgbobj['g'] = (scolourinRGB.g + fcolourinRGB.g) * nu;
                        } else {
                            rgbobj['g'] = fcolourinRGB.g;
                        }

                        if (fcolourinRGB.b > scolourinRGB.b) {
                            rgbobj['b'] = (fcolourinRGB.b + scolourinRGB.b) * nu;
                        } else if (fcolourinRGB.b < scolourinRGB.b) {
                            rgbobj['b'] = (scolourinRGB.b + fcolourinRGB.b) * nu;
                        } else {
                            rgbobj['b'] = fcolourinRGB.b;
                        }

                        if (fcolourinRGB.alpha > scolourinRGB.alpha) {
                            rgbobj['alpha'] = (fcolourinRGB.alpha + scolourinRGB.alpha) * nu;
                        } else if (fcolourinRGB.alpha < scolourinRGB.alpha) {
                            rgbobj['alpha'] = (scolourinRGB.alpha + fcolourinRGB.alpha) * nu;
                        } else {
                            rgbobj['alpha'] = fcolourinRGB.alpha;
                        }

                        var redInHex = dectohex(Math.round(rgbobj.r));
                        var greenInHex = dectohex(Math.round(rgbobj.g));
                        var blueInHex = dectohex(Math.round(rgbobj.b));
                        var alphaInHex = dectohex(Math.round(rgbobj.alpha));
                        if (Math.round(rgbobj.r) == 0) {
                            redInHex = '00';
                        }
                        if (Math.round(rgbobj.g) == 0) {
                            greenInHex = '00';
                        }
                        if (Math.round(rgbobj.b) == 0) {
                            blueInHex = '00';
                        }
                        if (Math.round(rgbobj.alpha) == 0) {
                            alphaInHex = '00';
                        }
                        if (redInHex.length == 1) {
                            redInHex = '0' + redInHex;
                        }
                        if (greenInHex.length == 1) {
                            greenInHex = '0' + greenInHex;
                        }
                        if (blueInHex.length == 1) {
                            blueInHex = '0' + blueInHex;
                        }
                        if (alphaInHex.length == 1) {
                            alphaInHex = '0' + alphaInHex;
                        }
                        console.log(rgbobj.r);
                        console.log(rgbobj.g);
                        console.log(rgbobj.b);
                        console.log(rgbobj.alpha);
                        /*return { rgb: rgbobj, hexcodestr: '#' + redInHex + greenInHex + blueInHex + alphaInHex };*/
                        var fullred = Math.max(fcolourinRGB.r, scolourinRGB.r) - Math.min(fcolourinRGB.r, scolourinRGB.r);
                        var fullgreen = Math.max(fcolourinRGB.g, scolourinRGB.g) - Math.min(fcolourinRGB.g, scolourinRGB.g);
                        var fullblue = Math.max(fcolourinRGB.b, scolourinRGB.b) - Math.min(fcolourinRGB.b, scolourinRGB.b);
                        var fullalpha = Math.max(fcolourinRGB.alpha, scolourinRGB.alpha) - Math.min(fcolourinRGB.alpha, scolourinRGB.alpha);
                        var minred = Math.min(fcolourinRGB.r, scolourinRGB.r);
                        var mingreen = Math.min(fcolourinRGB.g, scolourinRGB.g);
                        var minblue = Math.min(fcolourinRGB.b, scolourinRGB.b);
                        var minalpha = Math.min(fcolourinRGB.alpha, scolourinRGB.alpha);
                        var rtv = {};
                        var posr = at;
                        var posg = at;
                        var posb = at;
                        var posa = at;
                        if (fcolourinRGB.r < scolourinRGB.r) {
                            posr = at;
                        } else if (fcolourinRGB.r > scolourinRGB.r) {
                            posr = 1 - at;
                        } else {
                            /* when it's (red of colour1 == red of colour2)==true. (when r value of first colour and r value of second colour are the same) */
                            posr = 0.5
                        }

                        if (fcolourinRGB.g < scolourinRGB.g) {
                            posg = at;
                        } else if (fcolourinRGB.g > scolourinRGB.g) {
                            posg = 1 - at;
                        } else {
                            posg = 0.5
                        }

                        if (fcolourinRGB.b < scolourinRGB.b) {
                            posb = at;
                        } else if (fcolourinRGB.b > scolourinRGB.b) {
                            posb = 1 - at;
                        } else {
                            posb = 0.5;
                        }

                        if (fcolourinRGB.alpha < scolourinRGB.alpha) {
                            posa = at;
                        } else if (fcolourinRGB.alpha > scolourinRGB.alpha) {
                            posa = 1 - at;
                        } else {
                            posa = 0.5;
                        }

                        var redoffset = (fullred * posr) + minred;
                        var greenoffset = (fullgreen * posg) + mingreen;
                        var blueoffset = (fullblue * posb) + minblue;
                        var alphaoffset = (fullalpha * posa) + minalpha;
                        var redoffsetsimple = Math.floor(redoffset);
                        var greenoffsetsimple = Math.floor(greenoffset);
                        var blueoffsetsimple = Math.floor(blueoffset);
                        var alphaoffsetsimple = Math.floor(alphaoffset);
                        var hexcodered = dectohex(redoffsetsimple);
                        var hexcodegreen = dectohex(greenoffsetsimple);
                        var hexcodeblue = dectohex(blueoffsetsimple);
                        var hexcodealpha = dectohex(alphaoffsetsimple);
                        if (hexcodered.length == 0) {
                            hexcodered = '00';
                        }
                        if (hexcodegreen.length == 0) {
                            hexcodegreen = '00';
                        }
                        if (hexcodeblue.length == 0) {
                            hexcodeblue = '00';
                        }
                        if (hexcodealpha.length == 0) {
                            hexcodealpha = '00';
                        }
                        if (hexcodered.length == 1) {
                            hexcodered = '0' + hexcodered;
                        }
                        if (hexcodegreen.length == 1) {
                            hexcodegreen = '0' + hexcodegreen;
                        }
                        if (hexcodeblue.length == 1) {
                            hexcodeblue = '0' + hexcodeblue;
                        }
                        if (hexcodealpha.length == 1) {
                            hexcodealpha = '0' + hexcodealpha;
                        }
                        var hexcodes = { hexcodestr: hexcodered + hexcodegreen + hexcodeblue + hexcodealpha };
                        return hexcodes;
                    }
                }
            }
        };
    },
    getColourOnSomePosOfAGradOfTwoColours(colour1, colour2, direction, at) {
        if (typeof colour1 == "string" && typeof colour2 == "string" && typeof at == "object") {
            var colour1ParsedFromHexCodeSTRToDecNumb = hextodec(colour1);
            var colour2ParsedFromHexCodeSTRToDecNumb = hextodec(colour2);
            var specialNewGrad = new this.newGrad(colour1, colour2, 'linear', direction);
            var colourtobereturned = specialNewGrad.getColourInGrad(at.at, at.from);
            console.log(colourtobereturned);
            return colourtobereturned.hexcodestr;
        }
    },
    getColourOnPositionOfPalette(el, ev) {
        if (el instanceof HTMLElement && ev instanceof MouseEvent) {
            var elWidth = el.offsetWidth;
            var elHeight = el.offsetHeight;
            var evLeft = ev.offsetX;
            var evTop = ev.offsetY;
            var colourpositionX = evLeft / elWidth;
            var colourpositionY = evTop / elHeight;
            console.log(colourpositionX);
            console.log(colourpositionY);
            var coordinateOnPalette = {
                x: colourpositionX,
                y: colourpositionY,
            };
            console.log(coordinateOnPalette.x);
            console.log(coordinateOnPalette.y);
            var xColour = this.getColourOnSomePosOfAGradOfTwoColours('#ffffff00', this.selectedColourNow + 'ff', 'left', { at: coordinateOnPalette.x, from: 0 });
            var yColour = this.getColourOnSomePosOfAGradOfTwoColours(this.selectedColourNow + '00', '#000000ff', 'bottom', { at: coordinateOnPalette.y, from: 1 });
            console.log(xColour);
            console.log(yColour);
            return this.getMixedColour(xColour, yColour);
        }
    },
    pickedColour: '#ff0000',
    dragging: false,
    rgbatorgb(rgba) {
        var newrgba = rgba;
        var red = newrgba.r * newrgba.a;
        var green = newrgba.g * newrgba.a;
        var blue = newrgba.b * newrgba.a;
        return {
            r: red,
            g: green,
            b: blue,
        }
    },
    draggingonpalette: false,
    setBackGround(ei) {
        var elidx = (typeof ei == "number" && !isNaN(ei)) ? ei : 0;
        var createdPicker = this.createPicker(elidx);
        var scrollbtn = createdPicker.els.scrollbar.els.scroll.el;
        var scrollbar = createdPicker.els.scrollbar.el;
        var startingcolour = '#ff0000';
        /* createdPicker.els.scrollbar.el.style.background=`linear-gradient(to bottom,${this.makeGrad(this.colourMap._for.scrollbar.v,'hex')})`; */
        createdPicker.els.scrollbar.el.style.background = `linear-gradient(to bottom,#ff0000,#ffff00,#00ff00,#00ffff,#0000ff,#ff00ff,#ff0000)`;
        var thisobj = this;
        var paletteEl = createdPicker.els.palette.el;
        var palettePointerEl = createdPicker.els.palette.els.newpointer;
        createdPicker.els.scrollbar.els.scroll.el.addEventListener("mousedown", function (ev) {
            thisobj.dragging = true;
        });
        createdPicker.els.scrollbar.el.addEventListener("mouseup", function (ev) {
            console.log('hello');
            thisobj.dragging = false;
            createdPicker.els.scrollbar.els.scroll.el.style.position = 'relative';
            scrollbtn.style.position = 'relative';
            createdPicker.els.scrollbar.els.scroll.el.style.left = '-2em';
            var gotColour = thisobj.getColourOnPositionOfScroll(createdPicker.els.scrollbar.els.scroll.el, ev);
            startingcolour = gotColour;
            console.log(startingcolour);
            createdPicker.els.palette.els.newPaletteInner.el.style.background = `linear-gradient(to bottom, ${startingcolour + '00'},#000000ff)`;
            createdPicker.els.palette.el.style.background = `linear-gradient(to left, ${startingcolour + 'ff'},#ffffff00)`;
            createdPicker.els.scrollbar.els.scroll.el.style.position = 'relative';
            createdPicker.els.scrollbar.els.scroll.el.style.left = '-2em';
            var gotColour = thisobj.getColourOnPositionOfScroll(createdPicker.els.scrollbar.els.scroll.el, ev);
            startingcolour = gotColour;
            createdPicker.els.palette.els.newPaletteInner.el.style.background = `linear-gradient(to bottom, ${startingcolour + '00'},#000000ff)`;
            createdPicker.els.palette.el.style.background = `linear-gradient(to left, ${startingcolour + 'ff'},#ffffff00)`;
            thisobj.selectedColourNow = startingcolour;
            thisobj.dragging = false;
        });
        createdPicker.els.scrollbar.el.addEventListener("mousemove", function (ev) {
            if (thisobj.dragging == true) {
                scrollbtn.style.top = ev.offsetY + "px"
                createdPicker.els.scrollbar.els.scroll.el.style.position = 'relative';
                scrollbtn.style.left = "-2em";
            }
        });
        scrollbar.addEventListener("click", function (ev) {
            if (ev.offsetX > paletteEl.offsetLeft) {
                scrollbtn.style.top = ev.offsetY + (scrollbtn.offsetHeight / 12) + "px";
                var gotColour = thisobj.getColourOnPositionOfScroll(createdPicker.els.scrollbar.els.scroll.el, ev);
                startingcolour = gotColour;
                createdPicker.els.palette.els.newPaletteInner.el.style.background = `linear-gradient(to bottom, ${startingcolour + '00'},#000000ff)`;
                createdPicker.els.palette.el.style.background = `linear-gradient(to left, ${startingcolour + 'ff'},#ffffff00)`;
                thisobj.selectedColourNow = startingcolour;
            }
        });
        palettePointerEl.addEventListener("mousedown", function (ev) {
            thisobj.draggingonpalette = true;
        });
        paletteEl.addEventListener("mousemove", function (ev) {
            if (thisobj.draggingonpalette) {
                palettePointerEl.style.left = ev.offsetX + "px";
                palettePointerEl.style.top = ev.offsetY - (paletteEl.offsetHeight) + "px";
                pposx = ev.x - pposx;
                pposy = ev.y - pposy;
                palettePointerEl.style.background = "transparent";
            }
        });
        paletteEl.addEventListener("mouseup", function (ev) {
            thisobj.draggingonpalette = false;
            palettePointerEl.style.left = ev.offsetX + "px";
            palettePointerEl.style.top = ev.offsetY + "px";
            palettePointerEl.style.background = thisobj.pickedColour;
        });
        paletteEl.addEventListener("click", function (ev) {
            palettePointerEl.style.left = ev.offsetX + "px";
            palettePointerEl.style.top = ev.offsetY - paletteEl.offsetHeight + "px";
            var newpColour = thisobj.getColourOnPositionOfPalette(paletteEl, ev);
            thisobj.pickedColour = "#" + newpColour;
            palettePointerEl.style.background = thisobj.pickedColour;
        });
        paletteEl.style.background = `linear-gradient(to left, ${this.selectedColourNow + 'ff'},#ffffff00)`;
        createdPicker.els.palette.els.newPaletteInner.el.style.background = `linear-gradient(to bottom, ${this.selectedColourNow + '00'},#000000ff)`;
        return createdPicker;
    }
}
var colourpickerclicked = false;
var newColourPicker;
var El;
var El2;
var uEl;
document.getElementById("colour_picker_trigger").addEventListener("click", function (ev) {
    if (!colourpickerclicked) {
        newColourPicker = new colourpickerClass();
        El = newColourPicker.setBackGround(0);
        El2 = El.el;
        uEl = newColourPicker.elsinarr[0].el;
    } else {
        if (newColourPicker instanceof colourpickerClass && typeof El == 'object') {
            if (El2 instanceof HTMLElement && uEl instanceof HTMLElement) {
                El2.remove();
                uEl.remove();
                if (document.getElementsByTagName("colourpicker").length > 0) {
                    document.querySelectorAll("colourpicker").forEach(function (el, key, par) {
                        el.remove();
                    });
                }
            }
        }
    }
});