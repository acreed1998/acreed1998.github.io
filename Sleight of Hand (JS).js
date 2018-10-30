// Create Objects that contain archtype parameters //
var masterThief = {
    skillPoints: 9,
    crewPoints: 0,
    contactPoints: 5
};

var modernItalian = {
    skillPoints: 4,
    crewPoints: 2,
    contactPoints: 3
};

var shockAndAwe = {
    skillPoints: 2,
    crewPoints: 3,
    contactPoints: 3
};

// Var to store the choice of archetype
var chosenArchetype;


// Variables for target modification and storage
var chosenTargets = [];
var targetCounter;
var targetCellLog = [];

// Variables for skill modification and storage
var changingSkillCounter;
var chosenSkills;
var skillCounter;
var skillCellLog = [];
var skillWellConnectedLogCrew = 0;
var skillWellConnectedLogCont = 0;
function getSkillPoints(row) {
    for (var i = 0; i < row.cells.length; i++) {
        if(row.cells[i].className == "skillPointsCollumn") {
            return parseInt(row.cells[i].innerHTML);
        }
    }
    return 0;
}

function getCrewPoints(row) {
    for (var i = 0; i < row.cells.length; i++) {
        if(row.cells[i].className == "crewPointsCollumn") {
            return parseInt(row.cells[i].innerHTML);
        }
    }
    return 0;
}

function getContactPoints(row) {
    for (var i = 0; i < row.cells.length; i++) {
        if(row.cells[i].className == "contactPointsCollumn") {
            return parseInt(row.cells[i].innerHTML);
        }
    }
    return 0;
}

function pickArchetype(tableName, rowNum, method) {
    var skillPointsString = document.getElementById("skills");
    var skillPoints = parseInt(skillPointsString.innerHTML);

    var crewPointsString = document.getElementById("crew");
    var crewPoints = parseInt(crewPointsString.innerHTML);

    var contactPointsString = document.getElementById("contacts");
    var contactPoints = parseInt(contactPointsString.innerHTML);

    var options = document.getElementById(tableName).getElementsByTagName("tr");
    var skillPointsGiven = getSkillPoints(options[rowNum]);
    var crewPointsGiven = getCrewPoints(options[rowNum]);
    var contactPointsGiven = getContactPoints(options[rowNum]);

    skillPoints = skillPointsGiven;
    crewPoints = crewPointsGiven;
    contactPoints = contactPointsGiven;

    skillPointsString.innerHTML = skillPoints.toString(); //update counter
    crewPointsString.innerHTML = crewPoints.toString(); //update counter
    contactPointsString.innerHTML = contactPoints.toString(); //update counter

    if (rowNum == 1) {
        chosenArchetype = "Master Thief";
        forcedSaaTargets('targets', 1, 0);
        forcedSaaTargets('targets', 2, 0);
        forcedMtSkills('skillsToChoose', 0, 0);
    } else if (rowNum == 2) {
        chosenArchetype = "Modern Italian";
        forcedSaaTargets('targets', 1, 0);
        forcedSaaTargets('targets', 2, 0);
        forcedMISkills('skillsToChoose', 2, 2)
    } else if (rowNum == 3) {
        chosenArchetype = "Shock and Awe";
        forcedSaaTargets('targets', 1, 0);
        forcedSaaTargets('targets', 2, 0);
        forcedSaaSkills('skillsToChoose', 2, 0)
    }
}

function forcedSaaTargets(tableName, rowNum, cellNum) {
    var cell = document.getElementById(tableName).getElementsByTagName("tr")[rowNum].getElementsByTagName("td")[cellNum];

    if (chosenArchetype == "Shock and Awe") {
        cell.className = "saaTarget";
        return 1;
    } else {
        cell.className = "notATarget";
    }
}

