





fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => {
                //let output = '<h2>Users</h2>';
                let myArray= [];
				
				data.forEach(function(user){
                    myArray.push(user.username)

					/*output += `
                    <ul>
                        <li> Name: ${user.name}</li>
                    </ul>
                    `;*/
					myArray.sort(function(a, b){
                  // ASC  -> a.length - b.length
                  // DESC -> b.length - a.length
                  return a.length - b.length;
                });
                    document.getElementById('userNames').innerHTML = myArray;
                }); 
            })
        
        