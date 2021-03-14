const Koa = require('koa');
const app = new Koa()
const router = require('koa-router')()
// const bodyParser = require('koa-bodyparser'); //前端使用application/json传参的时候 koa-bodyparser 不识别
const koaBody = require('koa-body') //需要使用koa-body解析
// app.use(bodyParser())
const fs = require('fs')
const mkdirp = require('mkdirp');


app.use(koaBody({
    multipart: true,
    formidable: {
        maxFileSize: 200 * 1024 * 1024    // 设置上传文件大小最大限制，默认2M
    }
}));
app.use(router.routes())

const uploadImg = (res, finshList) => {
    console.log(res.path, 'path')
    console.log(res.name, 'name')
    const { path, name } = res
    const uploadPath = "/app/upload_img/server";
    const flag = fs.existsSync(uploadPath); // 判断文件夹是否存在
    // 同步创建多级文件夹
    if (!flag) mkdirp.sync(uploadPath);
    const filePath = `/app/upload_img/server/${name}`
    const reader = fs.createReadStream(path)
    const upStream = fs.createWriteStream(filePath);
    upStream.on('finish', function () {
        console.log("finish");
    });
    reader.pipe(upStream);
}

router.post('/upload', async (ctx) => {
    const files = ctx.request.files
    let arr = []
    if (Array.isArray(files.files)) {
        //多个图片的情况
        files.files.forEach(res => uploadImg(res, arr))
    } else {
        //一个图片的情况
        uploadImg(files.files, arr)
    }
    ctx.body = 'ok'
})



app.listen(7000, () => console.log('listen at 7000'))