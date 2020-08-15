<template>
    <div>
        <div class="header py-4">
            <div class="container">
              <div class="d-flex">
                <router-link class="header-brand" to="/">
                  <img :src="logo" class="header-brand-img" alt="tabler logo">
                </router-link>
                <div class="d-flex order-lg-2 ml-auto">
                  <!-- <div class="nav-item d-none d-md-flex">
                    <a href="https://github.com/tabler/tabler" class="btn btn-sm btn-outline-primary" target="_blank">Source
                      code</a>
                  </div> -->
                  <!-- <div class="dropdown d-none d-md-flex">
                    <a class="nav-link icon" data-toggle="dropdown">
                      <i class="fe fe-bell"></i>
                      <span class="nav-unread"></span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                      <a href="#" class="dropdown-item d-flex">
                        <span class="avatar mr-3 align-self-center"
                          style="background-image: url(tabler/demo/faces/male/41.jpg)"></span>
                        <div>
                          <strong>Nathan</strong> pushed new commit: Fix page load performance issue.
                          <div class="small text-muted">10 minutes ago</div>
                        </div>
                      </a>
                      <a href="#" class="dropdown-item d-flex">
                        <span class="avatar mr-3 align-self-center"
                          style="background-image: url(tabler/demo/faces/female/1.jpg)"></span>
                        <div>
                          <strong>Alice</strong> started new task: Tabler UI design.
                          <div class="small text-muted">1 hour ago</div>
                        </div>
                      </a>
                      <a href="#" class="dropdown-item d-flex">
                        <span class="avatar mr-3 align-self-center"
                          style="background-image: url(tabler/demo/faces/female/18.jpg)"></span>
                        <div>
                          <strong>Rose</strong> deployed new version of NodeJS REST Api V3
                          <div class="small text-muted">2 hours ago</div>
                        </div>
                      </a>
                      <div class="dropdown-divider"></div>
                      <a href="#" class="dropdown-item text-center text-muted-dark">Mark all as read</a>
                    </div>
                  </div> -->
                  <div class="dropdown">
                    <a href="#" class="nav-link pr-0 leading-none" data-toggle="dropdown">
                      <span class="avatar" style="background-image: url(tabler/demo/faces/female/25.jpg)"></span>
                      <span class="ml-2 d-none d-lg-block">
                        <span class="text-default">{{ user.firstname }} {{ user.lastname }} </span>
                        <small class="text-muted d-block mt-1">{{ user.function }}</small>
                      </span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                      <div v-for="item in user.menu" :key="item.id" class="dropdown-item" >
                        <router-link :to="item.link" class="text-secondary">
                          <span class="float-right"><span v-if="item.badge" class="badge badge-primary">{{item.badge}}</span></span>
                          <i class="dropdown-icon" :class="item.icon"></i> {{ item.name }}
                        </router-link>
                      </div>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">
                        <i class="dropdown-icon fe fe-help-circle"></i> Besoin d'aide ?
                      </a>
                      <a class="dropdown-item" @click="logout">
                        <i class="dropdown-icon fe fe-log-out"></i> Déconnexion
                      </a>
                    </div>
                  </div>
                </div>
                <a href="#" class="header-toggler d-lg-none ml-3 ml-lg-0" data-toggle="collapse"
                  data-target="#headerMenuCollapse">
                  <span class="header-toggler-icon"></span>
                </a>
              </div>
            </div>
        </div>
        <div class="header collapse d-lg-flex p-0" id="headerMenuCollapse">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-3 ml-auto">
                  <form class="input-icon my-3 my-lg-0">
                    <input type="search" class="form-control header-search" placeholder="Chercher" tabindex="1">
                    <div class="input-icon-addon">
                      <i class="fe fe-search"></i>
                    </div>
                  </form>
                </div>
                <div class="col-lg order-lg-first">
                  <ul class="nav nav-tabs border-0 flex-column flex-lg-row">
                    <li class="nav-item" v-for="menu in menus" :key="menu.id">
                        <div v-if="menu.link">
                            <router-link :to="menu.link" class="nav-link" data-toggle="dropdown"><i class="fe fe-box"></i>
                                {{menu.name}}
                            </router-link>
                        </div>
                        <div v-if="!menu.link">
                            <a href="javascript:void(0)" class="nav-link" data-toggle="dropdown"><i class="fe fe-box"></i>
                                {{menu.name}}
                            </a>
                            <div class="dropdown-menu dropdown-menu-arrow" >
                                <router-link v-for="submenu in menu.submenu" :key="submenu.id" :to="submenu.link" class="dropdown-item ">{{submenu.name}}</router-link>
                            </div>
                        </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            logo: 'tabler/demo/brand/tabler.svg',
            menus: [
                { id: 1, name: 'Acceuil', link: '/',  icon: 'fe fe-home', submenu: null },
                { id: 2, name: 'Projets', link: null, icon: 'fe fe-box', 
                    submenu: [
                        { id: 1, name: 'Clients',       link: '/clients',   },
                        { id: 2, name: 'Projets',       link: '/projets',   },
                        { id: 3, name: 'Devis',         link: '/devis',     },
                        { id: 4, name: 'Stock',         link: '/stock',     },
                        { id: 5, name: 'Fournisseurs',  link: '/providers', },
                    ] 
                },
                { id: 3, name: 'Medias', link: null, icon: 'fe fe-box', 
                    submenu: [
                        { id: 1, name: 'Images', link: '/images' },
                        { id: 2, name: 'Gifs',   link: '/gifs',  },
                        { id: 3, name: 'Videos', link: '/videos' },
                        { id: 4, name: 'Audio',  link: '/audio', },
                    ] 
                },
                { id: 4, name: 'Games', link: null, icon: 'fe fe-box', 
                    submenu: [
                        { id: 1, name: 'PC',          link: '/pc',         },
                        { id: 2, name: 'Playstation', link: '/playstation' },
                        { id: 3, name: 'Nintendo',    link: '/nintendo',   },
                    ] 
                },
            ],
            user: {
                firstname: 'Jane',
                lastname: 'Pearson',
                function: 'Administrateur',
                avatar: '',
                menu: [
                    { id: 1, name: 'Profile',   icon: 'fe fe-user',     link: '/profile',  badge: null },
                    { id: 2, name: 'Réglages',  icon: 'fe fe-settings', link: '/reglages', badge: null },
                    { id: 3, name: 'Mails',     icon: 'fe fe-mail',     link: '/mails',    badge: 4 },
                    { id: 4, name: 'Messages',  icon: 'fe fe-send',     link: '/message',  badge: null },
                ]

            },
        }
    },
    methods: {
        logout(){

        }
    }
}
</script>

<style>

</style>