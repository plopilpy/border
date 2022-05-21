const icon16 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGDSURBVHgBlVNRTsJAEJ3ZBb+5gQ1wAI5QToCewJpAkfhhOEHLCYxf1WIC3oAbwA2s3xJTTyC/hu6Os6WNLVqRlzQ7s9vOvH3zisBwmw8+IHpQAAFsBMDiU6nJPB7FUAFRyggjBFyZJyvinEi5dKzAqipQKyZaJOPH9WiV526bmRF6dSlnnHYPM9hDuB76CMCMwHasWePoAgak6d2sdbH1+1ZgH1XAbU49EHhhYkS4EayH2wyfi5pUFhi0AgeQfA5jTTQmUJfM5wkQOpkmKWpVBZCkxy/HQqlu+D3G+bAVnvJq99uBbQT/lcGVoYhgEeiX+z0PJEB3KXUtOn9eYXcoPn4wU3qThY3KAqarcSI/Z/smklKmomqhV2Yta8C0eFRZd4wIyDZOHLTCCSraoMSecScfx7nhSgUE4i23SGMyRt7BYiPNQOJuhyASWp3nh7WcDouS37JnRmW6APHYSgJAFL4NF+WtAvrtqS2Ilub+ILbd6et1BAdQEjFJaunf+N+PDb4AsJCURrY67Y4AAAAASUVORK5CYII=";
const icon32 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALYSURBVHgBtVddchJBEO7eySYp8yA3cE3is+YGcIPcIElVQFM+QE4gnEB8sDBLqoAThJxAPIH4bCR7A/HFsiQzbc8iYWY3C+wu+aqo3fntj56vu2cRDFT2fIIVQIADJBj8VXe9bnAWQA44kAEIVASk+qYQt5Xd9jvIgUwEbDZUZxLvISM2EkcIhogwjHdDgX9F5KdBosYkxv6o3ICUQLNhaYCo4Y9e15MWVvYv6kBouZ+cyUH7+9shpEDmI/BvmBzSubWZcquQErk0wCSa7MLBrM3uOzz2OoU0e+QWoQLZM5oFF357kAK5CQg598C0w30FKbABOSFdUUA1b/ORdDgiqqyPgI/kuv2j0l20PpcHyrt+lc/gc2wASXvhMCSz598eey0P1k1AZ0DOE00rHzwML8yYe5dHsC4CYfrlDGj2sbvHYY0A6CI/46tUs/ziY0wfqTUQujNu/MOOdOvN4GQ863vD85QjrlgUM6MFUK5O2SVzbWoPbAlhFx+kBgutZhrX+MRV0h9VDsw8we/F0/1WMRcBFvzh7F27PMyIC4BSnphtQeIoM4FTr2UXIaDesjXaE5FsWcxMgIRjK15OVio8RPTFaHqQlYADyiKwiVs/ISfSacAR1j/+Q/JglWWI+NJoBtaWkAKTiavT63jOB5eWXx22yjh3AvUtM4EuhxovuPeCDqukDDeDDltbuE4/MwENiTJy7VLdyu5FLTpP3wv0XZE9dmx0B9HilHgl4xe+elvq/b/AeUp8B4Q4AiTss4t/8Zk/U9NiZIlWoSxd3pwNzL7EVKzdy+opRvsJEj8dvCkxDGdgbENqRI0vJLAuaNEypRPOmP2Hxh+PAOGQb6nXO3ebzWidSCTgSPk8OkEJh6sZXkW6+zz3HBKwDdvjRUZN4KJBHcOuEF8tMfEHyxPlllY1sAwLw5BjuPOYxpcSCEsp3afOYN3GlxLQpdRRsqTrPp/52o1r/ANXSBfJd38jrAAAAABJRU5ErkJggg==";

class BorderApp extends WApplication {
  constructor() {
    super();
  }

