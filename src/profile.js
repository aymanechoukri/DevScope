import { GITHUB_API, MOCK_API } from "./api.js";

const params = new URLSearchParams(window.location.search);
let username = params.get("username");
let user = null;
let repo = null;

let p1 = null;
let p2 = null;

export async function ShowProfile(parent, parent2) {
  p1 = parent;
  p2 = parent2;

  parent.innerHTML = "";
  parent2.innerHTML = "";

  if (!username) {
    throw new eroor("user introvable");
  }

  const res = await fetch(`${GITHUB_API}/${username}`);
  const res1 = await fetch(`${GITHUB_API}/${username}/repos`);
  if (!res.ok || !res1.ok) {
    throw new Error("User not found");
  }
  user = await res.json();
  repo = await res1.json();

  const html = `<div
            class="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#8E1EA2]/20 blur-3xl transition duration-500 group-hover:bg-[#D552A3]/25"
          ></div>

          <div class="relative">
            <div
              class="absolute -inset-1 rounded-full bg-gradient-to-r from-[#8E1EA2] to-[#D552A3] opacity-70 blur-md"
            ></div>
            <img
              src="${user.avatar_url}
              alt="Profile image"
              class="relative h-24 w-24 rounded-full border-2 border-[#D552A3]/60 object-cover"
            />
            <span
              class="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-[#100B16] bg-green-400"
            ></span>
          </div>

          <div class="relative text-center">
            <h2 class="text-xl font-bold tracking-wide">${user.name}</h2>
            <h3 class="mt-1 text-sm text-[#D552A3]">@${user.login}</h3>
          </div>

          <div
            class="flex w-full flex-col items-center gap-2 border-y border-white/10 py-4 text-sm text-gray-400"
          >
            <p class="flex items-center gap-2">
              <span class="text-[#D552A3]">⌖</span>
              ${user.location}
            </p>
          </div>

          <div class="relative grid w-full grid-cols-3 gap-2">
            <article class="flex flex-col items-center gap-1">
              <p class="text-xl font-bold text-white">${user.public_repos}</p>
              <p class="text-xs text-gray-400">Dépôts</p>
            </article>

            <article
              class="flex flex-col items-center gap-1 border-x border-white/10"
            >
              <p class="text-xl font-bold text-white">${user.followers}</p>
              <p class="text-xs text-gray-400">Abonnés</p>
            </article>

            <article class="flex flex-col items-center gap-1">
              <p class="text-xl font-bold text-white">${user.following}</p>
              <p class="text-xs text-gray-400">Abonnements</p>
            </article>
          </div>

          <div class="relative flex w-full flex-col gap-3 pt-2">
            <button data-id=${user.id}
              class="w-full cursor-pointer rounded-xl bg-gradient-to-r from-[#8E1EA2] to-[#D552A3] px-4 py-3 text-sm font-semibold text-white shadow-[0_5px_20px_rgba(142,30,162,0.25)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_5px_25px_rgba(213,82,163,0.4)]"
            >
              + Ajouter à la shortlist
            </button>

            <button
              class="w-full rounded-xl cursor-pointer border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-[#D552A3]/50 hover:bg-[#D552A3]/10 hover:text-white"
            ><a href=${user.html_url}>
              Voir le profil original
              </a>
            </button>
          </div>
        </div>`;

  repo.forEach((re) => {
    const html1 = `<article
              class="relative flex flex-col gap-4 rounded-xl border border-white/[0.07] bg-white/[0.03] p-4 transition-all duration-300 group-hover:border-[#D552A3]/20 group-hover:bg-white/[0.05]"
            >
              <div class="flex items-center justify-between">
                <h3
                  class="text-base font-bold text-white transition-colors duration-300 group-hover:text-[#E879C0]"
                >
                  ${re.name}
                </h3>

                <i class="fa-solid fa-code-branch text-sm text-[#D552A3]"></i>
              </div>

              <p class="text-sm text-white/40">Aucune description.</p>

              <div
                class="flex flex-wrap items-center gap-4 border-t border-white/[0.07] pt-3"
              >
                <span class="flex items-center gap-2 text-xs text-white/60">
                  <i class="fa-solid fa-circle text-[7px] text-[#D552A3]"></i>
                  ${re.language}
                </span>

                <span class="flex items-center gap-2 text-xs text-white/60">
                  <i class="fa-regular fa-star text-[#E879C0]"></i>
                  ${re.stargazers_count}
                </span>

                <span class="flex items-center gap-2 text-xs text-white/60">
                  <i class="fa-solid fa-code-branch text-[#E879C0]"></i>
                  0
                </span>
              </div>
            </article>`;
    parent2.insertAdjacentHTML("beforeend", html1);
  });
  parent.insertAdjacentHTML("beforeend", html);
}

async function FetchData(user) {
  try {
    const res = await fetch(`${GITHUB_API}/${user}`);
    const res1 = await fetch(`${GITHUB_API}/${user}/repos`);
    if (!res.ok || !res1.ok) {
      throw new Error("User not found");
    }

    user = await res.json();
    repo = await res1.json();
    window.location.href = `./profile.html?username=${user.login}`;
  } catch (error) {
    console.error(error);
  }
}

export function SerchUsers(serch, serchValue) {
  serchValue.addEventListener("input", (e) => {
    username = e.target.value;
  });

  serch.addEventListener("click", () => {
    FetchData(username);
    ShowProfile(p1, p2);
  });
}

async function PostData() {
  const res = await fetch(`${GITHUB_API}/${username}`);
  const res1 = await fetch(`${GITHUB_API}/${username}/repos`);
  if (!res.ok || !res1.ok) {
    throw new Error("User not found");
  }
  user = await res.json();
  repo = await res1.json();
  try {
    const res = await fetch(MOCK_API, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: user.login,
        avatar_url: user.avatar_url,
        language: repo.find((r) => r.language)?.language || "Unknown",
        description: user.bio || "No description available.",
        addedAt: new Date().toISOString().split("T")[0],
      }),
    });
    const data = res.json();
  } catch (error) {
    console.error(error);
  }
}

export function Submit(parent) {
  parent.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-id]");
    if (!btn) return;
    PostData();
  });
}
