/* feedreader.js
 *
 * This file contains Jasmine test suites that are being run against
 * a Udacity Front End Web Development nanodegree project program
 * that is an RSS Feed Reader.
 */

$(function() {

/* This is our first test suite which ensures that there are RSS feeds
 * and they are defined.
 */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

/*  This test loops through each feed in the allFeeds object and ensures
 *  it has a URL defined and that the URL is not empty
 */
        it('each allFeeds element has a URL', function() {
          allFeeds.forEach(function (element) {
                expect(element.url).toBeDefined();
                expect(element.url).not.toBe('');
          });
        });

/*  This test loops through each feed in the allFeeds object and ensures
 *  it has a name is defined and that the URL is not empty
 */
       it('each allFeeds element has a name', function() {
         allFeeds.forEach(function (element) {
               expect(element.name).toBeDefined();
               expect(element.name).not.toBe('');
         });
       });

    }); /*This is the end of the RSS Feeds suite */

/* This is a test suite called 'The Menu' */

    describe('The Menu', function() {

      /* This test ensures the menu element is hidden by default.
       *  This makes sure the body element has a class of menu-hidden
       */

      it('body has its menu hidden', function() {
        expect($('body').hasClass('menu-hidden')).toBe(true);
      });

/*      Slide menu appears when hamburger icon is clicked
 *       meaning the body's menu is not hidden.
 */
      it('slide-menu appears when hamburger icon is clicked', function() {
        $('.menu-icon-link').click();
        expect($('body').hasClass('menu-hidden')).not.toBe(true);
      });

/*     Slide menu appears when hamburger icon is clicked once, and gets hidden
 *      again on the second click, meaning the body's menu is hidden.
 */
      it('slide-menu appears/disappears when hamburger icon is clicked twice', function() {
        $('.menu-icon-link').click();
        $('.menu-icon-link').click();
        expect($('body').hasClass('menu-hidden')).toBe(true);
      });

    }); /* This is the end of The Menu test suite. */


/* This test suite ensures when the loadFeed function is called and completes
 * its work, there is at least a single .entry element within the .feed container.
 */
    describe('Initial Entries', function() {
      var entryInFeed;

      beforeEach(function(done) {
        loadFeed(0, done);
      });

      it(' has at least a single .entry element within the .feed container', function() {
        entryInFeed = $('.feed .entry');
        expect(entryInFeed.length).not.toBe(0);
      });

    }); /*This is the end of the Initial Entries test suite */

/* This test ensures that when a new feed is loaded by the loadFeed function
 * that the content actually changes.
 */
    describe('New Feed Selection', function() {
      var container;

/* This portion loads the content of the feed on the initial load into a variable
   before running the loadFeed again */
      beforeEach(function(done) {
        loadFeed(0, function() {
          container = $('.feed').html();
          loadFeed(1, done());
        });
      });

/* This portion checks the content of the feed after the second load against the first load */
      var newContents = $('.feed').html();
      it('feed content should change between the first load and the second', function() {
         expect(container).not.toBe(newContents);
      });
    });  /*This is the end of the New Feed Selection test suite */

}());