function forcedMtSkills(tableName, rowNum, cellNum) {
    var cell = document.getElementById(tableName).getElementsByTagName("tr")[rowNum].getElementsByTagName("td")[cellNum];
    var clearcell;
    let i;
    let j;
    if (chosenArchetype == "Master Thief") {
        for (i = 0; i < 5; i++) {
            for (j = 0; j < 3; j++) {
                clearcell = document.getElementById(tableName).getElementsByTagName("tr")[i].getElementsByTagName("td")[j];
                clearcell.className = "noSkill";
            }
        }
        cell.className = "freeSkill";
        return 1;
    }
}

function forcedMISkills(tableName, rowNum, cellNum) {
    var cell = document.getElementById(tableName).getElementsByTagName("tr")[rowNum].getElementsByTagName("td")[cellNum];
    var clearcell;
    if (chosenArchetype == "Modern Italian") {
        for (i = 0; i < 5; i++) {
            for (j = 0; j < 3; j++) {
                clearcell = document.getElementById(tableName).getElementsByTagName("tr")[i].getElementsByTagName("td")[j];
                clearcell.className = "noSkill";
            }
        }
        cell.className = "freeSkill";
        return 1;
    }
}

function forcedSaaSkills(tableName, rowNum, cellNum) {
    var cell = document.getElementById(tableName).getElementsByTagName("tr")[rowNum].getElementsByTagName("td")[cellNum];
    var clearcell;
    if (chosenArchetype == "Shock and Awe") {
        for (i = 0; i < 5; i++) {
            for (j = 0; j < 3; j++) {
                clearcell = document.getElementById(tableName).getElementsByTagName("tr")[i].getElementsByTagName("td")[j];
                clearcell.className = "noSkill";
            }
        }
        cell.className = "freeSkill";
        return 1;
    }
}

function chooseTarget(tableName, rowNum, cellNum) {
    if (chosenArchetype == "Master Thief" || chosenArchetype == "Modern Italian" || chosenArchetype == "Shock and Awe") {
        console.log('All good!');
    } else {
        return ('Pick an Archetype');
    }
    targetCounter = countTakenTargets(tableName);
    var cell = document.getElementById(tableName).getElementsByTagName("tr")[rowNum].getElementsByTagName("td")[cellNum];
    var justChanged = false;
    var is_takenI;
    if (targetCounter < 4 || targetCounter - 1 == 3) {
        if (targetCounter + 1 == 5) {
            for (is_takenI = 0; is_takenI < targetCellLog.length; is_takenI++) {
                targetCellLog[is_takenI].className = "notATarget";
            }
            targetCellLog = [];
            justChanged = true;
        }
        if (cell.className != "aTarget" && justChanged == false && cell.className != "saaTarget") {
            cell.className = "aTarget";
            targetCellLog.push(cell);
            return 1;
        } else if (cell.className != "notATarget" && cell.className != "saaTarget") {
            cell.className = "notATarget"
            return 0;
        } else {
            return 0;
        }
    }
}

function countTakenTargets(tableName) {
    var num = 1;
    var i;
    var j;
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            var takenCell = document.getElementById(tableName).getElementsByTagName("tr")[i].getElementsByTagName("td")[j];
            if (takenCell.className == "aTarget" || takenCell.className == "saaTarget") {
                num++;
            }
        }
    }
    return num;

}

function chooseSkill(tableName, rowNum, cellNum) {
    if (chosenArchetype == "Master Thief" || chosenArchetype == "Modern Italian" || chosenArchetype == "Shock and Awe") {
        if (chosenArchetype == "Master Thief") {
            chosenSkills = masterThief.skillPoints;
        } else if (chosenArchetype == "Modern Italian") {
            chosenSkills = modernItalian.skillPoints;
        } else {
            chosenSkills = shockAndAwe.skillPoints;
        }
    } else {
        return ('Pick an Archetype');
    }
    var skillPointsString = document.getElementById("skills");
    var skillPoints = parseInt(skillPointsString.innerHTML);
    skillCounter = countTakenSkills(tableName);
    var cell = document.getElementById(tableName).getElementsByTagName("tr")[rowNum].getElementsByTagName("td")[cellNum];
    var justChanged = false;
    var is_takenI;
    if (skillCounter < chosenSkills + 2) {
        if (skillCounter + 1 == chosenSkills + 2) {
            for (is_takenI = 0; is_takenI < skillCellLog.length; is_takenI++) {
                skillCellLog[is_takenI].className = "noSkill";
            }
            skillCellLog = [];
            justChanged = true;
            takeExtraCrew(true);
            takeExtraContacts(true);
            skillPoints = chosenSkills;
            skillPointsString.innerHTML = skillPoints.toString();
        }
        if (cell.className != "gotSkills" && justChanged == false && cell.className != "freeSkill") {
            cell.className = "gotSkills";
            skillCellLog.push(cell);
            skillPoints--;
            skillPointsString.innerHTML = skillPoints.toString();
            return 1;
        } else if (cell.className != "noSkill" && cell.className != "freeSkill") {
            cell.className = "noSkill"
            skillPoints++;
            skillPointsString.innerHTML = skillPoints.toString();
            return 0;
        } else {
            return 0
        }
    }
    
}

