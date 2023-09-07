const mysql =  require('mysql');

var connection = mysql.createConnection({
                        host     : 'localhost',
                        user     : 'root',
                        password : 'manager',
                        database : 'punedac'
                       });

connection.connect();
connection.query("select * from Emp", (error, result)=>{
                                if(error==null)
                                {
                                   var data = JSON.stringify(result) 
                                 console.log(data);
                                 connection.end();
                                } 
                                else
                                {
                                    console.log(error)
                                    console.log("Something wrong!")
                                }
                            })
