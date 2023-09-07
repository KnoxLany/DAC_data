const http = require('http');
var server = http.createServer((request, response)=>
                        {
                            
                            if(request.url=="/users")
                            {
                                var data = [
                                    {"ENo":1,"EName":"Mahendra","EAddress":"Pune"},{"ENo":2,"EName":"Virat","EAddress":"Nagpur"}
                                ];

                                response.setHeader("Content-Type", "application/json");

                                response.write(JSON.stringify(data));

                                response.end();
                            }
                            else
                            {
                                response.write(null);
                                response.end();
                            }
                        });
server.listen(9999,()=>{
    console.log("Server Started..")
});