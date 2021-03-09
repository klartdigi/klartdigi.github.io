/**
 * Header Position Change to Sticky
 */
$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();

  // Toggle Sticky Class
  if (scroll >= 80) {
    $("#header").addClass("sticky");
  } else {
    $("#header").removeClass("sticky");
  }
});

/**
 * Mobile Navigation Toggle
 */
$("#header nav .ham-burger").click(function () {
  // Toggle Mobile Menu
  $("#header nav .mobile-navigation").toggleClass("active");

  // Toggle Content Slide
  $("#content").toggleClass("active");

  // Toggle Hamburger Menu
  $("#header nav .ham-burger").toggleClass("active");
});

/**
 * Product SVG Animation
 */
$(window).scroll(function (event) {
  var $window = $(window);
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = window_top_position + window_height;

  var $element = $("#product");
  var element_height = $element.outerHeight();
  var element_top_position = $element.offset().top;
  var element_bottom_position = element_top_position + element_height;

  //check to see if this current container is within viewport
  if (
    element_bottom_position >= window_top_position &&
    element_top_position <= window_bottom_position
  ) {
    setTimeout(function () {
      $("#product .product-svg svg").addClass("active");
    }, 500);
  } else {
    $("#product .product-svg svg").removeClass("active");
  }
});

/**
 * Reason SVG Animation
 */
$(function () {
  // Get element instances
  var centerElement;
  var ticketElement;
  var inventoryElement;
  var salesElement;
  var employeeElement;
  var supportElement;
  var secureElement;
  var parkingElement;
  var quickSetupElement;

  //  Get X and Y of elements
  var ticketPosition;
  var inventoryPosition;
  var salesPosition;
  var employeePosition;
  var supportPosition;
  var securePosition;
  var parkingPosition;
  var quickSetupPosition;

  // Toggle SVG
  var toggleSVG = function () {
    var width = $(window).width();
    if (width >= 580) {
      $("#reason .svg-wrapper.normal").css("display", "flex");
      $("#reason .svg-wrapper.xs").css("display", "none");
      centerElement = $("#reason .svg-wrapper.normal");
      ticketElement = $("#reason .svg-wrapper.normal svg #ticket");
      inventoryElement = $("#reason .svg-wrapper.normal svg #inventory");
      salesElement = $("#reason .svg-wrapper.normal svg #sales");
      employeeElement = $("#reason .svg-wrapper.normal svg #employee");
      supportElement = $("#reason .svg-wrapper.normal svg #support");
      secureElement = $("#reason .svg-wrapper.normal svg #secure");
      parkingElement = $("#reason .svg-wrapper.normal svg #parking");
      quickSetupElement = $("#reason .svg-wrapper.normal svg #quick-setup");

      ticketPosition = ticketElement.offset();
      inventoryPosition = inventoryElement.offset();
      salesPosition = salesElement.offset();
      employeePosition = employeeElement.offset();
      supportPosition = supportElement.offset();
      securePosition = secureElement.offset();
      parkingPosition = parkingElement.offset();
      quickSetupPosition = quickSetupElement.offset();
    } else {
      $("#reason .svg-wrapper.normal").css("display", "none");
      $("#reason .svg-wrapper.xs").css("display", "flex");
      centerElement = $("#reason .svg-wrapper.xs");
      ticketElement = $("#reason .svg-wrapper.xs svg #ticket");
      inventoryElement = $("#reason .svg-wrapper.xs svg #inventory");
      salesElement = $("#reason .svg-wrapper.xs svg #sales");
      employeeElement = $("#reason .svg-wrapper.xs svg #employee");
      supportElement = $("#reason .svg-wrapper.xs svg #support");
      secureElement = $("#reason .svg-wrapper.xs svg #secure");
      parkingElement = $("#reason .svg-wrapper.xs svg #parking");
      quickSetupElement = $("#reason .svg-wrapper.xs svg #quick-setup");

      ticketPosition = ticketElement.offset();
      inventoryPosition = inventoryElement.offset();
      salesPosition = salesElement.offset();
      employeePosition = employeeElement.offset();
      supportPosition = supportElement.offset();
      securePosition = secureElement.offset();
      parkingPosition = parkingElement.offset();
      quickSetupPosition = quickSetupElement.offset();
    }
  };

  // Check for screen width and update the svg element
  toggleSVG();

  $(window).resize(function () {
    // Check for screen width and update the svg element
    toggleSVG();

    // Reset animate positions
    deAnimateElements();
  });

  $(window).scroll(function (event) {
    var $window = $(window);
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = window_top_position + window_height;

    var $element = $("#reason");
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = element_top_position + element_height;

    //check to see if this current container is within viewport
    if (
      element_bottom_position >= window_top_position &&
      element_top_position <= window_bottom_position
    ) {
      setTimeout(function () {
        animateElements();
      }, 500);
    } else {
      setTimeout(function () {
        deAnimateElements();
      }, 0);
    }
  });

  // Animate the elements
  var animateElements = function () {
    var offset = 100;
    var logo = $("#reason .svg-wrapper svg #logo");
    setTimeout(function () {
      logo.css("animation", "0.4s ease-in spin forwards");
    }, offset + 0);

    setTimeout(function () {
      animateReasonTile(ticketElement, ticketPosition);
    }, offset + 0);

    setTimeout(function () {
      animateReasonTile(inventoryElement, inventoryPosition);
    }, offset + 50);

    setTimeout(function () {
      animateReasonTile(salesElement, salesPosition);
    }, offset + 100);

    setTimeout(function () {
      animateReasonTile(employeeElement, employeePosition);
    }, offset + 150);

    setTimeout(function () {
      animateReasonTile(supportElement, supportPosition);
    }, offset + 200);

    setTimeout(function () {
      animateReasonTile(secureElement, securePosition);
    }, offset + 250);

    setTimeout(function () {
      animateReasonTile(parkingElement, parkingPosition);
    }, offset + 300);

    setTimeout(function () {
      animateReasonTile(quickSetupElement, quickSetupPosition);
    }, offset + 350);
  };

  // De-Animate the elements
  var deAnimateElements = function () {
    // Reset Spin Animation
    var logo = $("#reason .svg-wrapper svg #logo");
    setTimeout(function () {
      logo.css("animation", "none");
    }, 0);

    setTimeout(function () {
      deAnimateReasonTile(ticketElement, ticketPosition);
    }, 0);

    setTimeout(function () {
      deAnimateReasonTile(inventoryElement, inventoryPosition);
    }, 50);

    setTimeout(function () {
      deAnimateReasonTile(salesElement, salesPosition);
    }, 100);

    setTimeout(function () {
      deAnimateReasonTile(employeeElement, employeePosition);
    }, 150);

    setTimeout(function () {
      deAnimateReasonTile(supportElement, supportPosition);
    }, 200);

    setTimeout(function () {
      deAnimateReasonTile(secureElement, securePosition);
    }, 250);

    setTimeout(function () {
      deAnimateReasonTile(parkingElement, parkingPosition);
    }, 300);

    setTimeout(function () {
      deAnimateReasonTile(quickSetupElement, quickSetupPosition);
    }, 350);
  };

  var deAnimateReasonTile = function (element, position) {
    // calculate the difference in position
    var diffX =
      centerElement.width() / 2 +
      centerElement.offset().left -
      position.left -
      element[0].getBBox().width / 2;
    var diffY =
      centerElement.height() / 2 +
      centerElement.offset().top -
      position.top -
      element[0].getBBox().height / 2;

    // Animate the element
    element.css("transition", "0.5s all ease-out");
    element.css("transform", "translate(" + diffX + "px, " + diffY + "px)");
    element.css("transform-origin", "center");
    element.css("z-index", "-10");
  };

  var animateReasonTile = function (element) {
    // Animate the element
    element.css("transition", "0.5s all ease-out");
    element.css("transform", "translate(0px, 0px)");
    element.css("transform-origin", "center");
  };
});

