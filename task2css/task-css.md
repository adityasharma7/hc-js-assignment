Task 2- 2. Assume that both layouts were created using a similar CSS grid. What would you do to make layout b look like a? Clearly state any assumptions you make about the layout.

If you did not position “Next Day Shipping” absolutely to the right, why not? 

Ans- In CSS grid to a particular grid item change the name and at that specific item set the alignment. Write a seperate css for the item.

Task3-css
3. What is the difference between how Flexbox and CSS Grid calculate item/container size?
Ans-- Flexbox works better for 1D and CSS Grid supports for 2D because it works for both rows and columns, on the other hand, Flexbox only deals with one of them. Flexbox is direction Agnostic. Flexbox has different properties for direction, flow, content, and others.
Flexbox layouts are best for small-scale layouts.
The grid layout is designed for large-scale layouts.

Reference list or cites refer’s-
1.) https://www.geeksforgeeks.org/comparison-between-css-grid-css-flexbox/#:~:text=One%20Vs%20Two%20Dimension%3A,element%20(row%20or%20column).

2.) https://www.freecodecamp.org/news/the-main-differences-between-flexbox-and-css-grid-667c03461d2b/

3.) https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox


Task 4- CSS
Que-4. You are writing a responsive layout for a website that has dramatically different layouts for mobile and desktop. Which of the following media queries would you use and why?


    1. @media (max-width: …
    2. @media (min-width: …

Ans- We use the mobile first approach to simplify the code. The Mobile-first approach helps to make the website more responsive. Media query always designs first for mobile, when it works for smart devices it is much faster, and displays the page as fast as possible.
We have to use both the media query to set the different layouts for mobile and desktop views. And for targeting large devices like tablets and laptops we use different media queries according to the typical device breakpoint.

@media(min-width: X px)- This style will be applied for browser’s viewport width equal to or wider than x px.
@media(max-width: X px)- this style will be applied for the browser’s viewport width equal to or narrow than x px.

Cites Refers-
1.) https://www.geeksforgeeks.org/how-to-target-desktop-tablet-and-mobile-using-media-query/

2.)https://www.emailonacid.com/blog/article/email-development/emailology_media_queries_demystified_min-width_and_max-width/#:~:text=Combining%20media%20query%20expressions,that%20are%20600%2D400px%20wide.

3.) https://www.w3schools.com/css/css_rwd_mediaqueries.asp
