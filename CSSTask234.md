 CSS Moudules Tasks
 2. Assume that both layouts were created using a similar CSS grid. What would you do to make layout b look like a? Clearly state any assumptions you make about the layout.

If you did not position “Next Day Shipping” absolutely to the right, why not? 

Solutions: In normal css we can use "text-align:right;" property on the last column div. So, the content will be align to the right or look like layout a.

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
>Source 1:
There are tons of screens and devices with different heights and widths, so it is hard to create an exact breakpoint for each device. To keep things simple we can target five groups:
/*For: */
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {...}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {...}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {...}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {...}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {...}

we use these media queries for making our website or webpage responsive on different devices.

link:
 https://www.w3schools.com/css/css_rwd_mediaqueries.asp

>Source 2:
/* Smartphones (portrait and landscape) ----------- */
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
/* Styles */
}

/* Smartphones (landscape) ----------- */
@media only screen and (min-width : 321px) {
/* Styles */
}

/* Smartphones (portrait) ----------- */
@media only screen and (max-width : 320px) {
/* Styles */
}

/* iPads (portrait and landscape) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
/* Styles */
}

/* iPads (landscape) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {
/* Styles */
}

/* iPads (portrait) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) {
/* Styles */
}
/**********
iPad 3
**********/
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
/* Styles */
}

@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
/* Styles */
}
/* Desktops and laptops ----------- */
@media only screen  and (min-width : 1224px) {
/* Styles */
}

/* Large screens ----------- */
@media only screen  and (min-width : 1824px) {
/* Styles */
}

/* iPhone 4 ----------- */
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
/* Styles */
}

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
/* Styles */
}

/* iPhone 5 ----------- */
@media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
/* Styles */
}

@media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
/* Styles */
}

/* iPhone 6, 7, 8 ----------- */
@media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
/* Styles */
}

@media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
/* Styles */
}

/* iPhone 6+, 7+, 8+ ----------- */
@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
/* Styles */
}

@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
/* Styles */
}

/* iPhone X ----------- */
@media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3){
/* Styles */
}

@media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 3){
/* Styles */
}

/* iPhone XS Max, XR ----------- */
@media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3){
/* Styles */
}

@media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 3){
/* Styles */
}

/* Samsung Galaxy S3 ----------- */
@media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
/* Styles */
}

@media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
/* Styles */
}

/* Samsung Galaxy S4 ----------- */
@media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3){
/* Styles */
}

@media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 3){
/* Styles */
}

/* Samsung Galaxy S5 ----------- */
@media only screen and (min-device-width: 360px) and (max-device-height: 640px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3){
/* Styles */
}

@media only screen and (min-device-width: 360px) and (max-device-height: 640px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 3){
/* Styles */

Link:
https://responsivedesign.is/develop/browser-feature-support/media-queries-for-common-device-breakpoints/


>Source 3:
/* Smartphones (portrait and landscape) ----------- */
@media only screen
and (min-device-width : 320px)
and (max-device-width : 480px) {
/* STYLES GO HERE */
}

/* Smartphones (landscape) ----------- */
@media only screen
and (min-width : 321px) {
/* STYLES GO HERE */
}

/* Smartphones (portrait) ----------- */
@media only screen
and (max-width : 320px) {
/* STYLES GO HERE */
}

/* iPads (portrait and landscape) ----------- */
@media only screen
and (min-device-width : 768px)
and (max-device-width : 1024px) {
/* STYLES GO HERE */
}

/* iPads (landscape) ----------- */
@media only screen
and (min-device-width : 768px)
and (max-device-width : 1024px)
and (orientation : landscape) {
/* STYLES GO HERE */
}

/* iPads (portrait) ----------- */
@media only screen
and (min-device-width : 768px)
and (max-device-width : 1024px)
and (orientation : portrait) {
/* STYLES GO HERE */
}

/* Desktops and laptops ----------- */
@media only screen
and (min-width : 1224px) {
/* STYLES GO HERE */
}

/* Large screens ----------- */
@media only screen
and (min-width : 1824px) {
/* STYLES GO HERE */
}

/* iPhone 5 (portrait & landscape)----------- */
@media only screen
and (min-device-width : 320px)
and (max-device-width : 568px) {
/* STYLES GO HERE */
}

/* iPhone 5 (landscape)----------- */
@media only screen
and (min-device-width : 320px)
and (max-device-width : 568px)
and (orientation : landscape) {
/* STYLES GO HERE */
}

/* iPhone 5 (portrait)----------- */
@media only screen
and (min-device-width : 320px)
and (max-device-width : 568px)
and (orientation : portrait) {
/* STYLES GO HERE */
}

Link:
https://monsterspost.com/css-media-queries-for-all-devices-and-browsers-including-ie7-and-ie8/


