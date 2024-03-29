

//FAQ SEE MORE TOGGLES
    document.addEventListener('DOMContentLoaded', function () {
        // Function to handle the toggle
        function setupToggle(checkboxId, containerClass) {
            var checkbox = document.getElementById(checkboxId);
            var collapsible = document.querySelector('.' + containerClass);

            if (checkbox && collapsible) {
                checkbox.addEventListener('change', function () {
                    collapsible.style.maxHeight = this.checked ? collapsible.scrollHeight + 'px' : '0';
                });
            }
        }

        // Setup toggles
        setupToggle('seemore1', 'fullgrid.collapsiblefaq.seemore1');
        setupToggle('seemore2', 'fullgrid.collapsiblefaq.seemore2');
    });

    // Text change for read more

    document.addEventListener('DOMContentLoaded', function () {
        // Setup for 'seemore1'
        var checkbox1 = document.getElementById('seemore1');
        var label1 = document.querySelector('label[for="seemore1"] p');

        checkbox1.addEventListener('change', function () {
            if (this.checked) {
                label1.innerHTML = 'Read less &uarr;';
            } else {
                label1.innerHTML = 'Read more &#8600;';
            }
        });

        // Setup for 'seemore2'
        var checkbox2 = document.getElementById('seemore2');
        var label2 = document.querySelector('label[for="seemore2"] p');

        checkbox2.addEventListener('change', function () {
            if (this.checked) {
                label2.innerHTML = 'Read less &uarr;';
            } else {
                label2.innerHTML = 'Read more &#8600;';
            }
        });

    });


//MASONRY GRID
// For Mobile - adds blank after div
document.addEventListener('DOMContentLoaded', function() {
    function addBlankGridItems(className) {
        if (window.matchMedia("(max-width: 660px)").matches) {
            var targetItems = document.querySelectorAll('.' + className);
            targetItems.forEach(function(item) {
                var nextSibling = item.nextElementSibling;
                if (!nextSibling || !nextSibling.classList.contains('dynamic-blank')) {
                    var blankItem = document.createElement('div');
                    blankItem.style.gridColumn = 'span 6';
                    blankItem.classList.add('newsitem', 'dynamic-blank');
                    item.parentNode.insertBefore(blankItem, nextSibling);
                }
            });
        }
    }

    function handleResize() {
        document.querySelectorAll('.dynamic-blank').forEach(function(blank) {
            blank.remove();
        });
        addBlankGridItems('mobileblank');
    }

    window.addEventListener('resize', handleResize);
    handleResize();
});

// For Tablet Size - adds blank after div
document.addEventListener('DOMContentLoaded', function() {
    function addTabletBlankGridItems(className) {
        if (window.matchMedia("(min-width: 661px) and (max-width: 1364px)").matches) {
            var targetItems = document.querySelectorAll('.' + className);
            targetItems.forEach(function(item) {
                var nextSibling = item.nextElementSibling;
                if (!nextSibling || !nextSibling.classList.contains('tablet-dynamic-blank')) {
                    var blankItem = document.createElement('div');
                    blankItem.style.gridColumn = 'span 3';
                    blankItem.classList.add('newsitem', 'tablet-dynamic-blank');
                    item.parentNode.insertBefore(blankItem, nextSibling);
                }
            });
        }
    }

    function handleResizeTablet() {
        document.querySelectorAll('.tablet-dynamic-blank').forEach(function(blank) {
            blank.remove();
        });
        addTabletBlankGridItems('tabletblank');
    }

    window.addEventListener('resize', handleResizeTablet);
    handleResizeTablet();
});