  async main(argv) {
    super.main(argv);

    class Border {
      #Files = {};
      #tabLoop = null;

      /**
       * The Border Class.
       */
      constructor() {
        const sync = async () => {
          const isConfigFileExisting = await w96.FS.exists(
            "c:/user/appdata/Border/config.json"
          );
          const isBookmarksFileExisting = await w96.FS.exists(
            "c:/user/appdata/Border/bookmarks.json"
          );
          const isThemeFolderExisting = await w96.FS.exists(
            "c:/user/appdata/Border/themes"
          );
          const isBluginFolderExisting = await w96.FS.exists(
            "c:/user/appdata/Border/blugins"
          );
          const isStyleFileExisting = await w96.FS.exists(
            "c:/user/appdata/Border/themes/default.css"
          );
          const isWhitelistFileExisting = await w96.FS.exists(
            "c:/user/appdata/Border/whitelist.json"
          );
          const isConfigFolderExisting = await w96.FS.exists(
            "c:/user/appdata/Border"
          );

          // creating default config file
          if (!isConfigFolderExisting) {
            await w96.FS.mkdir("c:/user/appdata/Border");
            await w96.FS.writestr(
              "c:/user/appdata/Border/.meta",
              JSON.stringify({
                description:
                  "This is the Border's Data folder.\n\nIt's unsafe to edit files here if you don't know what you do !\n\nUse the Border Setup Program instead !",
              })
            );
          }
          if (!isBookmarksFileExisting) {
            await w96.FS.writestr(
              "c:/user/appdata/Border/bookmarks.json",
              JSON.stringify([])
            );
          }
          if (!isThemeFolderExisting) {
            await w96.FS.mkdir("c:/user/appdata/Border/themes");
          }
          if (!isBluginFolderExisting) {
            await w96.FS.mkdir("c:/user/appdata/Border/blugins");
            await w96.FS.writestr(
              "c:/user/appdata/Border/blugins/.meta",
              JSON.stringify({
                description:
                  "This is the Border's Plugin folder.\n\nDo NOT drop any file you don't trust here !\n\nOnly \".bjs\" files will be available in Border.",
              })
            );
            await w96.FS.writestr(
              "c:/user/appdata/Border/blugins/.meta",
              `Border.protocols.get("test").set("blugin", \`
    <!DOCTYPE html>
    <html>
        <head>
            <title>Hey !</title>
        </head>
        <body style="color: rgb(255, 255, 255); font-family: sans-serif;">
            <h1>Hey !</h1>
            <p>
                This page was create by a blugin, a script
                executed with the Border runtime. You can
                see the code of this blugin by opening the
                "C:/user/appdata/Border/blugins/test.bjs"
                file.
            </p>
        </body>
    </html>
\`);`
            );
          }
          if (!isStyleFileExisting) {
            await w96.FS.writestr(
              "c:/user/appdata/Border/themes/default.css",
              `@import url('https://fonts.googleapis.com/css2?family=Lexend&display=swap');

#border-root>* {
padding: 0;
margin: 0;
-webkit-box-sizing: border-box;
box-sizing: border-box;
}

#border-root>.w96-menubar {
background: var(--border-primary);
color: var(--border-secondary);
}

#border-root {
width: 100%;
height: 100vh;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
font-family: 'Lexend', sans-serif;
}

#border-menu,
#border-titlebar {
width: 100%;
height: 60px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
flex-direction: row;
background: var(--border-primary);
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
}

#border-titlebar {
background: var(--border-secondary);
}

#border-tab-menu {
height: 100%;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
flex: 1;
overflow-x: auto;
}


#border-ctrl-btn-container {
width: 100px;
height: 100%;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
justify-content: space-evenly;
}

#border-tab-container::-webkit-scrollbar {
display: none;
}

#border-tab-container {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
height: 100%;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-ms-overflow-style: none;
/* IE 11 */
overflow-x: auto;
overflow-y: hidden;
scrollbar-width: none;
/* Firefox 64 */
}

.border-tab {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
color: var(--border-secondary);
-webkit-box-pack: space-around;
-ms-flex-pack: space-around;
justify-content: space-around;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
width: 150px;
min-width: 200px;
border-radius: 20px;
height: 80%;
margin: 15px 10px;
background: var(--border-primary);
-webkit-transition: all 0.2s ease;
-o-transition: all 0.2s ease;
transition: all 0.2s ease;
overflow: hidden;
}

.border-view {
display: none;
}

#border-add-button {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
color: var(--border-secondary);
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
margin-left: 10px;
border-radius: 50px;
min-height: 40px;
min-width: 40px;
background: var(--border-primary);
}

#border-add-button>h2 {
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
}

#border-search-button, .border-history-btn {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
color: var(--border-primary);
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
border-radius: 50px;
min-height: 35px;
min-width: 35px;
background: var(--border-secondary);
margin: 0 8px;
}

.border-tab.border-current {
border-radius: 20px 20px 0 0;
transform: translateY(8px);
}

.border-view.border-current {
display: block;
}

#border-searchbar {
border: none;
margin: 10px;
padding: 10px;
width: 100%;
border-radius: 999px;
color: var(--border-primary);
background: var(--border-secondary);
}

#border-view-container, .border-view {
width: 100%;
height: 100%;
border: none;
background: var(--border-primary);
}

.border-title, .border-close-btn, #border-search-button, #border-add-button, .border-history-btn, .border-ctrl-btn {
cursor: pointer;
}

.border-title, .border-close-btn, #border-search-button, #border-add-button, .border-history-btn, #border-searchbar, .border-ctrl-btn {
font-size: 15px;
}

path[class *= "border-svg-icon"], .border-ctrl-btn>svg>path {
fill: var(--border-primary);
}

path.border-svg-icon-close, path.border-svg-icon-add {
fill: var(--border-secondary);
}`
            );
          }
          if (!isWhitelistFileExisting) {
            await w96.FS.writestr(
              "c:/user/appdata/Border/whitelist.json",
              JSON.stringify([])
            );
          }
          if (!isConfigFileExisting) {
            await w96.FS.writestr(
              "c:/user/appdata/Border/config.json",
              JSON.stringify({
                theme: {
                  currentTheme: "default.css",
                  primary: "#4e2493",
                  secondary: "#ffe5fb",
                },
                window: {
                  customTitlebar: true,
                  height: 550,
                  width: 650,
                },
                browser: {
                  defaultPage: "border://newtab",
                  enableShortcuts: true,
                },
              })
            );
            this.#Files.config = JSON.parse(
              await w96.FS.readstr("c:/user/appdata/Border/config.json")
            );
            await this.#createSetupWnd();
          } else {
            this.#Files.config = JSON.parse(
              await w96.FS.readstr("c:/user/appdata/Border/config.json")
            );
            this.#Files.bookmarks = JSON.parse(
              await w96.FS.readstr("c:/user/appdata/Border/bookmarks.json")
            );
            this.#Files.whitelist = JSON.parse(
              await w96.FS.readstr("c:/user/appdata/Border/whitelist.json")
            );
            this.#Files.style = await w96.FS.readstr(
              `c:/user/appdata/Border/themes/${
                this.#Files.config.theme.currentTheme
              }`
            );

