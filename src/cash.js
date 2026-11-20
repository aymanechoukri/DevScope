const time = 5 * 60 * 1000;

export function setCash(key, value) {
    localStorage.setItem(key, JSON.stringify({date: Date.now(), value}));
}

export function getCash(key) {
    const enter = localStorage.getItem(key);
    if (enter === null) return null;
    const valueUser = JSON.parse(enter);
    if  (Date.now() - valueUser.date > time) return null;
    return valueUser.value;
}