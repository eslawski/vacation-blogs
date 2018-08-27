---
layout: post
number: "01"
title: "Adventures in Thailand"
entry_image: entry_image.jpg
hero_image: hero_image_2.jpg
image_2: image_2.jpg
image_3: image_3.jpg
image_9: image_9.jpg
additional_images:
    pano_1.jpg: Pano test1
    image_1.jpg: A view from the beach near the Wagner Condo
    image_2.jpg: Eating dinner at Mick's house
    image_3.jpg: View over Pattaya
    image_4.jpg: On a boat headed to Ko Chang Island
    image_5.jpg: Beautiful sunset outside our AirBnB
    image_6.jpg: Chilling by the pool
    image_7.jpg: Who needs a car when the entire extended family can fit on a moped
    image_8.jpg: Buddha statue
    image_9.jpg: Going to see the elephants at the Elephant Rescue Park!
    image_10.jpg: Picture with Lola.
    image_11.jpg: Awesome pic of the valley
---
{% assign image_path = site.baseurl | append: site.images_directory | append: page.number |append: "/low_res/" %}
{% assign image_3_path = image_path | append: page.image_3 %}
{% assign image_2_path = image_path | append: page.image_2 %}
{% assign image_9_path = image_path | append: page.image_9 %}

Last year we were presented with a once in a lifetime opportunity to visit Thailand. My friends Mike's parents have been
living out there for almost three years. Katie and I were lucky enough to be included in this Wagner family vacation
to visit his parents who lived in Pattaya Thailand!

<div class="image-wrap"><img class="blog-image" data-src="{{image_3_path}}"></div>

We did a lot of cool stuff that I will limit in this sample blog post. The Wagner family had a private driver name Mick.
We rented a 12 passenger van for the week and we drove around in that. He even had us over for dinner once. It was quite
the experience.

<div class="image-wrap"><img class="blog-image" data-src="{{image_2_path}}"></div>

One of the highlights of the trip was going to see the elephants. When we tell people this they usually ask, "Did you ride them"?
And we always proudly responded with "No"! We learned on this trip how poorly treated elephants are by tourists. They are
essentially tortured in captivity their entire lives for the pleasure of humans.

We happened to visit "Elephant Nature Park" which is a elephant sanctuary that rescues these creatures. This is some more filler so that it wraps to the next line. And look how easy it was to embed a video.

<div class="video-container">
<div class="video-wrapper">
    <iframe width="560" height="349"
        src="https://www.youtube.com/embed/tgbNymZ7vqY">
    </iframe>
</div>
</div>
Overall it was an amazing trip with way more details that I will leave out of this sample blog post for now! This is some more filler so that it wraps to the next line.