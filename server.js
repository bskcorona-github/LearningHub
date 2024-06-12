const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// ミドルウェア
app.use(cors());
app.use(express.json());

// MongoDB接続
const mongoURI = 'mongodb+srv://bsk_corona:tkz2001r!@cluster0.qadwnp5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';  // ここにMongoDB Atlasの接続文字列を貼り付けます

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.log(err);
});

// ルート設定
const booksRouter = require('./routes/books');
app.use('/books', booksRouter);

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
