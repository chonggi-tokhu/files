/*
 * ColourgreyShorterCSSJS 0.0.2
 * 
 * developer: Chonggi-tokhu ('colourgrey' on sites other than github)
 * 
 * Things changed: 
 * Some ==s changed to ===
 * Alternatives of functions that are different only by their original function names added
 * Else clause of the top-level if-statement within checkObjAndItsProperty function added
 * Now you can use returnAllInOneArr function. (But this is a useless function. I recommend using Array.prototype.flat(1) instead of this)
 * 
 * This is terrible so do not use this:
 * CSS features of ColourgreyShorterJS (tab menu, popover, dropdown, foldable paragraph, block that you can collapse and expand) are not good. These are f-wording bad so I recommend using bootstrap.
 * Features that get HTML Element of ColourgreyShorterJS (that actually the methods are under Document.prototype and HTMLElement.prototype) are messy and f-wording bad so I recommend using Document.querySelector or Jquery $ function.
 * But maybe this can be useful to check data types.
 * 
 * 씻파알 나 영어 잘 못한다고
 * 
 * 0.0.3
 */
(function (gTh, CGRshorter) { "object" === typeof exports && "undefined" != typeof module ? module.exports = CGRshorter() : "function" === typeof define && define.amd ? define(CGRshorter) : (gTh = "undefined" != typeof globalThis ? globalThis : gTh || self).ColourgreyShorterJS = CGRshorter() })(this, function () {
    function returnAllInOneArr(arr) {
        /*
         * Use Array.prototype.flat instead of it.
        */
        var rtv = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].length > 0 && (arr[i] instanceof Array)) {
                var aderr = returnAllInOneArr(arr[i]);
                for (var ijk = 0; ijk < aderr.length; ijk++) {
                    rtv[rtv.length] = aderr[ijk];
                };
            } else {
                if (!(arr[i] instanceof Array)) {
                    rtv[rtv.length] = arr[i];
                }


            };
        };
        return rtv;
    };
    function checkObj(param0) {
        if (typeof param0 === 'object' && param0 != null) {
            return true;
        } else {
            return false;
        }
    };
    function checkObject(param0) {
        return checkObj(param0);
    }
    function checkNumber(param0) {
        if (typeof param0 === 'number' && !isNaN(param0)) {
            return true;
        } else {
            return false;
        }
    };
    function checkNumb(param0) {
        return checkNumber(param0);
    }
    function checkNumberNotNaNandNaN(param0) {
        return (typeof param0 === 'number');
    }
    function checkString(param0) {
        if (typeof param0 === 'string' || param0 instanceof String) {
            return true;
        } else {
            return false;
        }
    };
    function checkInstanceof(param0, par_class) {
        return param0 instanceof par_class;
    }
    function checkInstanceof_multi(param0, [...par_classes], mode = 'AND') {
        var rtbool = false;
        if (mode === 'AND') {
            rtbool = true;
            for (var par_class of par_classes) {
                if (!(param0 instanceof par_class)) {
                    rtbool = false;
                    break;
                }
            }
        } else if (mode === 'OR') {
            rtbool = false;
            for (var par_class of par_classes) {
                if (param0 instanceof par_class) {
                    rtbool = true;
                    break;
                }
            }
        }
        return rtbool;
    }
    function checkInteger(param0) {
        if (checkNumber(param0)) {
            if (parseInt(param0) === param0) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    };
    function checkInt(param0) {
        return checkInteger(param0);
    }
    function checkArr(param0) {
        if (param0 instanceof Array) {
            return true;
        } else {
            return false;
        }
    };
    function checkArray(param0) {
        return checkArr(param0);
    }
    function checkObjNotArr(param0) {
        if (checkObj(param0) && !checkArr(param0)) {
            return true;
        } else {
            return false;
        }
    };
    function checkBool(param0) {
        return (typeof param0 === 'boolean');
    };
    function checkBoolean(param0) {
        return checkBool(param0);
    }
    function checkFunc(param0) {
        return (typeof param0 === 'function');
    };
    function checkFunction(param0) {
        return checkFunc(param0);
    }
    function checkUndefined(param0) {
        return (typeof param0 === 'undefined');
    };
    function checkNull(param0) {
        return (typeof param0 === 'object' && param0 === null);
    };
    function checkObjnotaNullandObjtobeNull(param0) {
        if (typeof param0 === 'object') {
            return true;
        } else {
            return false;
        }
    };
    function checkHTMLElement(param0) {
        if (param0 instanceof HTMLElement) {
            return true;
        } else {
            return false;
        }
    };
    function checkDOMEl(param0) {
        return param0 instanceof Element;
    };
    function checkDOMElement(param0) {
        return checkDOMEl(param0);
    }
    function checkObjandItsProperty(param0, propname, condition, checkingTypeBoolKey) {
        if (checkObj(param0)) {
            if (checkFunc(condition)) {
                return condition(param0[propname]);
            } else if (checkObj(condition)) {
                if (!checkString(checkingTypeBoolKey)) {
                    checkingTypeBoolKey = 'checkingType';
                }
                if (condition[checkingTypeBoolKey] === true) {
                    if (typeof param0[propname] === condition.dataTypetoMatch) {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    return (param0[propname] === condition);
                }
            } else {
                return (param0[propname] === condition);
            }
        } else {
            return false;
        }
    };
    function checkObjandItsProperties(param0, [...propnames_and_conditions] = [{ propname: false, condition: {/* checkingType:true,dataTypetoMatch:'object' */ }, checkingTypeBoolKey: false }], mode = 'AND') {
        var propnames_and_conditions_0 = propnames_and_conditions.filter((val, idx, arr) => checkString(val.propname) && condition !== undefined);
        var rtbool = false;
        if (mode === 'AND') {
            rtbool = true;
            if (checkObj(param0)) {
                for (var inc01 = 0, val = propnames_and_conditions_0[inc01], idx = inc01, arr = propnames_and_conditions_0; inc01 < propnames_and_conditions_0.length; inc01++, val = propnames_and_conditions_0[inc01], idx = inc01, arr = propnames_and_conditions_0) {
                    if (checkObj(val)) {
                        if (!checkObjandItsProperty(param0, val.propname, val.condition, val?.checkingTypeBoolKey)) {
                            rtbool = false;
                            break;
                        }
                    }
                }
            }
        } else if (mode === 'OR') {
            rtbool = false;
            if (checkObj(param0)) {
                for (var inc01 = 0, val = propnames_and_conditions_0[inc01], idx = inc01, arr = propnames_and_conditions_0; inc01 < propnames_and_conditions_0.length; inc01++, val = propnames_and_conditions_0[inc01], idx = inc01, arr = propnames_and_conditions_0) {
                    if (checkObj(val)) {
                        if (checkObjandItsProperty(param0, val.propname, val.condition, val?.checkingTypeBoolKey)) {
                            rtbool = true;
                            break;
                        }
                    }
                }
            }
        }
        return rtbool;
    };
    function checkStringandifItisnotanEmptyStr(param0) {
        return (checkString(param0) && param0 != '');
    };
    function checkStr(param0) {
        return checkString(param0);
    };

    var customAnimations = [];
    function getCustomAnimation(idx) {
        return customAnimations[idx] ? customAnimations[idx] : null;
    };
    function getCustomAnimationIdx(id) {
        return customAnimations.indexOf(customAnimations.find(val => val.id === id));
    };
    function getCustomAnimationById(id) {
        return getCustomAnimation(getCustomAnimationIdx(id));
    };
    var animateCustom = (tparam, cbfunc) => {
        if (checkFunc(cbfunc)) {
            cbfunc(tparam);
        }
    };
    var requestCustomAnimationFrame = (cbfunc, timeout) => {
        var timestamp = 0;
        var animationId = checkNumber(customAnimations[customAnimations.length - 1]?.id) ? customAnimations[customAnimations.length - 1]?.id + 1 : 0;
        customAnimations.push({ id: animationId, timestamp: timestamp, timeout: timeout, animation: cbfunc, });
        if (checkFunc(cbfunc)) {
            window.setTimeout(() => { customAnimations[getCustomAnimationIdx(animationId)].timestamp++; animateCustom(getCustomAnimationById(animationId).timestamp, cbfunc); }, timeout);
        }
        return animationId;
    };
    function customAnimationClass() {
        this.customAnimations = [];
    }
    customAnimationClass.prototype = {
        getCustomAnimation: function (idx) {
            return this.customAnimations[idx] ? this.customAnimations[idx] : null;
        },
        getCustomAnimationIdx: function (id) {
            return this.customAnimations.indexOf(this.customAnimations.find(val => val.id === id));
        },
        getCustomAnimationById: function (id) {
            return this.getCustomAnimation(this.getCustomAnimationIdx(id));
        },
        animateCustom: function (tparam, cbfunc) {
            if (checkFunc(cbfunc)) {
                cbfunc(tparam);
            }
        },
        requestCustomAnimationFrame: function (cbfunc, timeout) {
            var timestamp = 0;
            var animationId = checkNumber(this.customAnimations[this.customAnimations.length - 1]?.id) ? this.customAnimations[this.customAnimations.length - 1]?.id + 1 : 0;
            this.customAnimations.push({ id: animationId, timestamp: timestamp, timeout: timeout, animation: cbfunc, });
            if (checkFunc(cbfunc)) {
                window.setTimeout(() => { this.customAnimations[this.getCustomAnimationIdx(animationId)].timestamp++; this.animateCustom(this.getCustomAnimationById(animationId).timestamp, cbfunc); }, timeout);
            }
            return animationId;
        },
    };
    Document.prototype.animation = new customAnimationClass();
    function animateHTMLElement(el, animation, options = { 'duration': 1000, 'repeat-count': 1, 'points': [0, 1], 'method': false, 'delay': 0, 'easing': false, 'fill': false, 'iteration-start': 0.0, 'composite': false, 'timeline': false, 'direction': 'normal', 'id': false, 'timeout': 33.333333, 'setHTMLAttr': false, }) {
        if (!(el instanceof HTMLElement)) {
            return el || false;
        }
        if (!(animation instanceof Array) || Object.keys(animation).filter(val => !isNaN(Number(val))).length <= 0) {
            return el || false;
        }
        if (!checkObj(options)) {
            return el || false;
        }
        var ifAnimationIsArray = false;
        if (checkArr(animation)) {
            ifAnimationIsArray = true;
        }
        var HTMLElAnimateOpts = { duration: options.duration, iterations: options['repeat-count'], direction: options.direction, iterationStart: options['iteration-start'], delay: options.delay, };
        if (options.easing) {
            HTMLElAnimateOpts['easing'] = options.easing;
        }
        if (options.fill) {
            HTMLElAnimateOpts['fill'] = options.fill;
        }
        if (options.composite) {
            HTMLElAnimateOpts['composite'] = options.composite;
        }
        if (options.timeline) {
            HTMLElAnimateOpts['timeline'] = options.timeline;
        }
        if (options.id) {
            HTMLElAnimateOpts['id'] = options.id;
        }
        if (ifAnimationIsArray) {
            if (options.method === 'HTMLElement.animate') {
                el.animate(animation, HTMLElAnimateOpts);
            } else {
                if (options.method === 'requestAnimationFrame') {
                    var animationStyleFunc = (currinc, max) => {
                        if (typeof animation[Math.round(currinc / max) * animation.length - 1] === 'function') {
                            animation[Math.round(currinc / max) * animation.length - 1](el);
                        } else if (checkObj(animation[Math.round(currinc / max) * animation.length - 1])) {
                            for (var cssprop in animation[Math.round(currinc / max) * animation.length - 1]) {
                                el.style.setProperty(cssprop, animation[Math.round(currinc / max) * animation.length - 1][cssprop]);
                            }
                        }
                    }
                    var animateFunc = (inc, max) => {
                        var aid = null;
                        if (inc < max) {
                            aid = requestAnimationFrame((timestamp) => {
                                animationStyleFunc(inc, max);
                                animateFunc(inc + 1, max);
                            });
                        }
                        return aid;
                    }
                    var animationId = animateFunc(0, options['repeat-count']);
                    el.animationNow = animationId;
                    if (options.setHTMLAttr) {
                        el.setProperty('animation-now', animationId);
                    }
                } else if (options.method === 'window.setTimeout') {
                    if (!checkNumber(options.timeout)) {
                        return el || false;
                    }
                    var animationStyleFunc = (currinc, max) => {
                        if (typeof animation[Math.round(currinc / max) * animation.length - 1] === 'function') {
                            animation[Math.round(currinc / max) * animation.length - 1](el);
                        } else if (checkObj(animation[Math.round(currinc / max) * animation.length - 1])) {
                            for (var cssprop in animation[Math.round(currinc / max) * animation.length - 1]) {
                                el.style.setProperty(cssprop, animation[Math.round(currinc / max) * animation.length - 1][cssprop]);
                            }
                        }
                    }
                    var animateFunc = (inc, max) => {
                        var aid = null;
                        if (inc < max) {
                            aid = document.animation.requestCustomAnimationFrame((timestamp) => {
                                animationStyleFunc(inc, max);
                                animateFunc(inc + 1, max);
                            }, options.timeout);
                        }
                        return aid;
                    }
                    var animationId2 = animateFunc(0, options['repeat-count']);
                    el.customAnimationNow = animationId2;
                    if (options.setHTMLAttr) {
                        el.setAttribute('custom-animation-now', animationId2);
                    }
                }
            }
        } else {
            if (options.method === 'HTMLElement.animate') {
                el.animate(animation, HTMLElAnimateOpts);
            } else {
                animation.length = Object.keys(animation).filter(val => !isNaN(Number(val))).length;
                var newanimation = new Array(animation.length);
                for (var key in animation) {
                    if (!isNaN(Number(key))) {
                        newanimation[Number(key)] = animation[key];
                    }
                }
                if (options.method === 'requestAnimationFrame') {
                    var animationStyleFunc = (currinc, max) => {
                        if (typeof newanimation[Math.round(currinc / max) * newanimation.length - 1] === 'function') {
                            newanimation[Math.round(currinc / max) * newanimation.length - 1](el);
                        } else if (checkObj(newanimation[Math.round(currinc / max) * newanimation.length - 1])) {
                            for (var cssprop in newanimation[Math.round(currinc / max) * newanimation.length - 1]) {
                                el.style.setProperty(cssprop, newanimation[Math.round(currinc / max) * newanimation.length - 1][cssprop]);
                            }
                        }
                    }
                    var animateFunc = (inc, max) => {
                        var aid = null;
                        if (inc < max) {
                            aid = requestAnimationFrame((timestamp) => {
                                animationStyleFunc(inc, max);
                                animateFunc(inc + 1, max);
                            });
                        }
                        return aid;
                    }
                    var animationId = animateFunc(0, options['repeat-count']);
                    el.animationNow = animationId;
                    if (options.setHTMLAttr) {
                        el.setProperty('animation-now', animationId);
                    }
                } else if (options.method === 'window.setTimeout') {
                    if (!checkNumber(options.timeout)) {
                        return el || false;
                    }
                    var animationStyleFunc = (currinc, max) => {
                        if (typeof newanimation[Math.round(currinc / max) * newanimation.length - 1] === 'function') {
                            newanimation[Math.round(currinc / max) * newanimation.length - 1](el);
                        } else if (checkObj(newanimation[Math.round(currinc / max) * newanimation.length - 1])) {
                            for (var cssprop in newanimation[Math.round(currinc / max) * newanimation.length - 1]) {
                                el.style.setProperty(cssprop, newanimation[Math.round(currinc / max) * newanimation.length - 1][cssprop]);
                            }
                        }
                    }
                    var animateFunc = (inc, max) => {
                        var aid = null;
                        if (inc < max) {
                            aid = document.animation.requestCustomAnimationFrame((timestamp) => {
                                animationStyleFunc(inc, max);
                                animateFunc(inc + 1, max);
                            }, options.timeout);
                        }
                        return aid;
                    }
                    var animationId2 = animateFunc(0, options['repeat-count']);
                    el.customAnimationNow = animationId2;
                    if (options.setHTMLAttr) {
                        el.setAttribute('custom-animation-now', animationId2);
                    }
                }
            }
        }
        return el || true;
    }
    HTMLElement.prototype.newAnimate = function (animation, options) {
        return animateHTMLElement.apply(null, this, animation, options);
    }
    Math.custom_round_dec = function (param0, significant) {
        if (checkNumber(param0) && typeof significant === 'undefined') {
            return Math.round(param0);
        }
        if (isNaN(param0) || isNaN(significant)) {
            return NaN;
        }
        if (!(typeof param0 === 'number' && typeof significant === 'number')) {
            return NaN;
        }
        return Math.round(param0 * (10 ** significant)) / (10 ** significant);
    };
    Math.custom_round_bigNumb = function (param0, significant) {
        if (checkNumber(param0) && typeof significant === 'undefined') {
            return Math.round(param0 / (10 ** (new String(param0).split('.')[0].length - 1))) * (10 ** (new String(param0).split('.')[0].length - 1));
        }
        if (isNaN(param0) || isNaN(significant)) {
            return NaN;
        }
        if (!(typeof param0 === 'number' && typeof significant === 'number')) {
            return NaN;
        }
        return Math.round(param0 / (10 ** significant)) * (10 ** significant);
    };
    Math.custom_floor_dec = function (param0, significant) {
        if (isNaN(param0) || isNaN(significant)) {
            return NaN;
        }
        if (!(typeof param0 === 'number' && typeof significant === 'number')) {
            return NaN;
        }
        return Math.floor(param0 * (10 ** significant)) / (10 ** significant);
    };
    Math.custom_floor_bigNumb = function (param0, significant) {
        if (checkNumber(param0) && typeof significant === 'undefined') {
            return Math.floor(param0 / (10 ** (new String(param0).split('.')[0].length - 1))) * (10 ** (new String(param0).split('.')[0].length - 1));
        }
        if (isNaN(param0) || isNaN(significant)) {
            return NaN;
        }
        if (!(typeof param0 === 'number' && typeof significant === 'number')) {
            return NaN;
        }
        return Math.floor(param0 / (10 ** significant)) * (10 ** significant);
    };
    Math.divide_andGet_inInteger = function (param0, param1) {
        return (param0 - (param0 % param1)) / param1;
    };
    Array.prototype.returnAllInOneArr = function () {
        var rtv = [];
        for (var i = 0; i < this.length; i++) {
            if (this[i].length > 0) {
                var aderr = returnAllInOneArr(this[i]);
                for (var ijk = 0; ijk < aderr.length; ijk++) {
                    rtv[rtv.length] = aderr[ijk];
                };
            } else {
                if (!checkArr(this[i])) {
                    rtv[rtv.length] = this[i];
                }

            };
        };
        return rtv;
    };
    String.prototype.splitByIdx = function (idx) {
        if (typeof idx === 'number' && !isNaN(idx)) {
            var rtv = [
                this.slice(0, idx),
                this.slice(idx, this.length - 1),
            ];
            return rtv;
        };
        return this;
    };
    String.prototype.insertOn = function (texttoinsert, idx) {
        if (typeof idx === 'number' && !isNaN(idx)) {
            var rtv = this.slice(0, idx) + texttoinsert + this.slice(idx, this.length);
            return rtv;
        };
    };
    String.prototype.toIntegerNumber = function () {
        var thisstring = new String(this);
        for (var i = 0; i < this.length; i++) {
            if (isNaN(parseInt(thisstring[i])) && thisstring[i] != `.`) {
                thisstring = thisstring.replace(thisstring[i], '');
            }
        }
        return Number(thisstring);
    }
    NodeList.prototype.toArray = function () {
        var rtv = [];
        for (var i = 0; i < this.length; i++) {
            rtv[rtv.length] = this.item(i);
        };
        return rtv;
    };
    HTMLCollection.prototype.toArray = function () {
        var rtv = [];
        for (var i = 0; i < this.length; i++) {
            rtv[rtv.length] = this.item(i);
        };
        return rtv;
    };
    function getElementsByAttrValue(thisobj, attr, value) {
        if (!(thisobj instanceof HTMLElement)) {
            return false;
        }
        var rtv = [];
        for (var i = 0; i < thisobj.children.length; i++) {
            if (thisobj.children.item(i).getAttribute(attr) === value) {
                rtv[rtv.length] = thisobj.children.item(i);

            };
            if (thisobj.children.item(i).children.length > 0) {
                rtv[rtv.length] = getElementsByAttrValue(thisobj.children.item(i), attr, value);
            };
        };
        var rtv2 = returnAllInOneArr(rtv).filter(val => val !== null && val !== false);
        return rtv2;
    }
    HTMLElement.prototype.getElementsByAttrValue = function (attr, value) {
        var rtv = [];
        for (var i = 0; i < this.children.length; i++) {
            if (this.children.item(i).getAttribute(attr) === value) {
                rtv[rtv.length] = this.children.item(i);
            };
            if (this.children.item(i).children.length > 0) {
                if (!checkFunc(this.children.item(i).getElementsByAttrValue)) {
                    rtv[rtv.length] = getElementsByAttrValue(this.children.item(i), attr, value);
                } else {
                    rtv[rtv.length] = this.children.item(i).getElementsByAttrValue(attr, value);
                }
            };
        };
        var rtv2 = returnAllInOneArr(rtv).filter(val => val !== null && val !== false);
        return rtv2;
    };
    Document.prototype.getElementsByAttrValue = function (attr, value) {
        var rtv = [];
        for (var i = 0; i < this.children.length; i++) {
            if (this.children.item(i).getAttribute(attr) === value) {
                rtv[rtv.length] = this.children.item(i);

            };
            if (this.children.item(i).children.length > 0) {
                rtv[rtv.length] = this.children.item(i).getElementsByAttrValue(attr, value);
            };
        };
        var rtv2 = returnAllInOneArr(rtv).filter(val => val !== null && val !== false);
        return rtv2;
    };
    HTMLElement.prototype.getElementById = function (IdParam) {
        if (checkString(IdParam)) {
            return this.getElementsByAttrValue("id", IdParam);
        } else {
            return null;
        };
    };
    HTMLElement.prototype.getEl_Id = function (IdParam) {
        var id = (checkString(IdParam)) ? IdParam : false;
        return (id != false) ? this.getElementById(IdParam) : null;
    };
    Document.prototype.getEl_Id = function (IdParam) {
        var id = (checkString(IdParam)) ? IdParam : false;
        return (id != false) ? this.getElementById(IdParam) : null;
    };
    HTMLElement.prototype.getEl_Class = function (classNameParam) {
        var className = (checkString(classNameParam)) ? classNameParam : false;
        return (className != false) ? this.getElementsByClassName(className) : null;
    };
    Document.prototype.getEl_Class = function (classNameParam) {
        var className = (checkString(classNameParam)) ? classNameParam : false;
        return (className != false) ? this.getElementsByClassName(className) : null;
    };
    HTMLElement.prototype.getEl_Class_Arr = function (cname, optionparam) {
        var rtv = [];
        if (checkStringandifItisnotanEmptyStr(cname) && document.getEl_Class(cname) instanceof HTMLElement && document.getEl_Class(cname) != null) {
            var list0 = document.getEl_Class(cname);
            var options = {
                parentElement: document,
                otherClassNames: [],
            }
            if (checkObj(optionparam)) {
                if (checkArr(optionparam.otherClassNames)) {
                    options.otherClassNames = optionparam.otherClassNames;
                }
                if (checkHTMLElement(optionparam.parentElement)) {
                    options.parentElement = optionparam.parentElement;
                    list0 = options.parentElement.getElementsByClassName(cname);
                }
            }
            if (options.otherClassNames.length > 0) {
                for (var i = 0; i < list0.length; i++) {
                    if (checkObjandItsProperty(list0[i], 'classList', function (param2) {
                        return (checkObj(param2));
                    })) {
                        options.otherClassNames.forEach(function (val, idx, arr) {
                            if (list0[i].classList.contains(val)) {
                                rtv[rtv.length] = list0[i];
                            }
                        });
                    }
                }
            } else {
                for (var i = 0; i < list0.length; i++) {
                    if (list0[i].classList.contains(val)) {
                        rtv[rtv.length] = list0[i];
                    }
                }
            }
            return rtv;
        }
    };
    HTMLElement.prototype.getEl_TagName = function (tagNameParam) {
        var tagName = (checkString(tagNameParam)) ? tagNameParam : false;
        return (tagName != false) ? this.getElementsByTagName(tagName) : null;
    };
    Document.prototype.getEl_TagName = function (tagNameParam) {
        var tagName = (checkString(tagNameParam)) ? tagNameParam : false;
        return (tagName != false) ? this.getElementsByTagName(tagName) : null;
    };
    HTMLElement.prototype.getEl_CSS_Selector = function (selectorParam) {
        var selector = (checkString(selectorParam)) ? selectorParam : false;
        return (selector != false) ? this.querySelectorAll(selectorParam) : null;
    };
    Document.prototype.getEl_CSS_Selector = function (selectorParam) {
        var selector = (checkString(selectorParam)) ? selectorParam : false;
        return (selector != false) ? this.querySelectorAll(selectorParam) : null;
    };
    HTMLElement.prototype.stylehidden = false;
    HTMLElement.prototype.show_hide = function (displaymodeparam) {
        var displaymode = (checkString(displaymodeparam)) ? displaymodeparam : "";
        if (this.stylehidden) {
            this.style.display = displaymode;
            this.stylehidden = false;
        } else {
            this.style.display = "none";
            this.stylehidden = true;
        };
        return true;
    };
    HTMLButtonElement.prototype.let_anEl_shown_hidden = function (elparam, option) {
        if (checkHTMLElement(elparam)) {
            if (checkObj(option)) {
                if (checkObjandItsProperty(option, 'display', { checkingType: true, dataTypetoMatch: 'string' })) {
                    var rtBool = elparam.show_hide(option.display);
                    return rtBool;
                } else {
                    var rtBool = elparam.show_hide();
                    return rtBool;
                };
            } else {
                var rtBool = elparam.show_hide();
                return rtBool;
            };
        } else {
            return false;
        };
    };
    HTMLElement.prototype.getEl_CSS = function (selectorParam) {
        var newnodelist = (checkString(selectorParam)) ? this.getEl_CSS_Selector(selectorParam) : null;
        if (newnodelist != null) {
            var convertedFromNodeListToHTMLCollection = {
                length: newnodelist.length,
                item: function (idx) {
                    if (typeof idx === 'number' && !isNaN(idx)) {
                        return newnodelist.item(idx);
                    } else {
                        return null;
                    };
                },
                namedItem: function (idorname) {
                    for (var i = 0; i < newnodelist.length; i++) {
                        if (newnodelist.item(i).id === idorname) {
                            return newnodelist.item(i);
                        };
                        if (newnodelist.item(i).name === idorname) {
                            return newnodelist.item(i);
                        };
                    };
                    return null;
                },
            };
            return convertedFromNodeListToHTMLCollection;
        } else {
            return null;
        };
    };
    Document.prototype.getEl_CSS = function (selectorParam) {
        var newnodelist = (checkString(selectorParam)) ? this.getEl_CSS_Selector(selectorParam) : null;
        if (newnodelist != null) {
            var convertedFromNodeListToHTMLCollection = {
                length: newnodelist.length,
                item: function (idx) {
                    if (typeof idx === 'number' && !isNaN(idx)) {
                        return newnodelist.item(idx);
                    } else {
                        return null;
                    };
                },
                namedItem: function (idorname) {
                    for (var i = 0; i < newnodelist.length; i++) {
                        if (newnodelist.item(i).id === idorname) {
                            return newnodelist.item(i);
                        };
                        if (newnodelist.item(i).name === idorname) {
                            return newnodelist.item(i);
                        };
                    };
                    return null;
                },
                toArray: function () {
                    var rtv = [];
                    for (var i = 0; i < this.length; i++) {
                        rtv[rtv.length] = this.item(i);
                    };
                    return rtv;
                },
            };
            return convertedFromNodeListToHTMLCollection;
        } else {
            return null;
        };
    };
    HTMLButtonElement.prototype.show_hide_onClick = function () {
        var thistargetId = this.getAttribute("target-id");
        var thistargetClass = this.getAttribute("target-class");
        var thisobj = this;
        if (!checkStringandifItisnotanEmptyStr(thistargetId)) {
            thistargetId = '';
        };
        if (!checkStringandifItisnotanEmptyStr(thistargetClass)) {
            thistargetClass = '';
        };
        if (thistargetId != '') {
            this.addEventListener("click", function (ev) {
                thisobj.let_anEl_shown_hidden(document.getElementById(thistargetId), { display: "" });
            });

        } else if (thistargetClass != '') {
            this.addEventListener("click", function (ev) {
                thisobj.parentElement.getElementsByClassName(thistargetClass)[0].show_hide("");
            });

        }
    };
    HTMLElement.prototype.getEl_Attr = function (attrname, attrvalue) {
        return this.getElementsByAttrValue(attrname, attrvalue);
    };

    Document.prototype.getEl_Attr = function (attrname, attrvalue) {
        return this.getElementsByAttrValue(attrname, attrvalue);
    };
    Document.prototype.getCookie = function (cookie_name) {
        var cookie_value = this.cookie.split(';').find(function (row) { return (row.startsWith(cookie_name + '=')) })?.split('=')[1];
        return cookie_value;
    }
    function setCookie(cookieStr, newvals) {
        cookieStr = newvals;
        return cookieStr;
    }
    Document.prototype.setCookie = function (...cookies) {
        for (var i = 0; i < cookies.length; i++) {
            cookies[i] = (checkObjandItsProperty(cookies[i], 'cookie_name', function (checkingstrparam) { return (typeof checkingstrparam === 'string' || checkingstrparam instanceof String) }) && checkObjandItsProperty(cookies[i], 'cookie_value', function (checkingstrparam) { return checkString(checkingstrparam) })) ? cookies[i] : null;
        }
        for (var i1 = 0; i1 < cookies.length; i1++) {
            if (cookies[i1] != null) {
                this.cookie = setCookie(this.cookie, cookies[i1].cookie_name + '=' + cookies[i1].cookie_value);
                console.log(setCookie(this.cookie, cookies[i1].cookie_name + '=' + cookies[i1].cookie_value));
            }
        }
    }
    Document.prototype.resetCookie = function (nameofcookiereset) {
        if (!checkString(nameofcookiereset)) {
            return;
        }
        this.cookie = setCookie(this.cookie, nameofcookiereset + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT');
    }
    /*if (!window['glowing']) {
        class glowing extends HTMLElement {
            constructor() {
                super();
            }
            glow(textcolour, { shadowcolour, shadow, shadowblur }) {
                this.style.textShadow = `${shadow}px ${shadow}px ${shadowblur}px ${shadowcolour},-${shadow}px -${shadow}px ${shadowblur}px ${shadowcolour},-${shadow}px ${shadow}px ${shadowblur}px ${shadowcolour},${shadow}px -${shadow}px ${shadowblur}px ${shadowcolour}`;
                this.style.color = textcolour;
            }
        }
        customElements.define('my-glowing', glowing);
    }*/
    class simpleLabelInp extends HTMLLabelElement {
        constructor() {
            super();
        }
        connectedCallback() {
            var thAttrs = this.getAttributeNames();
            var rightorleft = this.getAttribute("text-side");
            rightorleft = (rightorleft === 'left' || rightorleft === 'right' || rightorleft === 'default') ? rightorleft : 'default';
            var newthInpPr = document.createElement("input");
            for (var i = 0; i < thAttrs.length; i++) {
                var thattrname = thAttrs[i];
                if (thattrname.startsWith('data-inp-')) {
                    newthInpPr.setAttribute(thattrname.replace('data-inp-', ''), this.getAttribute(thattrname));
                } else if (thattrname.startsWith('inp-')) {
                    newthInpPr.setAttribute(thattrname.replace('inp-', ''), this.getAttribute(thattrname));
                }
            }
            var newthInp = null;
            if (rightorleft === 'right') {
                var thInner = this.innerHTML;
                this.innerHTML = '';
                var newthInp = this.appendChild(newthInpPr);
                this.innerHTML += thInner;
            } else if (rightorleft === 'left') {
                var newthInp = this.appendChild(newthInpPr);
            } else {
                var newthInp = this.appendChild(newthInpPr);
            }
            this.inp = newthInp;
        }
    }
    if (customElements.get('input-label-simple') === undefined) {
        customElements.define("input-label-simple", simpleLabelInp, { extends: 'label' });
    }
    return (function () {
        var _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, a, a_0, a_1, a_2, a_3, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z;
        class ColourgreyShorterJSPR {
            constructor(instantUsing) {
                if (instantUsing) {
                    var newdoc = this.makeAllwithoutCallback();
                    for (var key in newdoc.body) {
                        this[key] = newdoc.body[key];
                    }
                }
            };
            makeAll(cbf) {
                var newdoc = document;
                for (var key in newdoc.body) {
                    this[key] = newdoc.body[key];
                }
                cbf(this);
            };
            makeAllwithoutCallback() {
                var newdoc = document;
                for (var key in newdoc.body) {
                    this[key] = newdoc.body[key];
                }
                return this;
            };
        };
        var cssBasicUnits = ['px', '%', 'em', 'rem', 'vw', 'vh', 'vmin', 'vmax', 'ex', 'ch', 'in', 'cm', 'mm', 'pt', 'pc'];
        var HTMLElements_text = [HTMLDivElement, HTMLPreElement, HTMLBodyElement, HTMLButtonElement, HTMLDetailsElement, HTMLHeadingElement, HTMLLabelElement, HTMLLegendElement, HTMLMenuElement, HTMLOutputElement, HTMLOptionElement, HTMLParagraphElement, HTMLPreElement, HTMLQuoteElement, HTMLScriptElement, HTMLSpanElement, HTMLTableElement, HTMLTableCaptionElement, HTMLTableCellElement, HTMLTableColElement, HTMLTableRowElement, HTMLTableSectionElement, HTMLUListElement, HTMLLIElement, HTMLOListElement];
        var ColourgreyShorterJS = {
            ColourgreyShorterCSS: class extends ColourgreyShorterJSPR {
                constructor(instantUsing) {
                    super(instantUsing);
                    if (instantUsing) { this.makeAllwithoutCallback(); }
                    this.tabmenus = [];
                    this.popovers = [];
                    this.btnsdropdowns = [];
                    this.foldable_paragraphs = [];
                    this.foldings = [];
                    this.tables = [];
                    this.password_inputs = [];
                    this.cssBasicUnits = cssBasicUnits;
                };
                tab = class {
                    constructor(eltostyle, options) {
                        this.el = (checkString(eltostyle)) ? document.getElementById(eltostyle) : (eltostyle instanceof HTMLElement) ? eltostyle : null;
                        this.options = options;
                        this.oneofthemisshownalways = (checkObj(this.options)) ? (typeof this.options.onemustbeshown === 'boolean') ? this.options.mustonebeshown : false : false;
                        if (this.el != null) {
                            var tabs_group = this.el.getEl_Class("tabs_group").toArray()[0];
                            var tab_select_group = this.el.getEl_Class("tab_select").toArray()[0];
                            /*if (typeof this.options==='object' && 'undefined' != typeof this.options){
                                if (this.options){}
                            }*/
                            var tabs = [];
                            var tabselects = [];
                            var tabs_and_tabselects = [];
                            this.tabs_group = tabs_group;
                            this.tab_select_group = tab_select_group;
                            this.tabs = [];
                            this.tabselects = [];
                            this.tabs_and_tabselects = [];
                            if (this.tabs_group instanceof HTMLElement && this.tab_select_group instanceof HTMLElement) {
                                this.tabs = this.tabs_group.getEl_Class("tab").toArray();
                                this.tabselects = this.tab_select_group.getEl_Class("select").toArray();
                                if (checkArr(this.tabs) && checkArr(this.tabselects)) {
                                    if (this.tabs.length > 0 && this.tabselects.length > 0) {
                                        var thisobj = this;
                                        var shorterarr = (this.tabs.length > this.tabselects.length) ? this.tabselects : (this.tabs.length < this.tabselects.length) ? this.tabs : this.tabs;
                                        this.shorterarr = shorterarr;
                                        this.shorterarr.forEach(function (val, idx, arr) {
                                            thisobj.tabs_and_tabselects.push({ tab: thisobj.tabs[idx], tabselect: thisobj.tabselects[idx], shown: false });
                                        });
                                        this.tabs_and_tabselects.forEach(function (val, idx, arr) {
                                            val.tabselect.addEventListener("click", function (ev) { var index = (!val.tabselect.getAttribute("data-tabselect-number") || val.tabselect.getAttribute("data-tabselect-number") === '' || val.tabselect.getAttribute("data-tabselect-number") === null) ? idx : val.tabselect.getAttribute("data-tabselect-number"); thisobj.showtab(index); });
                                        });
                                    }
                                }
                            }
                        }
                    };
                    pr = {
                        showtab(elp, elpselect, thisobj) {
                            if (elp instanceof HTMLElement && elpselect instanceof HTMLElement) {
                                elp.classList.add("showntab");
                                elpselect.classList.add("showntabselect");

                            }
                        },
                        hidetab(elp, elpselect, thisobj) {
                            if (elp instanceof HTMLElement && elpselect instanceof HTMLElement) {
                                elp.classList.remove("showntab");
                                elpselect.classList.remove("showntabselect");

                            }
                        },
                    };
                    showtab(index) {
                        console.log("show");
                        var thisobj = this;
                        if (this.tabs_and_tabselects) {
                            if (checkArr(this.tabs_and_tabselects)) {
                                this.tabs_and_tabselects.forEach(function (val, idx, arr) {
                                    if (checkObj(val)) {

                                        if (val.tab instanceof HTMLElement && val.tabselect instanceof HTMLElement && typeof val.shown === 'boolean') {

                                            console.log(index);
                                            if (checkNumber(index)) {
                                                if (val.tab.getAttribute("data-tab-number") === new String(index) || idx === index) {
                                                    if (val.tab.classList.contains("showntab") && val.tabselect.classList.contains("showntabselect")) {
                                                        if (!thisobj.oneofthemisshownalways) {
                                                            thisobj.pr.hidetab(val.tab, val.tabselect, thisobj);
                                                            arr[idx].shown = false;
                                                            val.shown = false;
                                                            thisobj.shorterarr[idx].shown = false;
                                                        }
                                                    } else {
                                                        thisobj.pr.showtab(val.tab, val.tabselect, thisobj);
                                                        arr[idx].shown = true;
                                                        val.shown = true;
                                                        thisobj.shorterarr[idx].shown = true;
                                                    }
                                                } else {
                                                    thisobj.pr.hidetab(val.tab, val.tabselect, thisobj);
                                                    arr[idx].shown = false;
                                                    val.shown = false;
                                                    thisobj.shorterarr[idx].shown = false;
                                                }
                                            } else if (checkString(index)) {
                                                console.log('debugging');
                                                if (val.tab.getAttribute("data-tab-number") === index || idx === Number(index)) {
                                                    if (val.tab.classList.contains("showntab") && val.tabselect.classList.contains("showntabselect")) {
                                                        if (!thisobj.oneofthemisshownalways) {
                                                            thisobj.pr.hidetab(val.tab, val.tabselect, thisobj);
                                                            arr[idx].shown = false;
                                                            val.shown = false;
                                                            thisobj.shorterarr[idx].shown = false;
                                                        }
                                                    } else {
                                                        thisobj.pr.showtab(val.tab, val.tabselect, thisobj);
                                                        arr[idx].shown = true;
                                                        val.shown = true;
                                                        thisobj.shorterarr[idx].shown = true;
                                                    }
                                                } else {
                                                    thisobj.pr.hidetab(val.tab, val.tabselect, thisobj);
                                                    arr[idx].shown = false;
                                                    val.shown = false;
                                                    thisobj.shorterarr[idx].shown = false;
                                                }
                                            } else {
                                                console.log(typeof index);
                                            }
                                        }
                                    }
                                });
                            }
                        }
                    };
                };
                popover = class {
                    constructor(eltostyle, options) {
                        this.el = (checkString(eltostyle)) ? document.getElementById(eltostyle) : (eltostyle instanceof HTMLElement) ? eltostyle : null;
                        this.options = options;
                        this.textpopover = (checkObj(options)) ? (typeof options.textpopover === 'boolean') ? options.textpopover : false : false;
                        this.bodyEl = (checkObj(options)) ? (options.bodyEl instanceof HTMLElement) ? options.bodyEl : (checkString(options.bodyEl)) ? document.getElementById(options.bodyEl) : null : null;
                        this.instantUsing = (checkObj(options)) ? (typeof options.instantUsing === 'boolean') ? options.instantUsing : false : false;
                        if (this.bodyEl instanceof HTMLElement) {
                            if (!this.bodyEl.classList.contains('body')) {
                                this.bodyEl.classList.add('body');
                            }
                        } else {
                            if (this.instantUsing) {
                                var new_shadow_body_div_pr = document.createElement('div');
                                var new_shadow_body_div = document.body.appendChild(new_shadow_body_div_pr);
                                this.bodyEl = new_shadow_body_div;
                                this.bodyEl.classList.add('body');
                            }
                        }
                        if (this.el != null) {
                            var thisobj = this;
                            this.targetels = this.el.getEl_Attr("data-cgrshorter-action", "popover");
                            this.newpopovers = [];
                            this.targetels.forEach(function (val, idx, arr) {
                                val.addEventListener("click", function (ev) {
                                    if (val.getEl_Class("popover-box") != null && val.getEl_Class("popover-box").length > 0) {
                                        if (thisobj.newpopovers[idx] != null || document.querySelector('.body').classList.contains("shadowbody")) {
                                            document.querySelector('.body').classList.remove("shadowbody");
                                            thisobj.newpopovers[idx].remove();
                                        }
                                    } else { thisobj.newpopovers[idx] = thisobj.show(val, val.getAttribute("data-popover-text")); };
                                });
                                thisobj.newpopovers[idx] = thisobj.show(val, val.getAttribute("data-popover-text"));
                                thisobj.newpopovers[idx].remove();
                                document.querySelector('.body').classList.remove("shadowbody");
                            });
                        }
                    };
                    show(el, content) {
                        var newc = new String(content);
                        var newc2 = '';
                        var i43 = 0;
                        for (var i = 0; i < newc.length; i++) {
                            if (newc[i] === `|` && newc[i - 1] != `\\`) {
                                if (newc[i - 2] + newc[i - 1] === 'br') {
                                    i43 += 2;
                                }
                                if (i43 % 4 === 0) {
                                    newc2 += `<`;
                                } else if (i43 % 4 === 1) {
                                    newc2 += `>`;
                                } else if (i43 % 4 === 2) {
                                    newc2 += '</';
                                } else if (i43 % 4 === 3) {
                                    newc2 += `>`
                                } else if (i43 % 4 === 4) {
                                    newc2 += '<';
                                }
                                i43++
                            } else {
                                newc2 += newc[i];
                            }
                        }
                        console.log(newc2);
                        newc2 = newc2.replaceAll(`&quot;`, `"`);
                        newc2 = newc2.replaceAll(`&apos;`, `'`);
                        newc2 = newc2.replaceAll(`&lt;`, `<`);
                        newc2 = newc2.replaceAll(`&gt;`, `>`);
                        if (el instanceof HTMLElement) {
                            var newEl = document.createElement("div");
                            newEl.setAttribute("class", "popover-box");
                            newEl.innerHTML = `<p onclick="this.parentElement.remove();document.querySelector('.body').classList.remove('shadowbody')" style="position:absolute;right:0px;width:1.2rem" role="button">&times;</p>` + newc2;
                            if (this.textpopover) {
                                newEl.innerHTML = `<p class="popver-para"><span onclick="this.parentElement.remove();document.querySelector('.body').classList.remove('shadowbody')" style="position:absolute;right:0px;">&times;</span><br><span class="popover-text" role="button">${newc2}</span></p>`;
                            }
                            var newEla = document.body.appendChild(newEl);
                            document.querySelector('.body').classList.add("shadowbody");
                            return newEla;
                        } else {
                            return null;
                        }
                    };
                };
                dropDownList = class {
                    constructor(el, options) {
                        this.el = (checkString(el)) ? document.getElementById(el) : (el instanceof HTMLElement) ? el : document.body;
                        this.options = options;
                        if (this.el instanceof HTMLElement) {

                            var dropdown_buttons = this.el.getEl_Class("dropdown_btn").toArray();
                            var dropdown_lists = this.el.getEl_Class("dropdown_list").toArray();
                            this.dropdown_lists = dropdown_lists;
                            this.dropdown_buttons = dropdown_buttons;
                            var shorterarr = (this.dropdown_buttons.length > this.dropdown_lists.length) ? this.dropdown_lists : (this.dropdown_buttons.length < this.dropdown_lists.length) ? this.dropdown_buttons : this.dropdown_buttons;
                            this.shorterarr = shorterarr;
                            this.btn_list = [];
                            var thisobj = this;

                            this.shorterarr.forEach(function (val, idx, arr) {
                                thisobj.btn_list.push({ btn: thisobj.dropdown_buttons[idx], list: thisobj.dropdown_lists[idx] });
                            });

                            this.btn_list.forEach(function (val, idx, arr) {
                                if (checkObj(thisobj.options)) {
                                    if (typeof thisobj.options.animation === 'boolean') {
                                        if (thisobj.options.animation === true) {
                                            val.list.style.transition = `height 0.5s ease-in-out`;
                                        }
                                    }
                                }
                                val.btn.addEventListener("click", function (ev) {
                                    if (!val.list.classList.contains("shown_dropdown")) {
                                        if (checkObj(thisobj.options)) {
                                            if (typeof thisobj.options.animation === 'boolean') {
                                                if (thisobj.options.animation === true) {
                                                    val.list.animate([{ height: '0px', display: 'none', }, { height: 'auto', display: 'block', }]);

                                                } else {
                                                    thisobj.show(val.list);
                                                }
                                            } else { thisobj.show(val.list); }
                                        } else { thisobj.show(val.list); }
                                    } else {
                                        thisobj.hide(val.list);
                                    }
                                });
                            });
                        }
                    };
                    show(el) { if (el instanceof HTMLElement) { el.classList.add("shown_dropdown"); } };
                    hide(el) { if (el instanceof HTMLElement) { el.classList.remove("shown_dropdown"); } };
                };
                folding_paragraph = class {
                    constructor(elarg, options) {
                        this.el = (checkString(elarg)) ? document.getElementById(elarg) : (elarg instanceof HTMLElement) ? elarg : document.getElementById(elarg);
                        this.options = (checkObj(options) && !checkArr(options)) ? options : {};
                        var thisobj = this;
                        if (this.el != null) {

                            var paragraphspr = this.el.querySelectorAll('div.para');
                            this.paragraphspr = paragraphspr;
                            var paragraphs = [];
                            paragraphspr.forEach(function (val, idx, arr) {
                                if (val.querySelector('div.paracontent') != null && val.querySelector('h1 .parafolder,h2 .parafolder,h3 .parafolder,h4 .parafolder,h5 .parafolder,h6 .parafolder') != null) {
                                    var folded = val.getAttribute("data-folded");
                                    var folded2 = (checkString(folded)) ? (folded === 'true') ? true : false : false;
                                    if (thisobj.options.folded === true) {
                                        folded2 = true;
                                    }
                                    var id0 = val.id;
                                    var id = (checkString(id0)) ? (id0 != '') ? id0 : idx : idx;
                                    paragraphs.push({ contentel: val.querySelector('div.paracontent'), folderel: val.querySelector('h1 .parafolder,h2 .parafolder,h3 .parafolder,h4 .parafolder,h5 .parafolder,h6 .parafolder'), paragraph: val, folded: folded2, id: id });
                                }
                            });
                            this.paragraphs = paragraphs;
                            thisobj = this;
                            this.paragraphs.forEach(function (val, idx, arr) {
                                val.folderel.addEventListener("click", function (ev) {
                                    var id = (checkString(val.paragraph.id)) ? (val.paragraph.id != '') ? val.paragraph.id : idx : idx;
                                    thisobj.showandhide(id);
                                });
                            });
                        }
                    };
                    showandhide(id) {
                        var element;
                        var thisobj = this;
                        if (checkString(id)) {
                            this.paragraphs.forEach(function (val, idx, arr) {
                                if (val.id === id) {
                                    element = val;
                                    return;
                                }
                            });
                            if (!checkObj(element)) {
                                return false;
                            }
                        } else if (checkNumber(id)) {
                            element = this.paragraphs[id];
                        } else {
                            return false;
                        }
                        if (element.folded === true) {
                            element.contentel.classList.remove("hiddenparacontent");
                            element.folderel.innerHTML = `&#65088;`;
                            this.paragraphs.forEach(function (val, idx, arr) {
                                if (val.id === id) {
                                    val.folded = false;
                                    arr[idx].folded = false;
                                    thisobj.paragraphs[idx].folded = false;
                                    return;
                                }
                            });
                            return 0;
                        } else {
                            element.contentel.classList.add("hiddenparacontent");
                            element.folderel.innerHTML = `&gt;`;
                            this.paragraphs.forEach(function (val, idx, arr) {
                                if (val.id === id) {
                                    val.folded = true;
                                    arr[idx].folded = true;
                                    thisobj.paragraphs[idx].folded = true;
                                    return;
                                }
                            });
                            return 1;
                        }
                    }
                };
                folding_content = class {
                    constructor(elarg, options) {
                        this.el = checkString(elarg) ? document.getElementById(elarg) : (elarg instanceof HTMLElement) ? elarg : document.getElementById(elarg);
                        this.options = (checkObj(options)) ? options : { folded: true };
                        if (typeof this.options['folded'] != 'boolean') {
                            this.options.folded = true;
                        }

                        this.foldingEls = [];
                        var thisobj = this;
                        if (this.el != null && this.el != undefined && this.el instanceof HTMLElement) {
                            var foldingElsinfoldersWrap = this.el.querySelectorAll(`.wiki.folding`);
                            if (foldingElsinfoldersWrap != null) {
                                if (foldingElsinfoldersWrap.length > 0) {
                                    foldingElsinfoldersWrap.forEach(function (el, key, par) {
                                        var alreadyfolded = thisobj.options.folded;
                                        if (el.hasAttribute("not-folded")) {
                                            alreadyfolded = false;
                                            if (el.getAttribute("not-folded") === 'false' || el.getAttribute("not-folded") === '0' || el.getAttribute("not-folded") === 'no') {
                                                alreadyfolded = true;
                                            } else {
                                                el.classList.add("shown_folder_content");
                                            }
                                        }
                                        var foldercontrol = el.querySelector(`.folding_control`);
                                        var foldercontent = el.querySelector(`.folding_content`);
                                        if ((foldercontrol != null && foldercontrol != undefined && foldercontrol instanceof HTMLElement) && (foldercontent != null && foldercontent != undefined && foldercontent instanceof HTMLElement)) {
                                            thisobj.foldingEls.push({ control: foldercontrol, content: foldercontent, folded: alreadyfolded });
                                        }
                                    });
                                }
                            }
                        }
                        this.foldingEls.forEach(function (val, idx, arr) {
                            val.control.addEventListener("click", function (ev) {
                                thisobj.show_hide(idx);
                            });
                        });
                    };
                    show_hide(folderidx) {
                        if (typeof folderidx === 'number' && parseInt(folderidx) === folderidx && checkObj(this.foldingEls[folderidx])) {
                            if (this.foldingEls[folderidx].control instanceof HTMLElement && this.foldingEls[folderidx].content instanceof HTMLElement && typeof this.foldingEls[folderidx].folded === 'boolean') {
                                if (this.foldingEls[folderidx].folded === true) {
                                    this.foldingEls[folderidx].content.classList.add("shown_folder_content");
                                    this.foldingEls[folderidx].folded = false;
                                    return true;
                                } else {
                                    this.foldingEls[folderidx].content.classList.remove("shown_folder_content");
                                    this.foldingEls[folderidx].folded = true;
                                    return true;
                                }
                            }
                            return false;
                        }
                        return false;
                    };
                };
                password_input = class {
                    constructor(elarg, options) {
                        this.el = checkString(elarg) ? document.getElementById(elarg) : (elarg instanceof HTMLElement) ? elarg : null;
                        /* this.options = checkObjandItsProperties(options, [
                            {
                                propname: 'text_or_html',
                                condition: (param) => ['text', 'html'].includes(param),
                            }
                        ]) ? options : checkObjandItsProperty(options, 'text_or_html', (param) => ['text', 'html'].includes(param)) ? options : {}; */
                        this.set_options(options);
                        this.el_type = (this.el instanceof HTMLInputElement) ? (['text', 'password', 'number', 'email', 'search', 'tel', 'url', 'datetime'].includes(this.el.type)) ? { el: 'input', type: 'text', abletoinput: !this.el.disabled } : { el: 'input', type: 'not-text', abletoinput: !this.el.disabled } : (checkInstanceof_multi(this.el, HTMLElements_text, mode = 'OR')) ? this.el.contentEditable === 'true' ? { el: 'el', abletoinput: true } : { el: 'el', abletoinput: false } : { el: false };
                        this.mode = ['password', 'text', 'pw'].includes(this.el.getAttribute("data-cgr-pw-mode")) ? this.el.getAttribute("data-cgr-pw-mode") : ['password', 'pw', 'text'].includes(options?.mode) ? options.mode : 'text';
                        this.shadow = null;
                        this.shadow_inner = null;
                        this.update_input_el_value();
                        this.add_shadow_DOM();
                        if (this.options?.add_input_listener) {
                            this.addInputListener();
                        }
                    };
                    set_options(options) {
                        this.options = checkObjandItsProperties(options, [
                            {
                                propname: 'text_or_html',
                                condition: (param) => ['text', 'html'].includes(param),
                            },
                            { propname: 'mode', condition: (param) => ['password', 'text', 'pw'].includes(param) },
                            { propname: 'text_or_html_shadow_inner', condition: (param) => ['text', 'html'].includes(param) },
                            { propname: 'add_input_listener', condition: { checkingType: true, dataTypetoMatch: 'boolean' }, checkingTypeBoolKey: 'checkingType' }
                        ], 'OR') ? options : {};
                        return { valset: this.options, valsetby: options };
                    };
                    update_input_el_value(options) {
                        if (checkObj(options)) { this.set_options(options); }
                        var inputElValue = '';/* 
                        if (this.el instanceof HTMLInputElement) {
                            if (['text', 'password', 'number', 'email', 'search', 'tel', 'url', 'datetime'].includes(this.el.type)){
                                inputElValue = this.el.value;
                            } else {
                                inputElValue = this.el.value;
                            }
                        } else if (this.el instanceof HTMLElement) {
                            if (this.options.text_or_html === 'text') {
                                inputElValue = this.el.innerText;
                            } else if (this.options.text_or_html === 'html') {
                                inputElValue = this.el.innerHTML;
                            } else {
                                inputElValue = this.el.innerText;
                            }
                        } */
                        if (this.el_type.el === 'input') {
                            inputElValue = this.el.value;
                        } else if (this.el_type.el === 'el') {
                            if (this.options.text_or_html === 'text') {
                                inputElValue = this.el.innerText;
                            } else if (this.options.text_or_html === 'html') {
                                inputElValue = this.el.innerHTML;
                            } else {
                                inputElValue = this.el.innerText;
                            }
                        } else {
                            inputElValue = false;
                        }
                        this.value = inputElValue;
                        return { valset: this.value, valsetby: inputElValue, text_or_html: this.options.text_or_html };
                    };
                    toggle_mode() {
                        this.mode = this.mode === 'text' ? 'password' : 'text';
                        return this.mode;
                    };
                    update_input(ev) {
                        if (ev instanceof Event) { }
                        if (this.shadow_inner !== null) {
                            if (this.options?.text_or_html_shadow_inner === 'html') {
                                this.shadow_inner.innerHTML = this.mode === 'text' ? this.value : '●'.repeat(this.value.length);
                            } else {
                                this.shadow_inner.innerText = this.mode === 'text' ? this.value : '●'.repeat(this.value.length);
                            }
                        }
                    };
                    add_shadow_DOM(eltype = 'span', shadowmode) {
                        shadowmode = ["open", "closed"].includes(shadowmode) ? shadowmode : shadowmode ? "closed" : null;
                        if ((this.el_type.el === 'input' && this.el_type.type === 'text') || (this.el_type.el === 'el')) {
                            this.shadow = shadowmode !== null ? this.el.attachShadow({ mode: shadowmode }) : this.el.attachShadow();
                            var shadow_inner = this.shadow.appendChild(document.createElement(eltype));
                            this.shadow_inner = shadow_inner;
                            return true;
                        }
                        return false;
                    };
                    update_all({ ev, options }) {
                        this.update_input_el_value(options);
                        this.update_input(ev);
                    };
                    addInputListener() {
                        if (this.el_type.abletoinput) {
                            this.el.addEventListener("input", (ev) => {
                                this.update_input(ev);
                            });
                        }
                    }
                };
                styleAll() {
                    var elthatwrapstab = document.querySelectorAll(`.tabs_wrapper`);
                    var thisobj = this;
                    elthatwrapstab.forEach(function (val, idx, arr) {
                        thisobj.tabmenus.push(new thisobj.tab(val, { mustonebeshown: true }));
                    });
                    var elthatisparentofpopovertexts = document.querySelectorAll(`.enablepopover`);
                    elthatisparentofpopovertexts.forEach(function (val, idx, arr) {
                        thisobj.popovers.push(new thisobj.popover(val, { textpopover: false }));
                    });
                    var elthatwrapsbtns = document.querySelectorAll(`.btn-group-nobs`);
                    elthatwrapsbtns.forEach(function (val, idx, arr) {
                        thisobj.btnsdropdowns.push(new thisobj.dropDownList(val, { animation: true, }));
                    });
                    var elthatwrapsparagraphs = document.getEl_Attr("data-paraparent", "true");
                    elthatwrapsparagraphs.forEach(function (val, idx, arr) {
                        thisobj.foldable_paragraphs.push(new thisobj.folding_paragraph(val, { folded: false }));
                    });
                    var elthatwrapsfoldingels = document.querySelectorAll(`.foldings_wrapper`);
                    elthatwrapsfoldingels.forEach(function (val, idx, arr) {
                        thisobj.foldings.push(new thisobj.folding_content(val, { folded: true }));
                    });
                    var password_inputs = document.querySelectorAll(`.cgr_password_input`);
                    Array.from(password_inputs).forEach((val, idx, arr) => {
                        thisobj.password_inputs.push(new thisobj.password_input(val, { mode: 'password' }));
                    });
                    window.addEventListener("load", function (ev) {
                        var parsedhashtext = new URL(decodeURI(window.location.href)).hash.replace('#', '');
                        if (parsedhashtext != undefined && parsedhashtext != null && parsedhashtext != "") {
                            thisobj.tabmenus.forEach(function (val, idx, arr) {
                                val.tabs_and_tabselects.forEach(function (val1, idx1, arr1) {
                                    if (parsedhashtext === val1.tab.id) {
                                        val.showtab(idx1);
                                    }
                                });
                            });
                        }
                    });
                };
            },
            ColourgreyShorterJS: class extends ColourgreyShorterJSPR {
                constructor(instantUsing) {
                    super(instantUsing);
                    this.makeAll();
                    this.arr = Arry;
                    this.str = String;
                    this.doc = Document;
                }
            },
            checkArr: checkArr,
            checkBool: checkBool,
            checkFunc: checkFunc,
            checkHTMLElement: checkHTMLElement,
            checkInteger: checkInteger,
            checkNull: checkNull,
            checkNumber: checkNumber,
            checkObj: checkObj,
            checkObjNotArr: checkObjNotArr,
            checkObjandItsProperty: checkObjandItsProperty,
            checkObjnotaNullandObjtobeNull: checkObjnotaNullandObjtobeNull,
            checkString: checkString,
            checkStringandifItisnotanEmptyStr: checkStringandifItisnotanEmptyStr,
            checkUndefined: checkUndefined,
            checkNumberNotNaNandNaN: checkNumberNotNaNandNaN,
            setCookie: setCookie,
            checkStr: checkStr,
            animateHTMLElement: animateHTMLElement,
            customAnimationClass: customAnimationClass,
            checkArray: checkArray,
            checkBoolean: checkBoolean,
            checkDOMEl: checkDOMEl,
            checkDOMElement: checkDOMElement,
            checkFunction: checkFunction,
            checkInt: checkInt,
            checkNumb: checkNumb,
            checkObjandItsProperties: checkObjandItsProperties,
            checkObject: checkObject,
            checkInstanceof: checkInstanceof,
            checkInstanceof_multi: checkInstanceof_multi,
            returnAllInOneArr: returnAllInOneArr,
        };
        return ColourgreyShorterJS;
    })();
});