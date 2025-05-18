$(document).ready(async function () {
    console.info("--> Start on load");
    await get_spell_list();
    await get_attr_lists();
    await load_selected();
    setTimeout(() => {
        draw();
    }, "100");
});

async function adjust_attr() {
    console.info("--> Adjust attribute (Custom)");
    document.getElementById("spellList").value = null;
    draw();
}
function toggle_menu() {
    $("#options").slideToggle("slow");
    menuOpen = !menuOpen;
    if (menuOpen == true) {
        document.getElementById("options_toggle").innerHTML =
            `<i class="bi bi-x"></i>`;
    } else {
        document.getElementById("options_toggle").innerHTML =
            `<i class="bi bi-list"></i>`;
    }
}
