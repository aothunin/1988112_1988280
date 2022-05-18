let express = require('express');
let app = express();

// Set Public Static Folder
app.use(express.static(__dirname + '/public'));

const Handlebars = require('handlebars');

// Import function exported by newly installed node modules.
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');

// Use View Engine
let expressHbs = require('express-handlebars');
let helper = require('./controllers/helper');
let paginateHelper = require('express-handlebars-paginate');
let hbs = expressHbs.create({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
    helpers: {
        createStarList: helper.createStarList,
        createStars: helper.createStars,
        createPagination: paginateHelper.createPagination
    },
    // ...implement newly added insecure prototype access
    handlebars: allowInsecurePrototypeAccess(Handlebars)
    
});
app.engine('hbs', hbs.engine);

app.set('view engine', 'hbs');

// Use Body Parser
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Use Cookie-parser
let cookieParser = require('cookie-parser');
app.use(cookieParser());

// Use Session
let session = require('express-session');
app.use(session({
    cookie: { httpOnly: true, maxAge: null},
                // 30 ngày 24h, 60', 60s, 1000ms
    secret: 'S3cret', // bắc buộc phải nhập
    resave: false,
    saveUninitialized: false
}));

// Use Cart controller
let Cart = require('./controllers/cartController');
app.use((req, res, next) => {
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    req.session.cart = cart;
    res.locals.totalQuantity = cart.totalQuantity;

    res.locals.fullname = req.session.user ? req.session.user.fullname : '';
    res.locals.isLoggedIn = req.session.user ? true : false;
    next();
});


// Define your routes here
// '/' -> trang index
// '/products' -> hiển thị trang Category
// '/products/:id' -> hiển thị single product

// index.js => routes/...Router.js => controllers/...Controller.js
app.use('/', require('./routes/indexRouter'));
app.use('/products', require('./routes/productRouter'));
app.use('/cart', require('./routes/cartRouter'));
app.use('/comments', require('./routes/commentRouter'));
app.use('/reviews', require('./routes/reviewRouter'));
app.use('/users', require('./routes/userRouter'));


//Hàm Tạo CSDL
app.get('/sync', (req,res) => {
    //lấy models/CSDL ra
    let models = require('./models');
    models.sequelize.sync()
    .then(()=>{ //nếu sync thành công
        res.send('database sync completed!');
    });
});

app.get('/:page', (req,res) => {
    let banners = {
        blog: 'Our Blog',
        cart: 'Shopping Cart',
        category: 'Shop Category',
        checkout: 'Checkout',
        confirmation: 'Order Confirmation',
        contact: 'Contact Us',
        login: 'Login/Register',
        register: 'Register',
        single_blog: 'Blog Details',
        single_product: 'Shop Single',
        tracking_order: 'Order Tracking'
    };
    let page = req.params.page;
    res.render(page, { banner: banners[page]});
});

// Set Server Port & Start Server
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
    console.log(`Server is running at port ${app.get('port')}`);
});

