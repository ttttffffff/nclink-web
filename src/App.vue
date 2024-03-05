<template>
  <div class="wrap">
      <!--<div class="page-wrap">-->
      <div class="layout page-wrap">
          <Menu mode="horizontal" theme="dark" active-name="1">
              <div class="layout-logo">nclink-web</div>
          </Menu>
          <div class="layout-content">
              <Row style="font-size: 16px;">
                  <i-col span="3">
                      <Menu :active-name="activename" width="auto" :open-names="[navindex]" accordion @on-select="getNavName" style="font-size: 16px;">
                          <Submenu name="1">
                              <template slot="title">
                                  <Icon type="briefcase"></Icon>
                                  功能选择
                              </template>
                              <Menu-item name="server">server</Menu-item>
                              <Menu-item name="sub">sub</Menu-item>
                              <Menu-item name="pub">pub</Menu-item>
                          </Submenu>
                  
                      </Menu>
                  </i-col>
                  <i-col span="21">
                      <div class="layout-content-bread">
                          <Breadcrumb style="font-size: 15px;">
                              <Breadcrumb-item>{{firsttitle}}</Breadcrumb-item>
                              <Breadcrumb-item>{{secondtitle}}</Breadcrumb-item>
                          </Breadcrumb>
                      </div>
                      <div class="layout-content-main">
                          <transition name="move" mode="out-in"><router-view></router-view></transition>
                      </div>
                  </i-col>
              </Row>
          </div>
      </div>
      <!--</div>-->
      <footer class="site-footer">
          <div class="layout-copy">
              2023 &copy; nclink-web
          </div>
      </footer>

  </div>
</template>

<script>
  const NAV = { 'server': '主页面-server-1',  'sub': '主页面-sub-1', 'pub': '主页面-pub-1'}
  export default {
      name: 'App',
      data () {
          return {
              firsttitle: '主页面',
              secondtitle: 'server',
              activename: 'server',
              navindex: '1',
              level: 2,
              showDigLogout: false
          }
      },
      methods: {
          getNavName (name) {
              var navobj = NAV[name]
              var first = navobj.split('-')[0]
              var second = navobj.split('-')[1]
              this.navindex = navobj.split('-')[2]
              this.activename = name
              this.firsttitle = first
              this.secondtitle = second
              this.$router.push(name)
              //origin
              //用户页面权限控制
              // this.level = localStorage.getItem('ms_level')
              // if (this.level === '' || this.username === '') {
              //     this.$router.push('/logout')
              //     return false
              // }else{
              //     var navobj = NAV[name]
              //     var first = navobj.split('-')[0]
              //     var second = navobj.split('-')[1]
              //     this.navindex = navobj.split('-')[2]
              //     this.activename = name
              //     this.firsttitle = first
              //     this.secondtitle = second
              //     this.$router.push(name)
              // }
          },
          //origin
          // logout () {
          //     this.$http('/login/logout').then((req) => {
          //         console.log(req)
          //         if(req.data.success === 0){
          //             localStorage.setItem('ms_username','')
          //             localStorage.setItem('ms_level','')
          //             this.$router.push('/logout')
          //         }
          //     })

          // },
          // cancel () {
          //     this.showDigLogout = false
          // }
      },
      created () {
          //路由跳转控制
          var name = this.$route.path.replace('/','')
          if (name === 'index') {
              name = 'server'
          }
          this.getNavName(name)
      }
  }
</script>

<style>
  * {
      margin: 0;
  }
  html, body {
      height: 100%;
      min-width: 1280px;
      /*font-size: 12px;
      font-family: 新宋体;*/
  }
  h4{
      font-size: 15px;
  }
  ul li{
      list-style: none;
  }
  table,form{
    font-size: 14px;
  }
  .wrap{height: 100%;}
  .page-wrap {
      min-height: 100%;
      /* equal to footer height */
      margin-bottom: -48px;
  }
  .page-wrap:after {
      content: "";
      display: block;
  }
  .site-footer, .page-wrap:after {
      height: 48px;
  }
  .site-footer {
      background: linear-gradient(#222, #444);
      color: white;
  }
  .footer-content{
      margin: auto;
      text-align: center;
  }
  .footer-content p{
      line-height: 34px;
  }

  .layout{
      border: 1px solid #d7dde4;
      background: #f5f7f9;
  }
  .layout-logo{
      /*width: 100px;
      height: 30px;
      background: #5b6270;*/
      border-radius: 3px;
      float: left;
      position: relative;
      /*top: 15px;*/
      left: 20px;
      color:#fff;
      font-size:20px;
  }
  .layout-nav{
      width: 420px;
      /*margin: 0 auto;*/
      float: right;
      padding: 0 25px;
      color: #fff;
      text-align: right;
  }
  .layout-assistant{
      width: 300px;
      margin: 0 auto;
      height: inherit;
  }
  .layout-breadcrumb{
      padding: 10px 15px 0;
  }
  .layout-content{
      min-height: 400px;
      height:100%;
      margin: 15px;
      overflow: hidden;
      background: #fff;
      border-radius: 4px;
  }
  .layout-content-bread,.layout-content-main{
      padding: 10px;
  }
  .layout-copy{
      text-align: center;
      padding: 10px 0 20px;
      color: #9ea7b4;
  }
</style>
