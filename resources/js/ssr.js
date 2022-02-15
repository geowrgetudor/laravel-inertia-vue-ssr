import { createSSRApp, h } from "vue";
import { renderToString } from "@vue/server-renderer";
import { createInertiaApp, Link, Head } from "@inertiajs/inertia-vue3";
import createServer from "@inertiajs/server";

import { ZiggyVue } from "ziggy";
import { Ziggy } from "./ziggy";

createServer((page) =>
    createInertiaApp({
        page,
        render: renderToString,
        resolve: (name) => require(`./Pages/${name}`),
        setup({ app, props, plugin }) {
            return createSSRApp({
                render: () => h(app, props),
            })
                .use(plugin)
                .use(ZiggyVue, Ziggy)
                .component("Link", Link)
                .component("Head", Head);
        },
    })
);
