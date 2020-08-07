const PROMPT = '[maas@] $ ';

let term = new Terminal({
  rows: 45,
  theme: {
    selection: '#4C566A55',
    background: '#2E3440',
    foreground: '#ECEFF4',
  },
});

term.open(document.getElementById('terminal'));
term.focus();

term.writeln('Under construction...');
term.write(`\r\n${PROMPT}`);

window.scrollTo(0, 0);

let history = [];
let pointer = 0;
let command = '';

// TODO: Add boot sequence...

term.onData(event => {
  switch (event) {
    case '\r': // Enter
      execute(command);
    case '\u0003': // Ctrl+C
      command = '';
      pointer = history.length;
      term.write(`\r\n${PROMPT}`);
      break;
    case '\u0010': // Ctrl+P
      pointer = Math.max(pointer - 1, 0);
      term.write('\x1b[2K');
      term.write(`\r${PROMPT}`);
      term.write(history[pointer] || '')
      command = history[pointer] || '';
      break;
    case '\u000e': // Ctrl+N
      pointer = Math.min(pointer + 1, history.length);
      term.write('\x1b[2K');
      term.write(`\r${PROMPT}`);
      term.write(history[pointer] || '')
      command = history[pointer] || '';
      break;
    case '\u007F': // Backspace (DEL)
      if (term._core.buffer.x > PROMPT.length) {
        command = command.slice(0, -1);
        term.write('\b \b');
      }
      break;
    case '\u0015': // Ctrl+U
      command = '';
      term.write('\x1b[2K');
      term.write(`\r${PROMPT}`);
      break;
    case '\f': // Ctrl+L
      term.clear();
      break;
    default: // Print all other characters for demo
      if (event.charCodeAt(0) < 30 || event.charCodeAt(0) > 128) {
        break;
      }
      command += event;
      term.write(event);
  }
});

function execute(command) {
  history.push(command);
  term.writeln('\r');
  tokens = command.split(' ');

  if (commands[tokens[0]]) {
    commands[tokens[0]](tokens.slice(1));
  } else {
    term.writeln(`Command not found: ${command}`);
  }
}
