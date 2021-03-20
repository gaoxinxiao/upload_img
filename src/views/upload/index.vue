<template>
  <div>
    <el-upload
      class="upload-demo"
      :on-remove="removeImg"
      :before-upload="beforeUpload"
      drag
      :limit="20"
      :http-request="requestUpload"
      multiple
    >
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

    const beforeUpload = (file) => {
      let list = ["jpg", "png", "jpeg", "gif"];
      let imgType = file.name.split(".")[1];
      if (!list.includes(imgType)) {
        ElMessage("请上传图片！！！");
        return false;
      }
      let flag = state.fileList.some((item) => item.name === file.name);
      state.fileList.push(file);
      if (flag) {
        ElMessage("图片上传重复！！！");
        return false;
      }
    };

    const requestUpload = () => {};

    const actionUpload = async () => {
      let formdata = new FormData();
      if (state.fileList.length) {
        state.fileList.forEach((file) => {
          formdata.append("files", file);
        });
        await axios.post("/api/upload", formdata, {
          headers: {
            "Content-Type": " multipart/form-data",
          },
        });
        state.fileList.map((file) => {
          ElMessage.success({
            message: `上传成功请使用图片 http://www.gxx365.com/${file.name}`,
            type: "success",
          });
          removeImg(file)
        });
      } else {
        ElMessage("请先上传图片！！！");
      }
    };

    const removeImg = (v) => {
      let nameList = state.fileList.map((item) => item.name);
      let index = nameList.indexOf(v.name);
      if (index !== -1) {
        state.fileList.splice(index, 1);
      }
    };
    return {
      state,
      requestUpload,
      actionUpload,
      removeImg,
      beforeUpload,
    };
  },
};
</script>
<style scoped></style>
