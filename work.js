var typeData = new Typed(".role", {
    strings: [
        "Full Stack Developer",
        "Web Developer",
        "UI-UX Designer",
        "Backend Developer",
        "Coder",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
    });

    const button1 = document.getElementById("logofinder");
    button1.addEventListener("click",function(){
        window.location.href = "#c0ntact"
    });

    let count = 0;
    const button2 = document.getElementById("contactButton");
    button2.addEventListener("click",function(){
        let target = document.getElementById("changeableText");
        let targetBg = document.getElementById("c0ntact");

        // target.classList.add("rotating");
        target.innerHTML += "!";
        count +=1;
        if(count ==10){
            target.innerHTML = "Questions, Thoughts, Or Just Want To Say Hello?!";
            count =0;
        }

        let bg_cont = window.getComputedStyle(targetBg).backgroundColor;
        if(bg_cont === "rgb(250, 235, 215)"){
            targetBg.style.backgroundColor = "rgb(210, 235, 215)";
        }else{
            targetBg.style.backgroundColor = "rgb(250, 235, 215)";
        }
    });


    ( function( $ ) {
        $(document).ready(function (){
          
          // Live Search
            $('#live-search-faux-input').on('click', function() {
                $('.live-search-modal').fadeIn(500);
                $('input#live-search-input').focus();
                $('#live-search-input').addClass('live-search-to-show');
            });
            $('input#live-search-input').on('input', function() {
                if ( this.value.length >= 3 ) {
                    $.ajax({
                        url: live_search.ajax_url, // use the globally declared variable
                        type: 'POST',
                        data: {
                            action: 'live_search', // Call the PHP function
                            keyword: $('#live-search-input').val()
                        },
                        success: function(data) {
                            $('.live-search-reset-btn').fadeIn(500);
                            $('.live-search-results').delay(500).slideDown(400).html(data);
                            $('.live-search-result').each(function(index) {
                                $(this).delay(500*index).fadeTo(400, 1);
                            });
                        }
                    });
                } else {
                    $('.live-search-results').html('');
                }
            });
            $('.live-search-reset-btn').on('click', function() {
                $('.live-search-results').html('').slideUp();
            });
            $('.live-search-close').on('click', function() {
                $('.live-search-modal').fadeOut(500);
                $('#live-search-input').removeClass('live-search-to-show').val('');
            });
          
        });
    } )( jQuery );


    (function (name, definition) {
        if (typeof module != 'undefined' && module.exports) module.exports = definition()
        else if (typeof define == 'function' && define.amd) define(definition)
        else this[name] = definition()
      })('$script', function () {
        var doc = document
          , head = doc.getElementsByTagName('head')[0]
          , s = 'string'
          , f = false
          , push = 'push'
          , readyState = 'readyState'
          , onreadystatechange = 'onreadystatechange'
          , list = {}
          , ids = {}
          , delay = {}
          , scripts = {}
          , scriptpath
          , urlArgs
      
        function every(ar, fn) {
          for (var i = 0, j = ar.length; i < j; ++i) if (!fn(ar[i])) return f
          return 1
        }
        function each(ar, fn) {
          every(ar, function (el) {
            fn(el)
            return 1
          })
        }
      
        function $script(paths, idOrDone, optDone) {
          paths = paths[push] ? paths : [paths]
          var idOrDoneIsDone = idOrDone && idOrDone.call
            , done = idOrDoneIsDone ? idOrDone : optDone
            , id = idOrDoneIsDone ? paths.join('') : idOrDone
            , queue = paths.length
          function loopFn(item) {
            return item.call ? item() : list[item]
          }
          function callback() {
            if (!--queue) {
              list[id] = 1
              done && done()
              for (var dset in delay) {
                every(dset.split('|'), loopFn) && !each(delay[dset], loopFn) && (delay[dset] = [])
              }
            }
          }
          setTimeout(function () {
            each(paths, function loading(path, force) {
              if (path === null) return callback()
              
              if (!force && !/^https?:\/\//.test(path) && scriptpath) {
                path = (path.indexOf('.js') === -1) ? scriptpath + path + '.js' : scriptpath + path;
              }
              
              if (scripts[path]) {
                if (id) ids[id] = 1
                return (scripts[path] == 2) ? callback() : setTimeout(function () { loading(path, true) }, 0)
              }
      
              scripts[path] = 1
              if (id) ids[id] = 1
              create(path, callback)
            })
          }, 0)
          return $script
        }
      
        function create(path, fn) {
          var el = doc.createElement('script'), loaded
          el.onload = el.onerror = el[onreadystatechange] = function () {
            if ((el[readyState] && !(/^c|loade/.test(el[readyState]))) || loaded) return;
            el.onload = el[onreadystatechange] = null
            loaded = 1
            scripts[path] = 2
            fn()
          }
          el.async = 1
          el.src = urlArgs ? path + (path.indexOf('?') === -1 ? '?' : '&') + urlArgs : path;
          head.insertBefore(el, head.lastChild)
        }
      
        $script.get = create
      
        $script.order = function (scripts, id, done) {
          (function callback(s) {
            s = scripts.shift()
            !scripts.length ? $script(s, id, done) : $script(s, callback)
          }())
        }
      
        $script.path = function (p) {
          scriptpath = p
        }
        $script.urlArgs = function (str) {
          urlArgs = str;
        }
        $script.ready = function (deps, ready, req) {
          deps = deps[push] ? deps : [deps]
          var missing = [];
          !each(deps, function (dep) {
            list[dep] || missing[push](dep);
          }) && every(deps, function (dep) {return list[dep]}) ?
            ready() : !function (key) {
            delay[key] = delay[key] || []
            delay[key][push](ready)
            req && req(missing)
          }(deps.join('|'))
          return $script
        }
      
        $script.done = function (idOrDone) {
          $script([null], idOrDone)
        }
      
        return $script
      });