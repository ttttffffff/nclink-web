<template>
  <div class="customer">
    <Form :model="fileInfo" :label-width="90" style="padding: 15px 0 0px;margin-bottom: 5px;">
     
      <row>

        <form-item label="配置文件路径">
          <Input type="text" v-model="fileInfo.conf_file" placeholder="输入配置文件启动服务" style="width: 300px;"/>
          <Button type="primary" @click="submitConfFile()" style="margin-left: 20px;">提交</Button>
        </form-item>
        

      </row> 

      <row>
        <Form-item label="日志文件路径">
          <Input type="text" v-model="fileInfo.log_file" placeholder="请输入文件路径" style="width: 300px;"/>
          <Button type="plain" @click="getLogFile()" style="margin-left: 20px;">{{ showLog?'收起日志信息':'查看日志' }}</Button>
          
        </Form-item>

      </row>

      
      <row>
        <Input placeholder="日志文件内容" type="textarea" v-model="LogCotent" v-show="showLog" readonly style="width: 400px;height: 300px; margin-top: 20px; white-space:pre-wrap"/>
      </row>
    </Form>

  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  export default {
    name:'Server',
    data () {
      return {

        fileInfo:{
          conf_file:"",
          log_file:"",
        },
        LogCotent:"",
        showLog:false,
      
      }
    },
    methods: {
      submitConfFile(){
        console.log('发送配置文件路径')
        axios.post('/backend/server',{
            "FilePath":this.fileInfo.conf_file
        }).then(response => {
        if (response.data['Code'] !== 0) {
          throw response
        }
        this.$Message.success(response.data.Msg)
      }).catch(error => {
        this.$Message.error('error: ' + error.Msg)
        this.loading = false
      })
      },

      getLogFile(){
        this.showLog=!this.showLog
        if(this.showLog){
          axios.post('/backend/server/log',{
            "FilePath": this.fileInfo.log_file,
          }).then(response => {
            if (response.data['Code'] !== 0) {
              throw response
            }
            // let reader=new FileReader()
            // reader.readAsText(response.data.Msg,'utf-8')
            // this.LogCotent=reader.result
            this.LogCotent=response.data['Msg']
            this.getLogSuccess=true
          }).catch(error => {
            this.$Message.error('error: ' + error.Msg)
            this.loading = false
          })
        }
        
      },


    },

  }
</script>

<style>
  .ivu-table-cell{
    padding:0 10px;
  }
  .vertical-center-modal{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ivu-modal{
    width: 660px;
    top:0;
  }
  .ivu-modal-content{
    width: 660px;
  }
</style>
