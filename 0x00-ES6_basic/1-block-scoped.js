export default function taskBlock (trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    // eslint-disable-next-line no-unused-vars, no-shadow
    task = true;
    // eslint-disable-next-line no-unused-vars, no-shadow
    task2 = false;
  }

  return [task, task2];
}
