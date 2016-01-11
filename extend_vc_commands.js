function terminalActive(currentApplication) {
  if (currentApplication === "iTerm" || currentApplication === "Terminal") {
    return true;
  } else {
    return false;
  }
}

function vimActive(currentApplication, mode) {
  if (terminalActive(currentApplication) && mode[0].lastIndexOf('vim', 0) === 0) {
    return true;
  } else {
    return false;
  }
}

function vimActiveNormalMode(currentApplication, mode) {
  if (terminalActive(currentApplication) && mode[0] === "vim-normal") {
    return true;
  } else {
    return false;
  }
}

function vimActiveInsertMode(currentApplication, mode) {
  if (terminalActive(currentApplication) && mode[0] === "vim-insert") {
    return true;
  } else {
    return false;
  }
}

Commands.extend("sage", function() {
  if (vimActive(this.currentApplication(), Commands.mode)) {
    this.key("Escape");
    this.key(":");
    this.key("W");
    this.key("A");
    this.key("Return");
    this.stop();
  }
});

Commands.extend("trail", function(input) {
  if (vimActive(this.currentApplication(), Commands.mode)) {
    this.key("Escape");
    this.key("?");
    this.string(input.value);
    this.key("Return");
    this.stop();
  }
});

Commands.extend("crew", function(input) {
  if (vimActive(this.currentApplication(), Commands.mode)) {
    this.key("Escape");
    this.key("/");
    this.string(input.value);
    this.key("Return");
    this.stop();
  }
});

Commands.extend("seltrail", function(input) {
  if (vimActive(this.currentApplication(), Commands.mode)) {
    this.key("O");
    this.key("?");
    this.string(input.value);
    this.key("Return");
    this.stop();
  }
});

Commands.extend("selcrew", function(input) {
  if (vimActive(this.currentApplication(), Commands.mode)) {
    this.key("/");
    this.string(input.value);
    this.key("/");
    this.key("E");
    this.key("Return");
    this.stop();
  }
});

Commands.extend("snatch", function() {
  if (vimActive(this.currentApplication(), Commands.mode)) {
    this.key("X");
    this.stop();
  }
});

Commands.extend("dizzle", function() {
  if (vimActive(this.currentApplication(), Commands.mode)) {
    this.key("Escape");
    this.key("U");
    this.stop();
  }
});

Commands.extend("rizzle", function() {
  if (vimActive(this.currentApplication(), Commands.mode)) {
    this.key("Escape");
    this.key("R", "Control");
    this.stop();
  }
});

Commands.extend("shabble", function() {
  if (vimActive(this.currentApplication(), Commands.mode)) {
    this.key("Escape");
    this.key("V", "Shift");
    this.key("<");
    this.stop();
  }
});

Commands.extend("shabber", function() {
  if (vimActive(this.currentApplication(), Commands.mode)) {
    this.key("Escape");
    this.key("V", "Shift");
    this.key(">");
    this.stop();
  }
});

Commands.extend("marneck", function() {
  if (vimActive(this.currentApplication(), Commands.mode)) {
    this.key("N");
    this.stop();
  }
});

Commands.extend("marpreev", function() {
  if (vimActive(this.currentApplication(), Commands.mode)) {
    this.key("N", "Shift");
    this.stop();
  }
});

Commands.extend("marco", function() {
  if (vimActive(this.currentApplication(), Commands.mode)) {
    this.key("/");
    this.stop();
  }
});

Commands.extend("shockoon", function() {
  if (vimActive(this.currentApplication(), Commands.mode)) {
    this.key("Escape");
    this.key("O");
    this.stop();
  }
});

Commands.extend("shockey", function() {
  if (vimActive(this.currentApplication(), Commands.mode)) {
    this.key("Escape");
    this.key("O", "Shift");
    this.stop();
  }
});

Commands.extend("doomway", function() {
  if (vimActive(this.currentApplication(), Commands.mode)) {
    this.key("Escape");
    this.key("G", "Shift");
    this.stop();
  }
});

Commands.extend("jeepway", function() {
  if (vimActive(this.currentApplication(), Commands.mode)) {
    this.key("Escape");
    this.key("G");
    this.key("G");
    this.stop();
  }
});

Commands.extend("shackle", function() {
  if (vimActive(this.currentApplication(), Commands.mode)) {
    this.key("Escape");
    this.key("V", "Control");
    this.stop();
  }
});

Commands.extend("snipple", function() {
  if (vimActiveNormalMode(this.currentApplication(), Commands.mode)) {
    this.key("I");
    this.key("Delete", "Command");
    this.stop();
  }
});
