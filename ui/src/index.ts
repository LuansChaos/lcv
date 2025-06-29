import { App } from "vue";
import { Button } from "./components/button";

export { Button };
export function install(app: App, namePre = "lcv") {
  app.component(`${namePre}-button`, Button);
}
