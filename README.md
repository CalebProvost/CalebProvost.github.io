# CalebProvost.github.io
Personal Profile Page
This is my CodeLouisville responsive profile webpage. 
I plan on improving and developing my portfolio through this profile website and demonstrating the various skills I have.
If you have any questions or would like to contact me for any other reason, you can reach me through my LinkedIn: linkedin.com/in/CalebProvost

Notes about my landing page:

1 Responsive

2 Custom CSS

3 Responsive CSS

4 Flexbox CSS

5 Interactive Responses with JavaScript

6 Excellent Comment Conventions Used

7 DevTool Unlockable Feature (Forum/Form)

1 The site is responsive to the screen size of the device viewing the pages, I plan in the future to add device recognition as well in order to implement "mobile" site design instead of just small screen (they probably wont vary much, but the coding will be practiced).


2 I've created some custom CSS selectors/rules which are in media queries (responsiveness portion) as well as trying my own responsive icon for a drop down menu. I plan on improving on its hit-box and connecting a nav-menu expansion response to it being clicked on. I did my best to avoid the use of avoid the use of bootstrap on my landing page as I wanted more custom control over the styles.


3 Each column (when in larger screens) will cascade downwards in medium screens and expand to improve readability of the many links and info which are within them (as soon as I add all that content it'll make more sense to do this). The responsiveness of these columns are implemented through CSS grid stylizations.


4 The structure of my landing page is structured with flexbox CSS.


5 The interactive portions of my landing page uses JavaScript to execute. I've created a more JavaScript/JQuery app which has more focus on interactivity. Follow the link to the 'HueHueHue Game' to try it out!


6 I personally like to skim for code I've created to reuse, I thereby tend to organize my work in catagories, and then have futher comments explaining what the snippets do. You can see in my CSS files and the JS files how I've implemented an easy to skim, read, and understand commenting system.


7 For the sake of the site's design improvement, I've hidden a Forum which I planned on using for visitor feedback. If you'd like to see how I've performed this feature, enable DevTools via Google Chrome and delete "style="display: none;"" from the 'forum' HTML segment.



The Color Game's goal is to have a user select the cell which is different from the rest untill they fail to see differences and select the wrong cell.
It does this by generating a grid and injecting a randomized background color into each cell. It then randomly selects a cell to add a difference in the lightness of the background color (I've used HSL instead of RGBA) and has event delegation with the target of the click referencing if the randomized cell was clicked or not. The statement either runs the game again with decreased difference in lightness, or prompts the usr appropriatly (win/lose). 


Notes about my Color Game:

1 Bootstrap Styled

2 JavaScript and JQuery Focused

3 Grid CSS Injection

4 User Manipulatable Variables

5 CSS Selected JS/JQuery


1 The site is primarily to host the color game so I didn't focus on stylizations. I've used BootStrap to add some.


2 Nearly everything on this page is JavaScript DOM manipulated, or JQuery modified in order to create the game.


3 The HTML gets a CSS Grid injected into the DOM for the game to be implemented.


4 The functions are created so that the variables needed to create the settings are passed in through initialization of the html response. This makes it to where the settings can be changed and limits the amount of functions needed to implement the game.


5 The game makes use of specific selectors of elements within the game in order to work. I've used both basic JavaScript and JQuery in order to perform these actions.
