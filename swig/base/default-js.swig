{% if production %}
<script src="/assets/dist/main.js"></script>
{% else %}
<script data-main="/assets/js/main" src="/assets/bower_components/requirejs/require.js"></script>

<script>document.write('<script src="http://'
    + location.host.split(':')[0]
    + ':35729/livereload.js"></'
    + 'script>')</script>
{% endif %}
