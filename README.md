# Explore Hyrule #
## Introduction ##
Explore Hyrule is a website created to promote *The Legend of Zelda: Breath of the Wild* video game for the Nintendo Switch. The website is aimed at displaying the features of the game and to inform users about some of the lore and gameplay they can expect from the product.

The site will serve as a promotional piece to entice potential customers who are interested in the game to purchase the title and provide a path directly from site discovery to purchase.

## Design Choices ##
### Layout ###
The site is designed as a single continuous page, rather than dividing each section up as individual pages, allowing the user to scroll through each section without interuption. This is done as the purpose of the page is to guide users through the content revealing it in order rather than leaving it to the users. The user still has the ability to navigate through the sections or return the the beginning at all times using the navigation buttons.

### Wireframes ###
Following are links to mobile and desktop wireframes used to design the layout of the website. Tablet sizes will retain most of the layout of the desktop version with minor scaling changes to account for screen sizes.

- [Mobile Wireframe](support-docs/wireframes/mobile-wireframe.png)

- [Desktop Wireframe](support-docs/wireframes/desktop-wireframe.png)

### Colors ###
Colors were chosen to fit in with the game content and its external media such as physical collectors' guides.

![Breath of the Wild collectors guide book sample page section](support-docs/images/color-palette-source.jpg "BotW collectors guide page")

Colors were lifted from sample page text and screenshots of actual gameplay to create a palette to inform the aesthetic of the site. 

![Color palette](support-docs/images/color-palette.png "Color palette created from sample images")
*created using [coolors.co](https://coolors.co/)*

### Fonts ##
The fonts and overall design are also influenced by the gameplay UI and guide book design in order to make the site fit in with already existing branding. Both fonts are sourced from [Google Fonts](https://fonts.google.com/specimen/Cinzel+Decorative?preview.text=Explore%20Hyrule&preview.text_type=custom&category=Display#standard-styles)

## Features ##

### Existing Features ###
* Responsive Navigation Bar
    * At the top of the site there is a fully responsive navigation bar which links to the different sections within the page using internal links
    * On mobile screen sizes the navigation links are hidden to save screen space and can be revealed with a hamburger icon in the top right corner of the page
    * This allows the user to jump to lower sections of the page if the do not wish to scroll through all of the content




## Testing ##

## Bugs ##
* Bug - Menu icon in mobile header required 2 clicks to reveal navigation menu on page load

* Solution - Reverse Javascript function if statement is checking for display style block first instead of none

was:
```javascript

function hideMenu() {
        var x = document.getElementById("nav-menu");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
```
now: 
```javascript

function hideMenu() {
        var x = document.getElementById("nav-menu");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }
```

## Deployment ##

## Credits ##

### Design ###

* Source material, characters, designs and brands are owned by Nintendo and is not being used for commercial purposes

* Color palette created in: [Coolors.co](https://coolors.co/)

* Fonts sourced from: [Google Fonts](https://fonts.google.com/specimen/Cinzel+Decorative?preview.text=Explore%20Hyrule&preview.text_type=custom&category=Display#standard-styles)

### Code ###
* JS Function used to show and hide mobile navigation found on: [w3schools.com](https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp)

* JS Function used to switch between hero images and css animation to fade each image change found on: [w3schools.com](https://www.w3schools.com/howto/howto_js_slideshow.asp)