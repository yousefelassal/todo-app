import AbstractPage from "./AbstractPage.js";

export default class extends AbstractPage {
    constructor(){
        super();
        this.setTitle("Signup");
    }

    async getHtml(){
        return `
        <section class="relative">
        <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#683DF7] to-[#9172F7] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
          </div>
        <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside
            class="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6"
          >
            <img
              alt="Pattern"
              id="pattern"
              src=""
              class="absolute inset-0 h-full w-full object-cover"
            />
          </aside>
      
          <main
            aria-label="Main"
            class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
          >
            <div class="max-w-xl lg:max-w-3xl">
              <a class="block" href="/" data-link>
                <span class="sr-only">Home</span>
                <div class="cursor-pointer"><span class="text-4xl text-[var(--primary)]">to</span><span class="text-4xl bg-clip-text text-transparent bg-gradient-to-tr from-[var(--primary-gradient)] to-[var(--secondary-gradient)]">do.</span></div>
              </a>
      
              <h1
                class="mt-6 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl"
              >
                Sign Up
              </h1>
              <p class="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
                Already have an account?
                    <a href="/login" data-link class="text-gray-700 hover:text-gray-600 underline dark:text-gray-200"
                      >Log in</a
                    >.
              </p>
      
              <form action="#" class="mt-8 grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                    <label
                      for="firstName"
                      class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      First Name
                    </label>
        
                    <input required
                      type="text"
                      id="firstName"
                      name="firstName"
                      class="mt-1 w-full p-2 rounded-md ring-0 text-sm shadow-sm border dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 focus:outline focus:outline-indigo-900"
                    />
                </div>
      
                <div class="col-span-6 sm:col-span-3">
                    <label
                      for="lastName"
                      class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      Last Name
                    </label>
        
                    <input required
                      type="text"
                      id="lastName"
                      name="lastName"
                      class="mt-1 w-full rounded-md p-2 ring-0 border-gray-200 border bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 focus:outline focus:outline-indigo-900"
                    />
                </div>
      
                <div class="col-span-6">
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Email
                  </label>
                  <div class="relative">
                    <input required
                        type="email"
                        id="email"
                        name="email"
                        class="mt-1 w-full rounded-md p-2 ring-0 border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 focus:outline focus:outline-indigo-900 border"
                    />
                    <span class="absolute inset-y-0 end-0 grid place-content-center px-2">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 text-gray-400 email-icon"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                        </svg>
                    </span>
                  </div>
                </div>
      
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="password"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Password
                  </label>
                  <div class="relative">
                    <input required
                        type="password"
                        id="password"
                        name="password"
                        class="mt-1 w-full rounded-md p-2 ring-0 border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 focus:outline focus:outline-indigo-900 border"
                    />
                    <span class="absolute inset-y-0 end-0 grid place-content-center px-2">
                        <button class="revealPassword" type="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4 text-gray-400 hover:stroke-indigo-600 transition-none password-icon"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        </button>
                      </span>
                    </div>
                </div>
      
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="confirmPassword"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Confirm Password
                  </label>
                  <div class="relative">
                    <input required
                        type="password"
                        id="confirmPassword"
                        name="password_confirmation"
                        class="mt-1 w-full rounded-md p-2 ring-0 border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 focus:outline focus:outline-indigo-900 border"
                    />
                    <span class="absolute inset-y-0 end-0 grid place-content-center px-2">
                        <button class="revealPassword" type="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4 text-gray-400 hover:stroke-indigo-600 transition-none password-icon"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        </button>
                      </span>
                </div>
                </div>
      
                <div class="col-span-6 w-full flex-1 flex place-items-center place-content-center">
                  <button
                    class="shrink-0 flex items-center justify-center w-full rounded-md h-10 bg-gradient-to-br from-[var(--primary-gradient)] to-[var(--secondary-gradient)] group-hover:bg-gradient-to-r text-[var(--primary)] shadow-md hover:bg-gradient-to-tr px-12 py-3 text-sm font-medium text-white transition"
                  >
                    Create an account
                  </button>
                </div>
                <!-- google authentication ?? -->
                <!-- <div class="col-span-6 flex flex-1 w-full place-items-center place-content-center">
                    <button class="flex items-center justify-center gap-2 border h-10 w-full border-gray-500 rounded-md bg-gray-600 hover:bg-gray-700 px-4 py-2 text-sm font-medium text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
                            <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        </svg>
                        Continue with Google
                </button>
              </div> -->
              </form>
            </div>
          </main>
        </div>
      </section>
            `;
    }
}