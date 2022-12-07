export function translateRuntime(runTime: number) {
  const hour = 60;
  if (runTime > hour) {
    const hours = Math.trunc(runTime / hour);
    const mins = runTime % hour;
    return `${hours}h ${mins}m`;
  }

  return `${runTime}m`;
}
