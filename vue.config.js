module.exports = {
   // 正向代理
   devServer : {
       proxy : {
           '/api' : {
               target : "http://39.97.33.178",
               changeOrgin : true
           }
       }
   }
}