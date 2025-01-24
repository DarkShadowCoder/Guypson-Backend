const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const MySQLStore = require('connect-mysql')(session);

const prodRoutes = require('./routes/census/productor.routes');
const specRoutes = require('./routes/Configuration/speculations.routes');
const semencierRoutes = require('./routes/census/semencier.routes');
const opRoutes = require('./routes/census/op.routes');
const daaderRoutes = require('./routes/Configuration/Users/daaders.routes');
const ddaderRoutes = require('./routes/Configuration/Users/ddaders.routes');
const draderRoutes = require('./routes/Configuration/Users/draders.routes');
const pasRoutes = require('./routes/Configuration/Users/pas.routes');
const villageRoutes = require('./routes/Configuration/Users/village.routes');
const campagnesRoutes = require('./routes/census/campagnes.routes');
const ReportRoutes = require('./routes/reporting/reporting.routes');
const userRoutes = require('./routes/user.routes')

const { checkSession } = require('./controllers/user.controller');


const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

// Middleware pour analyser les cookies
app.use(cookieParser());
app.use(cors(corsOptions));

// Configuration de la session
const sessionStore = new MySQLStore({
  config: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'guypson',
  },
});

app.use(session({
  secret: 'password', 
  resave: false, 
  saveUninitialized: false, 
  store: sessionStore,
  cookie: {
    secure: false, 
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 1 jour
  }
}));


// Middleware pour analyser le corps des requêtes
app.use(bodyParser.json());

// Utilisation des Routes 
app.use('/api/prod', prodRoutes);
app.use('/api/spec', specRoutes);
app.use('/api/semencier', semencierRoutes);
app.use('/api/op', opRoutes);
app.use('/api/daader', daaderRoutes);
app.use('/api/drader', draderRoutes);
app.use('/api/ddader', ddaderRoutes);
app.use('/api/village', villageRoutes);
app.use('/api/campagnes', campagnesRoutes);
app.use('/api/pas', pasRoutes);
app.use('/api/report', ReportRoutes);
app.use('/api/user', userRoutes);


// Route de test pour la session
app.get('/api/session', checkSession);

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