            await this.#main();
          }
        };
        sync();
      }

      /**
       * The Border event system API.
       */
      event = {
        _events: [],

        BorderEvent: class {
          constructor(params) {
            this.target = null;
            this.type = null;

            Object.assign(this, params);
          }
        },

        on(name, listener) {
          if (!this._events[name]) {
            this._events[name] = [];
          }

          this._events[name].push(listener);
        },

        removeListener(name, listenerToRemove) {
          if (!this._events[name]) {
            throw new Error(
              `Can't remove a listener. Event "${name}" doesn't exits.`
            );
          }

          const filterListeners = (listener) => listener !== listenerToRemove;

          this._events[name] = this._events[name].filter(filterListeners);
        },

        emit(name, data) {
          if (!this._events[name]) return;

          const fireCallbacks = (callback) => {
            callback(data);
          };

          this._events[name].forEach(fireCallbacks);
        },
      };

      blugins = new Map();

      /**
       * Class for Border tab utilities.
       */
      Tab = class {
        static current = null;
        static list = [];

        #context = this.constructor.instance;

        /**
         * Create a new Tab.
         * @param {Object} params The tab parameters.
         * @returns {Tab}
         */
        constructor(params) {
          if (!params)
            throw new Error("You have to add an object for creating a tab.");
          if (!params.url)
            params.url = this.#context.#Files.config.browser.defaultPage;

          this.id = this.#context.generateId();
          this.url = params.url;

          // Create an html tab div
          let tabElement = document.createElement("div");
          tabElement.draggable = true;
          tabElement.classList.add("border-tab");
          tabElement.classList.add("nodrag");

          tabElement.innerHTML = `
            <div class='border-title'>Name Undefined</div>

            <div class='border-close-btn'>
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 43 43" fill="none">
                <path class="border-svg-icon-close" d="M28.2843 21.2132L42.4264 7.07107L35.3553 1.19209e-06L21.2132 14.1421L7.07107 0L1.19209e-06 7.07107L14.1421 21.2132L0 35.3553L7.07107 42.4264L21.2132 28.2843L35.3553 42.4264L42.4264 35.3553L28.2843 21.2132Z" fill="#66239A"/>
              </svg>
            </div>
          `;

          tabElement.addEventListener("click", () => {
            this.setCurrent();
          });

          tabElement.addEventListener("contextmenu", (e) => {
            const tabIndex = Array.prototype.indexOf.call(
              tabElement.parentNode.children,
              tabElement
            );
          });

          tabElement
            .querySelector(".border-close-btn")
            .addEventListener("click", () => {
              this.close();
            });

          this.#context.window.body
            .querySelector("#border-tab-container")
            .appendChild(tabElement);
          this.element = tabElement;
          // <

          // Create an html view tab
          let viewElement = document.createElement("iframe");
          viewElement.classList.add("border-view");

          this.#context.window.body
            .querySelector("#border-view-container")
            .appendChild(viewElement);
          this.webview = viewElement;
          // <

          // After Created Action
          if (params.current) this.setCurrent();
          this.reload();
          // <

          this.#context.Tab.list.push(this);

          this.#context.event.emit(
            "tabcreate",
            new this.#context.event.BorderEvent({
              target: this,
              type: "tabcreate",
            })
          );
          return this;
        }

        /**
         * Close the tab.
         */
        close() {
          this.#context.Tab.list.splice(
            this.#context.Tab.list.indexOf(this),
            1
          );

          this.element.remove();
          this.webview.remove();

          if (this.#context.Tab.current === this)
            this.#context.Tab.current = this.#context.Tab.list[0];

          this.#context.event.emit(
            "tabclose",
            new this.#context.event.BorderEvent({
              target: this,
              type: "tabclose",
            })
          );
        }

        /**
         * Set the tab active.
         */
        setCurrent() {
          try {
            if (this.#context.Tab.current) {
              this.#context.Tab.current.element.classList.remove(
                "border-current"
              );
              this.#context.Tab.current.webview.classList.remove(
                "border-current"
              );
            }
            this.#context.Tab.current = this;

            this.element.classList.add("border-current");
            this.webview.classList.add("border-current");

            this.#context.window.body.querySelector("#border-searchbar").value =
              this.url;

            this.#context.event.emit(
              "tabcurrent",
              new this.#context.event.BorderEvent({
                target: this,
                type: "tabcurrent",
              })
            );
          } catch {}
        }

        /**
         * Reload the Tab.
         */
        reload() {
          const searchbar =
            this.#context.window.body.querySelector("#border-searchbar");
          const handledUri = this.#context.handleURI(this.url);
          if (!handledUri[1]) {
            searchbar.value = handledUri[0];
            this.element.querySelector(".border-title").innerHTML =
              handledUri[0].split("/")[2];
          } else {
            searchbar.value = this.url;
            this.element.querySelector(".border-title").innerHTML =
              handledUri[1];
          }

          this.webview.src = handledUri[0];

          searchbar.blur();

          this.#context.event.emit(
            "tabreload",
            new this.#context.event.BorderEvent({
              target: this,
              type: "tabreload",
            })
          );
        }
      };

      /**
       * The Border window object.
       */
      window = {
        /**
         * Open a new Border Instance.
         * @param {string} url The URL to open in the new window.
         */
        create(url) {
          w96.sys.execCmd("border", url ? [url] : []);

          this.instance.event.emit(
            "windowcreation",
            new this.instance.event.BorderEvent({
              target: this.instance,
              type: "windowcreation",
            })
          );
        },

        /**
         * Close the tab.
         */
        close() {
          if (this.instance.#tabLoop) clearInterval(this.instance.#tabLoop);
          this.instance.window.self.close();

          this.instance.event.emit(
            "windowclose",
            new this.instance.event.BorderEvent({
              target: this.instance,
              type: "windowclose",
            })
          );
        },
      };

      /**
       * The current Border version.
       */
      version = "1.10";

      /**
       * All active shortcuts.
       */
      keybinds = [
        {
          keys: ["Alt", "l"],
          description: "Focus the searchbar",
          exec: () => {
            this.window.body.querySelector("#border-searchbar").focus();
          },
        },
        {
          keys: ["Alt", "t"],
          description: "Open a new tab",
          exec: () => {
            new this.Tab({ current: true });
          },
        },
        {
          keys: ["Alt", "w"],
          description: "Close the current tab",
          exec: () => {
            this.Tab.current.close();
          },
        },
        {
          keys: ["Alt", "a"],
          description: "Open an about tab",
          exec: () => {
            new this.Tab({ current: true, url: "border://about" });
          },
        },
      ];

      /**
       * All active protocols.
       */
      protocols = {
        _map: new Map().set("border", new Map()),
        get(scheme) {
          return this._map.get(scheme);
        },
        entries() {
          return this._map.entries();
        },
        keys() {
          return this._map.keys();
        },
        values() {
          return this._map.values();
        },
        delete(scheme) {
          return this._map.delete(scheme);
        },
        has(scheme) {
          return this._map.has(scheme);
        },
        addScheme(name) {
          return this._map.set(name, new Map());
        },
      };

      /**
       * Handle URI
       * @param url The URI to handle.
       * @returns The handled URI.
       */
      handleURI(url) {
        if (
          !window.navigator.onLine &&
          !RegExp(
            `^(?:${Array.from(this.protocols.keys()).join("|")}|data):/*`
          ).test(url)
        )
          return [
            "data:text/html," +
              encodeURI(this.protocols.get("border").get("offline")),
            "Not Connected",
          ];
        if (url.startsWith("//")) return ["https://" + url.substring(2), false];

        if (/^\S*:/i.test(url)) {
          if (
            url.startsWith("file://") ||
            url.startsWith("https://rel3.windows96.net/_/")
          ) {
            return [
              encodeURI("https://rel3.windows96.net/_/" + url.substring(7)),
              url.substring(7),
            ];
          }
          for (let [pName, pValue] of this.protocols.entries()) {
            if (url.startsWith(pName)) {
              for (let [path, html] of pValue.entries()) {
                if (RegExp(`^${pName}:/*${path}$`).test(url)) {
                  return [encodeURI("data:text/html," + html), path];
                }
              }
            }
          }
          return [url, false];
        } else {
          if (
            /^([-a-zA-Z0-9^\p{L}\p{C}\u00a1-\uffff@:%_\+.~#?&//=]{2,256}){1}(\.[a-z]{2,4}){1}(\:[0-9]*)?(\/[-a-zA-Z0-9\u00a1-\uffff\(\)@:%,_\+.~#?&//=]*)?([-a-zA-Z0-9\(\)@:%,_\+.~#?&//=]*)?$/i.test(
              url
            )
          ) {
            return ["https://" + url, false];
          } else {
            return [
              encodeURI(
                "https://google.com/search?igu=1&q=" + url.replace(" ", "+")
              ),
              false,
            ];
          }
        }
      }

      /**
       * Generate Id.
       * @returns The generated Id.
       */
      generateId() {
        let id = "";
        for (let i = 0; i < 4; i++) {
          id += Math.floor(Math.random() * 10);
        }

        if (this.Tab.list.length >= 9999) throw new Error("Cannot generate ID");
        for (const tab in this.Tab.list) {
          if (tab.id === id) return this.generateId();
        }
        return parseInt(id);
      }

      /* Creating the Border Setup Program */
      async #createSetupWnd() {
        let wnd = new w96.StandardWindow({
          title: "Setup Border",
          icon: icon16,
          bodyClass: "border-setup-wnd",
          taskbar: true,
          initialHeight: 400,
          initialWidth: 600,
        });

        let setupBody = wnd.getBodyContainer();

        setupBody.innerHTML = `
<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend&display=swap');

.border-setup-body {
    background: #66239A;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    font-family: Lexend, sans-serif;
    font-size: .7rem;
}
.border-setup-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    color: #fff;
    font-size: .7rem;
}
.border-setup-back, .border-setup-next {
    padding: 5px;
    color: #66239A;
    background: #fff;
}
</style>
<div class="border-setup-body">
    <div class="border-setup-container">
        <img height="150" style="margin-right: 20px;" src="data:image/png;base64,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">
        <div class="border-setup-content">
            <div class="border-setup-panel"></div>
        </div>
    </div>
    <div class="border-setup-button-container">
        <button class="border-setup-back">Back</button>
        <button class="border-setup-next">Next</button>
    </div>
</div>
`;

        let currentPage = 0;
        let settings = {};

        let page = [
          {
            content: `
            <h1>Welcome to the Border Setup Program !</h1>
            Click next to start the configuration of Border or back to use the default one.
            `,
          },
          {
            content: `
            <h1>Theme of Border</h1>
            <b>Primary : </b><input class="border-setup-primary-input" type="color" value="${
              this.#Files.config.theme.primary
            }"></input><br>
            <b>Secondary : </b><input class="border-setup-secondary-input" type="color" value="${
              this.#Files.config.theme.secondary
            }"></input>
            `,
            save: [
              {
                name: "primary",
                value: ".border-setup-primary-input",
              },
              {
                name: "secondary",
                value: ".border-setup-secondary-input",
              },
            ],
          },
          {
            content: `
            <h1>Size of the window</h1>
            <b>Height : </b><input class="border-setup-height-input" type="number" value="${
              this.#Files.config.window.height
            }"></input>px<br>
            <b>Width : </b><input class="border-setup-width-input" type="number" value="${
              this.#Files.config.window.width
            }"></input>px<br>
            <b>Use the custom titlebar : </b><input class="border-setup-titlebar-input" type="checkbox" checked="${
              this.#Files.config.window.customTitlebar
            }"></input>
            `,
            save: [
              {
                name: "height",
                value: ".border-setup-height-input",
              },
              {
                name: "width",
                value: ".border-setup-width-input",
              },
              {
                name: "customTitlebar",
                value: ".border-setup-titlebar-input",
              },
            ],
          },
          {
            content: `
            <h1>Others</h1>
            <b>Default page : </b><input class="border-setup-default-input" type="url" value="${
              this.#Files.config.browser.defaultPage
            }"></input><br>
            <b>Enable shortcuts ? </b><input class="border-setup-shortcuts-input" type="checkbox" checked="${
              this.#Files.config.browser.enableShortcuts
            }"></input><br>
            <b>Create a Border shortcut on your desktop ? </b><input class="border-setup-desktop-input" type="checkbox" checked="true"></input>
            `,
            save: [
              {
                name: "defaultPage",
                value: ".border-setup-default-input",
              },
              {
                name: "enableShortcuts",
                value: ".border-setup-shortcuts-input",
              },
              {
                name: "createDesktopShortcut",
                value: ".border-setup-desktop-input",
              },
            ],
          },
          {
            content: `
            <h1>So here we are !</h1>
            <div class="border-setup-get-settings"></div>
            `,
          },
        ];

        setupBody
          .querySelector(".border-setup-back")
          .addEventListener("click", () => {
            goto(--currentPage);
          });

        setupBody
          .querySelector(".border-setup-next")
          .addEventListener("click", () => {
            if (!!page[currentPage].save) {
              for (let data of page[currentPage].save) {
                settings[data.name] =
                  setupBody.querySelector(data.value).type === "checkbox"
                    ? setupBody.querySelector(data.value).checked
                    : setupBody.querySelector(data.value).value;
              }
            }
            goto(++currentPage);
          });

        const goto = (n) => {
          if (n >= page.length) {
            let json = JSON.stringify({
              theme: {
                currentTheme: this.#Files.config.theme.currentTheme,
                primary: settings.primary,
                secondary: settings.secondary,
              },
              window: {
                customTitlebar: settings.customTitlebar,
                height: settings.height,
                width: settings.width,
              },
              browser: {
                defaultPage: settings.defaultPage,
                enableShortcuts: settings.enableShortcuts,
              },
            });

            if (settings.createDesktopShortcut) {
              w96.shell.mkShortcut(
                "c:/user/desktop/Border.link",
                icon32,
                "border"
              );
            }

            w96.FS.writestr("c:/user/appdata/Border/config.json", json).then(
              () => {
                alert("Configuration done !");
                this.window.create();
                return wnd.close();
              }
            );
          }

          if (n < 0) {
            this.window.create();
            return wnd.close();
          }

          setupBody.querySelector(".border-setup-panel").innerHTML =
            page[n].content;

          document
            .querySelectorAll(".border-setup-get-settings")
            .forEach((item) => {
              let settingsData = "";
              for (let key of Object.keys(settings)) {
                settingsData += key + ": " + settings[key] + "<br/>";
              }
              item.innerHTML = settingsData;
            });

          currentPage = n;
        };
        goto(0);

        wnd.show();
      }

      /* <{[MAIN]}> */
      async #main() {
        // Setup instances
        this.Tab.instance = this;
        this.window.instance = this;

        // Create "border://" protocols
        this.protocols.get("border").set(
          "newtab",
          `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Tab</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Lexend&display=swap" rel="stylesheet">
        </head>
        <body style="font-family: 'Lexend'; width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; overflow: hidden; font-family: 'Lexend', sans-serif; color: white;">
            <div id="centered" style="display: flex; flex-direction: column; justify-content: center; align-items: flex-start;">
            <img style="margin-bottom: 30px;" src="data:image/png;base64,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">
            <input type="text" id="search" placeholder="Search on Google..." style="padding: 10px 15px; width: 450px; border-radius: 30px; border: none;">
            </div>
            <script>
            const search = document.getElementById("search");

            search.addEventListener("keydown", (e) => {
                if (e.code === "Enter") {
                handledValue = encodeURI("https://google.com/search?igu=1&q=" + search.value.replace(" ", "+"))
                location.href = handledValue;
                }
            });
            </script>
        </body>
        </html>
        `
        );
        this.protocols.get("border").set(
          "changelog",
          `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Tab</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Lexend&display=swap" rel="stylesheet">
        </head>
        <body style="width: calc(100vw - 30px * 2); height: calc(100% - 30px * 2); overflow: auto; font-family: 'Lexend', sans-serif; padding: 30px; margin: 0; color: white;">
            <img src="data:image/png;base64,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">
            <h1>${this.version} changelog.</h1>
            <ul>
                <li>All the UI has been redesigned. (delete default.css to see changes)</li>
                <li>No more text icon. Border use SVG icons now.</li>
                <li>All the code has been rewrited.</li>
                <li>Border has now an API.</li>
                <li>About button redirect now on "border://about" instead of an info window.</li>
                <li>Bug fixes.</li>
                <li>Border now show a page when you are offline.</li>
                <li>Bookmarks can now be named and deleted via UI.</li>
                <li>Bang search has been replaced with smart search.</li>
                <li>"border://urls" added.</li>
                <li>"border://shortcuts" added.</li>
                <li>"border://404" removed.</li>
                <li>Blugin system added.</li>
                <li>Changed protocol system.</li>
                <li>Removed the possibility to move tabs (too buggy).</li>
                <li>Removed the Scripts tab.</li>
                <li>Event system added.</li>
            </ul>
        </body>
        </html>
        `
        );
        this.protocols.get("border").set(
          "about",
          `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Tab</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Lexend&display=swap" rel="stylesheet">
        </head>
        <body style="width: calc(100vw - 30px * 2); height: calc(100vh - 30px * 2); overflow: hidden; font-family: 'Lexend', sans-serif; padding: 30px; margin: 0; color: white;">  
            <span style="display: inline-block; font-size: 50px;">About&nbsp;</span>
            <img style="display: inline-block; width: 150px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATIAAABLCAYAAADznAt4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAi7SURBVHgB7Z2Ncds4EIWfblKAOzimgtgVRK7g0kHUQZwKnKvATgVyKsilAikV2KmAugrsDvYAk8pJtiUvyAWwAPebwXhGpgC+5XIJCj87IwfSsenLnSu/XFnPZrMNDKNQuPeP8/MZjGjMEgeyl9i48o8rXy2oGaVhgUwHGgLZLjeu/G0BzSgFC2Q6+AO6WLjSOt9YutLAMAyDgbZAtmXhysoFswUMwzBeQdur5Utcu175ZxiGQuzVUgclBDKPH+U8d77wAMNQhAUyHWh9tXzKKbpXzRMYhmE8oZQe2ZY792A7g2EowXpkOiilR7bl1PnNFQzDMHaYpXqi9K+Fp31578oHDOezO51rGEZmrEemg1muC9HPE1u48tGVBmH4H/3PbOKskRsLZEogJoiED2iu3FA432EYmeE6K4y4aLkQrokLCmcOw8gI11FhxEXThXDNLCiMFQwjI1xHhREXbReCwntmNrfMyAbXSWFERd30i3408mvAVy5gGMakyTZqeYy+l9W6wultbdypvYVhZEDj/TNFVE6I7ddUcntlftTzTxiGMVk0z+z3r5jcReLnMAxjsqgNZH2v7I55+CkMw5gs2tda/mAe9x6GYUwW7YFszTzOpmAYxoTRHsg2zOMskBnGhFE5/WIXG942NGP+qYM3qIQdh9qgwCTA1O0GMnflXf/3ZKds2aDgBMe0v5XTu/6v/6zx/495s9dsX/Md6F9iQTK0rlyRshRz/uK4ctmfX1XatvQa/bKzlSv3x4RAmBT25VYCYch8Z9++xASZIHmWlPnCufbn1F2c6rRtoW57pkt6xQF3gRCU0L7cL0IIMt95kSkGsi1LSnzhqLtA3yk+S8rklNQ9Ra9oABgJZbAv9wsYCZnvHGXKgczTUqIkwK6dTxTwhClJm5RGjIAy2Zd7MEZA5juvMvVAtiVqQhMa+JQpQVuvzz9JVzQSDITy2pcFBkLmOyyqmX4hgHgSYOpGWvzmj7mXUIlr2+I0em1+2/EGIwn1MUX2fZWCtZXhOxbI9hC7aApvshiB+jFxMoQmJIf4WElBzFO4Nv2+Y4HsGSJJgN1p30LfTSaW4FjaET2BN7tG+x6kAm2qfae0BL0pGJ0EuP++xptMJMFxDEcMbF+rfUdjvjMM9T2yEEhBEmDqRnuWGMZ26yK/68ca3e63D3292bX159Ggc8QGw/Eaf/Z/1648cF9bCrHvMzj3j/kOi5d9h5igQKibe/OFhs1+vqfA+TR9ey2Fc9+fJ/splVrbTru3NAzf5jWNSOFH5dj3GRVp0+k73JpQMJQoCTB1kwlD8RdocDc7lba+rUsaxnKMxp32lxROLvvuwWhnSeGY7+w0wAIVQBGTAFPnFKFcQAiKnOB4oL57EkqiTGXa9zeoT9s8oP74vsOtFZVAkZIAU/gTdQFhKGKC4wH6WhJc6kJl2vc3qE+bLt/h1oyKIOEkwBT+xBF7msbWNlBfS7JBrGT7PoI6tenxHW7tqAzqfl/g8kWwrqGjUlm09fUtA+prSXjRMZVt30eE6jLfOdIQC1QGdWu8uItU21fqarn1EMXfWUBYW+gTVXwOFJVt30dQpzY1vjPZCbFSSYB752rA41uKXTmltPXMweera/sOglRg34OY7+wxzne4oRIVQmFPn8WBOhbEp0EiJLT19XDn/rQx9FViX0K92hZH6knmO5NeoiSUBJjbHf4xS7hHuoS23rm4+mL1GGqw7yFCXqVaSoRr6x78JUQqfMfWWo5PAvwOPNZIz1htITfaDeJQg30PwdWmGRW+Y4FsfBLgBjxEfztismYed0jbHMx2IvaGGuZxmu17iAblo8J3LJCNTwLcgEeOG23DPO6QNm6PYWzP5BgN8zjN9j1Eg/JR4TuTD2QBm8WNWisouSldhDZPAj9/So4gsody+9aMCt+xHplxjIZ5XAvD2KdhHifiO5MPZDR+VwbuPlqjd38IRaBN1vddz+RfxKNm+9bco0vqO9Yj44+ubA58znXGBukZq00DNdu3hkC2gQIskKVzxjnSM6VANkd6LJBZIFPDe+Zxvw58/hM8/kJ6xmrTQM325WrTjArfeYMJ088+/sA8/C7w86f45A0nqUa6hLRpoGb7crV5TW9tlPQwU++RfQw4dh34+VP8j58XSIeENg2smceVaN81eKTWVh4B66+qgsKSPUht43OfYnRNShvz+9F9o1b7atQmBVOTmO9MuUd2Cf5I12uzj7+Bx0nfbmwktWmgZvtq01YmqSOnBpycTxRG80p9J2HVRd2uWEwbtwJEhiq1rzZtknDFQIrkDWbGSflIYbC2F3bHrSiMkN9YsmjjVoIEUIX21aRNGq4QSJG8wYxQ+NPU0zDrnlM4kim9xLVxK0ECqEL7atEWA64ISJG8wQxQ132/onCCkj24479TOEsasTtmTG3cipAIqsy+ubXFhCsAUiRvMCHUOeElBSaK6Gkp0EmoG80a2tZlSHsptHErQyKoMvvm0pYC7slDiuQNRoQ65/MTI31+vhUNc4wtCwyARmakpu7J7OvwrxsnObVxK0NCqCL7ptKWA+4JQ4iZZGUV4TO6DP4Nwpn02v35BJ2wtXF9w9U3Q0Jqse9LSGtLfW22pPYdC2TPuXO2PcNInFlvEbZveQqCtGkNZJ4a7HsISW1TCWS2aHwfv/btHDKcQ9caRkltGqjZvtq0qccC2f88OqLUwty+Hi0OKapNAzXbV5m2IrBA1uF/1ziTvtF9ff2rxuis1COIok0DNdtXibZyoGnjR6aSTCykLqt0S+kYrY3bEBRABdo3hTZkIvn50XTxQ9UNEkLdXKEbio+INm5jUAIVZt8U2pCJ5OdH02PlyhwZoXg33EpSG7dRKKMU+6bQhkwkPz+aBq0rX0jZfk7UOeU1jXslamNp454AlKLdvmPgakMmiAmEqG0e2cNO8fuh+1EfkZTssaHuVWWObv6Qz9LcYH/Pq+TauL6Ra65SCBrtK8UxbVOZR/YfxVzwIog50R0AAAAASUVORK5CYII=">
            <p>
            Border is an iframe Web browser developped by Onofficiel<br>
            accessible on all platforms.<br>
            Because of the iframe system some website won't work in this browser (like youtube.com).
            </p>

            <p style="position: absolute; bottom: 0; left: 50%; transform: translateX(-50%)">Border v${this.version} | © Onofficiel - 2022 - All rights reserved</p>
        </body>
        </html>
        `
        );
        this.protocols.get("border").set(
          "shortcuts",
          `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Tab</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Lexend&display=swap" rel="stylesheet">
        </head>
        <body style="width: calc(100vw - 30px * 2); height: calc(100% - 30px * 2); overflow: auto; font-family: 'Lexend', sans-serif; padding: 30px; margin: 0; color: white;">
            <img style="display: inline-block; width: 150px;" src="data:image/png;base64,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">
            <span style="display: inline-block; font-size: 50px;">&nbsp;shortcuts</span>
            
            <ul>
                ${Object.entries(this.keybinds)
                  .map(
                    ([_key, value]) =>
                      `<li>${value.description}: ${value.keys.join("+")}</li>`
                  )
                  .join("<br>")}
            </ul>
        </body>
        </html>
        `
        );
        this.protocols.get("border").set(
          "offline",
          `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Not Connected</title>
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Lexend&display=swap" rel="stylesheet">
            </head>
            <body style="width: 100vw; height: 100vh; display: flex; justify-content: flex-start; align-items: center; overflow: hidden; font-family: 'Lexend', sans-serif; margin-left: 30px; color: white; background: rgb(172, 167, 53)">
                <div style="margin-left: 10px;">
                    <img style="margin-bottom: 10px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFRSURBVHgB7d3BDQMxCABBJ7r+W06uCB5oPdOBteKH8Ocs93udxT6vs9j3kCZwnMBxAscJHCdwnMBxAscJHCdwnMBxAscJHCdwnMBxAscJHCdwnMBxz/TO0/YdpduY4DiB4wSOEzhO4DiB4wSOEzhO4DiB4wSOEzhO4DiB4wSOEzhO4DiB4wSOe86w7XetbmOC4wSOEzhO4DiB4wSOEzhO4DiB4wSOEzhO4DiB4wSOEzhO4DiB4wSOEzhu/U2r2/4unH6vCY4TOE7gOIHjBI4TOE7gOIHjBI4TOE7gOIHjBI4TOE7gOIHjBI4TOE7gODtZcSY4TuA4geMEjhM4TuA4geMEjhM4TuA4geMEjhM4TuA4geMEjhM4TuA4gePG/y68zfSdrGkmOE7gOIHjBI4TOE7gOIHjBI4TOE7gOIHjBI4TOE7gOIHjBI4TOE7gOIHj/tV+GOxT3UC5AAAAAElFTkSuQmCC">
                    <div style="margin-bottom: 20px;">
                        <span style="font-size: 20px;">...Crrr...</span><br>
                        <span style="font-size: 30px;">I don't receive you well Commander</span><br>
                        <span style="font-size: 20px;">...Crrr...</span>
                    </div>
                    <div>
                        <div style="font-size: 20px;">No Internet Connection.</div>
                        <div style="font-size: 15px;">Verify your settings.</div>
                    </div>
                </div>
            </body> 
        </html>
        `
        );
        this.protocols.get("border").set(
          "woozy",
          `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Woooooooozy</title>
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Lexend&display=swap" rel="stylesheet">
            </head>
            <body style="width: 100vw; height: 100vh; display: flex; justify-content: flex-start; align-items: center; overflow: hidden; font-family: 'Lexend', sans-serif; margin-left: 50px; color: white; background: rgb(255, 204, 77)">
                <div id="centered">
                    <img src="data:image/png;base64,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">
                </div>
            </body>
        </html>
        `
        );
        this.protocols.get("border").set(
          "urls",
          `
                <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Border urls</title>
                        <link rel="preconnect" href="https://fonts.googleapis.com">
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                        <link href="https://fonts.googleapis.com/css2?family=Lexend&display=swap" rel="stylesheet">
                    </head>
                    <body style="width: calc(100vw - 30px * 2); height: calc(100% - 30px * 2); overflow: auto; font-family: 'Lexend', sans-serif; padding: 30px; margin: 0; color: white;">
                        <img style="display: inline-block; width: 150px;" src="data:image/png;base64,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">
                        <span style="display: inline-block; font-size: 50px;">&nbsp;urls</span>
                        
                        <ul>
                            ${Array.from(
                              this.protocols.get("border"),
                              ([key, value]) =>
                                `<a style="color: rgb(255, 255, 255);" href="data:text/html,${encodeURI(
                                  value
                                )}">border://${key}</a>`
                            ).join("<br>")}
                        </ul>
                    </body>
                </html>
        `
        );

        // Create Border main window
        const wnd = new w96.StandardWindow(
          {
            title: "Border",
            body: `
                    <style>
                        ${this.#Files.style}
                    </style>
                    <div id="border-root">
                    <div id="border-titlebar">
                        <div id="border-tab-menu">
                        <div id="border-tab-container">
                    
                        </div>
                        <div id="border-add-button" class="nodrag">
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 44 44" fill="none">
                                <path class="border-svg-icon-add" d="M27 17V0H17V17H0V27H17V44H27V27H44V17H27Z" fill="#66239A"/>
                            </svg>
                        </div>
                        </div>
                        <div id="border-ctrl-btn-container">
                        <div class="border-minimize border-ctrl-btn nodrag">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 45 45" fill="none">
                                <path d="M22.5 30L45 7.5L37.5 0L22.5 15L7.49998 1.31134e-06L0 7.5L22.5 30Z" fill="#66239A"/>
                                <path d="M9.83506e-07 35H45V45H9.83506e-07V35Z" fill="#66239A"/>
                            </svg>
                        </div>
                        <div class="border-maximize border-ctrl-btn nodrag">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 45 45" fill="none">
                                <path clip-rule="evenodd" d="M35 10H10V35H35V10ZM0 0V45H45V0H0Z" fill="#66239A" fill-rule="evenodd"/>
                            </svg>
                        </div>
                        <div class="border-close border-ctrl-btn nodrag">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 43 43" fill="none">
                                <path d="M28.2843 21.2132L42.4264 7.07107L35.3553 1.19209e-06L21.2132 14.1421L7.07107 0L1.19209e-06 7.07107L14.1421 21.2132L0 35.3553L7.07107 42.4264L21.2132 28.2843L35.3553 42.4264L42.4264 35.3553L28.2843 21.2132Z" fill="#66239A"/>
                            </svg>
                        </div>
                        </div>
                    </div>

                    <div id="border-menu" class="nodrag">
                        <div class="border-history-btn border-history-back">
                            <svg xmlns="http://www.w3.org/2000/svg" width="7.25" height="10.75" viewBox="0 0 29 43" fill="none">
                                <path class="border-svg-icon" d="M0 21.2132L21.2131 42.4264L28.2842 35.3553L14.1421 21.2132L28.2842 7.07104L21.2131 0L0 21.2132Z" fill="#66239A"/>
                            </svg>
                        </div>
                        <div class="border-history-btn border-history-forward">
                            <svg xmlns="http://www.w3.org/2000/svg" width="7.25" height="10.75" viewBox="0 0 29 43" fill="none">
                                <path class="border-svg-icon" d="M29 21.7868L7.78687 0.573607L0.715823 7.64468L14.8579 21.7868L0.715821 35.929L7.78687 43L29 21.7868Z" fill="#66239A"/>
                            </svg>
                        </div>
                        <div class="border-history-btn border-history-refresh">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11.25" height="11.25" viewBox="0 0 45 45" fill="none">
                                <path class="border-svg-icon" d="M45 20V0L38.4099 6.59011C35.2632 3.44343 31.2541 1.30051 26.8895 0.432343C22.525 -0.435825 18.001 0.00975001 13.8896 1.71272C9.77828 3.41569 6.26427 6.29957 3.79193 9.99968C1.3196 13.6998 0 18.0499 0 22.5C0 26.9501 1.3196 31.3002 3.79193 35.0003C6.26427 38.7004 9.77828 41.5843 13.8896 43.2873C18.001 44.9903 22.525 45.4358 26.8895 44.5677C31.2541 43.6995 35.2632 41.5566 38.4099 38.4099L31.3388 31.3388C29.5907 33.087 27.3634 34.2775 24.9386 34.7598C22.5139 35.2421 20.0005 34.9946 17.7165 34.0485C15.4324 33.1024 13.4801 31.5003 12.1066 29.4446C10.7331 27.389 10 24.9723 10 22.5C10 20.0277 10.7331 17.611 12.1066 15.5554C13.4801 13.4998 15.4324 11.8976 17.7165 10.9515C20.0005 10.0054 22.5139 9.75788 24.9386 10.2402C27.3634 10.7225 29.5907 11.913 31.3388 13.6612L25 20H45Z" fill="#66239A"/>
                            </svg>
                        </div>
                    
                        <input id="border-searchbar" placeholder="Enter an URL..."></input>
                    
                        <div id="border-search-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10.75" viewBox="0 0 40 43" fill="none">
                                <path class="border-svg-icon" d="M18.071 0L39.2842 21.2132L18.071 42.4264L11 35.3553L20.3552 26H0V16H19.929L11 7.07108L18.071 0Z" fill="#66239A"/>
                            </svg>
                        </div>
                    </div>
                        <div class="appbar"></div>
                    
                        <div id="border-view-container" class="nodrag">
                    
                        </div>
                    </div>
                    `,
            initialHeight: this.#Files.config.window.height,
            initialWidth: this.#Files.config.window.width,
            taskbar: true,
            icon: icon16,
          },
          true
        );

        this.window.self = wnd;
        this.window.body = this.window.self.getBodyContainer();

        // Handle blugins
        const blugins = await w96.FS.readdir("/user/appdata/Border/blugins");
        await blugins.forEach(async (path, index) => {
          if (w96.FSUtil.getExtension(path).toLowerCase() !== ".bjs") return;
          let name = w96.FSUtil.fname(path);
          const that = this;
          await new Function(`
            const Border = this;
            const Blugin = new class Blugin {
              name = ${JSON.stringify(
                name.slice(
                  0,
                  name.length - w96.FSUtil.getExtension(name).length
                )
              )};
            };
            Border.blugins.set(Blugin.name, Blugin);
            Border.protocols.addScheme(Blugin.name);
            ${await w96.FS.readstr(path)}
          `).call(that);

          if (index >= blugins.length - 1) {
            return this.event.emit(
              "bluginload",
              new this.event.BorderEvent({
                target: this.blugins,
                type: "bluginload",
              })
            );
          }
        });

        // Configurate appbar
        const appbar = new w96.ui.MenuBar();
        appbar.menuElement.classList.add("nodrag");

        await appbar.addRoot("File", [
          {
            type: "normal",
            label: "New Tab",
            onclick: () => {
              new this.Tab({ current: true });
            },
          },
          {
            type: "normal",
            label: "Close Current Tab",
            onclick: () => {
              this.Tab.current.close();
            },
          },
          {
            type: "separator",
          },
          {
            type: "normal",
            label: "Restart",
            onclick: () => {
              this.window.close();
              this.window.create();
            },
          },
          {
            type: "normal",
            label: "Exit",
            onclick: () => this.window.close(),
          },
        ]);

        appbar.addRoot("View", [
          {
            type: "normal",
            label: "Reload",
            onclick: () => {
              this.Tab.current.reload();
            },
          },
          {
            type: "separator",
          },
          {
            type: "normal",
            label: "Back",
            onclick: () => {
              window.history.back();
            },
          },
          {
            type: "normal",
            label: "Forward",
            onclick: () => {
              window.history.forward();
            },
          },
        ]);

        appbar.addRoot("Tools", [
          {
            type: "normal",
            label: "Edit Config",
            onclick: async () => {
              await this.#createSetupWnd();
              this.window.close();
            },
          },
          {
            type: "normal",
            label: "Create Shortcut",
            onclick: () => {
              w96.shell.mkShortcut(
                "c:/user/desktop/" +
                  this.handleURI(this.Tab.current.url)[0].split("/")[2] +
                  ".link",
                icon32,
                "border " + this.Tab.current.url
              );
            },
          },
          {
            type: "separator",
          },
          {
            type: "normal",
            label: "Add This Site To Bookmarks",
            onclick: async () => {
              w96.ui.MsgBoxSimple.prompt(
                "Border Bookmarks",
                "Name this bookmark",
                this.handleURI(this.Tab.current.url)[0],
                async (name) => {
                  this.#Files.bookmarks.push({
                    name,
                    url: this.handleURI(this.Tab.current.url)[0],
                  });
                  await w96.FS.writestr(
                    "c:/user/appdata/Border/bookmarks.json",
                    JSON.stringify(this.#Files.bookmarks)
                  );

                  this.event.emit("bookmarkcreate", {
                    target: {
                      name,
                      url: this.handleURI(this.Tab.current.url)[0],
                    },
                    type: "bookmarkcreate",
                  });

                  alert("Restart Border to access the bookmark");
                }
              );
            },
          },
          {
            type: "normal",
            label: "Remove This Site To Bookmarks",
            onclick: async () => {
              let theBookmark = null;
              this.#Files.bookmarks.forEach((bookmark, index) => {
                if (bookmark.url === this.handleURI(this.Tab.current.url)[0]) {
                  theBookmark = bookmark;

                  return this.#Files.bookmarks.splice(index, 1);
                }
              });
              await w96.FS.writestr(
                "c:/user/appdata/Border/bookmarks.json",
                JSON.stringify(this.#Files.bookmarks)
              );

              this.event.emit("bookmarkremove", {
                target: theBookmark,
                type: "bookmarkremove",
              });

              alert("Restart Border to see changes");
            },
          },
        ]);

        appbar.addRoot("Help", [
          {
            type: "normal",
            label: "About",
            onclick: () =>
              new this.Tab({ current: true, url: "border://about" }),
          },
          {
            type: "normal",
            label: "Send Feedback",
            onclick: async () => {
              let loader = w96.ui.MsgBoxSimple.idleProgress(
                "Border Feedback",
                "Connecting to the feedback server..."
              );

              if (!w96.net.p3.connected) await w96.net.p3.connect();

              let socket = w96.net.p3.createConnection(
                "onofficiel.l51drui0hb.ppp:1234"
              );

              const tryConnect = () => {
                socket.connect().catch((err) => {
                  loader.closeDialog();
                  w96.ui.MsgBoxSimple.confirm(
                    "Cannot connect to the feedback server : " +
                      err +
                      ".\nRetry ?",
                    (ok) => {
                      if (ok) {
                        tryConnect();
                        loader = w96.ui.MsgBoxSimple.idleProgress(
                          "Border Feedback",
                          "Connecting to the feedback server..."
                        );
                      }
                    }
                  );
                });
              };

              socket.on("connect", () => {
                loader.closeDialog();
                w96.ui.MsgBoxSimple.prompt(
                  "Border Feedback",
                  'Write here to us : ( the message can\'t contain ">>" )',
                  "",
                  (msg) => {
                    if (msg) socket.send(["text", "feedback>>" + msg]);
                  }
                );
              });

              socket.on("message", (msg) => {
                alert(msg[1]);
              });

              tryConnect();
            },
          },
          {
            type: "separator",
          },
          {
            type: "normal",
            label: "See Keyboard Shortcuts",
            onclick: () => {
              new this.Tab({ current: true, url: "border://shortcuts" });
            },
          },
          {
            type: "normal",
            label: "Open A Changelog Tab",
            onclick: () => {
              new this.Tab({ current: true, url: "border://changelog" });
            },
          },
        ]);

        const bookmarkList = [];
        this.#Files.bookmarks.forEach(({ name, url }) => {
          bookmarkList.push({
            type: "normal",
            label: name,
            onclick: () => {
              new this.Tab({ current: true, url });
            },
          });
        });

        appbar.addRoot("Bookmarks", bookmarkList);

        // Theme menu setup
        const themes = await w96.FS.readdir("/user/appdata/Border/themes");

        const themeList = [];
        themes.forEach((path) => {
          if (w96.FSUtil.getExtension(path).toLowerCase() !== ".css") return;
          const name = w96.FSUtil.fname(path);
          themeList.push({
            type: "normal",
            label: name,
            onclick: async () => {
              this.#Files.config.theme.currentTheme = name;
              await w96.FS.writestr(
                "/user/appdata/Border/config.json",
                JSON.stringify(this.#Files.config)
              );
              alert("Restart to apply the theme.");
            },
          });
        });
        themeList.push(
          {
            type: "separator",
          },
          {
            type: "normal",
            label: "Go To The Theme Folder",
            onclick: () => {
              w96.sys.execCmd("explorer", ["c:/user/appdata/Border/themes"]);
            },
          }
        );

        appbar.addRoot("Themes", themeList);

        if (this.#Files.config.window.customTitlebar) {
          // delete the default titlebar
          wnd.wndObject
            .querySelectorAll("[class|='titlebar']")
            .forEach((elem) => (elem.style.display = "none"));
          wnd.wndObject
            .querySelector(".window-html-content")
            .classList.remove("nodrag");

          // give the behavior to the new titlebar
          this.window.body
            .querySelector(".border-minimize")
            .addEventListener("click", () => wnd.toggleMinimize());
          this.window.body
            .querySelector(".border-maximize")
            .addEventListener("click", () => wnd.toggleMaximize());
          this.window.body
            .querySelector(".border-close")
            .addEventListener("click", () => this.window.close());
          this.window.body
            .querySelector("#border-titlebar")
            .addEventListener("dblclick", () => wnd.toggleMaximize());
        } else {
          this.window.body.querySelector(
            "#border-ctrl-btn-container"
          ).style.display = "none";
        }

        this.window.body
          .querySelector(".appbar")
          .replaceWith(appbar.getMenuDiv());

        wnd.show();

        // boot
        document
          .querySelector(":root")
          .style.setProperty(
            "--border-primary",
            this.#Files.config.theme.primary
          );
        document
          .querySelector(":root")
          .style.setProperty(
            "--border-secondary",
            this.#Files.config.theme.secondary
          );

        let h = this.window.body.querySelectorAll(".border-history-btn");

        h[0].addEventListener("click", () => {
          window.history.back();
          this.Tab.current.reload();
        });
        h[1].addEventListener("click", () => {
          window.history.forward();
          this.Tab.current.reload();
        });
        h[2].addEventListener("click", () => {
          this.Tab.current.reload();
        });

        this.window.body
          .querySelector("#border-add-button")
          .addEventListener("click", () => new this.Tab({ current: true }));
        this.window.body
          .querySelector("#border-search-button")
          .addEventListener("click", () => {
            this.Tab.current.url =
              this.window.body.querySelector("#border-searchbar").value;
            this.Tab.current.reload();
          });

        if (argv[1])
          new this.Tab({
            url: this.handleURI(argv[1])[0],
            current: true,
          });
        else new this.Tab({ current: true });

        this.window.body
          .querySelector("#border-searchbar")
          .addEventListener("keyup", (event) => {
            if (event.key === "Enter") {
              this.Tab.current.url =
                this.window.body.querySelector("#border-searchbar").value;
              this.Tab.current.reload();
            }
          });

        this.#tabLoop = setInterval(() => {
          if (this.Tab.list.length <= 0) {
            this.window.close();
          } else {
            if (!this.window.body.querySelector(".border-tab.border-current")) {
              this.Tab.list[0].setCurrent();
            }
          }
        }, 10);

        if (this.#Files.config.browser.enableShortcuts) {
          for (const keybind in this.keybinds) {
            if (Object.hasOwnProperty.call(this.keybinds, keybind)) {
              const cKeybind = this.keybinds[keybind];

              cKeybind.keys.reverse();

              let status = [];

              for (const key in cKeybind.keys) {
                if (Object.hasOwnProperty.call(cKeybind.keys, key)) {
                  const cKey = cKeybind.keys[key];

                  status.push(false);

                  window.addEventListener("keydown", (e) => {
                    if (e.key.toLowerCase() === cKey.toLowerCase()) {
                      status[key] = true;
                    } else status[key] = false;

                    let i = 0;
                    for (let stat in status) {
                      if (status[stat]) i++;

                      if (i >= status.length) {
                        e.preventDefault();
                        cKeybind.exec();
                      }
                    }
                  });
                }
              }
            }
          }
        }
      }
    }

    const _browser = new Border();
  }
}

w96.shell.mkShortcut(
  "c:/system/programs/Accessories/Border.link",
  icon16,
  "border"
);

w96.app.register({
  command: "border",
  type: "gui",
  cls: BorderApp,
  meta: {
    icon: icon32, // You may specify a custom icon URL here.
    friendlyName: "Border",
  },
});
