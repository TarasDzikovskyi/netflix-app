const {Sequelize, DataTypes} = require('sequelize');
console.log(process.env.POSTGRES_PASS)
const sequelize = new Sequelize('netflix', 'postgres', 'Lenovoa390', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    logging: false
});


const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    username: {type: DataTypes.STRING, unique: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING, notNull: true},
    profilePic: {type: DataTypes.STRING, default: ""},
    isAdmin: {type: DataTypes.BOOLEAN, default: false},
    plan: {type: DataTypes.STRING, default: ""},
    cart: {type: DataTypes.ARRAY(DataTypes.STRING)},
    isActivated: {type: DataTypes.BOOLEAN, default: false},
    createdAt: {type: DataTypes.JSON, default: ""},
    updatedAt: {type: DataTypes.JSON, default: ""},
}, {timestamps: true, tableName: 'users'});


const List = sequelize.define('list', {
    title: {type: DataTypes.INTEGER, unique: true, required: true},
    type: {type: DataTypes.STRING},
    genre: {type: DataTypes.STRING},
    content: {type: DataTypes.ARRAY(DataTypes.STRING)},
}, {timestamps: true, tableName: 'lists'});


const Movie = sequelize.define('movie', {
    title: {type: DataTypes.STRING, required: true, unique: true},
    desc: {type: DataTypes.STRING},
    img: {type: DataTypes.STRING},
    imgTitle: {type: DataTypes.STRING},
    imgSm: {type: DataTypes.STRING},
    trailer: {type: DataTypes.STRING},
    video: {type: DataTypes.STRING},
    year: {type: DataTypes.STRING},
    limit: {type: DataTypes.INTEGER},
    genre: {type: DataTypes.STRING},
    vote:{type: DataTypes.INTEGER},
    isSeries: {type: DataTypes.BOOLEAN, default: false},
    isNetflix: {type: DataTypes.BOOLEAN, default: false},
}, {timestamps: true, tableName: 'movies'});


const OAuthAction = sequelize.define('oauthAction', {
    action_token: {type: DataTypes.STRING, required: true},
    user: {type: DataTypes.INTEGER, required: true, references: {model: User, key: 'id'}}
}, {timestamps: true});


const OAuth = sequelize.define('oauth', {
    access_token: {type: DataTypes.STRING, required: true},
    refresh_token: {type: DataTypes.STRING, required: true},
    user: {type: DataTypes.INTEGER, required: true, references: {model: User, key: 'id'}}
}, {timestamps: true});



module.exports.sequelize = sequelize
module.exports.User = User
module.exports.List = List
module.exports.Movie = Movie
module.exports.OAuth = OAuth
module.exports.OAuthAction = OAuthAction
