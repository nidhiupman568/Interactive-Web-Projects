/*// Taking Array of Image Addresses
// Suppose it as information from the server
// Modify this for different address*/
a = [
    'https://www.geeksforgeeks.org/wp-content/uploads/javascript.png',
    'https://www.geeksforgeeks.org/wp-content/uploads/jquery-banner.png',
    'https://www.geeksforgeeks.org/wp-content/uploads/html-768x256.png',
    'https://www.geeksforgeeks.org/wp-content/uploads/CSS-768x256.png',
    'https://www.geeksforgeeks.org/wp-content/uploads/php-1-768x256.png',
    'https://media.geeksforgeeks.org/wp-content/uploads/20200130114942/bootstrap4.png'
    ];
    let x = 0;
    for (let i = 0; x < a.length; i++) {
        let append = "<div class='row'>";
        for (let j = 0; j < 6 && x < a.length; j++) {
            append += `
                <div class="contain col-sm-6 col-md-2">
                    <img class="img-responsive" src=` + a[x++] + `>
                </div>
                `;
        }
        append += '</div>';
        appender(append);
    }
    
    // Function to append the data
    function appender(x) {
        $('#gallery').html(function (i, original_html) {
            return (original_html + x);
        });
    }
    
    // For Image Modal
    $(document).on('click', 'img', function () {
        imgAddr = $(this).attr('src');
        data = "<center><img src=" + imgAddr + " width='50%'>";
        $('#myModal').find('.modal-body').html(data);
        $('#myModal').modal();
    });
    