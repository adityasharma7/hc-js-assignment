Task-2. Assume that both layouts were created using a similar CSS grid. What would you do to make layout b look like a? Clearly state any assumptions you make about the layout.

Solutions:
As per question the layouts are created with similar Css grid,these layout content three column in which three div container having same area(grid-template-areas: 'divcontainer1 divcontainer2 divcontainer3')in these both layout (Next Day Shipping) text is present in third column divcontainer3 so in order to match layout-b to layout-a we can give an any ID(id='text-3') to this text div and write css through id selector #text-3{text-align:right;} these make layout-b look like layout-a 

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Task-3. What is the difference between how Flexbox and CSS Grid calculate item/container size?
Cite 3 sources. 
Provide links for all sources and time codes for videos.

solution :
FLEX:flexbox was designed for layout in one-dimension either a row OR a column.
GRID:Grid was designed for two-dimensional layout rows AND columns at the same time.

FLEX:Flex Container is the parent element while Flex Item represents the children. The Flex Container can ensure balanced representation by adjusting item dimensions.
GRID:Grid supports both implicit and explicit content placement. Its inbuilt automation allows it to automatically extend line items and copy values into the new creation from the preceding item.

FLEX:Flexbox offers greater control over alignment and space distribution between items. Being one-dimensional, Flexbox only deals with either columns or rows.
GRID:Grid has two-dimension layout capabilities which allow flexible widths as a unit of length. This compensates for the limitations in Flex.

source:1 
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout
source:2
https://www.geeksforgeeks.org/comparison-between-css-grid-css-flexbox/#:~:text=One%20Vs%20Two%20Dimension%3A,element%20(row%20or%20column).
source:3 
https://www.youtube.com/watch?v=18VLSXfsj94

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



Task-4. You are writing a responsive layout for a website that has dramatically different layouts for mobile and desktop. Which of the following media queries would you use and why?
@media (max-width: …
@media (min-width: …
Cite 3 sources that back up your position. You cannot cite Stackoverflow.
Provide links for all sources and time codes for videos.

solution: -
-The term Mobile-First means that when developing a website, we start writing the CSS for smaller viewport sizes first, and then expand its features to create a tablet or desktop version use CSS media queries to alter the experience for larger ones (tablets or desktops).
-The term Desktop-First means, we start writing the CSS for larger viewport first, and then go for its features to create a smaller viewport we use CSS media queries to alter the experience for smaller one.

we can use both the query to make things responsive in mobile view or desktop view
but @media (min-width:~~) is good approach to set mobile-first because firstly we create for smaller screen (less than 480px) in mobile-first approach then we give
@media screen and (min-width:480px) {
    /* style changes when the screen gets larger than 480px */
}for larger view 

source:1
https://codepen.io/kevinpowell/pen/ZEGdQgN
source:2
https://www.freecodecamp.org/news/taking-the-right-approach-to-responsive-web-design/
source:3
https://www.youtube.com/watch?v=0ohtVzCSHqs


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
