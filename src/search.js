import { GITHUB_API } from "./api.js";

export let data = null;

export function SerchUsers(serch, serchValue, parent) {
    let valueSerch = "";

    serchValue.addEventListener("input", (e) => {
        valueSerch = e.target.value;
    });

    serch.addEventListener("click", () => {
        FetchData(valueSerch, parent);
    })
}

async function FetchData(user, parent) {
    try {
        const res = await fetch(`${GITHUB_API}/${user}`)
        if (!res.ok) {
            ShowError(parent);
            throw new Error("User not found");
        }
        data = await res.json();

          data ?  window.location.href = `./profile.html?username=${data.login}` : './index.html';
    } catch (error) {
        console.error(error);
    }
}

function ShowError(parent) {
    parent.innerHTML = `
        <p class="text-red-500 text-sm font-semibold bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-center">
            <i class="fa-solid fa-circle-exclamation mr-2"></i>
            Utilisateur introuvable
        </p>
    `;
}