// For Tablet Size - adds two blanks after div
document.addEventListener('DOMContentLoaded', function() {
    function addTabletDoubleBlankGridItems(className) {
        if (window.matchMedia("(min-width: 661px) and (max-width: 1364px)").matches) {
            var targetItems = document.querySelectorAll('.' + className);
            targetItems.forEach(function(item) {
                let previousBlank = null;
                for (let i = 0; i < 2; i++) {
                    var nextSibling = previousBlank ? previousBlank.nextElementSibling : item.nextElementSibling;
                    var blankItem = document.createElement('div');
                    blankItem.style.gridColumn = 'span 3';
                    blankItem.classList.add('newsitem', 'tablet-dynamic-blank-double');
                    item.parentNode.insertBefore(blankItem, nextSibling);
                    previousBlank = blankItem; // Update reference for the next iteration
                }
            });
        }
    }

    function handleResizeTabletDouble() {
        document.querySelectorAll('.tablet-dynamic-blank-double').forEach(function(blank) {
            blank.remove();
        });
        addTabletDoubleBlankGridItems('tabletblankdouble');
    }

    window.addEventListener('resize', handleResizeTabletDouble);
    handleResizeTabletDouble();
});




//MECHANICS SEE MORE TOGGLES
document.addEventListener('DOMContentLoaded', function () {
    // Function to handle the toggle
    function setupToggle(checkboxId, containerClass) {
        var checkbox = document.getElementById(checkboxId);
        var collapsible = document.querySelector('.' + containerClass);

        if (checkbox && collapsible) {
            checkbox.addEventListener('change', function () {
                collapsible.style.maxHeight = this.checked ? collapsible.scrollHeight + 'px' : '0';
            });
        }
    }

    // Setup toggles
    setupToggle('seemorem1', 'newsgrid.collapsiblemechanics.seemorem1');
    setupToggle('seemorem2', 'newsgrid.collapsiblemechanics.seemorem2');
});



// MECHANICS EXPANDABLE TOGGLES 
// Mechanics section
document.addEventListener('DOMContentLoaded', function () {
    var checkbox1 = document.getElementById('seemorem1');
    var parent1 = document.querySelector('.mechanicsparent1');
    var gridItems1 = parent1.querySelectorAll('.newsgrid.seemore1 .newsitem');

    function adjustMaxHeight1() {
        var totalHeight1 = 0;
        var itemsPerRow1 = window.innerWidth <= 660 ? 2 : Math.floor(parent1.offsetWidth / gridItems1[0].offsetWidth);

        for (let i = 0; i < gridItems1.length; i += itemsPerRow1) {
            totalHeight1 += gridItems1[i].offsetHeight;
        }

        parent1.style.maxHeight = checkbox1.checked ? totalHeight1 + 'px' : '0';
    }

    checkbox1.addEventListener('change', adjustMaxHeight1);
    window.addEventListener('resize', adjustMaxHeight1);
});

// Advanced mechanics sections
document.addEventListener('DOMContentLoaded', function () {
    var checkbox2 = document.getElementById('seemorem2');
    var parent2 = document.querySelector('.mechanicsparent2');
    var gridItems2 = parent2.querySelectorAll('.newsgrid.seemore2 .newsitem');

    function adjustMaxHeight2() {
        var totalHeight2 = 0;
        var itemsPerRow2 = window.innerWidth <= 660 ? 2 : Math.floor(parent2.offsetWidth / gridItems2[0].offsetWidth);

        for (let i = 0; i < gridItems2.length; i += itemsPerRow2) {
            totalHeight2 += gridItems2[i].offsetHeight;
        }

        parent2.style.maxHeight = checkbox2.checked ? totalHeight2 + 'px' : '0';
    }

    checkbox2.addEventListener('change', adjustMaxHeight2);
    window.addEventListener('resize', adjustMaxHeight2);
});

// Label text changes for mechanics

document.addEventListener('DOMContentLoaded', function () {
    // Setup for 'seemorem1'
    var checkbox1 = document.getElementById('seemorem1');
    var label1 = document.querySelector('label[for="seemorem1"] p');

    checkbox1.addEventListener('change', function () {
        if (this.checked) {
            label1.innerHTML = 'See less &uarr;';
        } else {
            label1.innerHTML = 'See more &#8600;';
        }
    });

    // Setup for 'seemorem2'
    var checkbox2 = document.getElementById('seemorem2');
    var label2 = document.querySelector('label[for="seemorem2"] p');

    checkbox2.addEventListener('change', function () {
        if (this.checked) {
            label2.innerHTML = 'See less &uarr;';
        } else {
            label2.innerHTML = 'See more &#8600;';
        }
    });

});


