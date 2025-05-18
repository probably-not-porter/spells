function draw() {
    console.info("--> Draw spell");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = size;
    canvas.height = size;

    $.getJSON("spells.json", function (json) {
        let spelltext = `${json[1][attr_dropdowns[1].value]["sound"]}${json[2][attr_dropdowns[2].value]["sound"]}${json[3][attr_dropdowns[3].value]["sound"]}-${json[4][attr_dropdowns[4].value]["sound"]}${json[5][attr_dropdowns[5].value]["sound"]}${json[6][attr_dropdowns[6].value]["sound"]}`;
        spelltext = spelltext.replace("'-'", "");
        spelltext = spelltext
            .toLowerCase()
            .split("'")
            .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
            .join("'")
            .split("-")
            .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
            .join("-");
        spellname.innerText = `"${spelltext}"`;
        // get K vals from dropdown menus
        kArr = [
            json[1][attr_dropdowns[1].value]["value"],
            json[2][attr_dropdowns[2].value]["value"],
            json[3][attr_dropdowns[3].value]["value"],
            json[4][attr_dropdowns[4].value]["value"],
            json[5][attr_dropdowns[5].value]["value"],
            json[6][attr_dropdowns[6].value]["value"],
        ];
        // get x,y points for drawing
        dotArray = buildDotArr(centerX, centerY, radius);

        // CREATE BACKGROUND LINES
        if (background_toggle.checked) {
            drawBackgroundLines(ctx, dotArray);
        }

        // CREATE SPELL LINES
        drawSpellLines(ctx, dotArray, kArr);

        // DRAW DOTS
        if (dots_toggle.checked) {
            drawDots(ctx, dotArray, dotRadius);
        }
    });
}

function buildDotArr(centerX, centerY, radius) {
    console.info("---> Draw spell (buildDotArr)");
    var dotArray = [];
    for (let i = 0; i < totalDots; i++) {
        var angle =
            (2 * Math.PI * i) / totalDots +
            1.73 * Math.PI +
            (rotation_slider.value / 50) * Math.PI;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        dotArray.push([x, y]);
    }
    return dotArray;
}

function drawDots(ctx, dotArray, dotRadius) {
    console.info("---> Draw spell (drawDots)");
    for (let i = 0; i < dotArray.length; i++) {
        pair = dotArray[i];
        ctx.beginPath();
        ctx.arc(pair[0], pair[1], dotRadius, 0, 2 * Math.PI);
        ctx.fillStyle = dots_color.value;
        ctx.fill();
    }
}

function drawSpellLines(ctx, dotArray, kArr) {
    console.info("---> Draw spell (drawSpellLines)");
    // length of K must be less than N/2
    for (let k = 1; k <= kArr.length; k++) {
        if (attr_checkboxes[k].checked == true) {
            ctx.strokeStyle = attr_colors[k].value;
            ctx.lineWidth = 3;
            // for each K at dot 0
            let kval = kArr[k - 1];
            if (kval != null) {
                k_binary = `0000000000${Number(kval - 0).toString(2)}1`; // cheat at binary >:D
                k_binary = k_binary.substring(
                    k_binary.length - totalDots,
                    k_binary.length,
                );
                digits = k_binary.split("");
                for (x = totalDots; x > 0; x--) {
                    digit = digits[x];
                    if (digit == 1) {
                        ctx.beginPath();
                        ctx.moveTo(dotArray[x][0], dotArray[x][1]);
                        ctx.lineTo(
                            dotArray[(x + k) % totalDots][0],
                            dotArray[(x + k) % totalDots][1],
                        );
                        ctx.stroke();
                    }
                }
            }
        }
    }
}

function drawBackgroundLines(ctx, dotArray) {
    console.info("---> Draw spell (drawBackgroundLines)");
    ctx.strokeStyle = background_color.value;
    // for each dot i
    for (let i = 0; i < dotArray.length; i++) {
        // draw a line to each other dot
        for (let j = 0; j < dotArray.length; j++) {
            ctx.beginPath();
            ctx.moveTo(dotArray[i][0], dotArray[i][1]);
            ctx.lineTo(dotArray[j][0], dotArray[j][1]);
            ctx.stroke();
        }
    }
}