function countTakenSkills(tableName) {
    var num = 1;
    var i;
    var j;
    for (i = 0; i < 5; i++) {
        for (j = 0; j < 3; j++) {
            var takenCell = document.getElementById(tableName).getElementsByTagName("tr")[i].getElementsByTagName("td")[j];
            if (takenCell.className == "gotSkills" || takenCell.className == "freebieSkill") {
                num++;
            }
        }
    }
    return num;

}

function giveExtraCrew(clearExtraFromSkills) {
    if (chosenArchetype == "Master Thief" || chosenArchetype == "Modern Italian" || chosenArchetype == "Shock and Awe") {
        console.log('All good!')
    } else {
        return ('Pick an Archetype');
    }

    var takenExtraCrewString = document.getElementById("extraCrewForSkills");
    var takenExtraCrew = parseInt(takenExtraCrewString.innerHTML);

    var skillPointsString = document.getElementById("skills");
    var skillPoints = parseInt(skillPointsString.innerHTML);

    var crewPointsString = document.getElementById("crew");
    var crewPoints = parseInt(crewPointsString.innerHTML);

    var cell = document.getElementById("wellConnectedCell");

    if (takenExtraCrew + 1 > 1 || skillWellConnectedLogCont > 0) {
        return "TOO HIGH!!!";
    }

    skillPoints--;
    crewPoints++;
    takenExtraCrew++;
    skillWellConnectedLogCrew++;

    if (takenExtraCrew > 0) {
        cell.className = "gotSkills";
    }

    skillPointsString.innerHTML = skillPoints.toString();
    crewPointsString.innerHTML = crewPoints.toString();
    takenExtraCrewString.innerHTML = takenExtraCrew.toString();

}

function takeExtraCrew(clearExtraFromSkills) {

    if (chosenArchetype == "Master Thief" || chosenArchetype == "Modern Italian" || chosenArchetype == "Shock and Awe") {
        console.log('All good!')
    } else {
        return ('Pick an Archetype');
    }

    var takenExtraCrewString = document.getElementById("extraCrewForSkills");
    var takenExtraCrew = parseInt(takenExtraCrewString.innerHTML);

    var skillPointsString = document.getElementById("skills");
    var skillPoints = parseInt(skillPointsString.innerHTML);

    var crewPointsString = document.getElementById("crew");
    var crewPoints = parseInt(crewPointsString.innerHTML);

    var cell = document.getElementById("wellConnectedCell");

    if (takenExtraCrew - 1 < 0) {
        return "TOO LOW!";
    }

    if (clearExtraFromSkills == true) {
        cell.className = "noSkill";
        takenExtraCrew = 0;
        if (chosenArchetype == "Master Thief") {
            skillPoints = masterThief.skillPoints;
            crewPoints = masterThief.crewPoints;
        } else if (chosenArchetype == "Modern Italian") {
            skillPoints = modernItalian.skillPoints;
            crewPoints = modernItalian.crewPoints;
        } else {
            skillPoints = shockAndAwe.skillPoints;
            crewPoints = shockAndAwe.crewPoints;
        }

        skillWellConnectedLogCrew = 0;
        crewPointsString.innerHTML = crewPoints.toString();
        takenExtraCrewString.innerHTML = takenExtraCrew.toString();

        return "Done";
    }

    skillPoints++;
    crewPoints--;
    takenExtraCrew--;
    skillWellConnectedLogCrew--;
    
    if (takenExtraCrew <= 0) {
        cell.className = "noSkill";
    }
    skillPointsString.innerHTML = skillPoints.toString();
    crewPointsString.innerHTML = crewPoints.toString();
    takenExtraCrewString.innerHTML = takenExtraCrew.toString();
}

