process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('readable', () => {
  const myname = process.stdin.read();
  if (myname) {
    process.stdout.write(`Your Name is: ${myname}\n`);
  }
});
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
