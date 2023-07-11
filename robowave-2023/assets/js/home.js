$(document).ready(function() {
    // fullpagejs
    $('#fullpage').fullpage({
        //options here
        licenseKey: 'gplv3-license',
        navigation: true,
        navigationTooltips: ['Welcome', 'New Robots', 'Used Robots', 'Contact']
    });
    // typewriter
    var typewriterElements = document.querySelectorAll('.typewriter-effect')

    for (var i = 0; i < typewriterElements.length; i++) {
        var currentEl = typewriterElements[i]
        var innerText = currentEl.innerText
       
        new Typewriter(currentEl, {
            loop: true,
        })
        .typeString(innerText)
        .pauseFor(1000)
        .start()
    }

    // powerglitch
    PowerGlitch.glitch('.glitch', {
        // hideOverflow: true
    })


    // last error date
    $('[data-lastErrorDate]').each(function() {
        // get date from data-lastErrorDate
        var errDate = $(this).attr('data-lastErrorDate')
        // turn date into dayjs object
        errDate = dayjs(errDate)
        // get todays date as a dayjs object
        var today = dayjs()
        // find difference in days between days
        var diff = today.diff(errDate, 'day')
        
        var textClass

        if (diff < 7) {
            textClass = 'text-danger'
        } else if (diff < 30) {
            textClass= 'text-warning'
        } else {
            textClass = 'text-success'
        }
        // update paragraph
        $(this)
            .text(diff + " days since last error")
            .addClass(textClass)

    })

    // signup
    var submitBtn = document.getElementById('submitBtn')
    // listen for submit event on signup form
   submitBtn.addEventListener('click', function submitEmail(event) {
        event.preventDefault()
        // get value out of #email input
        var emailInput = document.getElementById('email')
        var email = emailInput.value.trim()
        // create user using the jsonplaceholder API POST request jsonplaceholder
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        }),
            .then(function(response) {
                console.log(response)
                // if successful
                if (response.ok && response.status === 201) {
                    // redirect to the signup-thankyou.html?email=<email_here>
                    window.location.assign('/signup-thankyou.html?email=' + email)
                }
                
            })
            .catch(function(error) {
                alert('Error creating user')
                throw new Error("Signup failed", error);
            })
        })
    }) 
    
    
    
    
});



