---
path: "/modern-react-with-redux-section2-lecture-29-33"
date: "2018-03-25"
title: "Mordern React with Redux Section 2 Lecture 29-33"
---

The main thing that I can take out of this video is that the data flow is seen with some interaction of the user. These data is passed around through function and the way the fuction is declared is quite new to me. I have this particular case of onVideoSelect.

The function is defined in index.js and its responsibility is to update app state. According to Stephen it takes a video an update the selectedVideo (into the new video and because index.js or App is where we display the video). It is passed into VideoList in index.js and it goes to video_list.js. Then VideoList passes it into VideoListItem (that means video_list_item.js and obviously you want a video to be an item of the VideoList). In VideoListItem, when an item is clicked, it is chosen and that video is selected to play in VideoDetail.

![Components picture](http://res.cloudinary.com/hunghayho131/image/upload/v1530354377/ReactReduxPic.png)

After that in the next part, I handle the search bar and using lodash to change the search behavior when user type anything into the input box. For now all I get is that whenever a functionality needs to be constructed, I should think of function and creating function and passing it around. Ah I figure out that we haven't touched any React built-in function such as ComponentDidAmount or ComponentWillReceiveProps. Hopefully those things will be mentioned in the courses because to some extent I still feel quite intimidated with those long ass names.

Video 33 is the last part of Youtube API Tutorial. I don't think this tutorial is awfully difficult but there are still things that I don't understand. I got more comfortable with ES6 syntax but if I am asked to replicated them by myself, it would be really challenging. And btw, I still don't know what two callback functions which were mentioned by Stephen are in this small app.

I think this course will be put onhold because I need to understand React better before switching to Redux. Two things I am going to do is to translate React Docs and dig into new tutorial about Pure React app.