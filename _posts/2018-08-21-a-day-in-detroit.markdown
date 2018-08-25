---
layout: post
number: "00"
title:  A Day In Detroit
entry_image: entry_image.jpg
hero_image: image_1.jpg
image_2: image_2.jpg
image_3: image_3.jpg
image_7: image_7.jpg
additional_images:
    image_1.jpg: View from a highrise building in Detroit
    image_2.jpg: Enjoying a brew at Atwater Brewery on their second level beer garden
    image_3.jpg: Fancy drinks from Two James Distillery
    image_4.jpg: Two James Distillery
    image_5.jpg: Enjoying some dinner at a bar near the stadium
    image_6.jpg: Token selfie
    image_7.jpg: Nosebleed seats sometimes have the best view
---
{% assign image_path = {{site.baseurl}} | append: {{site.images_directory}} | append: {{page.number}} |append: "/" %}
{% assign image_2_path = {{image_path}} | append: {{page.image_2}%}
{% assign image_3_path = {{image_path}} | append: {{page.image_3}%}
{% assign image_7_path = {{image_path}} | append: {{page.image_7}%}


Katie and I decided to take the day off an spend it in Detroit. We knew we wanted to go to a Tigers game, but we didn't really have a game plan.
We took off around 1pm and made it to Detroit around 2pm. First stop, Atwater Brewery! We got to enjoy an awesome summer day on their second level beer garden.

<div class="image-wrap"><img class="blog-image" src="{{image_2_path}}"></div>

From there we drove the Corktown to check out Two James Distillery. We had some trouble finding it at first because it is hidden off the main road.
They had the garage door opened up, and we pretty much had the place to ourselves. The drinks were really great, but they were on the pricier side
and took like 10 minutes to make.

<div class="image-wrap"><img class="blog-image" src="{{image_3_path}}"></div>

After that we headed downtown for some dinner. We did a bit of bar hopping before the game, so needless to say we were feeling pretty good come gametime.
We got to the game a little early and managed to score a free coozie!

<div class="image-wrap"><img class="blog-image" src="{{image_7_path}}"></div>

The Tigers of course lost the game, but we had a fun time either way!