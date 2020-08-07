const PROMPT = '[maas@] $ ';

let term = new Terminal({
  rows: 43,
  theme: {
    selection: '#4C566A55',
    background: '#2E3440',
    foreground: '#ECEFF4',
  },
});

term.open(document.getElementById('terminal'));
term.focus();

term.writeln('Welcome!');
term.write(`\r\n${PROMPT}`);

term.onData(event => {
  console.log(event);
  switch (event) {
    case '\r': // Enter
    case '\u0003': // Ctrl+C
      term.write(`\r\n${PROMPT}`);
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
