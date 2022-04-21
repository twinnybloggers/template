var start = 1,
   max = 150,
   chapSelectArr = new Array();

function runChapSelect() {
   var _0x76c2x5 = document.createElement('script');
   _0x76c2x5.src = '/feeds/posts/default/-/' + label + '?alt=json&callback=chapSelect&start-index=' + start + '&max-results=' + max;
   document.body.appendChild(_0x76c2x5)
}

function chapSelect(_0x76c2x7) {
   var _0x76c2x8 = document.getElementById(outputDiv);
   if (!_0x76c2x8) {
      return
   };
   _0x76c2x8.innerHTML = '';
   var _0x76c2x9 = _0x76c2x7.feed;
   if (_0x76c2x9.entry.length > 0) {
      for (var _0x76c2xa = 0; _0x76c2xa < _0x76c2x9.entry.length; _0x76c2xa++) {
         var _0x76c2xb = _0x76c2x9.entry[_0x76c2xa];
         var _0x76c2xc = _0x76c2xb.title.$t;
         for (var _0x76c2xd = 0; _0x76c2xd < _0x76c2xb.link.length; _0x76c2xd++) {
            if (_0x76c2xb.link[_0x76c2xd].rel == 'alternate') {
               var _0x76c2xe = _0x76c2xb.link[_0x76c2xd].href;
               if (_0x76c2xe && _0x76c2xe.length > 0 && _0x76c2xc && _0x76c2xc.length > 0) {
                  chapSelectArr.push({
                     "url": _0x76c2xe,
                     "judul": _0x76c2xc
                  })
               };
               break
            }
         }
      };
      if (_0x76c2x9.entry.length >= max) {
         start += max;
         runChapSelect()
      } else {
         var _0x76c2xf = '',
            _0x76c2x10;
         var _0x76c2x10 = (sortby === 'title' ? chapSelectArr.sort(function (_0x76c2x10, _0x76c2x11) {
            return _0x76c2x10.judul > _0x76c2x11.judul ? 1 : -1
         }) : chapSelectArr);
         for (var _0x76c2x12 = 0; _0x76c2x12 < _0x76c2x10.length; _0x76c2x12++) {
            _0x76c2xf += '<option value="' + _0x76c2x10[_0x76c2x12].url + '">' + _0x76c2x10[_0x76c2x12].judul + '</option>'
         };
         _0x76c2x8.innerHTML = '<select name="chapterSelect" id="chapterSelect" onchange="this.options[this.selectedIndex].value&amp;&amp;window.open(this.options[this.selectedIndex].value,&#039;_self&#039;)"><option value>' + nameSelectFile + '</option>' + _0x76c2xf + '</select>';
         var _0x76c2x13 = $('#chapterSelect option[value="' + nextPrevlink + '"]').prev().attr('value'),
            _0x76c2x14 = $('#chapterSelect option[value="' + nextPrevlink + '"]').prev().html(),
            _0x76c2x15 = $('#chapterSelect option[value="' + nextPrevlink + '"]').next().attr('value'),
            _0x76c2x16 = $('#chapterSelect option[value="' + nextPrevlink + '"]').next().html(),
            _0x76c2x17 = $('#chapterSelect option').last().attr('value');
         $(document).ready(function () {
            $('#ecPrev a').attr({
               href: _0x76c2x15,
               title: _0x76c2x16
            });
            $('#ecNext a').attr({
               href: _0x76c2x13,
               title: _0x76c2x14
            });
            $('#ecHome a').attr('href', _0x76c2x17);
            $('.nextPrev a[href=""]').parent().remove();
            if ($('#ecPrev a').attr('href') == _0x76c2x17) {
               $('#ecPrev a').parent().remove()
            }
         })
      }
   }
}
var numposts = 9999;
var standardstyling = true;

