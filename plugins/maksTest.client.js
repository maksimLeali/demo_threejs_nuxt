import { throttle } from "lodash-es";
import MaksStage from "~/assets/js/maksTest";
import { EventBus } from "~/assets/js/utils/event.js";

export default ({ store, app, route }, inject) => {
    const doc = document.documentElement;
    let size, stage;
    const onResize = () => {
        size = {
          w:
            window.innerWidth ||
            document.body.clientWidth ||
            document.documentElement.offsetWidth,
          h:
            window.innerHeight ||
            document.body.clientHeight ||
            document.documentElement.offsetHeight
        };
    
        const ratio = size.h / size.w;
    
        EventBus.$emit("ON_RESIZE", {
          ...size,
          ratio
        });
        doc.style.setProperty("--app-height", `${size.h}px`);
      };

    const initStage = () => {
        // eslint-disable-next-line no-unused-vars
        stage = new MaksStage({
            container: document.querySelector(".stage")
        });

        inject("stage", stage);
    };


    const addListeners = () => {
        window.addEventListener("resize", throttle(onResize, 500));
    };


    const init = () => {
        initStage();
        onResize();
        addListeners();
    };

    init();

}