function giveExtraContacts(clearExtraFromSkills) {
    if (chosenArchetype == "Master Thief" || chosenArchetype == "Modern Italian" || chosenArchetype == "Shock and Awe") {
        console.log('All good!')
    } else {
        return ('Pick an Archetype');
    }

    var takenExtraContString = document.getElementById("extraContForSkills");
    var takenExtraCont = parseInt(takenExtraContString.innerHTML);

    var skillPointsString = document.getElementById("skills");
    var skillPoints = parseInt(skillPointsString.innerHTML);

    var contactPointsString = document.getElementById("contacts");
    var contactPoints = parseInt(contactPointsString.innerHTML);

    var cell = document.getElementById("wellConnectedCell");

    if (takenExtraCont + 1 > 2 || skillWellConnectedLogCrew > 0) {
        return "TOO HIGH!!!";
    }

    skillPoints--;
    contactPoints += 2;
    takenExtraCont += 2;
    skillWellConnectedLogCont++;

    if (takenExtraCont > 0) {
        cell.className = "gotSkills";
    }

    skillPointsString.innerHTML = skillPoints.toString();
    contactPointsString.innerHTML = contactPoints.toString();
    takenExtraContString.innerHTML = takenExtraCont.toString();

}

function takeExtraContacts(clearExtraFromSkills) {
    if (chosenArchetype == "Master Thief" || chosenArchetype == "Modern Italian" || chosenArchetype == "Shock and Awe") {
        console.log('All good!')
    } else {
        return ('Pick an Archetype');
    }

    var takenExtraContString = document.getElementById("extraContForSkills");
    var takenExtraCont = parseInt(takenExtraContString.innerHTML);

    var skillPointsString = document.getElementById("skills");
    var skillPoints = parseInt(skillPointsString.innerHTML);

    var contactPointsString = document.getElementById("contacts");
    var contactPoints = parseInt(contactPointsString.innerHTML);

    var cell = document.getElementById("wellConnectedCell");

    if (takenExtraCont - 1 < 0) {
        return "TOO LOW!";
    }

    if (clearExtraFromSkills == true) {
        cell.className = "noSkill";
        takenExtraCont = 0;
        if (chosenArchetype == "Master Thief") {
            skillPoints = masterThief.skillPoints;
            contactPoints = masterThief.contactPoints;
        } else if (chosenArchetype == "Modern Italian") {
            skillPoints = modernItalian.skillPoints;
            contactPoints = modernItalian.contactPoints;
        } else {
            skillPoints = shockAndAwe.skillPoints;
            contactPoints = shockAndAwe.contactPoints;
        }

        skillWellConnectedLogCont = 0;
        contactPointsString.innerHTML = contactPoints.toString();
        takenExtraContString.innerHTML = takenExtraCont.toString();
        
        return "Done";
    }

    skillPoints++;
    contactPoints -= 2;
    takenExtraCont -= 2;
    skillWellConnectedLogCont--

    if (takenExtraCont <= 0) {
        cell.className = "noSkill";
    }

    skillPointsString.innerHTML = skillPoints.toString();
    contactPointsString.innerHTML = contactPoints.toString();
    takenExtraContString.innerHTML = takenExtraCont.toString();
}

function slidePanel(id) {
    var panel = document.getElementById(id);
    if(panel.className == "infocus") {
        panel.className = "nodisplay";
    } else {
        panel.className = "infocus";
    }
}

