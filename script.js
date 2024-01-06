
//Fix menu
window.addEventListener('scroll', function() {
    if (window.matchMedia("(min-width: 1364px)").matches) {
        var menublock = document.querySelector('.menublock');
        var scrollPosition = window.scrollY || window.pageYOffset;
        var fixedPoint = 128; // Adjust as needed

        if (scrollPosition > fixedPoint) {
            menublock.style.position = 'fixed';
            menublock.style.top = '-8rem';
        } else {
            menublock.style.position = 'absolute';
            menublock.style.top = '0';
        }
    }
});


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

// Text change for read more

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