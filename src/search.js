import { GITHUB_API } from "./api.js";

export let data = null;

export function SerchUsers(serch, serchValue) {
    let valueSerch = "";

    serchValue.addEventListener("input", (e) => {
        valueSerch = e.target.value;
    });

    serch.addEventListener("click", () => {
        FetchData(valueSerch);
    })
}

async function FetchData(user) {
    try {
        const res = await fetch(`${GITHUB_API}/${user}`)
        if (!res.ok) {
            throw new Error("User not found");
        }
        data = await res.json();

          data ?  window.location.href = `./profile.html?username=${data.login}` : './index.html';
    } catch (error) {
        console.error(error);
    }
}