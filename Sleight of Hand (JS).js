var chosenArchetype;
var chosenTargets = [];

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
    } else if (rowNum == 2) {
        chosenArchetype = "Modern Italian";
    } else if (rowNum == 3) {
        chosenArchetype = "Shock and Awe";
        forcedSaaTargets('targets', 1, 0);
        forcedSaaTargets('targets', 2, 0);
    }
}

function chooseTarget(tableName, rowNum, method) {

}

function forcedSaaTargets(tableName, rowNum, cellNum) {
    var cell = document.getElementById(tableName).getElementsByTagName("tr")[rowNum].getElementsByTagName("td")[cellNum];

    if (chosenArchetype == "Shock and Awe") {
        cell.className = "saaTarget";
        return 1;
    }
}

function is_taken(tableName, rowNum, cellNum) {
    var targetCounter = countTakenTargets(tableName);
    var cell = document.getElementById(tableName).getElementsByTagName("tr")[rowNum].getElementsByTagName("td")[cellNum];
    console.log(targetCounter);
    if (targetCounter < 3 || targetCounter - 1 == 2) {
        if (cell.className != "aTarget") {
            cell.className = "aTarget";
            return 1;
        } else if (cell.className != "notATarget") {
            cell.className = "notATarget"
            return 0;
        }    
    }
}

function countTakenTargets(tableName) {
    var num = 0;
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

function slidePanel(id) {
    var panel = document.getElementById(id);
    if(panel.className == "infocus") {
        panel.className = "nodisplay";
    } else {
        panel.className = "infocus";
    }
}