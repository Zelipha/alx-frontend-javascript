export default function guardrail(mathFunction) {
  const queue = [];

  try {
    queue.push(mathFunction());
  } catch (err) {
    queue.push(err.toString());
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
