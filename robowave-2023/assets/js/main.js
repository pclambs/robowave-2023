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
        hideOverflow: true
    })

});



