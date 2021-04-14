{
    function myScript(thisObj){
       function myScript_buildUI(thisObj){
          var palette = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Dockable Script", undefined, {resizeable:true, closeButton: true});
 
          var iconCopy_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%11%00%00%00%11%08%06%00%00%00%3BmG%C3%BA%00%00%00%C3%9DIDAT8%C2%8D%C3%95%C3%93%C2%B1.%C3%84A%10%C3%87%C3%B1%C3%8F%C2%8Ah%C2%84'PH%24%0A*%C3%9D%3D%C2%83V%C3%B4%C3%B4%0A%C2%A5%C3%82s(t%12%C2%A1%C2%BEB%C2%AF%C2%93%C3%B0%08%C2%9EA%23%C2%88D%C3%8E%C3%88%C3%A6%C3%AEb%C3%AC%C3%BF%7F%0A%C3%95%C3%B9%25%C2%9Bl%C3%A6%C2%B7%C3%B3%C2%9D%C2%99%C3%AC%C2%AE%C2%B9Q%C3%89%C2%8DD%C3%84t%C2%BB%C2%8EK%2C%26%3B%C2%9F%7D(%C2%A5%1C%C3%B5%19%19%C2%B2%C2%8AM%2C%25%C3%BB%05%C3%8F%18%C3%A0%C2%B8%C2%942%C2%98%1A%C2%B9R%C3%95.Nz%C3%A2U%23%5C%C3%A3%0C%C2%87%C3%99h%0F%C2%9F%C3%A2%11%C3%83%C3%9AX%C3%A3%C3%AD%C3%A0%00%C2%B7%C3%B8%C3%AC%C2%94H%C3%A3%C3%9CG%C3%84V%1Dk%C3%86%C2%BA%C2%8B%C2%88%C3%BD%C2%88%C2%B8%C3%89y%0B-%07%2B%1D%C3%BAX%C3%8B%13%7F%C3%94%1A-%C3%A4O%C3%BA%C3%9F%C2%90ho%C2%B5%C2%85%C3%94%C3%87%C3%B7%C3%91I%1B%2B%C3%87%2F~%C2%83Tm%C3%8C%C2%80%C2%ACM%3Ax%C3%83U%5B%C3%B9%C2%BB%C3%8F%C2%88sl%C3%A3%C2%A9%07R%C2%BF%C3%82%2B%C3%B6%C3%B0%5E%C3%8A%C2%8F%C3%94y%10%C2%BE%00~%C3%B9G%02ZT%C3%84%C2%9C%00%00%00%00IEND%C2%AEB%60%C2%82"; 


// PALETTE
// =======
    palette.text = "Font"; 
    palette.orientation = "column"; 
    palette.alignChildren = ["left","top"]; 
    palette.spacing = 10; 
    palette.margins = 16; 

// GRP_FROM
// ========
var Grp_From = palette.add("group", undefined, {name: "Grp_From"}); 
    Grp_From.orientation = "row"; 
    Grp_From.alignChildren = ["left","center"]; 
    Grp_From.spacing = 10; 
    Grp_From.margins = 0; 

var Txt_From = Grp_From.add("checkbox", undefined, undefined, {name: "Txt_From"}); 
    Txt_From.text = "From"; 
    Txt_From.preferredSize.width = 45; 

var EditTxt_From = Grp_From.add('edittext {properties: {name: "EditTxt_From"}}'); 
    EditTxt_From.preferredSize.width = 120; 
    var FontFrom;   
    EditTxt_From.onChanging = function () {FontFrom = EditTxt_From.text};

var CopyFontStyle1 = Grp_From.add("iconbutton", undefined, File.decode(iconCopy_imgString), {name: "iconbutton1", style: "toolbutton"}); 
CopyFontStyle1.helpTip = "Click - Copy the font you wantto change from";


    /*
// GRP_ALL_FONT
// ============
var Grp_AllFont = palette.add("group", undefined, {name: "Grp_From"}); 
    Grp_AllFont.orientation = "row"; 
    Grp_AllFont.alignChildren = ["left","center"]; 
    Grp_AllFont.spacing = 0; 
    Grp_AllFont.margins = 0; 


var Tabulation = Grp_AllFont.add("group", undefined, undefined, {name: "Tabulation"}); 
Tabulation.preferredSize.width = 55; 


var Check_AllFont = Grp_AllFont.add("checkbox", undefined, undefined, {name: "Check_AllFont"}); 
    Check_AllFont.text = "All fonts"; 
*/

// GRP_TO
// ======
var Grp_To = palette.add("group", undefined, {name: "Grp_To"}); 
    Grp_To.orientation = "row"; 
    Grp_To.alignChildren = ["left","center"]; 
    Grp_To.spacing = 10; 
    Grp_To.margins = 0; 

var Txt_To = Grp_To.add("checkbox", undefined, undefined, {name: "Txt_To"}); 
    Txt_To.text = "To"; 
    Txt_To.preferredSize.width = 45; 

var EditTxt_To = Grp_To.add('edittext {properties: {name: "EditTxt_To"}}'); 
    EditTxt_To.preferredSize.width = 120; 
    var ChosenFont;   
    EditTxt_To.onChanging = function () {ChosenFont = EditTxt_To.text};

var CopyFontStyle2 = Grp_To.add("iconbutton", undefined, File.decode(iconCopy_imgString), {name: "iconbutton1", style: "toolbutton"}); 
CopyFontStyle2.helpTip = "Click - Copy the font you want to change to\n+ Shift - Copy the font, font size, justification and color";


// DIVIDER
// =======
var divider1 = palette.add("panel", undefined, undefined, {name: "divider1"}); 
    divider1.alignment = "fill"; 

// FONT SIZE
// =========
var Grp_FontSize = palette.add("group", undefined, {name: "Grp_FontSize"}); 
    Grp_FontSize.orientation = "row"; 
    Grp_FontSize.alignChildren = ["left","center"]; 
    Grp_FontSize.spacing = 10; 
    Grp_FontSize.margins = 0; 

var checkbox_FontSize = Grp_FontSize.add("checkbox", undefined, undefined, {name: "checkbox_FontSize"}); 
    checkbox_FontSize.text = "Font size"; 
    checkbox_FontSize.preferredSize.width = 90; 

var editTxt_FontSize = Grp_FontSize.add('edittext {properties: {name: "edittext1"}}'); 
    editTxt_FontSize.text = "20"; 
    editTxt_FontSize.preferredSize.width = 70; 
    var ChosenFontSize = "20";   
    editTxt_FontSize.onChanging = function () {ChosenFontSize = editTxt_FontSize.text};

// JUSTIFY
// =======
var Grp_Justify = palette.add("group", undefined, {name: "Grp_Justify"}); 
    Grp_Justify.orientation = "row"; 
    Grp_Justify.alignChildren = ["left","center"]; 
    Grp_Justify.spacing = 10; 
    Grp_Justify.margins = 0; 

var Check_Justify = Grp_Justify.add("checkbox", undefined, undefined, {name: "Check_Justify"}); 
    Check_Justify.text = "Font justify"; 
    Check_Justify.preferredSize.width = 90; 

var dropdown_justify_array = ["Left","Right","Center", "Full / Lastline left", "Full / Lastline right", "Full / Lastline cnter", "Full / Lastline full" ]; 
var dropdown_justify = Grp_Justify.add("dropdownlist", undefined, undefined, {name: "dropdown_justify", items: dropdown_justify_array}); 
    dropdown_justify.selection = 1; 
    var ChooseJustify = dropdown_justify.selection

// FONT COLOR
// ==========
var Grp_Color = palette.add("group", undefined, {name: "Grp_Color"}); 
    Grp_Color.orientation = "row"; 
    Grp_Color.alignChildren = ["left","center"]; 
    Grp_Color.spacing = 10; 
    Grp_Color.margins = 0; 

var checkbox_Color = Grp_Color.add("checkbox", undefined, undefined, {name: "checkbox_Color"}); 
    checkbox_Color.text = "Font color"; 
    checkbox_Color.preferredSize.width = 90; 

var edittext_Color = Grp_Color.add('edittext {properties: {name: "edittext_Color"}}'); 
    edittext_Color.text = "00000"; 
    edittext_Color.preferredSize.width = 70; 
    var ChosenColor = "00000";   
    edittext_Color.onChanging = function () {ChosenColor = edittext_Color.text};

// DIVIDER
// =======
var divider2 = palette.add("panel", undefined, undefined, {name: "divider2"}); 
    divider2.alignment = "fill"; 

// SELECTION
// =========
var Grp_Selection = palette.add("group", undefined, {name: "Grp_Selection"}); 
    Grp_Selection.orientation = "row"; 
    Grp_Selection.alignment = ["fill","top"]; 
    Grp_Selection.alignChildren = ["fill","center"]; 
    Grp_Selection.spacing = 30; 
    Grp_Selection.margins = 0; 


var Button_SelLayer = Grp_Selection.add("radiobutton", undefined, undefined, {name: "Button_SelLayer"}); 
    Button_SelLayer.text = "Sel. layers"; 
    Button_SelLayer.value = true;

var Button_SelComp = Grp_Selection.add("radiobutton", undefined, undefined, {name: "Button_SelComp"}); 
    Button_SelComp.text = "Sel. compostions"; 


var divider3 = palette.add("panel", undefined, undefined, {name: "divider3"}); 
    divider3.alignment = "fill"; 

var button_GO = palette.add("button", undefined, undefined, {name: "button_GO"}); 
    button_GO.text = "Change Font"; 
    button_GO.alignment = ["center","top"]; 





// FUNCTION 




CopyFontStyle1.onClick = function () {

	var comp = app.project.activeItem;
    var myTextLayer = comp.selectedLayers[0];
    var textProp = myTextLayer.property("Source Text");
    var textDocument = textProp.value;
    EditTxt_From.text = textDocument.font;
    FontFrom = textDocument.font;
  
}

CopyFontStyle2.onClick = function () {

	var comp = app.project.activeItem;
    var myTextLayer = comp.selectedLayers[0];
    var textProp = myTextLayer.property("Source Text");
    var textDocument = textProp.value;
    var isShiftPressed = ScriptUI.environment.keyboardState.shiftKey;


    if (isShiftPressed) {
        EditTxt_To.text = textDocument.font;
        ChosenFont = textDocument.font;
        editTxt_FontSize.text = textDocument.fontSize.toString();
        ChosenFontSize = textDocument.fontSize.toString();
            
            var theColor = textDocument.fillColor;
            var r = Math.round(theColor[0]*255);
            var g = Math.round(theColor[1]*255);
            var b = Math.round(theColor[2]*255);
            var ColorString = (r*65536 + g*256 + b).toString(16);
            if (ColorString.length == 5) {ColorString = "0" + ColorString}
            else if (ColorString.length == 4) {ColorString = "00" + ColorString};
            else if (ColorString.length == 3) {ColorString = "000" + ColorString};
            else if (ColorString.length == 2) {ColorString = "0000" + ColorString};
            else if (ColorString.length == 1) {ColorString = "00000" + ColorString};
        edittext_Color.text = ColorString;
        ChosenColor = ColorString;

    if (textDocument.justification == ParagraphJustification.LEFT_JUSTIFY){
        dropdown_justify.selection = 0;
    } else if (textDocument.justification == ParagraphJustification.RIGHT_JUSTIFY){
         dropdown_justify.selection = 1;
    } else if (textDocument.justification = ParagraphJustification.CENTER_JUSTIFY){
        dropdown_justify.selection = 2;
    } else if (textDocument.justification == ParagraphJustification.FULL_JUSTIFY_LASTLINE_LEFT){
        dropdown_justify.selection = 3;
    } else if (textDocument.justification == ParagraphJustification.FULL_JUSTIFY_LASTLINE_RIGHT){
        dropdown_justify.selection = 4;
    } else if ( textDocument.justification == ParagraphJustification.FULL_JUSTIFY_LASTLINE_CENTER){
        dropdown_justify.selection = 5;
    } else {
        dropdown_justify.selection = 6;
    }     

        




    } else {
        EditTxt_To.text = textDocument.font;
        ChosenFont = textDocument.font;
    }
}

button_GO.onClick = function () {


    var NumKeyedTxt = 0;
    var thisLayer, textProp, oldTextDocument, oldFont, textDocument;
    if (palette.Grp_Selection.Button_SelLayer.value == true){
        
        var comp = app.project.activeItem;
        if ((comp !== null) && (comp instanceof CompItem)) {

        var sel = comp.selectedLayers;

        if(sel.length > 0){
            app.beginUndoGroup("TrimKeys");

            // Loop through all selected layers
            for (var l=0; l<sel.length; l++) { 
                thisLayer = sel[l];
                textProp = thisLayer.property("Source Text");
                oldTextDocument = textProp.value;
                oldFont = oldTextDocument.font;
                textDocument = textProp.value;

                if (textProp === null) {
                    continue;}

                if (textProp.numKeys != 0) {
                    NumKeyedTxt = NumKeyedTxt+1;
                    continue

                } else {

                    var Check_TxtFrom = this.parent.Grp_From.Txt_From.value;
                    var Check_TxtTo = this.parent.Grp_To.Txt_To.value;
                    var check_FontSize = this.parent.Grp_FontSize.checkbox_FontSize.value;
                    var Check_CheckJustify = this.parent.Grp_Justify.Check_Justify.value;
                    var check_Color = this.parent.Grp_Color.checkbox_Color.value;

                    if (Check_TxtFrom) {
                        if (oldFont == FontFrom) {
                            
                            if (Check_TxtTo) {
                            textDocument.font = ChosenFont;}

                            if (check_FontSize) {
                            textDocument.fontSize = parseInt(ChosenFontSize);}
                            
                            if (Check_CheckJustify) {
                                var ChooseJustify = dropdown_justify.selection;
                                if (ChooseJustify.index == 0){
                                    textDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
                                } else if (ChooseJustify.index == 1){
                                    textDocument.justification = ParagraphJustification.RIGHT_JUSTIFY;
                                } else if (ChooseJustify.index == 2){
                                    textDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
                                } else if (ChooseJustify.index == 3){
                                    textDocument.justification = ParagraphJustification.FULL_JUSTIFY_LASTLINE_LEFT;
                                } else if (ChooseJustify.index == 4){
                                    textDocument.justification = ParagraphJustification.FULL_JUSTIFY_LASTLINE_RIGHT;
                                } else if (ChooseJustify.index == 5){
                                    textDocument.justification = ParagraphJustification.FULL_JUSTIFY_LASTLINE_CENTER;
                                } else {
                                    textDocument.justification = ParagraphJustification.FULL_JUSTIFY_LASTLINE_FULL;
                                } 
                            }

                            if (check_Color) {
                            // Convert hex color to RBG color
                            var ColorHex = ChosenColor;
                                var R_hex = ColorHex.substring(0, 2);
                                var G_hex = ColorHex.substring(2, 4);
                                var B_hex = ColorHex.substring(4, 6);
                                var R_num = (parseInt(R_hex, 16)) / 255;
                                var G_num = (parseInt(G_hex, 16)) / 255;
                                var B_num = (parseInt(B_hex, 16)) / 255;
                                textDocument.applyFill = true;
                                textDocument.fillColor = [R_num, G_num, B_num];
                            }

                            textProp.setValue(textDocument);                   
                        }
                
                        } else {

                            if (Check_TxtTo) {
                            textDocument.font = ChosenFont;}

                            if (check_FontSize) {
                            textDocument.fontSize = parseInt(ChosenFontSize);}
                            
                            if (Check_CheckJustify) {
                                var ChooseJustify = dropdown_justify.selection;
                                if (ChooseJustify.index == 0){
                                    textDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
                                } else if (ChooseJustify.index == 1){
                                    textDocument.justification = ParagraphJustification.RIGHT_JUSTIFY;
                                } else if (ChooseJustify.index == 2){
                                    textDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
                                } else if (ChooseJustify.index == 3){
                                    textDocument.justification = ParagraphJustification.FULL_JUSTIFY_LASTLINE_LEFT;
                                } else if (ChooseJustify.index == 4){
                                    textDocument.justification = ParagraphJustification.FULL_JUSTIFY_LASTLINE_RIGHT;
                                } else if (ChooseJustify.index == 5){
                                    textDocument.justification = ParagraphJustification.FULL_JUSTIFY_LASTLINE_CENTER;
                                } else {
                                    textDocument.justification = ParagraphJustification.FULL_JUSTIFY_LASTLINE_FULL;
                                } 
                            }

                            if (check_Color) {
                            // Convert hex color to RBG color
                            var ColorHex = ChosenColor;
                                var R_hex = ColorHex.substring(0, 2);
                                var G_hex = ColorHex.substring(2, 4);
                                var B_hex = ColorHex.substring(4, 6);
                                var R_num = (parseInt(R_hex, 16)) / 255;
                                var G_num = (parseInt(G_hex, 16)) / 255;
                                var B_num = (parseInt(B_hex, 16)) / 255;
                                textDocument.applyFill = true;
                                textDocument.fillColor = [R_num, G_num, B_num];
                            }

                        textProp.setValue(textDocument);
                    }
                }
            }
            app.endUndoGroup();       

        }
        
    }
    
    
} else if (palette.Grp_Selection.Button_SelComp.value == true) {
    
    if ((app.project.activeItem !== null) && (app.project.activeItem instanceof CompItem))
        {selComps = [app.project.activeItem];
    } else {
        selComps = app.project.selection;
    }
    
    app.beginUndoGroup("TrimKeys");

    // Loop through all selected comps
    for (l=0; l<selComps.length; l++)
    {

        comp = selComps[l];
        if (!(comp instanceof CompItem))
            continue;

            // Loop through all comp layers
            for (var i = 1; i <= comp.numLayers; i++) {
                thisLayer = comp.layer(i);
                textProp = thisLayer.property("Source Text");



                if (textProp === null) {
                    continue;}

                if (textProp.numKeys != 0) {
                    NumKeyedTxt = NumKeyedTxt+1;
                    continue

                } else {
                    var oldTextDocument = textProp.value;
                    var oldFont = oldTextDocument.font;
                    var textDocument = textProp.value;

                    var Check_TxtFrom = this.parent.Grp_From.Txt_From.value;
                    var Check_TxtTo = this.parent.Grp_To.Txt_To.value;
                    var check_FontSize = this.parent.Grp_FontSize.checkbox_FontSize.value;
                    var Check_CheckJustify = this.parent.Grp_Justify.Check_Justify.value;
                    var check_Color = this.parent.Grp_Color.checkbox_Color.value;
                    
                        if (Check_TxtFrom) {
                            if (oldFont == FontFrom) {

                            if (Check_TxtTo) {
                            textDocument.font = ChosenFont;}

                            if (check_FontSize) {
                            textDocument.fontSize = parseInt(ChosenFontSize);}
                            
                            if (Check_CheckJustify) {
                                var ChooseJustify = dropdown_justify.selection;
                                if (ChooseJustify.index == 0){
                                    textDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
                                } else if (ChooseJustify.index == 1){
                                    textDocument.justification = ParagraphJustification.RIGHT_JUSTIFY;
                                } else if (ChooseJustify.index == 2){
                                    textDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
                                } else if (ChooseJustify.index == 3){
                                    textDocument.justification = ParagraphJustification.FULL_JUSTIFY_LASTLINE_LEFT;
                                } else if (ChooseJustify.index == 4){
                                    textDocument.justification = ParagraphJustification.FULL_JUSTIFY_LASTLINE_RIGHT;
                                } else if (ChooseJustify.index == 5){
                                    textDocument.justification = ParagraphJustification.FULL_JUSTIFY_LASTLINE_CENTER;
                                } else {
                                    textDocument.justification = ParagraphJustification.FULL_JUSTIFY_LASTLINE_FULL;
                                } 
                            }

                            if (check_Color) {
                            // Convert hex color to RBG color
                            var ColorHex = ChosenColor;
                                var R_hex = ColorHex.substring(0, 2);
                                var G_hex = ColorHex.substring(2, 4);
                                var B_hex = ColorHex.substring(4, 6);
                                var R_num = (parseInt(R_hex, 16)) / 255;
                                var G_num = (parseInt(G_hex, 16)) / 255;
                                var B_num = (parseInt(B_hex, 16)) / 255;
                                textDocument.applyFill = true;
                                textDocument.fillColor = [R_num, G_num, B_num];
                            }

                            textProp.setValue(textDocument);    
                            
                            }
                        } else {
                            if (Check_TxtTo) {
                            textDocument.font = ChosenFont;}

                            if (check_FontSize) {
                            textDocument.fontSize = parseInt(ChosenFontSize);}
                            
                            if (Check_CheckJustify) {
                                var ChooseJustify = dropdown_justify.selection;
                                if (ChooseJustify.index == 0){
                                    textDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
                                } else if (ChooseJustify.index == 1){
                                    textDocument.justification = ParagraphJustification.RIGHT_JUSTIFY;
                                } else if (ChooseJustify.index == 2){
                                    textDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
                                } else if (ChooseJustify.index == 3){
                                    textDocument.justification = ParagraphJustification.FULL_JUSTIFY_LASTLINE_LEFT;
                                } else if (ChooseJustify.index == 4){
                                    textDocument.justification = ParagraphJustification.FULL_JUSTIFY_LASTLINE_RIGHT;
                                } else if (ChooseJustify.index == 5){
                                    textDocument.justification = ParagraphJustification.FULL_JUSTIFY_LASTLINE_CENTER;
                                } else {
                                    textDocument.justification = ParagraphJustification.FULL_JUSTIFY_LASTLINE_FULL;
                                } 
                            }

                            if (check_Color) {
                            // Convert hex color to RBG color
                            var ColorHex = ChosenColor;
                                var R_hex = ColorHex.substring(0, 2);
                                var G_hex = ColorHex.substring(2, 4);
                                var B_hex = ColorHex.substring(4, 6);
                                var R_num = (parseInt(R_hex, 16)) / 255;
                                var G_num = (parseInt(G_hex, 16)) / 255;
                                var B_num = (parseInt(B_hex, 16)) / 255;
                                textDocument.applyFill = true;
                                textDocument.fillColor = [R_num, G_num, B_num];
                            }

                            textProp.setValue(textDocument);    
                        }
                } 

            //oldTextDocument = null;
            //oldFont = null;
            //textDocument = null;
            }

        }
        app.endUndoGroup();      

        
    }



   if (NumKeyedTxt !=0) {
       alert (NumKeyedTxt + " text layers have keframes \n Please change then manually")
   //: \n" + KeyedTxtLayers.toString() + "index num:" + KeyedTxtLayers.index.toString() )
    }

    
}

palette.layout.layout(true);
 
return palette;
}


var myScriptPal = myScript_buildUI(thisObj);

if (myScriptPal != null && myScriptPal instanceof Window){
myScriptPal.center();
myScriptPal.show();
}

}
myScript(this);
}
/*
textDocument.fillColor = [1, 0, 0];
textDocument.strokeColor = [0, 1, 0];
textDocument.strokeWidth = 2;
textDocument.strokeOverFill = true;
textDocument.applyStroke = true;
textDocument.applyFill = true;
textDocument.text = myString;
textDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
textDocument.tracking = 50;
*/