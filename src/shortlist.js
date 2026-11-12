import { MOCK_API } from "./api.js";

let data = null;


export async function FetchData(parent) {
    refrsh(parent)
    try {
        const res = await fetch(MOCK_API)
        if(!res.ok) {
            throw new error("User Not Found");
        }
        data = await res.json()
    } catch (error) {
        console.error(error);
    } finally {
        parent.innerHTML = "";
    }

    parent.innerHTML = "";

    data.forEach(user => {
        const html = `
        <article
            class="group relative z-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#D552A3]/40 hover:bg-white/[0.06] hover:shadow-[0_8px_35px_rgba(142,30,162,0.18)] md:p-6"
          >
            <div
              class="flex flex-col justify-between gap-6 xl:flex-row xl:items-center"
            >
              <div class="flex items-start gap-4">
                <div class="relative shrink-0">
                  <img
                    src=${user.avatar_url}
                    alt="Profile image"
                    class="h-16 w-16 rounded-2xl border-2 border-[#D552A3]/40 object-cover shadow-[0_0_20px_rgba(213,82,163,0.15)] transition-all duration-300 group-hover:border-[#D552A3]"
                  />
                  <span
                    class="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-[#100B16] bg-green-400"
                  ></span>
                </div>

                <div class="flex flex-col gap-2">
                  <h3
                    class="text-lg font-bold text-white transition-colors group-hover:text-[#F49ACD]"
                  >
                    ${user.username}
                  </h3>

                  <div
                    class="flex flex-wrap items-center gap-2 text-sm text-gray-400"
                  >
                    <span class="h-1 w-1 rounded-full bg-gray-600"></span>
                    <span
                      class="rounded-md border border-[#8E1EA2]/30 bg-[#8E1EA2]/15 px-2 py-1 text-xs font-semibold text-[#DDA0E8]"
                    >
                      ${user.language}
                    </span>
                  </div>

                  <p class="flex items-center gap-2 text-xs text-gray-500">
                    <i class="fa-regular fa-calendar text-[#D552A3]"></i>
                    ${user.addedAt}
                  </p>
                </div>
              </div>

              <div
                class="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between xl:justify-end"
              >
                <div
                  class="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3"
                >
                  <div class="flex items-center gap-1 text-sm">
                    <i class="fa-solid fa-star text-yellow-400"></i>
                    <i class="fa-solid fa-star text-yellow-400"></i>
                    <i class="fa-solid fa-star text-yellow-400"></i>
                    <i class="fa-regular fa-star text-gray-600"></i>
                    <i class="fa-regular fa-star text-gray-600"></i>
                  </div>
                  <span class="text-xs font-semibold text-gray-400">3/5</span>
                </div>

                <div class="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    class="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-2.5 text-xs font-bold text-red-400 transition-all duration-300 hover:border-red-500/50 hover:bg-red-500/20 hover:shadow-[0_0_15px_rgba(239,68,68,0.15)]"
                  >
                    <i class="fa-solid fa-xmark mr-1"></i>
                    REFUSÉ
                  </button>

                  <button
                    type="button"
                    class="rounded-xl border border-[#D552A3]/30 bg-gradient-to-r from-[#8E1EA2]/20 to-[#D552A3]/10 px-4 py-2.5 text-xs font-bold text-[#F49ACD] transition-all duration-300 hover:border-[#D552A3]/60 hover:from-[#8E1EA2]/40 hover:to-[#D552A3]/30 hover:shadow-[0_0_20px_rgba(213,82,163,0.15)]"
                  >
                    <i class="fa-solid fa-pen-to-square mr-1"></i>
                    Modifier
                  </button>

                  <button
                    type="button"
                    class="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-bold text-gray-400 transition-all duration-300 hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-400"
                  >
                    <i class="fa-solid fa-trash-can mr-1"></i>
                    Supprimer
                  </button>
                </div>
              </div>
            </article>
        `
        parent.insertAdjacentHTML("beforeend", html)
    })
}

function refrsh(ref) {
    ref.innerHTML = `
        <p class="text-purple-600 text-sm font-medium bg-purple-500/10 border border-purple-500/20 rounded-lg px-4 py-3 text-center animate-pulse">
            <i class="fa-solid fa-spinner fa-spin mr-2"></i>
            Loading...
        </p>
    `;
}