// Controls for gifs on how to use page

    document.addEventListener("DOMContentLoaded", function() {
        const elements = document.querySelectorAll('.howtousegif .imagebackground');
        elements.forEach(bgDiv => {
            const currentBackgroundImage = bgDiv.style.backgroundImage;
            bgDiv.setAttribute('data-gif', currentBackgroundImage);
        });
    });

    function isInRangeMobile(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        // Calculate the viewport height percentages for 26vh and 10vh
        const twentySixVh = windowHeight * 0.26;
        const tenVh = windowHeight * 0.10;

        // Check if the top of the element is between 26vh and 10vh from the top of the viewport
        return rect.top <= twentySixVh && rect.top >= tenVh;
    }

    function isInRangeDesktop(element, lowerOffset, upperOffset) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const withinLowerBound = rect.bottom > windowHeight - lowerOffset && rect.bottom <= windowHeight;
        const notAboveUpperBound = rect.top < windowHeight + upperOffset;
        return withinLowerBound && notAboveUpperBound;
    }

    window.addEventListener('scroll', () => {
        const elements = document.querySelectorAll('.howtousegif .imagebackground');
        elements.forEach(bgDiv => {
            const gifUrl = bgDiv.getAttribute('data-gif');
            const staticImageUrl = bgDiv.getAttribute('data-static-image');

            const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
            if (viewportWidth <= 766) {
                // Mobile behavior
                if (isInRangeMobile(bgDiv)) {
                    bgDiv.style.backgroundImage = gifUrl;
                } else {
                    bgDiv.style.backgroundImage = "url('" + staticImageUrl + "')";
                }
            } else {
                // Desktop behavior
                if (isInRangeDesktop(bgDiv, 200, 400)) {
                    bgDiv.style.backgroundImage = gifUrl;
                } else {
                    bgDiv.style.backgroundImage = "url('" + staticImageUrl + "')";
                }
            }
        });
    });

//Fix menu
// Function to update menu position
function updateMenuPosition() {
    var menublock = document.querySelector('.menublock');
    var scrollPosition = window.scrollY || window.pageYOffset;
    var fixedPoint = 128; // Adjust as needed

    if (window.matchMedia("(min-width: 1364px)").matches) {
        if (scrollPosition > fixedPoint) {
            menublock.style.position = 'fixed';
            menublock.style.top = '-8rem';
        } else {
            menublock.style.position = 'absolute';
            menublock.style.top = '0';
        }
    } else {
        // Reset styles for tablet and mobile sizes
        menublock.style.position = ''; // Resets to default or specify as needed
        menublock.style.top = ''; // Resets to default or specify as needed
    }
}

// Attach the updateMenuPosition function to scroll and resize events
window.addEventListener('scroll', updateMenuPosition);
window.addEventListener('resize', updateMenuPosition);

// Call the function to set the initial position of the menu
updateMenuPosition();






   //backup for working gif autoplay - dt and mobile only
   
//     document.addEventListener("DOMContentLoaded", function() {
//         const elements = document.querySelectorAll('.howtousegif .imagebackground');
//         elements.forEach(bgDiv => {
//             const gifUrl = bgDiv.getAttribute('data-gif');
//             preloadImage(gifUrl); // Preload the GIF

//             const currentBackgroundImage = bgDiv.style.backgroundImage;
//             bgDiv.setAttribute('data-gif', currentBackgroundImage);
//         });

//         window.addEventListener('scroll', checkGifPositions);
//     });

//     function preloadImage(url) {
//         const img = new Image();
//         img.src = url;
//     }

