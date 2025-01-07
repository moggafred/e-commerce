document.querySelector('#searchBar').addEventListener('input', function(e) {
    const searchValue = e.target.value.toLowerCase();
    const products = document.querySelectorAll('.card');
    products.forEach(product => {
    const title = product.querySelector('.card-title').textContent.toLowerCase();
    if (title.includes(searchValue)) {
    product.parentElement.style.display = '';
    } else {
    product.parentElement.style.display = 'none';
    }
    });
    });

    document.getElementById('searchBar').addEventListener('input', function (e) {
        const searchValue = e.target.value.toLowerCase();
        const products = document.querySelectorAll('.card');
    
        products.forEach(product => {
            const title = product.querySelector('.card-title').textContent.toLowerCase();
            if (title.includes(searchValue)) {
                product.parentElement.style.display = 'block';
            } else {
                product.parentElement.style.display = 'none';
            }
        });
    });
    
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
        alert('Please enter a valid email address.');
        return;
        }
        if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
        }
        alert('Registration successful!');
        });

        document.querySelector('#searchBar').addEventListener('input', function () {
            const query = this.value.toLowerCase();
            const products = document.querySelectorAll('.card');
            let matchFound = false;
        
            products.forEach(product => {
                const title = product.querySelector('.card-title').textContent.toLowerCase();
                if (title.includes(query)) {
                    product.parentElement.style.display = 'block';
                    matchFound = true; // At least one match found
                } else {
                    product.parentElement.style.display = 'none';
                }
            });
        
            // Show alert if no matches found
            if (!matchFound) {
                alert('No products found!');
            }
        });
        
       
    