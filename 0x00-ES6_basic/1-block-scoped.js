export default function taskBlock(trueOrFalse) {
  // Declare constants outside the if block
  // These will be the values returned by the function
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // These constants are block-scoped and don't affect the outer constants
    // They are separate variables with the same names
    const task = true;
    const task2 = false;
  }

  // Always returns the outer constants, regardless of the if block execution
  return [task, task2];
}
