const express = require('express');
const app = express();
const port = 5500;

// Đường dẫn tới thư mục chứa index.html
// Giả sử file index.html nằm cùng cấp với file này
app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Server đang chạy trên http://localhost:${port}`);
});
