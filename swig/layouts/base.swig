<!doctype html>
{% include '../modules/variables.swig' %}
{% import '../macros/image.swig' as macros %}
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>{% block title %}{{title}} {%if title %}-{% endif %} Swig Boilerplate{% endblock %}</title>
    {% include '../base/head.swig' %}
    {% block css %}

    {% endblock %}
    <script src="/assets/js/vendor/modernizr.js"></script>
</head>
<body class="{{tplFile.basename}}">
    {% include '../base/header.swig' %}
    <div class="content">

        {% block content %}{% endblock %}

    </div>

    {% include '../base/footer.swig' %}
    {% block js %}
        {% include '../base/default-js.swig' %}
    {% endblock %}
</body>
</html>
