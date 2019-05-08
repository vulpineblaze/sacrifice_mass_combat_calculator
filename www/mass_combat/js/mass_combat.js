
window.onload=function() {

    total = document.getElementById('total');


    party1Obj = document.getElementById('txtParty1');
    party2Obj = document.getElementById('txtParty2');
    loss1Obj = document.getElementById('tdLoss1');
    loss2Obj = document.getElementById('tdLoss2');
    document.getElementById('btnRun').onclick = calcRun;
    document.getElementById('btnReset').onclick = resetInputs;

    starshipSize = document.getElementById('starshipSize');
    starshipxPort = document.getElementById('starshipxPort');
    starshipiPort = document.getElementById('starshipiPort');
    starshipOutput = document.getElementById('starshipOutput');
    document.getElementById('starshipRun').onclick = starshipRun;
    document.getElementById('starshipReset').onclick = starshipReset;

    hullHealth1 = document.getElementById('hullHealth1');
    hullArmor1 = document.getElementById('hullArmor1');
    hullHealth2 = document.getElementById('hullHealth2');
    hullArmor2 = document.getElementById('hullArmor2');
    hullOutput = document.getElementById('hullOutput');
    document.getElementById('hullRun').onclick = hullRun;
    document.getElementById('hullReset').onclick = hullReset;

    wepDamage1 = document.getElementById('wepDamage1');
    wepAP1 = document.getElementById('wepAP1');
    wepRE1 = document.getElementById('wepRE1');
    wepDamage2 = document.getElementById('wepDamage2');
    wepAP2 = document.getElementById('wepAP2');
    wepRE2 = document.getElementById('wepRE2');
    wepOutput = document.getElementById('wepOutput');
    document.getElementById('wepRun').onclick = wepRun;
    document.getElementById('wepReset').onclick = wepReset;

    dpCharge1 = document.getElementById('dpCharge1');
    dpSpeed1 = document.getElementById('dpSpeed1');
    dpCharge2 = document.getElementById('dpCharge2');
    dpSpeed2 = document.getElementById('dpSpeed2');
    dpOutput = document.getElementById('dpOutput');
    document.getElementById('dpRun').onclick = dpRun;
    document.getElementById('dpReset').onclick = dpReset;
}
function resetInputs() {
    party1Obj.value = '';
    party2Obj.value = '';
    loss1Obj.innerHTML = '';
    loss2Obj.innerHTML = '';
}
function starshipReset() {
    starshipSize.value = '';
    starshipxPort.value = '';
    starshipiPort.value = '';
    starshipOutput.innerHTML = '';
}
function hullReset() {
    hullHealth1.value = '';
    hullArmor1.value = '';
    hullHealth2.value = '';
    hullArmor2.value = '';
    hullOutput.innerHTML = '';
}
function wepReset() {
    wepDamage1.value = '';
    wepAP1.value = '';
    wepRE1.value = '';
    wepDamage2.value = '';
    wepAP2.value = '';
    wepRE2.value = '';
    wepOutput.innerHTML = '';
}
function dpReset() {
    dpCharge1.value = '';
    dpSpeed1.value = '';
    dpCharge2.value = '';
    dpSpeed2.value = '';
    dpOutput.innerHTML = '';
}

function calcRun() {
    var p1 = new Number(party1Obj.value);
    var p2 = new Number(party2Obj.value);
    var new1, new2;
    var loss1, loss2;
    loss1Obj.innerHTML = '';
    loss2Obj.innerHTML = '';
    if(isNaN(p1) || isNaN(p2)) {
        alert('Invalid Party 1 or Party 2 : Must be numbers!');
        return;
    }
    loss1 = rollManyDice(p2);
    loss2 = rollManyDice(p1);
    new1 = p1 - loss1;
    new2 = p2 - loss2;
    party1Obj.value = new1;
    party2Obj.value = new2;
    loss1Obj.innerHTML = "Lost:" + loss1;
    loss2Obj.innerHTML = "Lost:" + loss2;
}
function starshipRun() {
    var size = new Number(starshipSize.value);
    var xPort = new Number(starshipxPort.value);
    var iPort = new Number(starshipiPort.value);
    var final = 0;

    starshipOutput.innerHTML = '';

    if(isNaN(size) || isNaN(xPort) || isNaN(iPort)) {
        alert('Invalid Fields : Must be numbers!');
        return;
    }

    final = size + xPort * 0.1 + iPort * 0.1;

    starshipOutput.innerHTML = Math.round(final);
    sumTotal();
}
function hullRun() {
    var health1 = new Number(hullHealth1.value);
    var armor1 = new Number(hullArmor1.value);
    var health2 = new Number(hullHealth2.value);
    var armor2 = new Number(hullArmor2.value);
    var final = 0;

    hullOutput.innerHTML = '';

    if(isNaN(health1) || isNaN(armor1) || isNaN(health2) || isNaN(armor2)) {
        alert('Invalid Fields : Must be numbers!');
        return;
    }

    final = health1 * 0.6 + armor1 * 0.6  
    		+ health2 * 0.6  + armor2 * 0.6 ;

    hullOutput.innerHTML = Math.round(final);

    sumTotal();
}
function wepRun() {
    var dam1 = new Number(wepDamage1.value);
    var ap1 = new Number(wepAP1.value);
    var re1 = new Number(wepRE1.value);
    var dam2 = new Number(wepDamage2.value);
    var ap2 = new Number(wepAP2.value);
    var re2 = new Number(wepRE2.value);
    var final = 0;

    wepOutput.innerHTML = '';

    if(isNaN(dam1) || isNaN(ap1)|| isNaN(re1)) {
        alert('Invalid Fields : Must be numbers!');
        return;
    }
    if(isNaN(dam2) || isNaN(ap2)|| isNaN(re2)) {
        alert('Invalid Fields : Must be numbers!');
        return;
    }

    final = dam1 * 0.6  + ap1 * 0.4  + re1 * -0.005  
    		+ dam2 * 0.6  + ap2 * 0.4 + re2 * -0.005 ;

    wepOutput.innerHTML = Math.round(final);

    sumTotal();
}
function dpRun() {
    var charge1 = new Number(dpCharge1.value);
    var speed1 = new Number(dpSpeed1.value);
    var charge2 = new Number(dpCharge2.value);
    var speed2 = new Number(dpSpeed2.value);

    var final = 0;

    dpOutput.innerHTML = '';

    if(isNaN(charge1) || isNaN(speed1)) {
        alert('Invalid Fields : Must be numbers!');
        return;
    }
    if(isNaN(charge2) || isNaN(speed2)) {
        alert('Invalid Fields : Must be numbers!');
        return;
    }

    final = charge1 * 0.01  + speed1 * 0.5 
    		+ charge2 * 0.01  + speed2 * 0.5 ;

    dpOutput.innerHTML = Math.round(final);

    sumTotal();
}


function rollManyDice(count){
    var min = 1;
    var max = 12;
    var random = 0;
    var result = 0;
    for(i=0;i<count;i++){
        random = Math.floor(Math.random() * (+max - +min)) + +min;
        if(random > 8){
            result++;
        }
    }
    return result;
}
function sumTotal(){
	var sum = fix(starshipOutput.innerHTML)
			+ fix(hullOutput.innerHTML)
			+ fix(dpOutput.innerHTML)
			+ fix(wepOutput.innerHTML);
	total.innerHTML	= "Total: " + sum;
}
function fix(innerHTML){
	return (parseInt(innerHTML,10) || 0);
}