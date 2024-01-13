const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 4000;

// Cấu hình CORS
const corsOptions = {
  origin: [
    'http://127.0.0.1:5500',
    'http://localhost:5500',
    'https://56cc-171-253-131-72.ngrok-free.app'
  ],
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Đường dẫn tuyệt đối đến ngrok_url.txt từ thư mục chứa server_2.js
const filePath = path.join(__dirname, '..', 'ngrok_url.txt');

// Endpoint to get ngrok URL
app.get('/api/ngrok-url', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Lỗi khi đọc file');
      return;
    }
    res.send({ ngrokUrl: data.trim() });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
