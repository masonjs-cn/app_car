var net = require('net')
 
// 检测端口是否被占用
function portIsOccupied (port) {
 // 创建服务并监听该端口
 var server = net.createServer().listen(port)
 
 server.on('listening', function () { // 执行这块代码说明端口未被占用
 server.close() // 关闭服务
 console.log('The port【' + port + '】 端口未被占用') // 控制台输出信息
 })
 
 server.on('error', function (err) {
 if (err.code === 'EADDRINUSE') { // 端口已经被使用
  console.log('The port【' + port + '】 端口已经被使用')
  var order = 'lsof -i :3000';
  var exec = require('child_process').exec;
  var qqname = 'shuai';
  exec(order, function (err, stdout, stderr) {
      if (err) {
          return console.log(err);
      }
      stdout.split('\n').filter(function (line) {
          var p = line.trim().split(/\s+/);
          var address = p[1];
          if (address != undefined && address != "PID") {
              exec('kill ' + address, function (err, stdout, stderr) {
                  if (err) {
                      return console.log('释放指定端口失败！！');
                  }
                  console.log('占用指定端口的程序被成功杀掉！');
              });
          }
      });
  });
 }
 })
}
 
// 执行
portIsOccupied(3000)