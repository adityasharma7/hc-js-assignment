
                                                         Task-2

Assume that both layouts were created using a similar CSS grid. What would you do to make layout b look like a? Clearly state any assumptions you make about the layout.

If you did not position “Next Day Shipping” absolutely to the right, why not? 

Solution:
first i use css grid layout  with the help of div element i make a row and in that row i made 3 coloumn so in easy term one row with 3 coloumn and as per task i need to make layout b look like layout a for that we need to apply text-align: right; to third div with help of class or we can do it by giving id as well by appliying this we can make layout b look like layout a.

 

                                                         Task-3

What is the difference between how Flexbox and CSS Grid calculate item/container size?

Solution:

*Main diffrence i found  that Grid is mainly focused on 2 dimensional And flex is genrally focus on 1 dimensional 

*Approach of css grid is genrally whole layout and if we talk about flex it genrally focused on primary content.

*Flexbox either focus on only row or either focus on only coloumn but in case of grid it will focus on both row and coloumn.

* One major diffrence when we have one conatiner with 5 children element if one of your items has a bigger size, then the entire layout would flex to accommodate the different sizes of the child elements.

*But what if you want a strictly defined layout where each row has three columns no matter the size of the item?so in that case we have to manually calculate the widh of each child in flexbox .To resolve that problem we use css grid which have the ability to control the placement of items ore precisely.
                                                            
Cite 3 sources. 
Provide links for all sources and time codes for videos.

Soution: https://www.youtube.com/watch?v=RSIclWvNTdQ
         https://blog.bitsrc.io/css-flexbox-vs-grid-layout-5ae41e28d1d2
         https://www.freecodecamp.org/news/the-main-differences-between-flexbox-and-css-grid-667c03461d2b/


                                                        Task-4

 You are writing a responsive layout for a website that has dramatically different layouts for mobile and desktop. Which of the following media queries would you use and why?

Solution:

First i go with mobile layout  design because The view for the very smallest devices is quite often a simple single column of content, much as it appears in normal flow. This means that you probably don't need to do a lot of layout for small devices — order your source well and you will have a readable layout by default.

For mobile view i didnt use any media query because i use mobile approach first beacuse once you've set up your typography, you're 70% of the way there. Things like:

font-family
font-size
font-weight
margin (on your text elements)
Next up, you can go and do some very basic layout styling on your layout elements, such as:

padding
background-color
color
and maybe some  with margin.

At that stage, things will be looking pretty good from a layout perspective on small screens. That means, without writing a single media query, you have a fully functional site on mobile.  

For desktop view: I use @media only screen and (min-width: 768px) {...} this means the defined property apply when the screen size is 768px and up so for desktop view this property works fine.

Resources:https://www.youtube.com/watch?v=WTz4A8IdeEQ
         https://codepen.io/kevinpowell/pen/ZEGdQgN
         :https://css-tricks.com/snippets/css/media-queries-for-standard-devices/
          




 
          

          
