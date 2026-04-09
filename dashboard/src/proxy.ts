import {createProxyMiddleware} from "http-proxy-middleware";

module.exports = function(app:any){
    app.use(
        '/eas',
        createProxyMiddleware({
            target : 'http://localhost:22510/eas',
            pathRewrite : {
                '^/eas': '/eas',
            }
        })
    )
}