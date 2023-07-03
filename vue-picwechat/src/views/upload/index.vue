<template>
    <div class="upload">
      <div class="uploadfile">
        <el-upload
            ref="upload"
            action="https://awake.zeabur.app/pictureShare/image/upload"
            name="img"
            :headers="headers"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :multiple="true"
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList"
        >
            <el-button size="small" type="primary">上传图片</el-button>
        </el-upload>
        <el-button @click="submit">点击登录</el-button>
      </div>
    </div>
</template>
<script>
import api from "@/api/upload.js";
export default {
  name: "",
  data() {
    return {
      fileList: [],
      headers:{ "Contene-Type": "multipart/form-data"},
      token:"",
    }
  },
  methods: {
    submit() {
      let reqData = {
        username: "admin",
        password: "lqh666***",
      }
      api.login(reqData).then((res) => {
        this.token = res.data.data
        this.$set(this.headers,"token",res.data.data)
        console.log("请求成功",res.data.data)
      }).catch((err) => {
        console.log("请求失败",err)
      }).then(()=>{})
    },
    // submit() {
    //   login().then((res) => {
    //     console.log(res);
    //   }).catch((err) => {
    //     console.log(err)
    //   }).then(() => {})
    // },
    handlePreview(file) {
      console.log(file);
    }, 
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
  },
};
</script>
<style lang="scss" scoped>
.upload {
  height: 100vh;
  background-color: #4f6982;
}
.uploadfile {
  width: 50%;
  margin-left: 25%;
}
.el-button {
  margin-top: 40vh;
}
</style>
