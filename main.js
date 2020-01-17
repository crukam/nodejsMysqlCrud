let mysql      = require('mysql');
let connection = mysql.createConnection({
  host     : 'localhost', //mysql database name
  user     : 'root', //mysql database username
  password : '', //mysql database password
  port: '3308', //mysql database port
  database : 'testdatabase' //mysql database name
});
 
//connection.connect();
 
connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...');
   
    let create_employee = `create table if not exists employees(
      id int(11)  primary key not null auto_increment,
      employee_name varchar(255) not null,
      employee_salary double not null,
      employee_age int(11) not null)`;
  connection.query(create_employee,function(err,result,field){
      if(err){
        console.log(err.message);
      }
      
  });
  
  let employee = `INSERT INTO employees(employee_name,employee_salary,employee_age)
  VALUES('Paul',20000,25)`;
  connection.query(employee,function(err){
    if(err){
      return console.log(err.message);
    }
    console.log('New record inserted')
  });
  connection.end(function(err){
    if(err){
      return console.log(err.message);
    }
    console.log('Disconnected...')
  }
   
  );
   
});