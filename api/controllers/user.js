const jwt = require("jsonwebtoken");

exports.user_login = async(req, res, next) => {
    const token = jwt
        .sign({
                userName: req.body.userName,
                userEmail: req.body.userEmail,
                exp: Math.floor(Date.now() / 1000) + 60 * 60,
            },
            process.env.TOKEN_SECRET
        )
        .toString();
    req.session.userToken = token;
    res.status(200).json({
        result: 1,
        message: "Login Successfull",
        token: token
    });
};