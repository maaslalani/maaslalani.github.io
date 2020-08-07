const PROMPT = '[maas@] $ '
var term = new Terminal({
  rows: 43,
  theme: {
    selection: '#4C566A55',
    background: '#2E3440',
    foreground: '#ECEFF4',
  },
});
term.open(document.getElementById('terminal'));

function runFakeTerminal() {
  if (term._initialized) {
    return;
  }

  term._initialized = true;
  term.focus();

  term.writeln('Welcome!');
  prompt(term);

  term.onData(event => {
    console.log(event);
    switch (event) {
      case '\r': // Enter
      case '\u0003': // Ctrl+C
        prompt(term);
        break;
      case '\u007F': // Backspace (DEL)
        if (term._core.buffer.x > PROMPT.length) {
          term.write('\b \b');
        }
        break;
      case '\u000c': // Ctrl+L
        term.clear();
        break;
      default: // Print all other characters for demo
        term.write(event);
    }
  });
}

function prompt(term) {
  term.write(`\r\n${PROMPT}`);
}
runFakeTerminal();
