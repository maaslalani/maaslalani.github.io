function format(string) {
  console.log(JSON.stringify(string));
  let formatted = string.replace(/\n/g, '\r\n');
  console.log(JSON.stringify(formatted));
  return formatted;
}

const ABOUT = format(`
i have no idea what i am doing.
im just making things up as i go.
`);

const CONTACT = format(`
Email:   maas@live.ca
Github:  @maaslalani
Twitter: @maaslalani
`);

const PROJECTS = format(`
Visit https://producthunt.com/@maaslalaniii/made
* JustFocus
* RemoveVanityMetrics
* Create A Signature
* Final Grade Calculator
* Founder Rewind
* Mafia List
* Hawkeye User Testing
* Offset List
* Hawkeye Access
* size.link
`);

const README = format(`
Welcome to my website.
Try \`ls\` and \`cat\`.
`);

const files = {
  'about.txt': ABOUT,
  'contact.txt': CONTACT,
  'projects.txt': PROJECTS,
  'README.md': README,
};
