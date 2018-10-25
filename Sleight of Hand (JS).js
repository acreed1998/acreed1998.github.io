var chosenArchetype;

var chosenTargets = [];
var targetCounter;
var targetCellLog = [];

var changingSkillCounter;
var chosenSkills = [];
var skillCounter;
var skillCellLog = [];


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
    } else if (rowNum == 2) {
        chosenArchetype = "Modern Italian";
        forcedSaaTargets('targets', 1, 0);
        forcedSaaTargets('targets', 2, 0);
    } else if (rowNum == 3) {
        chosenArchetype = "Shock and Awe";
        forcedSaaTargets('targets', 1, 0);
        forcedSaaTargets('targets', 2, 0);
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
        if (cell.className != "aTarget" && justChanged == false) {
            cell.className = "aTarget";
            targetCellLog.push(cell);
            return 1;
        } else if (cell.className != "notATarget") {
            cell.className = "notATarget"
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
        console.log('All good!');
    } else {
        return ('Pick an Archetype');
    }
    var skillPointsString = document.getElementById("skills");
    var skillPoints = parseInt(skillPointsString.innerHTML);
    skillCounter = countTakenSkills(tableName);
    var cell = document.getElementById(tableName).getElementsByTagName("tr")[rowNum].getElementsByTagName("td")[cellNum];
    var justChanged = false;
    var is_takenI;
    if (skillCounter < skillPoints + 2) {
        if (skillCounter + 1 == skillPoints + 2) {
            for (is_takenI = 0; is_takenI < skillCellLog.length; is_takenI++) {
                skillCellLog[is_takenI].className = "noSkill";
            }
            skillCellLog = [];
            justChanged = true;
        }
        if (cell.className != "gotSkills" && justChanged == false) {
            cell.className = "gotSkills";
            skillCellLog.push(cell);
            return 1;
        } else if (cell.className != "noSkill") {
            cell.className = "noSkill"
            return 0;
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

function slidePanel(id) {
    var panel = document.getElementById(id);
    if(panel.className == "infocus") {
        panel.className = "nodisplay";
    } else {
        panel.className = "infocus";
    }
}