/**
 * Client Auto Scroll
 */
$(function () {
  // Scroll the div
  var animateScroll = function (line, speed) {
    var children = line.children();

    var appendChildren = function () {
      children.each(function (index, element) {
        line.append("<p>" + element.innerHTML + "</p>");
      });
    };

    setInterval(function () {
      var scrollWidth = Math.round(line[0].scrollWidth);
      var scrollLeft = line.scrollLeft();
      var currentScrollLeft = Math.round(
        scrollLeft + Math.round(line.width())
      );

      if (currentScrollLeft > scrollWidth - 1) {
        appendChildren();
      }

      line.scrollLeft(scrollLeft + 1);
    }, speed);
  };

  var line1 = $("#clients .client-scroll .line:nth-child(1)");
  var line2 = $("#clients .client-scroll .line:nth-child(2)");

  // Animate Scroll
  animateScroll(line1, 30);
  animateScroll(line2, 15);
});

/**
 * Scroll to Section
 */
$(function () {
  // Scroll to Animation
  var animateToSection = function (e) {
    var jump = e.currentTarget.getAttribute("href");
    var new_position = $(jump).offset();
    $("html, body")
      .stop()
      .animate({ scrollTop: new_position.top - 50 }, 500);

    // Toggle Mobile Menu
    $("#header nav .mobile-navigation").removeClass("active");

    // Toggle Content Slide
    $("#content").removeClass("active");

    // Toggle Hamburger Menu
    $("#header nav .ham-burger").removeClass("active");

    e.preventDefault();
  };

  // Attach listeners to the event
  $("#header .navigations ul li a").click(animateToSection);
  $("#header .mobile-navigation a").click(animateToSection);
  $("#home .wrapper .text-content a").click(animateToSection);
  $("#home a").click(animateToSection);
});

/**
 * Update Navbar Tile on Page Scroll
 */
$(() => {
  // Cache selectors
  var topMenu = $("#header"),
    topMenuHeight = topMenu.outerHeight() + 15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
      var item = $($(this).attr("href"));
      if (item.length) {
        return item;
      }
    });

  $(window).scroll(() => {
    var fromTop = $(this).scrollTop() + topMenuHeight;
    if ($(window).width() > 716) {
      // Get id of current scroll item
      var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop) return this;
      });
      // Get the id of the current element
      cur = cur[cur.length - 1];
      var id = cur && cur.length ? cur[0].id : "";
      // Set/remove active class
      menuItems
        .parent()
        .removeClass("active")
        .end()
        .filter("[href='#" + id + "']")
        .parent()
        .addClass("active");
    }
  });
});
