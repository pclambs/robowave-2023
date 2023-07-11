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

    // listen for submit event on signup form
        // event.preventDefault()
        // get value out of #email input
        // create user using the jsonplaceholder API
            // if successful
                // redirect to the signup-thankyou.html?email=<email_here>

});



