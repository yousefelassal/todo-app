import AbstractPage from "./AbstractPage.js";

export default class extends AbstractPage {
    constructor(){
        super();
        this.setTitle('FAQs');
    }

    async getHtml() {
        return `
        <section class="leading-relaxed max-w-screen-xl pt-12 mx-auto px-4 md:px-8 isolate">
            <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
                <div class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
            </div>
            <div class="space-y-3 text-center">
                <h1 class="text-3xl text-gray-100 font-semibold">
                    Frequently Asked Questions
                </h1>
                <p class="text-gray-300 max-w-lg mx-auto text-base">
                Can’t find the answer you’re looking for? Reach out to our <a href="/support" data-link class="text-indigo-600">support</a> team.</p>
            </div>
            <div class="mt-14 max-w-2xl mx-auto">
            <div class="space-y-4 divide-y divide-gray-700">
            <details
              class="group p-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary
                class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-100"
              >
                <h2 class="font-medium">
                  How do you make holy water?
                </h2>
          
                <span class="relative h-5 w-5 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" stroke-width="2" class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0 fill-gray-100" stroke="currentColor" y="0px" width="24" height="24" viewBox="0 0 50 50">
                    <path d="M 24 9 L 24 24 L 9 24 L 9 26 L 24 26 L 24 41 L 26 41 L 26 26 L 41 26 L 41 24 L 26 24 L 26 9 Z"></path>
                  </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100 fill-gray-100" stroke="currentColor" stroke-width="2" width="24" height="24" viewBox="0 0 50 50">
                        <path d="M 9 24 L 9 26 L 41 26 L 41 24 Z"></path>
                    </svg>
                </span>
              </summary>
          
              <p class="mt-4 leading-relaxed text-gray-400">
                You boil the hell out of it.
              </p>
            </details>
          
            <details
              class="group p-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary
                class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-100"
              >
                <h2 class="font-medium">
                  Why did the invisible man turn down the job offer?
                </h2>
          
                <span class="relative h-5 w-5 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" stroke-width="2" class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0 fill-gray-100" stroke="currentColor" y="0px" width="24" height="24" viewBox="0 0 50 50">
                    <path d="M 24 9 L 24 24 L 9 24 L 9 26 L 24 26 L 24 41 L 26 41 L 26 26 L 41 26 L 41 24 L 26 24 L 26 9 Z"></path>
                  </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100 fill-gray-100" stroke="currentColor" stroke-width="2" width="24" height="24" viewBox="0 0 50 50">
                        <path d="M 9 24 L 9 26 L 41 26 L 41 24 Z"></path>
                    </svg>
                </span>
              </summary>
          
              <p class="mt-4 leading-relaxed text-gray-400">
                He couldn't see himself doing it.
              </p>
            </details>
            <details
              class="group p-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary
                class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-100"
              >
                <h2 class="font-medium">
                    What's the best thing about Switzerland?
                </h2>
          
                <span class="relative h-5 w-5 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" stroke-width="2" class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0 fill-gray-100" stroke="currentColor" y="0px" width="24" height="24" viewBox="0 0 50 50">
                    <path d="M 24 9 L 24 24 L 9 24 L 9 26 L 24 26 L 24 41 L 26 41 L 26 26 L 41 26 L 41 24 L 26 24 L 26 9 Z"></path>
                  </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100 fill-gray-100" stroke="currentColor" stroke-width="2" width="24" height="24" viewBox="0 0 50 50">
                        <path d="M 9 24 L 9 26 L 41 26 L 41 24 Z"></path>
                    </svg>
                </span>
              </summary>
          
              <p class="mt-4 leading-relaxed text-gray-400">
                I don't know, but the flag is a big plus.
              </p>
            </details>
            <details
              class="group p-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary
                class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-100"
              >
                <h2 class="font-medium">
                  What do you call someone with no body and no nose?
                </h2>
          
                <span class="relative h-5 w-5 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" stroke-width="2" class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0 fill-gray-100" stroke="currentColor" y="0px" width="24" height="24" viewBox="0 0 50 50">
                    <path d="M 24 9 L 24 24 L 9 24 L 9 26 L 24 26 L 24 41 L 26 41 L 26 26 L 41 26 L 41 24 L 26 24 L 26 9 Z"></path>
                  </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100 fill-gray-100" stroke="currentColor" stroke-width="2" width="24" height="24" viewBox="0 0 50 50">
                        <path d="M 9 24 L 9 26 L 41 26 L 41 24 Z"></path>
                    </svg>
                </span>
              </summary>
          
              <p class="mt-4 leading-relaxed text-gray-400">
                Nobody knows.
              </p>
            </details>
            <details
              class="group p-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary
                class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-100"
              >
                <h2 class="font-medium">
                  Why do you never see elephants hiding in trees?
                </h2>
          
                <span class="relative h-5 w-5 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" stroke-width="2" class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0 fill-gray-100" stroke="currentColor" y="0px" width="24" height="24" viewBox="0 0 50 50">
                    <path d="M 24 9 L 24 24 L 9 24 L 9 26 L 24 26 L 24 41 L 26 41 L 26 26 L 41 26 L 41 24 L 26 24 L 26 9 Z"></path>
                  </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100 fill-gray-100" stroke="currentColor" stroke-width="2" width="24" height="24" viewBox="0 0 50 50">
                        <path d="M 9 24 L 9 26 L 41 26 L 41 24 Z"></path>
                    </svg>
                </span>
              </summary>
          
              <p class="mt-4 leading-relaxed text-gray-400">
                Because they're so good at it.
              </p>
            </details>
          </div>
            </div>
        `;
    }

    async getJs() {
        console.log('FAQs');
    }
}