function chapterlist(json) {
   for (var i = 0; i < numposts; i++) {
      var entry = json.feed.entry[i];
      var posttitle = entry.title.$t;
      var datatitle = entry.title.$t;
      var date = json.feed.entry[i].published.$t;
      var posturl;
      if (i == json.feed.entry.length) break;
      for (var k = 0; k < entry.link.length; k++) {
         if (entry.link[k].rel == 'alternate') {
            posturl = entry.link[k].href;
            break;
         }
      }
      posttitle = posttitle.link(posturl);
      if (standardstyling) document.write('<li data="' + datatitle + '"><span><svg class="line left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g transform="translate(2.000000, 2.000000)"><path d="M0.75,10.0001 C0.75,16.9371 3.063,19.2501 10,19.2501 C16.937,19.2501 19.25,16.9371 19.25,10.0001 C19.25,3.0631 16.937,0.7501 10,0.7501 C3.063,0.7501 0.75,3.0631 0.75,10.0001 Z" ></path><path d="M13.416,9.8555 C13.416,8.9515 8.832,6.0595 8.312,6.5795 C7.793,7.0995 7.742,12.5625 8.312,13.1315 C8.883,13.7025 13.416,10.7595 13.416,9.8555 Z"></path></g></svg>');
      document.write(posttitle);
      document.write('</span><time class="timeago" datetime="' + date + '">');
      document.write(date);
      document.write('</time>');
   }
   if (standardstyling) document.write('</li>');
}
var start = 1,
   max = 150,
   epListArr = new Array;

function runEpList() {
   var e = document.createElement("script");
   e.src = "/feeds/posts/default/-/" + label + "?alt=json&callback=epList&start-index=" + start + "&max-results=" + max, document.body.appendChild(e)
}

function epList(e) {
   var t = document.getElementById(outputDiv);
   if (t) {
      t.innerHTML = "";
      var r = e.feed;
      if (r.entry.length > 0) {
         for (var a = 0; a < r.entry.length; a++)
            for (var l = r.entry[a], s = l.title.$t, n = l.published.$t, i = 0; i < l.link.length; i++)
               if ("alternate" == l.link[i].rel) {
                  var u = l.link[i].href;
                  u && u.length > 0 && s && s.length > 0 && n && n.length > 0 && epListArr.push({
                     url: u,
                     judul: s,
                     tanggal: n
                  });
                  break
               } if (r.entry.length >= max) start += max, runEpList();
         else {
            for (var p, c = "", p = "title" === sortby ? epListArr.sort(function (e, t) {
                  return e.judul > t.judul ? 1 : -1
               }) : epListArr, d = 0; d < p.length; d++) {
               var o = p[d].tanggal,
                  g = o.substring(0, 4),
                  h = o.substring(5, 7),
                  f = o.substring(8, 10),
                  v = new Array;
               v[1] = "Jan", v[2] = "Feb", v[3] = "Mar", v[4] = "Apr", v[5] = "May", v[6] = "Jun", v[7] = "Jul", v[8] = "Aug", v[9] = "Sep", v[10] = "Oct", v[11] = "Nov", v[12] = "Dec";
               try {
                  if (p[d].judul.includes("Chapter")) {
                     var m = p[d].judul.split("Chapter")[1];
                     m = m.replace(/[^0-9\.-]+/g, "")
                  } else if (p[d].judul.includes("Episode")) {
                     var m = p[d].judul.split("Episode")[1];
                     m = m.replace(/[^0-9\.-]+/g, "")
                  } else var m = "N/A"
               } catch (e) {
                  console.log("error")
               }
               c += '<li class="char"><div class="ep-right"><span class="eps"><a href="' + p[d].url + '"><chapter>' + m + '</chapter></a></span></div><div class="ep-left"><span class="eps-jdl"><a href="' + p[d].url + '">' + p[d].judul + '</a></span><span class="eps-date">' + f + " " + v[parseInt(h, 10)] + " " + g + "</span></div></li>"
            }
            t.innerHTML = '<ul class="ep-item">' + c + "</ul>"
         }
      }
   }
}

function searchList() {
   var input, filter, ul, li, a, i, txtValue;
   input = document.getElementById("scInput");
   filter = input.value.toUpperCase();
   ul = document.getElementById("myUL");
   li = ul.getElementsByTagName("li");
   for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
         li[i].style.display = "";
      } else {
         li[i].style.display = "none";
      }
   }
}
