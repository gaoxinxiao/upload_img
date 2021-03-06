const http = require('http')
const createHandler = require('github-webhook-handler')
const handler = createHandler({
    path: '/updateCode',
    secret: '328485682'
})
const { spawn } = require('child_process')
function run_cmd(cmd, args, callback) {
    const child = spawn(cmd, args)
    let resp = ''
    child.stdout.on('data',function(buffer){
        resp+=buffer.toString()
    })
    child.stdout.on('end',function(){
        callback(resp)
    })
}

http.createServer((req, res) => {
    console.log('访问成功')
    handler(req, res, err => {
        res.statusCode = 404
        res.end('no such location')
    })
}).listen(7777, () => console.log('webhook listen at 7777'))

handler.on('error', err => {
    console.error('Error', err.message)
})

handler.on('*', event => {
    console.log('Receive * ', event.payload.ref)
    console.log('打包发布中请等待。。。。')
    run_cmd('sh',['./deploy-dev.sh'],function(text){
        console.log(text,'执行完成')
    })
})