// ================ DOM OBJECTS =================
const canvas = document.getElementById("spellCanvas");
const spellList = document.getElementById("spellList");

const attr_dropdowns = [
    null,
    document.getElementById("k-1"),
    document.getElementById("k-2"),
    document.getElementById("k-3"),
    document.getElementById("k-4"),
    document.getElementById("k-5"),
    document.getElementById("k-6"),
];
const attr_checkboxes = [
    null,
    document.getElementById("k1-enabled"),
    document.getElementById("k2-enabled"),
    document.getElementById("k3-enabled"),
    document.getElementById("k4-enabled"),
    document.getElementById("k5-enabled"),
    document.getElementById("k6-enabled"),
];
const attr_colors = [
    null,
    document.getElementById("k1-color"),
    document.getElementById("k2-color"),
    document.getElementById("k3-color"),
    document.getElementById("k4-color"),
    document.getElementById("k5-color"),
    document.getElementById("k6-color"),
];
const background_toggle = document.getElementById("toggle_background");
const background_color = document.getElementById("background-color");
const dots_toggle = document.getElementById("toggle_dots");
const dots_color = document.getElementById("dots-color");

const rotation_slider = document.getElementById("rotation");

// ================ FILE OPTIONS =================
const DATA_ATTRS = {
    1: "Level",
    2: "School",
    3: "Damage Type",
    4: "Area",
    5: "Range",
    6: "Duration",
};

// ================ DRAW OPTIONS =================
const totalDots = 13;
const diameter = 800;
const dotRadius = 5;
const ctx = canvas.getContext("2d");
const padding = dotRadius * 2;
const size = diameter + padding * 2;
const centerX = size / 2;
const centerY = size / 2;
const radius = diameter / 2;
