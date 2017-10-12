/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

        it('length not 0', function() {
            expect(allFeeds.length).not.toBe(0);
        });

        /*
        Test expects that each item in the allFeeds object
        has a defined url.
        */
        it('all urls defined', function() {
          allFeeds.forEach(function(item){
            expect(item.url).toBeDefined();
          });
        });
        /*
        Test expects that each item in the allFeeds object
        has a defined name.
        */
        it('all names defined', function() {
          allFeeds.forEach(function(item){
            expect(item.name).toBeDefined();
          });
        });
    });


    describe('The Menu', function() {

        /*
        Test expects that the startup menu is hidden
        on startup.
        */
        it('menu hidden on startup', function(){
          expect($('body').attr('class')).toEqual('menu-hidden');
        });

        /*
        Test expects that the startup visibility is
        toggled on and off when the menuIcon is clicked.
        */
        it('menu changes visibility on click', function(){
          var menuIcon = $('.menu-icon-link');
          menuIcon.click();
          expect($('body').attr('class')).not.toEqual('menu-hidden');
          menuIcon.click();
          expect($('body').attr('class')).toEqual('menu-hidden');
        });
    });

    describe('initial entries', function(){

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    });

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
