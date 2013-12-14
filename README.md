# ng-gravatar
this is a small angular.js directive to inject a gravatar image into your HTML see examples below

## Usage
download the package and link it to you index.html in a ```<script></script>``` tag and then inject ```ngGravatar``` into your module/controller/whatever

then wherever you want the gravatar simply use the ```<ng-gravatar></ng-gravatar``` tag like so

```html

<ng-gravatar hash="769a81e0ebf1c28cd80624ce79847b6ae59a20cd" size="500"></ng-gravatar>

```
this will render my current gravatar image with size of 500x500
(__NOTE:__ the image size defaults to 300x300 if not set in the size attr)