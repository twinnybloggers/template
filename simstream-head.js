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
  var ch_LISTV1={};ch_LISTV1.start=1,ch_LISTV1.max=150,ch_LISTV1.arr=new Array,ch_LISTV1.compile=function(e){var t=$("#ch_LISTV1-sideNav");if(!(t.length<1)){t.html("");var r=e.feed;if(r.entry.length>0){for(var l=0;l<r.entry.length;l++)for(var n=r.entry[l],i=n.title.$t,h=n.published.$t,o=n.content.$t,p=0;p<n.link.length;p++)if("alternate"==n.link[p].rel){var f=n.link[p].href;f&&f.length>0&&i&&i.length>0&&h&&h.length>0&&ch_LISTV1.arr.push({link:f,title:i,time:h,content:o});break}if(r.length>=ch_LISTV1.max)ch_LISTV1.start+=ch_LISTV1.max,ch_LISTV1.run(ch_LISTV1.label,ch_LISTV1.postURL);else{for(var v="",u="",g=ch_LISTV1.arr.sort(function(e,t){return e.title.localeCompare(t.title,"en",{numeric:!0})}),m=0;m<g.length;m++){var L=g[m].time,S=L.substring(0,4),I=L.substring(5,7),T=L.substring(8,10),V=new Array;V[1]="Jan",V[2]="Feb",V[3]="Mar",V[4]="Apr",V[5]="May",V[6]="Jun",V[7]="Jul",V[8]="Aug",V[9]="Sep",V[10]="Oct",V[11]="Nov",V[12]="Dec";var _=L;if(_="function"==typeof timeAgo?timeAgo(new Date(_)):T+" "+V[parseInt(I,10)]+" "+S,g[m].title.includes("Chapter")){var x=g[m].title.split("Chapter")[1];x="Ch. "+x.replace(/[^0-9\.-]+/g,"")}else if(g[m].title.includes("Episode")){var x=g[m].title.split("Episode")[1];x="Ep. "+x.replace(/[^0-9\.-]+/g,"")}else if(g[m].title.includes("Prolouge"))var x="Ch. Prolouge";else if(g[m].title.includes("Epilouge"))var x="Ch. Epilouge";else var x=g[m].title;if(0==m){if(s=g[m].content,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),-1!=a&&-1!=b&&-1!=c&&""!=d)var A=d;else var A="https://1.bp.blogspot.com/-q5XNfPSweVQ/X-Gpih2Z9rI/AAAAAAAAHyo/7VArMT1coTM4n792SDJ6lYMBxpChGjnvgCPcBGAsYHg/s0/dagruel-no-image.png";v+='<div class="coverz"><a href="'+g[m].link+'"><div class="thumbnail"><img src="'+A+'" alt="'+g[m].title+'" title="'+g[m].title+'"><span class="titlex">'+g[m].title+"</span></div></a></div>"}else u+='<li><span class="nomor">'+m+'</span><a class="chapzx" href="'+g[m].link+'" title="'+g[m].title+'"><chx>'+x+'</chx></a><span class="datez">'+_+"</span></li>"}var w=document.createElement("ul");$(w).attr({id:"chxlistz",class:"chapx"}),$(w).html(u),t.append('<a href="javascript:void(0)" class="closebtn" onclick="ch_LISTV1.close()"></a>',v,w);var y=$(t).find('a[href="'+ch_LISTV1.postURL+'"]'),C=$(y).parent().prev().find("a").attr("href"),k=$(y).parent().next().find("a").attr("href");$(y).addClass("active"),$('.nav-chapter a[rel="prev"]').attr("href",C),$('.nav-chapter a[rel="next"]').attr("href",k),$('.nav-chapter a[href=""]').remove()}}}},ch_LISTV1.open=function(){$("#ch_LISTV1-sideNav").css("width","300px")},ch_LISTV1.close=function(){$("#ch_LISTV1-sideNav").css("width",0)},ch_LISTV1.run=function(e,t){ch_LISTV1.label=e,ch_LISTV1.postURL=t;var a=document.createElement("script");a.src="/feeds/posts/default/-/"+ch_LISTV1.label+"?alt=json&callback=ch_LISTV1.compile&start-index="+ch_LISTV1.start+"&max-results="+ch_LISTV1.max,document.body.appendChild(a)},$(document).ready(function(){var e=window.pageYOffset;$(window).scroll(function(){var t=window.pageYOffset;e>t?$(".nav-chapter").css("bottom","-70px"):$(".nav-chapter").css("bottom","0px"),e=t})});
 
