<template>
    <div class="customer">
      <div class="left-bar">
      <Form :model="formInfo" :label-width="100" style="padding: 20px 0 0px;margin-bottom: 5px;width:1000px">
       <row>
        <Col span="12">
         <form-item label="主机IP">
           <Input type="text" v-model="formInfo.DomainName" placeholder="请输入主机名" style="width: 300px;"/>
         </form-item>
        </Col>
        <Col span="12">
         <form-item label="主题">
           <Input type="text" v-model="formInfo.Topic" placeholder="请输入主题" style="width: 300px;"/>
         </form-item>
        </Col>
       </row> 
       <row>
        <form-item label="消息">
           <Input type="text" v-model="formInfo.Message" style="width: 800px;"/>
         </form-item>
       </row>
       <row>
        <Col span="12">
         <form-item label="端口">
           <Input type="text" v-model="formInfo.Port" placeholder="请输入端口" style="width: 300px;"/>
         </form-item>
        </Col>
        <Col span="12">
          <form-item label="用户名">
           <Input type="text" v-model="formInfo.UserName" placeholder="请输入用户名" style="width: 300px;"/>
         </form-item>
        </Col>
       </row>
       <row>
        <Col span="12">
          <form-item label="用户密码">
           <Input type="text" v-model="formInfo.UserPassword" placeholder="请输入密码" style="width: 300px;"/>
         </form-item>
        </Col>
        <Col span="12">
          <form-item label="Ca文件">
           <Input type="text" v-model="formInfo.CaFile" style="width: 300px;"/>
         </form-item>
        </Col>
       </row>
       <row>
        <Col span="12">
          <form-item label="证书文件">
           <Input type="text" v-model="formInfo.CertFile" style="width: 300px;"/>
         </form-item>
        </Col>
        <Col span="12">
          <form-item label="Key文件">
           <Input type="text" v-model="formInfo.KeyFile" style="width: 300px;"/>
         </form-item>
        </Col>
       </row>
       <row>
        <Col span="12">
          <form-item label="加密证书文件">
           <Input type="text" v-model="formInfo.EncCertFile" style="width: 300px;"/>
         </form-item>
        </Col>
        <Col span="12">
          <Form-item label="加密密钥文件">
           <Input type="text" v-model="formInfo.EncKeyFile" style="width: 300px;"/>
         </Form-item>
        </Col>
       </row>
       <row>
        <div style="text-align: right; margin-top:20px; margin-right: 100px;" >
            <Form-item>
          <Button type="primary"  @click="submitForm()" >提交</Button>
         </Form-item>
        </div>
       </row>
     </Form>
    </div>
    </div>
  </template>
  
  <script type="text/ecmascript-6">
import axios from 'axios'
    export default {
      name: 'Pub',
      data() {
          return {
              formInfo: {
                  "DomainName": "127.0.0.1",
                  "Topic": "test",
                  "Message":"hello",
                  "Port": "1883",
                  "UserName": "admin",
                  "UserPassword": "admin",
                  "CaFile": "",
                  "CertFile": "",
                  "KeyFile": "",
                  "EncCertFile": "",
                  "EncKeyFile": ""
              },
              showSub:false
          };
      },
      methods: {
        submitForm(){
          console.log('发送pub信息')
          axios.post('/backend/pub',this.formInfo).then(response => {
            if (response.data['Code'] !== 0) {
              throw response
            }
            this.$Message.success(response.data.Msg)
          }).catch(response => {
            this.$Message.error('error: ' + response.data.Msg)
            this.loading = false
          })
        }
      },
   
  }
  </script>
  
  <style>
  .left-bar {
    float: left;
    /* position: absolute;
    height: 600px;
    overflow: auto; */
  }
  .right-bar {
    float: right;
    right:600px;
    position: absolute;
    /* overflow: auto; */
  }
  
  </style>
  