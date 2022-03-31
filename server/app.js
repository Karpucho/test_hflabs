const path = require('path');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const FileStore = require('session-file-store')(expressSession);
const { sequelize } = require('./db/models');

const registrationRouter = require('./routes/registration');
const loginRouter = require('./routes/login');
const authRouter = require('./routes/auth');
const logoutRouter = require('./routes/logout');
const formRouter = require('./routes/form');
const tasksRouter = require('./routes/taskslist');

const PORT = process.env.PORT || 4000;
const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

const sessionConfig = {
  store: new FileStore(),
  name: 'user_sid',
  secret: process.env.SESSION_SECRET || 'test',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true,
}));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(expressSession(sessionConfig));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/registration', registrationRouter);
app.use('/login', loginRouter);
app.use('/auth', authRouter);
app.use('/logout', logoutRouter);
app.use('/form', formRouter);
app.use('/taskslist', tasksRouter);

app.listen(PORT, async () => {
  console.log('Сервер запущен на порту', PORT);

  try {
    await sequelize.authenticate();
    console.log('Подключение к БД успешно');
  } catch {
    console.log('Не получилось подключиться к БД');
  }
});
