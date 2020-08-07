const commands = {
  cat,
  ls,
};

function ls(args) {
  term.writeln(args.toString());
}

function cat(args) {
  term.writeln(args.toString());
}
