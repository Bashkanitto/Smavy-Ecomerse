const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3001; // Выберите любой доступный порт

const mongoURI = 'mongodb://localhost:27017'; // URI подключения к MongoDB
const dbName = 'your-database-name'; // Замените 'your-database-name' на фактическое имя вашей базы данных

app.use(bodyParser.json());

// Маршрут для обработки отправки формы входа
app.post('/api/login', async (req, res) => {
    try {
        const { username, password, rememberMe } = req.body;

        // Подключение к MongoDB
        const client = new MongoClient(mongoURI);
        await client.connect();

        const db = client.db(dbName);

        // Выполнение операций с базой данных (например, логика аутентификации)
        // Пример: const user = await db.collection('users').findOne({ username, password });

        // Фиктивный ответ для демонстрации
        res.json({ success: true, message: 'Login successful' });

        // Закрытие соединения
        await client.close();
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, message: 'An error occurred' });
    }
});

// Маршрут для обработки отправки формы регистрации
app.post('/api/signin', async (req, res) => {
    try {
        const { email, password, confirmPassword, agree } = req.body;

        // Подключение к MongoDB
        const client = new MongoClient(mongoURI);
        await client.connect();

        const db = client.db(dbName);

        // Выполнение операций с базой данных (например, логика регистрации пользователя)
        // Пример: await db.collection('users').insertOne({ email, password });

        // Фиктивный ответ для демонстрации
        res.json({ success: true, message: 'Signin successful' });

        // Закрытие соединения
        await client.close();
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, message: 'An error occurred' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
