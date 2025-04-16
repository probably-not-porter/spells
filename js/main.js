$(document).ready(async function () {
    console.info("--> Start on load");
    await get_spell_list();
    await get_attr_lists();
    await load_selected();
});

async function adjust_attr() {
    console.info("--> Adjust attribute (Custom)");
    document.getElementById("spellList").value = null;
    draw();
}
