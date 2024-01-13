import { spawn, exec } from 'child_process';

// Khởi động server 1
const server1 = spawn('node', ['./my_project/server.js']);

server1.stdout.on('data', (data) => {
  console.log(`Server 1: ${data}`);
});

server1.stderr.on('data', (data) => {
  console.error(`Server 1 error: ${data}`);
});

// Khởi động server 2
const server2 = spawn('node', ['./my_project/server_2.js']);

server2.stdout.on('data', (data) => {
  console.log(`Server 2: ${data}`);
});

server2.stderr.on('data', (data) => {
  console.error(`Server 2 error: ${data}`);
});

// Khởi động server mới để phục vụ index.html
const serverIndex = spawn('node', ['./serverIndex.js']);

serverIndex.stdout.on('data', (data) => {
  console.log(`Server Index: ${data}`);
});

serverIndex.stderr.on('data', (data) => {
  console.error(`Server Index error: ${data}`);
});

// Chờ một khoảng thời gian ngắn để đảm bảo server đã khởi động xong, sau đó mở trình duyệt
setTimeout(() => {
  exec('start http://localhost:5500');
}, 1000); // Đợi 1 giây
