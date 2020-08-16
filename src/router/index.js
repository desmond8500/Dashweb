import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../components/tabler/pages/index/index.vue";

// layout
Vue.component("tabler-header", require("../components/tabler/layout/tabler-header.vue").default);
Vue.component("tabler-title", require("../components/tabler/layout/tabler-title.vue").default);
Vue.component("tabler-footer", require("../components/tabler/layout/tabler-footer.vue").default);

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: Home  },

  // Projets
  { path: "/clients", name: "Clients", component: () => import( "../components/tabler/pages/projets/clients/clients.vue")  },
  { path: "/projets",   name: "Projets",  component: () => import( "../components/tabler/pages/projets/projets.vue")  },
  { path: "/stock",     name: "Stock",    component: () => import( "../components/tabler/pages/projets/stock.vue")    },
  { path: "/providers", name: "Provider", component: () => import( "../components/tabler/pages/projets/providers.vue")  },
  { path: "/devis",     name: "Devis",    component: () => import( "../components/tabler/pages/projets/devis.vue")  },
  
  // Configuration
  { path: "/mails",     name: "mails",    component: () => import( "../components/tabler/pages/config/mails.vue")  },
  { path: "/message",   name: "message",  component: () => import( "../components/tabler/pages/config/message.vue")  },
  { path: "/profile",   name: "profile",  component: () => import( "../components/tabler/pages/config/profile.vue")  },
  { path: "/reglages",  name: "reglages", component: () => import( "../components/tabler/pages/config/reglages.vue")  },

  // Medias
  { path: "/images",  name: "Images", component: () => import( "../components/tabler/pages/medias/images.vue")  },
  { path: "/gifs",    name: "Gifs",   component: () => import( "../components/tabler/pages/medias/gifs.vue")  },
  { path: "/videos",  name: "Videos", component: () => import( "../components/tabler/pages/medias/videos.vue")  },
  { path: "/audio",   name: "Audio",  component: () => import( "../components/tabler/pages/medias/audio.vue")  },
  
  // Games
  { path: "/pc",          name: "PC",           component: () => import( "../components/tabler/pages/games/pc.vue")  },
  { path: "/playstation", name: "Playstation",  component: () => import( "../components/tabler/pages/games/playstation.vue")  },
  { path: "/nintendo",    name: "Nintendo",     component: () => import( "../components/tabler/pages/games/nintendo.vue")  },
  
  // Docs
  { path: "/doc", name: "Documentation", component: () => import( "../components/tabler/pages/docs/docs.vue")  },
];

const router = new VueRouter({
  routes
});

export default router;
