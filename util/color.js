const COLORS = {
  red     : '191;97;106',
  orange  : '208;135;112',
  yellow  : '235;203;139',
  green   : '163;190;140',
  magenta : '180;142;173',
  teal    : '143;188;187',
  cyan    : '136;192;208',
  blue    : '129;161;193',
}


function colorize(string, color) {
  return `\u001b[38;2;${color}m${string}\u001b[0m`;
}

function red(string) {
  return colorize(string, COLORS.red);
}

function orange(string) {
  return colorize(string, COLORS.orange);
}

function yellow(string) {
  return colorize(string, COLORS.yellow);
}

function green(string) {
  return colorize(string, COLORS.green);
}

function magenta(string) {
  return colorize(string, COLORS.magenta);
}

function teal(string) {
  return colorize(string, COLORS.teal);
}

function cyan(string) {
  return colorize(string, COLORS.cyan);
}

function blue(string) {
  return colorize(string, COLORS.blue);
}

