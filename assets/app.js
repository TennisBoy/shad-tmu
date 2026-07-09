/* SHAD @ TMU — all behaviour. One copy; both pages load it.
   index.html  -> <body data-view="today">     timeline.html -> <body data-view="timeline"> */
(function () {
  "use strict";
  var SHAD = window.SHAD;
  var root = document.getElementById("root");
  var view = document.body.getAttribute("data-view");

  /* ---------- dates ---------- */
  function todayISO() {
    var p = new Intl.DateTimeFormat("en-CA", { timeZone: SHAD.tz, year: "numeric", month: "2-digit", day: "2-digit" })
      .formatToParts(new Date());
    var g = function (t) { return p.find(function (x) { return x.type === t; }).value; };
    return g("year") + "-" + g("month") + "-" + g("day");
  }
  function fmtDate(iso, opts) {
    // noon UTC so the calendar date never shifts across timezones
    var d = new Date(iso + "T12:00:00Z");
    return new Intl.DateTimeFormat("en-US", Object.assign({ timeZone: "UTC" }, opts)).format(d);
  }
  var TODAY = todayISO();

  /* ---------- small helpers ---------- */
  function esc(s) { return String(s == null ? "" : s); }
  function kindLabel(k) {
    return ({ "keynote": "Keynote", "alum-talk": "Alum talk", "workshop": "Workshop", "panel": "Panel",
      "field-trip": "Field trip", "lecture": "Lecture", "talk": "Talk", "social": "Social" })[k] || "Session";
  }

  /* ---------- shared header ---------- */
  function header() {
    var t = view === "today";
    return '<div class="topbar"><div class="topbar-inner">' +
      '<a class="brand" href="index.html">SHAD <span class="at">@ TMU · 2026</span></a>' +
      '<nav class="nav" aria-label="Views">' +
      '<a href="index.html" class="' + (t ? "active" : "") + '"' + (t ? ' aria-current="page"' : "") + '>Today</a>' +
      '<a href="timeline.html" class="' + (!t ? "active" : "") + '"' + (!t ? ' aria-current="page"' : "") + '>Timeline</a>' +
      '</nav></div></div>';
  }

  /* ---------- PA duty strip ---------- */
  function paStrip(day) {
    var pa = day.pa_duty || {};
    var checks = (pa.room_checks || []);
    var off = (pa.off || []);
    var checksHtml = checks.length
      ? '<ul>' + checks.map(function (c) { return '<li><span class="pa-floor">Fl ' + esc(c.floor) + '</span> ' + esc(c.pa) + '</li>'; }).join("") + '</ul>'
      : '<p class="pa-none">No room checks listed.</p>';
    var offHtml = off.length
      ? '<ul class="pa-off">' + off.map(function (o) { return '<li><b>' + esc(o.pa) + '</b> <span class="when">' + esc(o.when) + '</span></li>'; }).join("") + '</ul>'
      : '<p class="pa-none">Everyone on today.</p>';
    return '<div class="pa-strip"><div class="pa-title">PAs today</div><div class="pa-cols">' +
      '<div><span class="pa-lab">Room checks</span>' + checksHtml + '</div>' +
      '<div><span class="pa-lab">Off</span>' + offHtml + '</div></div></div>';
  }

  /* ---------- one session card ---------- */
  function block(lab, gist, full, extraClass, badge) {
    var h = '<div class="block ' + (extraClass || "") + '"><div class="lab">' + esc(lab) +
      (badge ? ' <span class="badge">' + esc(badge) + '</span>' : "") + '</div>';
    if (gist) h += '<p class="gist">' + gist + '</p>';
    if (full) h += '<details class="more"><summary>' + (extraClass === "prep" ? "Open the primer" : "Full profile") +
      '</summary><div class="more-body">' + full + '</div></details>';
    return h + '</div>';
  }
  function card(s) {
    var h = '<article class="card" data-kind="' + esc(s.kind) + '">';
    h += '<div class="card-head"><span class="time">' + esc(s.display_time) + '</span>';
    if (s.group) h += '<span class="kind">' + esc(s.group) + '</span>';
    h += '<span class="kind">' + kindLabel(s.kind) + '</span></div>';
    h += '<h2>' + esc(s.title) + '</h2>';
    if (s.speaker) h += '<div class="speaker">' + esc(s.speaker) + '</div>';
    if (s.role) h += '<div class="role">' + esc(s.role) + '</div>';
    else if (s.location) h += '<div class="role">' + esc(s.location) + '</div>';
    if (s.speaker && s.location) h += '<div class="role" style="font-style:normal;font-family:var(--sans);font-size:.85rem">' + esc(s.location) + '</div>';

    h += '<div class="blocks">';
    if (s.speaker_gist || s.speaker_full) h += block("The speaker", s.speaker_gist, s.speaker_full, "");
    if (s.primer_gist || s.primer_full) {
      var primerLab = s.kind === "social" ? "What it is" : "The primer";
      var badge = s.kind === "social" ? null : "researched for you";
      var full = s.primer_full || "";
      if (s.widget) full += '<div class="widget-mount" data-widget="' + esc(s.widget) + '"></div>';
      h += block(primerLab, s.primer_gist, full || null, "prep", badge);
    }
    if (s.agenda) h += block("Likely on the agenda", s.agenda, null, "");
    if (s.buildoff) h += block("Build off it", s.buildoff, null, "");
    h += '</div></article>';
    return h;
  }

  /* ---------- TODAY view ---------- */
  function renderToday() {
    var day = SHAD.days[TODAY];
    var eyebrow = '<span class="eyebrow"><span class="today-pill">TODAY</span> ' + fmtDate(TODAY, { weekday: "long", month: "long", day: "numeric" }) + '</span>';
    var html = header() + '<div class="wrap"><section><header class="hero">' + eyebrow;

    if (!day || !day.sessions || !day.sessions.length) {
      var msg = "No sessions today — enjoy the breather.";
      if (TODAY < SHAD.program.start) msg = "SHAD starts " + fmtDate(SHAD.program.start, { weekday: "long", month: "long", day: "numeric" }) + ".";
      else if (TODAY > SHAD.program.end) msg = "That's a wrap on Week 1. New weeks land here as they're released.";
      html += '<h1>' + (day ? esc(day.headline || "Today at SHAD") : "Today at SHAD") + '</h1></header>';
      if (day) html += paStrip(day);
      html += '<div class="empty-day"><h2>No sessions today</h2><p>' + msg + '</p></div>';
    } else {
      var n = day.sessions.length;
      var words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
      var cw = n <= 10 ? words[n].charAt(0).toUpperCase() + words[n].slice(1) : n;
      html += '<h1>' + esc(day.headline || "Today at SHAD") + '</h1>' +
        '<p class="lede"><span class="count">' + cw + '</span> ' + (n === 1 ? "session" : "sessions") +
        ' today. Read the gist, tap to go deep.</p></header>';
      html += paStrip(day);
      html += '<div class="sessions">' + day.sessions.map(card).join("") + '</div>';
    }
    html += '<div class="foot">SHAD @ TMU 2026 · focus on today · <a href="timeline.html">see the whole month →</a></div>';
    html += '</section></div>';
    root.innerHTML = html;
    wireWidgets();
  }

  /* ---------- TIMELINE view ---------- */
  var timelineState = { week: null };
  function renderTimeline() {
    var dates = Object.keys(SHAD.days).sort();
    var weeks = [];
    dates.forEach(function (d) { var w = SHAD.days[d].week; if (weeks.indexOf(w) < 0) weeks.push(w); });
    weeks.sort(function (a, b) { return a - b; });
    if (timelineState.week == null) {
      timelineState.week = SHAD.days[TODAY] ? SHAD.days[TODAY].week : weeks[weeks.length - 1];
    }
    var html = header() + '<div class="wrap"><section><header class="hero">' +
      '<span class="eyebrow">The month at a glance</span><h1>Timeline</h1>' +
      '<p class="lede"><b>Past</b> days settle back; <b>today</b> glows; <b>future</b> days wait, outlined.</p></header>';
    html += '<div class="weekbar" role="tablist" aria-label="Weeks">' +
      weeks.map(function (w) {
        return '<button role="tab" data-week="' + w + '" class="' + (w === timelineState.week ? "active" : "") + '"' +
          (w === timelineState.week ? ' aria-selected="true"' : "") + '>Week ' + w + '</button>';
      }).join("") + '</div>';
    html += '<div class="daylist" id="daylist">' +
      dates.filter(function (d) { return SHAD.days[d].week === timelineState.week; }).map(dayRow).join("") + '</div>';
    html += '<div class="foot">SHAD @ TMU 2026 · <a href="index.html">back to today →</a></div>';
    html += '</section></div>';
    root.innerHTML = html;

    Array.prototype.forEach.call(root.querySelectorAll(".weekbar button"), function (b) {
      b.addEventListener("click", function () { timelineState.week = parseInt(b.getAttribute("data-week"), 10); renderTimeline(); });
    });
    Array.prototype.forEach.call(root.querySelectorAll(".day"), function (el) {
      var toggle = function () { el.classList.toggle("open"); };
      el.addEventListener("click", toggle);
      el.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } });
    });
  }
  function dayRow(d) {
    var day = SHAD.days[d];
    var state = d < TODAY ? "past" : (d > TODAY ? "future" : "today");
    var flag = state === "past" ? "Done" : (state === "future" ? "Upcoming" : "Today");
    var sessions = day.sessions || [];
    var real = sessions.filter(function (s) { return s.kind !== "social"; });
    var meta = sessions.length ? (sessions.length + (sessions.length === 1 ? " session" : " sessions")) : "no sessions";
    var detail = '<div class="day-detail"><ul>' +
      (sessions.length ? sessions.map(function (s) {
        return '<li><b>' + esc(s.display_time.replace(/\s?(AM|PM)$/i, "")) + '</b> · ' + esc(s.title) + (s.speaker ? " — " + esc(s.speaker) : "") + '</li>';
      }).join("") : '<li>Free / travel day.</li>') + '</ul>';
    var pa = day.pa_duty || {};
    if ((pa.room_checks && pa.room_checks.length) || (pa.off && pa.off.length)) {
      var bits = [];
      if (pa.room_checks && pa.room_checks.length) bits.push("Checks: " + pa.room_checks.map(function (c) { return "Fl " + c.floor + " " + c.pa; }).join(", "));
      if (pa.off && pa.off.length) bits.push("Off: " + pa.off.map(function (o) { return o.pa + " (" + o.when + ")"; }).join(", "));
      detail += '<div class="day-pa">' + bits.join(" · ") + '</div>';
    }
    detail += '</div>';
    return '<div class="day ' + state + (state === "today" ? " open" : "") + '" tabindex="0" role="button" aria-expanded="' + (state === "today") + '">' +
      '<div class="day-row"><span class="day-title">' + fmtDate(d, { weekday: "long" }) + " · " + fmtDate(d, { month: "long", day: "numeric" }) + '</span>' +
      '<span class="day-meta">' + meta + '</span><span class="day-flag">' + flag + '</span></div>' + detail + '</div>';
  }

  /* ---------- lazy widgets ---------- */
  function wireWidgets() {
    Array.prototype.forEach.call(root.querySelectorAll("details.more"), function (det) {
      var mount = det.querySelector(".widget-mount[data-widget]");
      if (!mount) return;
      det.addEventListener("toggle", function () {
        if (det.open && !mount.getAttribute("data-built")) {
          var w = WIDGETS[mount.getAttribute("data-widget")];
          if (w) { w(mount); mount.setAttribute("data-built", "1"); }
        }
      });
    });
  }

  /* ---------- widget registry ---------- */
  var WIDGETS = {
    "compound-growth": function (mount) {
      mount.innerHTML =
        '<div class="widget"><h4>Feel compounding</h4>' +
        '<p class="sub">Save a fixed amount every month at ~7%/yr. Watch the gap open between what you put in (grey) and what it becomes (blue).</p>' +
        '<div id="cg-chart"></div>' +
        '<div class="slider-row"><label for="cg-pmt">Monthly</label><input id="cg-pmt" type="range" min="0" max="500" step="10" value="100"><span class="readout" id="cg-pmtv">$100</span></div>' +
        '<div class="slider-row"><label for="cg-yrs">Years</label><input id="cg-yrs" type="range" min="1" max="50" step="1" value="20"><span class="readout" id="cg-yrsv">20</span></div>' +
        '<p style="margin:12px 0 0;font-size:.95rem" id="cg-out"></p>' +
        '<p class="illus-note">Illustrative — 7%/yr compounded monthly. Real markets swing; nothing is guaranteed.</p></div>';
      var pmtEl = mount.querySelector("#cg-pmt"), yrsEl = mount.querySelector("#cg-yrs");
      var money = function (n) { return "$" + Math.round(n).toLocaleString("en-US"); };
      function fv(pmt, months) { var r = 0.07 / 12; return r === 0 ? pmt * months : pmt * ((Math.pow(1 + r, months) - 1) / r); }
      function chart(pmt, years) {
        var W = 240, H = 140, x0 = 30, x1 = 230, y0 = 122, y1 = 14;
        var maxV = Math.max(fv(pmt, years * 12), 1);
        var vPts = [], cPts = [];
        for (var yr = 0; yr <= years; yr++) {
          var x = x0 + (x1 - x0) * (years ? yr / years : 0);
          var v = fv(pmt, yr * 12), c = pmt * yr * 12;
          vPts.push(x.toFixed(1) + "," + (y0 - (y0 - y1) * (v / maxV)).toFixed(1));
          cPts.push(x.toFixed(1) + "," + (y0 - (y0 - y1) * (c / maxV)).toFixed(1));
        }
        var end = vPts[vPts.length - 1].split(",");
        return '<svg viewBox="0 0 ' + W + ' ' + H + '" width="100%" height="130" role="img" aria-label="Growth of monthly savings over time">' +
          '<line x1="' + x0 + '" y1="' + y1 + '" x2="' + x0 + '" y2="' + y0 + '" stroke="rgba(0,76,155,.14)"/>' +
          '<line x1="' + x0 + '" y1="' + y0 + '" x2="' + x1 + '" y2="' + y0 + '" stroke="rgba(0,76,155,.14)"/>' +
          '<polyline points="' + cPts.join(" ") + '" fill="none" stroke="#9aa4b2" stroke-width="2" stroke-dasharray="3 3"/>' +
          '<polyline points="' + vPts.join(" ") + '" fill="none" stroke="#004c9b" stroke-width="2.6" stroke-linecap="round"/>' +
          '<circle cx="' + end[0] + '" cy="' + end[1] + '" r="5" fill="#ffdc00" stroke="#003a75" stroke-width="1.5"/>' +
          '<text x="' + ((x0 + x1) / 2) + '" y="136" text-anchor="middle" font-size="10" fill="#5b6675">years →</text></svg>';
      }
      function update() {
        var pmt = +pmtEl.value, years = +yrsEl.value;
        mount.querySelector("#cg-pmtv").textContent = money(pmt);
        mount.querySelector("#cg-yrsv").textContent = years;
        mount.querySelector("#cg-chart").innerHTML = chart(pmt, years);
        var total = fv(pmt, years * 12), inCon = pmt * years * 12, growth = total - inCon;
        mount.querySelector("#cg-out").innerHTML =
          'You put in <b>' + money(inCon) + '</b> → it becomes <b style="color:#004c9b">' + money(total) +
          '</b><br><span style="color:#5b6675">' + money(growth) + ' of that is growth you never deposited.</span>';
      }
      pmtEl.addEventListener("input", update);
      yrsEl.addEventListener("input", update);
      update();
    }
  };

  /* ---------- analytics ---------- */
  if (SHAD.ga_id) {
    var g = document.createElement("script");
    g.async = true; g.src = "https://www.googletagmanager.com/gtag/js?id=" + SHAD.ga_id;
    document.head.appendChild(g);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", SHAD.ga_id);
  }

  /* ---------- go ---------- */
  if (view === "timeline") renderTimeline(); else renderToday();
})();
