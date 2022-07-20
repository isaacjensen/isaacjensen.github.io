---
layout: page
title: Projects
permalink: /projects/
---

{% for repo in site.github.public_repositories %}

## [{{ repo.name }}]({{ repo.html_url }})

{{ repo.description }}

Last updated: {{ repo.updated_at | date_to_string }}

{% endfor %}