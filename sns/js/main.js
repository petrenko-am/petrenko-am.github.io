(function() {

      var menu = document.querySelector(".page-header__menu");
      var toggle = document.querySelector(".page-header__burger");
      var closemenu = document.querySelector(".menu-show");

      toggle.addEventListener("click", function(event) {
        event.preventDefault();
        if (menu.classList.contains("menu-show")) {
          menu.classList.remove("menu-show");
        }
        else (menu.classList.add("menu-show"));
      });

      var burger = document.querySelector('.page-header__burger');

      burger.addEventListener("click", function(event) {
        burger.classList.toggle("selected");
      });

/*      var map = document.querySelector("#map");
      var showmap = document.querySelector("#showmap");
      var showc = document.querySelector(".show");

      showmap.addEventListener("click", function(event) {
        event.preventDefault();
        if (map.classList.contains("show")) {
          map.classList.remove("show");
        }
        else (map.classList.add("show"));
      });*/
                var createButton = document.getElementById('showmap');

                  createButton.onclick = function() {
                var container = document.createElement('div'),
                    mapBlock = document.getElementById('mapBlock');

                container.id = 'map';
                container.style.width = '100%';
                container.style.height = '400px';
                mapBlock.appendChild(container);
              };

    })();
