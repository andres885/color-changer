var r,
    g,
    b,
    boxHeight,
    colorMargin,
    color,
    inputs,
    rgbValues,
    rgbDecimalValues,
    hsvValues,
    hsvDecimalValues,
    hexValue;
    
function reset() {
    var i;
    for (i = 0; i < 3; i += 1) {
        inputs[i].value = 128;
    }
    for (i = 3; i < 5; i += 1) {
        inputs[i].value = 0;
    }
    inputs[5].value = 128;
}

function resetAll() {
    reset();
    var i;
    for (i = 0; i < 3; i += 1) {
        rgbValues[i].innerHTML = "0.501961";
        rgbDecimalValues[i].innerHTML = "128";
    }
    for (i = 0; i < 2; i += 1) {
        hsvValues[i].innerHTML = "0.000000";
        hsvDecimalValues[i].innerHTML = "0";
    }
    hsvValues[2].innerHTML = "0.501961";
    hsvDecimalValues[2].innerHTML = "128";
    hexValue.innerHTML = "#808080";
    color.style.backgroundColor = "#808080";
}    

function rgbToHsv(r, g, b) {
    r /= 255, g /= 255, b /= 255;

    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max == 0 ? 0 : d / max;

    if (max == min) {
        h = 0; // achromatic
    } else {
        switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }
    return [ h, s, v ];
}

function pad(s) {
    if (s.length < 2) s = "0" + s;
    return s;
}

function changeColorRGB() {
    var hsv = rgbToHsv(inputs[0].value, inputs[1].value, inputs[2].value);
    
    inputs[3].value = (hsv[0] * 255).toFixed(0);
    inputs[4].value = (hsv[1] * 255).toFixed(0);
    inputs[5].value = (hsv[2] * 255).toFixed(0);
    
    r = parseInt(inputs[0].value, 10).toString(16);
    r = pad(r);
    rgbValues[0].innerHTML = (inputs[0].value / 255).toFixed(6);
    hsvValues[0].innerHTML = (inputs[3].value / 255).toFixed(6);
    rgbDecimalValues[0].innerHTML = inputs[0].value;
    hsvDecimalValues[0].innerHTML = inputs[3].value;
    
    g = parseInt(inputs[1].value, 10).toString(16);
    g = pad(g);
    rgbValues[1].innerHTML = (inputs[1].value / 255).toFixed(6);
    hsvValues[1].innerHTML = (inputs[4].value / 255).toFixed(6);
    rgbDecimalValues[1].innerHTML = inputs[1].value;
    hsvDecimalValues[1].innerHTML = inputs[4].value;
    
    b = parseInt(inputs[2].value, 10).toString(16);
    b = pad(b);
    rgbValues[2].innerHTML = (inputs[2].value / 255).toFixed(6);
    hsvValues[2].innerHTML = (inputs[5].value / 255).toFixed(6);
    rgbDecimalValues[2].innerHTML = inputs[2].value;
    hsvDecimalValues[2].innerHTML = inputs[5].value;
    
    hexValue.innerHTML = "#" + r + g + b;
    color.style.backgroundColor = "#" + r + g + b;
}

function hsvToRgb(h, s, v) {
    var r, g, b;

    var i = Math.floor(h * 6);
    var f = h * 6 - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);

    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return [ r * 255, g * 255, b * 255 ];
}

function changeColorHSV() {
    var rgb = hsvToRgb(inputs[3].value / 255, inputs[4].value / 255, inputs[5].value / 255);
    
    inputs[0].value = rgb[0].toFixed(0);
    r = parseInt(inputs[0].value, 10).toString(16);
    r = pad(r);
    rgbValues[0].innerHTML = (inputs[0].value / 255).toFixed(6);
    hsvValues[0].innerHTML = (inputs[3].value / 255).toFixed(6);
    rgbDecimalValues[0].innerHTML = inputs[0].value;
    hsvDecimalValues[0].innerHTML = inputs[3].value;
    
    inputs[1].value = rgb[1].toFixed(0);
    g = parseInt(inputs[1].value, 10).toString(16);
    g = pad(g);
    rgbValues[1].innerHTML = (inputs[1].value / 255).toFixed(6);
    hsvValues[1].innerHTML = (inputs[4].value / 255).toFixed(6);
    rgbDecimalValues[1].innerHTML = inputs[1].value;
    hsvDecimalValues[1].innerHTML = inputs[4].value;
    
    inputs[2].value = rgb[2].toFixed(0);
    b = parseInt(inputs[2].value, 10).toString(16);
    b = pad(b);
    rgbValues[2].innerHTML = (inputs[2].value / 255).toFixed(6);
    hsvValues[2].innerHTML = (inputs[5].value / 255).toFixed(6);
    rgbDecimalValues[2].innerHTML = inputs[2].value;
    hsvDecimalValues[2].innerHTML = inputs[5].value;
    
    hexValue.innerHTML = "#" + r + g + b;
    color.style.backgroundColor = "#" + r + g + b;
}
