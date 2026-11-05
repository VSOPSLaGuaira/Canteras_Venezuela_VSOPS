var size = 0;
var placement = 'point';

var style_LmitesMunicipales_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "10.4px \'Times New Roman\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "#080808";
    var bufferWidth = 1.2000000000000004;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';
    if (feature.get("MUNICIPIO") !== null && resolution > 7 && resolution < 210) {
        labelText = String(feature.get("MUNICIPIO"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: [1.9,0.38,0.76,0.38], lineCap: 'butt', lineJoin: 'miter', width: 0.38}),fill: new ol.style.Fill({color: 'rgba(238,238,238,0.25098039215686274)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];

    return style;
};
