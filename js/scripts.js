$(window).ready(function () {

    $($('.container')[0]).css('min-height', $(window).height() - 20 + 'px');

    function initHightlight() {
        let snippets = document.querySelectorAll('.hightlight code');
        snippets.forEach(function (snippet, key) {
            hljs.highlightBlock(snippet);
        });
    }

    initHightlight();

    $('.responsive-img').materialbox();

});