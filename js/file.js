async function get_attr_lists() {
    console.info("--> Load spell attrs from JSON");
    $.getJSON("spells.json", function (json) {
        for (let item in json) {
            var selectList = attr_dropdowns[item];
            selectList.innerHTML = "";
            for (let attr in json[item]) {
                var option = document.createElement("option");
                option.setAttribute("value", attr);
                option.text = `${attr} (n = ${json[item][attr]["value"]})`;
                selectList.appendChild(option);
            }
        }
    });
}
