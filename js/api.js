async function load_selected() {
    console.info("--> Load spell from API by name");
    spell_url = spellList.value;

    if (spell_url != null) {
        await $.getJSON(spell_url, function (data) {
            attr_dropdowns[1].value = data.level;
            attr_dropdowns[2].value = data.school.name;

            if (data.damage) {
                attr_dropdowns[3].value = data.damage.damage_type.name;
            } else {
                attr_dropdowns[3].value = "None";
            }

            if (data.area_of_effect) {
                attr_dropdowns[4].value = `${data.area_of_effect.type} (${data.area_of_effect.size})`;
            } else {
                attr_dropdowns[4].value = "None";
            }

            attr_dropdowns[5].value = data.range;
            attr_dropdowns[6].value = data.duration;
        });
        draw();
    }
}
async function get_spell_list() {
    console.info("--> Load spell list from API");
    await $.getJSON(
        "https://www.dnd5eapi.co/api/2014/spells/",
        function (data) {
            array = data.results;
            array.push({
                name: "[ Custom ]",
                url: null,
            });
            spellList.innerHTML = "";
            for (var i = 0; i < array.length; i++) {
                var option = document.createElement("option");
                if (array[i].url != null) {
                    option.setAttribute(
                        "value",
                        `https://www.dnd5eapi.co${array[i].url}`,
                    );
                } else {
                    option.setAttribute("value", null);
                }
                option.text = array[i].name;
                spellList.appendChild(option);
            }
        },
    );
}
