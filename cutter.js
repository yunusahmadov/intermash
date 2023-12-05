
// PPI Cutter Driver
var umName = 0;
var umCoef = 1.0;
var umDecimals = 3;
var bRapidG;
var nSheet = 0, szMater = "", szGauge = "";
var szJob = "", szDraw = "", szTakeoff = "";
var curX, curY; //vars for current position of torch

function OnSheetStart(nSheetIdx, szMat, szGaug, fSheetSizeX, fSheetSizeY)
    {
    sendfin_bos("%",1);
    sendfin_bos("P1021",2);
    sendfin_bos("G71",3);
    sendfin_bos("G90",4);
    }
function OnLine(fX, fY)
    {

    }

function OnTorchOn() 
    {
    
    }
function OnTorchOff() 
    {

    }
function OnArc(fEndX, fEndY, fCenterX, fCenterY, fRadius, bCW)
    {

    }

function OnSheetEnd()  
    {

    }

// End of PPI