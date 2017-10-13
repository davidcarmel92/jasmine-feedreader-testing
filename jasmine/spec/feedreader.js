/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* All of the tests are within the $() function,
 * since some of these tests may require DOM elements.
 */
$(function() {
    describe('RSS Feeds', function() {
        /* Tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */

        it('length not 0', function() {
            expect(allFeeds.length).not.toBe(0);
            expect(allFeeds).toBeDefined();
        });

        /*
        Test expects that each item in the allFeeds object
        has a defined url and is not empty.
        */
        it('all urls defined', function() {
          allFeeds.forEach(function(item){
            expect(item.url.length).not.toBe(0);
            expect(item.url).toBeDefined();
          });
        });
        /*
        Test expects that each item in the allFeeds object
        has a defined name and is not empty.
        */
        it('all names defined', function() {
          allFeeds.forEach(function(item){
            expect(item.name.length).not.toBe(0);
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
          expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /*
        Test expects that the startup visibility istrue
        toggled on and off when the menuIcon is clicked.
        */
        it('menu changes visibility on click', function(){
          $('.menu-icon-link').click();
          expect($('body').hasClass('menu-hidden')).not.toBe(true);
          $('.menu-icon-link').click();
          expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('initial entries', function(){
        beforeEach(function(done){
          loadFeed(0,function(){
            done();
          });
        });

        /*
        Tests that there is atleast one entry in the .feed
        container
        */

        it('there is entry within feed container', function(){
          expect($('.feed').find('.entry').length).not.toEqual(0);
        });

    });

    describe('New Feed Selection', function(){
      var currentLoadFeed;
      var newLoadFeed;
      /*
      Before each save the .feed html when loadFeed is 0,
      and when loadFeed is 1.
      */
      beforeEach(function(done){
        loadFeed(0,function(){
          currentLoadFeed = $('.feed').html();
          loadFeed(1,function(){
            newLoadFeed = $('.feed').html();
            done();
          });
        });
      });

      /*
      Test to make sure that the feeds are not the same when
      loadFeed changes
      */
      it("ensures there is a new feed when loadFeed changes", function(done){
        expect(currentLoadFeed).not.toEqual(newLoadFeed);
        done();
      });
    });
}());
