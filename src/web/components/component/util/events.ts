export const allEvents = (() => {
  const eventsSet: Set<string> = new Set<string>();

  for (const property in window) {
    if (/^on/.test(property)) {
      eventsSet.add(property.substring(2));
    }
  }

  return eventsSet;
})();
