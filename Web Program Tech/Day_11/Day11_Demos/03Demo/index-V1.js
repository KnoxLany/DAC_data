const http = require('http');

var helper = http.createServer((request, response)=>
                    {
                    response.write(" You asked for :  "
                                    + request.url)
                    response.end();
                    });
helper.listen(9999,()=>{
                            console.log("Server is listening at port no 9999")
                      })