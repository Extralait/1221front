<template>
  <nav class="header-navbar navbar-expand-lg navbar navbar-fixed align-items-center navbar-shadow navbar-brand-center"
       data-nav="brand-center">
    <div class="navbar-header d-xl-block d-none">
      <ul class="nav navbar-nav">
        <li class="nav-item"><a class="navbar-brand" @click="$router.push('/')"><span
            class="brand-logo">
        </span>
          <h2 class="brand-text mb-0">BEC Protector</h2>
        </a></li>
      </ul>
    </div>
    <div class="navbar-container d-flex content">
      <div class="bookmark-wrapper d-flex align-items-center">
        <ul class="nav navbar-nav d-xl-none">
          <li class="nav-item"><a class="nav-link menu-toggle" href="javascript:void(0);"><i class="ficon"
                                                                                             data-feather="menu"></i></a></li>
        </ul>
        <ul class="nav navbar-nav">
          <li class="nav-item d-none d-lg-block"><a class="nav-link nav-link-style"><i class="ficon"
                                                                                       data-feather="moon"></i></a></li>
        </ul>
        <Navbar
            :is_auth="is_auth"
        />

      </div>
      <ul class="nav navbar-nav align-items-center ml-auto">
        <li class="nav-item dropdown dropdown-user"><a class="nav-link dropdown-toggle dropdown-user-link"
                                                       id="dropdown-user" href="javascript:void(0);" data-toggle="dropdown" aria-haspopup="true"
                                                       aria-expanded="false">
          <div class="user-nav d-sm-flex d-none"><span class="user-name font-weight-bolder">{{email}}</span><span
              class="user-status">Admin</span></div><span class="avatar"><img class="round"
                                                                              src="../../../public/app-assets/images/avatars/1-small.png" alt="avatar" style="height:40px;width:40px"><span
            class="avatar-status-online"></span></span>
        </a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-user"><a class="dropdown-item"
                                                                                            href="javascript:void(0);"><i class="mr-50" data-feather="user"></i> Профиль</a><a
              class="dropdown-item" href="javascript:void(0);"><i class="mr-50" data-feather="message-square"></i>
            Chats</a>
            <div class="dropdown-divider"></div><a class="dropdown-item" href="javascript:void(0);"><i class="mr-50"
                                                                                                       data-feather="settings"></i> Настройки</a><a
                class="dropdown-item" href="javascript:void(0);"><i class="mr-50" data-feather="power"></i> Выход</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import Navbar from "./Navbar";

export default {
  name: "Nav",
  components:{
    Navbar
  },
  props: [
    'is_auth','email'
  ],
  data(){
    return{

    }
  }
}
</script>

<style scoped>

</style>