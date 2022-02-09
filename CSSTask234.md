 CSS Moudules Tasks
 2. Assume that both layouts were created using a similar CSS grid. What would you do to make layout b look like a? Clearly state any assumptions you make about the layout.

If you did not position “Next Day Shipping” absolutely to the right, why not? 

Solutions: When we look on the both layout we found that the contents of layout are divided into three different div containers which are the child div containers of a parent div container then css grid (grid arrange the parent div as a row of the layout and all three div containers are the columns in that row using display:grid; and grid-template-columns: auto auto auto; and justify-content:space-between; property on the parent div) property will be applied  on the  parent div. So we can say that "Next Day Shipping" text is present into the third div container (or third gird column).
Now In layout "b" we can assign that div a ID suppose id="third" and then we can change the style of that div and its contents using css. So In css style sheet we can use id selector #third and give "text-align:right;" property on the third grid column div. So, the content will be align to the right or look like layout "a".

3. What is the difference between how Flexbox and CSS Grid calculate item/container size?
Cite 3 sources. 
Provide links for all sources and time codes for videos.
Solutions: 
source 1:
>CSS Grids helps you create the outer layout of the webpage. You can build complex as well responsive design with this. This is why it is called ‘layout first’.
>Flexbox mostly helps align content & move blocks.
>CSS grids are for 2D layouts. It works with both rows and columns.
>Flexbox works better in one dimension only (either rows OR columns).
>It will be more time saving and helpful if you use both at the same time.

link:
https://www.geeksforgeeks.org/comparison-between-css-grid-css-flexbox/#:~:text=One%20Vs%20Two%20Dimension%3A,element%20(row%20or%20column).

source 2:
>Flexbox is designed for one-dimensional layouts, and Grid for two-dimensional layouts.
>The approach of CSS Grid is the layout first, while the Flexbox approach is primarily the content.
>The Flexbox layout is best suited to application components and small-scale layouts, while the Grid layout is designed for larger-scale layouts that are not linear in design.

link:
https://www.freecodecamp.org/news/the-main-differences-between-flexbox-and-css-grid-667c03461d2b/

source 3:
You create the overall layout with the Grid and use Flexbox to then position elements inside a cell - for all cases where you only need to position them in one dimension (row or column).

It's of course also possible to nest the CSS Grid inside of a Flexbox item. You could have a row of elements where one or all elements hold a more complex layout for example.

The key differentiation really is the amount of dimensions you need to work with.

Are you building a spreadsheet? You're working with rows and columns then, so CSS Grid probably should be your choice.

You're working on a list of users? Maybe Flexbox is your #1 tool then.

Mix and match both technologies as required and you'll be able to build really flexible and powerful user interfaces!

link: 
https://youtu.be/RSIclWvNTdQ?t=75


4. You are writing a responsive layout for a website that has dramatically different layouts for mobile and desktop. Which of the following media queries would you use and why?

@media (max-width: …
@media (min-width: …

Cite 3 sources that back up your position. You cannot cite Stackoverflow.
Provide links for all sources and time codes for videos.

Solution:
I will use mobile-first approach in our resposive layout for a website. 
A mobile-first approach to styling means that styles are applied first to mobile devices.
Starting with a mobile-first design has many advantages and one of these is that it is super easy to scale when you start small. Scaling any application from mobile to desktop is easier compared to its alternate. If you intend to scale down your desktop application to mobile, its functionalities would be compromised.
On the other hand, when you are scaling from mobile to desktop, it means you have all the freedom to add new functionalities without affecting the existing ones. All you need is to add some interactive features and content to scale your product from mobile-first design to desktop.
If we go through the desktop-first then after appling styles for desktop and comes to the moblie view styling  it is more difficult to write styling for every elements of website and this will also make our code complicated.
Then advanced styles for desktop (or larger screens) are then added into the stylesheet via media queries by using @media (min-width: ...). Min-width media queries are extremely helpful when it comes to coding responsive websites because it reduces code complexity. 
Desktop first approach is way more complicated then mobile first approach. This is why coding mobile first helps to simplify our code. 

Link1:
 https://www.w3schools.com/css/css_rwd_mediaqueries.asp

Link2:
https://www.classicinformatics.com/blog/why-mobile-first-approach

Link3:
https://zellwk.com/blog/how-to-write-mobile-first-css/