//     function checkGifPositions() {
//         const elements = document.querySelectorAll('.howtousegif .imagebackground');
//         elements.forEach(bgDiv => {
//             const gifUrl = bgDiv.getAttribute('data-gif');
//             const staticImageUrl = bgDiv.getAttribute('data-static-image');
//             const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

//             if (viewportWidth <= 766) {
//                 if (isInRangeMobile(bgDiv)) {
//                     bgDiv.style.backgroundImage = gifUrl;
//                 } else {
//                     bgDiv.style.backgroundImage = "url('" + staticImageUrl + "')";
//                 }
//             } else {
//                 if (isInRangeDesktop(bgDiv, 200, 400)) {
//                     bgDiv.style.backgroundImage = gifUrl;
//                 } else {
//                     bgDiv.style.backgroundImage = "url('" + staticImageUrl + "')";
//                 }
//             }
//         });
//     }

//     function isInRangeMobile(element) {
//         const rect = element.getBoundingClientRect();
//         const windowHeight = window.innerHeight || document.documentElement.clientHeight;
//         const twentySixVh = windowHeight * 0.32;
//         const tenVh = windowHeight * 0.05;
//         return rect.top <= twentySixVh && rect.top >= tenVh;
//     }

//     function isInRangeDesktop(element, lowerOffset, upperOffset) {
//         const rect = element.getBoundingClientRect();
//         const windowHeight = window.innerHeight || document.documentElement.clientHeight;
//         const withinLowerBound = rect.bottom > windowHeight - lowerOffset && rect.bottom <=
// windowHeight;
// const notAboveUpperBound = rect.top < windowHeight + upperOffset;
// return withinLowerBound && notAboveUpperBound;
// }


document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.howtousegif .imagebackground');
    elements.forEach(bgDiv => {
        const gifUrl = bgDiv.getAttribute('data-gif');
        preloadImage(gifUrl); 

        const currentBackgroundImage = bgDiv.style.backgroundImage;
        bgDiv.setAttribute('data-gif', currentBackgroundImage);
    });

    window.addEventListener('scroll', checkGifPositions);
});

function preloadImage(url) {
    const img = new Image();
    img.src = url;
}

function checkGifPositions() {
    const elements = document.querySelectorAll('.howtousegif .imagebackground');
    elements.forEach(bgDiv => {
        const gifUrl = bgDiv.getAttribute('data-gif');
        const staticImageUrl = bgDiv.getAttribute('data-static-image');
        const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

        if (viewportWidth <= 766) {
            if (isInRangeMobile(bgDiv)) {
                bgDiv.style.backgroundImage = gifUrl;
            } else {
                bgDiv.style.backgroundImage = "url('" + staticImageUrl + "')";
            }
        } else if (viewportWidth <= 1364) {
            if (isInRangeMidSize(bgDiv)) {
                bgDiv.style.backgroundImage = gifUrl;
            } else {
                bgDiv.style.backgroundImage = "url('" + staticImageUrl + "')";
            }
        } else {
            if (isInRangeDesktop(bgDiv, 200, 400)) {
                bgDiv.style.backgroundImage = gifUrl;
            } else {
                bgDiv.style.backgroundImage = "url('" + staticImageUrl + "')";
            }
        }
    });
}

function isInRangeMobile(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const twentySixVh = windowHeight * 0.32;
    const tenVh = windowHeight * 0.05;
    return rect.top <= twentySixVh && rect.top >= tenVh;
}

function isInRangeMidSize(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const upperVh = windowHeight * 0.45; 
    const lowerVh = windowHeight * 0.17; 
    return rect.top <= upperVh && rect.top >= lowerVh;
}

function isInRangeDesktop(element, lowerOffset, upperOffset) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const withinLowerBound = rect.bottom > windowHeight - lowerOffset && rect.bottom <= windowHeight;
    const notAboveUpperBound = rect.top < windowHeight + upperOffset;
    return withinLowerBound && notAboveUpperBound;
}



