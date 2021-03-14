<template>
  <div>
    <el-upload class="upload-demo" drag :http-request="requestUpload" multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <el-button type="primary" @click="actionUpload">开始上传</el-button>
  </div>
</template>
<script>
import { reactive } from "vue";
import axios from "axios";
import { ElMessage } from "element-plus";

export default {
  setup() {
    const state = reactive({
      fileList: [],
    });

    const requestUpload = (file) => {
      state.fileList.push(file);
    };

    const actionUpload = async () => {
      let formdata = new FormData();
      if (state.fileList.length) {
        state.fileList.forEach((v) => {
          formdata.append("files", v.file);
        });
        const res = await axios.post("/api/upload", formdata, {
          headers: {
            "Content-Type": " multipart/form-data",
          },
        });
        console.log(res, "12312");
      } else {
        ElMessage("请先上传图片！！！");
      }
    };
    return { state, requestUpload, actionUpload };
  },
};
</script>
<style scoped></style>
