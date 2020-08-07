const commands = {
  cat,
  ls,
};

function ls(args) {
  if (args.length == 1 && args[0] == '-1') {
    term.writeln(Object.keys(files).join('\r\n'));
    return;
  }
  term.writeln(Object.keys(files).join(' '));
}

function cat(args) {
  if (args.length !== 1) {
    term.writeln(`requires 1 argument, provided ${args.length}`)
    return;
  }
  if (!files[args[0]]) {
    term.writeln(`file not found: ${args[0]}`)
    return;
  }
  term.writeln(files[args[0]]);
}
