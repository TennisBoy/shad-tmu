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
  function block(lab, gist, full, extraClass, badge, footer) {
    var h = '<div class="block ' + (extraClass || "") + '"><div class="lab">' + esc(lab) +
      (badge ? ' <span class="badge">' + esc(badge) + '</span>' : "") + '</div>';
    if (gist) h += '<p class="gist">' + gist + '</p>';
    if (full) h += '<details class="more"><summary>' + (extraClass === "prep" ? "Go deeper" : "Full profile") +
      '</summary><div class="more-body">' + full + '</div></details>';
    if (footer) h += footer;
    return h + '</div>';
  }
  function card(s, noteKey) {
    var h = '<article class="card" data-kind="' + esc(s.kind) + '">';
    h += '<div class="card-head"><span class="time">' + esc(s.display_time) + '</span>';
    if (s.group) h += '<span class="kind">' + esc(s.group) + '</span>';
    h += '<span class="kind">' + kindLabel(s.kind) + '</span></div>';
    h += '<h2>' + esc(s.title) + '</h2>';
    if (s.speaker) h += '<div class="speaker">' + esc(s.speaker) + '</div>';
    if (s.role) h += '<div class="role">' + esc(s.role) + '</div>';
    else if (s.location && !s.speaker) h += '<div class="role">' + esc(s.location) + '</div>';
    if (s.speaker && s.location) h += '<div class="role" style="font-style:normal;font-family:var(--sans);font-size:.85rem">' + esc(s.location) + '</div>';

    h += '<div class="blocks">';
    if (s.speaker_gist || s.speaker_full || s.email) {
      var contact = s.email ? '<p class="contact"><a href="mailto:' + esc(s.email) + '">✉ ' + esc(s.email) + '</a></p>' : null;
      h += block("The speaker", s.speaker_gist, s.speaker_full, "", null, contact);
    }
    if (s.primer_gist || s.primer_full) {
      var primerLab = s.kind === "social" ? "What it is" : "The primer";
      var badge = s.kind === "social" ? null : "researched for you + added notes";
      var full = s.primer_full || "";
      if (s.widget) full += '<div class="widget-mount" data-widget="' + esc(s.widget) + '"></div>';
      h += block(primerLab, s.primer_gist, full || null, "prep", badge);
    }
    if (s.agenda) h += block("Likely on the agenda", s.agenda, null, "");
    if (s.buildoff) h += block("Build off it", s.buildoff, null, "");
    if (s.questions && s.questions.length) {
      h += '<div class="block asks"><div class="lab">Three to ask</div><ol class="asks-list">' +
        s.questions.map(function (q) { return '<li>' + q + '</li>'; }).join("") + '</ol></div>';
    }
    h += '<div class="block notes"><div class="lab">My notes</div>' +
      '<textarea class="note-input" data-key="' + esc(noteKey) + '" placeholder="Jot what you want to build off — saved on this device."></textarea>' +
      '<div class="note-hint">Private to this device<span class="saved">· saved</span></div></div>';
    h += '</div></article>';
    return h;
  }

  /* ---------- DAY view (today by default, or any date via ?date=YYYY-MM-DD) ---------- */
  function param(name) {
    var m = new RegExp("[?&]" + name + "=([^&#]+)").exec(window.location.search);
    return m ? decodeURIComponent(m[1]) : null;
  }
  function adjDates(target) {
    var all = Object.keys(SHAD.days).sort(), prev = null, next = null;
    for (var i = 0; i < all.length; i++) {
      if (all[i] < target) prev = all[i];
      else if (all[i] > target && next === null) next = all[i];
    }
    return { prev: prev, next: next };
  }
  function dayNav(target) {
    var a = adjDates(target);
    var btn = function (d, dir) {
      if (!d) return '<span class="daynav-btn disabled">' + (dir === "prev" ? "← Prev" : "Next →") + '</span>';
      var wk = fmtDate(d, { weekday: "short", month: "short", day: "numeric" });
      return '<a class="daynav-btn" href="index.html?date=' + d + '">' + (dir === "prev" ? "← " + wk : wk + " →") + '</a>';
    };
    var jump = target === TODAY ? "" : '<a class="daynav-today" href="index.html">● Today</a>';
    return '<div class="daynav">' + btn(a.prev, "prev") + jump + btn(a.next, "next") + '</div>';
  }
  function renderDay(target) {
    var day = SHAD.days[target];
    var isToday = target === TODAY;
    var state = target < TODAY ? "past" : (target > TODAY ? "future" : "today");
    var pill = isToday ? "TODAY" : (state === "past" ? "PAST" : "UPCOMING");
    var eyebrow = '<span class="eyebrow"><span class="today-pill ' + state + '">' + pill + '</span> ' +
      fmtDate(target, { weekday: "long", month: "long", day: "numeric" }) + '</span>';
    var html = header() + '<div class="wrap"><section><header class="hero">' + eyebrow;

    if (!day || !day.sessions || !day.sessions.length) {
      var msg = "No sessions scheduled" + (isToday ? " today — enjoy the breather." : ".");
      if (target < SHAD.program.start) msg = "SHAD starts " + fmtDate(SHAD.program.start, { weekday: "long", month: "long", day: "numeric" }) + ".";
      else if (target > SHAD.program.end) msg = "Beyond the current schedule — new weeks land here as they're released.";
      html += '<h1>' + (day ? esc(day.headline || "SHAD @ TMU") : "SHAD @ TMU") + '</h1>' + dayNav(target) + '</header>';
      if (day) html += paStrip(day);
      html += '<div class="empty-day"><h2>No sessions</h2><p>' + msg + '</p></div>';
    } else {
      var n = day.sessions.length;
      var words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
      var cw = n <= 10 ? words[n].charAt(0).toUpperCase() + words[n].slice(1) : n;
      html += '<h1>' + esc(day.headline || "SHAD @ TMU") + '</h1>' +
        '<p class="lede"><span class="count">' + cw + '</span> ' + (n === 1 ? "session" : "sessions") +
        (isToday ? " today" : " this day") + '. Read the gist, tap to go deep.</p>' + dayNav(target) + '</header>';
      html += paStrip(day);
      html += '<div class="sessions">' + day.sessions.map(function (s, i) { return card(s, "shadnote:" + target + ":" + i); }).join("") + '</div>';
    }
    html += '<div class="foot">SHAD @ TMU 2026 · <a href="timeline.html">see the whole month →</a></div>';
    html += '</section></div>';
    root.innerHTML = html;
    wireWidgets();
    wireNotes();
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
    /* "Open →" links navigate to the full day view without toggling the row */
    Array.prototype.forEach.call(root.querySelectorAll(".day-open"), function (a) {
      a.addEventListener("click", function (e) { e.stopPropagation(); });
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
      '<span class="day-meta">' + meta + '</span><span class="day-flag">' + flag + '</span>' +
      '<a class="day-open" href="index.html?date=' + d + '" aria-label="Open the full detail view for this day">Open →</a></div>' + detail + '</div>';
  }

  /* ---------- lazy widgets ---------- */
  function wireWidgets() {
    Array.prototype.forEach.call(root.querySelectorAll("details.more"), function (det) {
      var mounts = det.querySelectorAll(".widget-mount[data-widget]");
      if (!mounts.length) return;
      det.addEventListener("toggle", function () {
        if (!det.open) return;
        Array.prototype.forEach.call(mounts, function (mount) {
          if (mount.getAttribute("data-built")) return;
          var w = WIDGETS[mount.getAttribute("data-widget")];
          if (w) { w(mount); mount.setAttribute("data-built", "1"); }
        });
      });
    });
  }

  /* ---------- per-device notes (localStorage) ---------- */
  function wireNotes() {
    var store;
    try { store = window.localStorage; } catch (e) { store = null; }
    Array.prototype.forEach.call(root.querySelectorAll(".note-input"), function (ta) {
      var key = ta.getAttribute("data-key");
      if (store) { try { var v = store.getItem(key); if (v != null) ta.value = v; } catch (e) {} }
      var autosize = function () { ta.style.height = "auto"; ta.style.height = Math.max(ta.scrollHeight, 44) + "px"; };
      autosize();
      var saved = ta.parentNode.querySelector(".saved"), t;
      ta.addEventListener("input", function () {
        autosize();
        if (store) { try { store.setItem(key, ta.value); } catch (e) {} }
        if (saved) { saved.classList.add("show"); clearTimeout(t); t = setTimeout(function () { saved.classList.remove("show"); }, 1200); }
      });
    });
  }

  /* ---------- widget registry ---------- */
  var WIDGETS = {
    "qubit-power": function (mount) {
      mount.innerHTML =
        '<div class="widget"><h4>Why qubits get powerful fast</h4>' +
        '<p class="sub">Each extra qubit <b>doubles</b> the number of states the machine can hold at once — that\'s 2ⁿ. On the log scale below, that explosion is a straight line.</p>' +
        '<div id="qp-chart"></div>' +
        '<div class="slider-row"><label for="qp-n">Qubits</label><input id="qp-n" type="range" min="1" max="50" step="1" value="20"><span class="readout" id="qp-nv">20</span></div>' +
        '<p style="margin:12px 0 0;font-size:.95rem" id="qp-out"></p>' +
        '<p class="illus-note">Illustrative — real machines lose some of this to noise/error. ~300 qubits would exceed the number of atoms in the observable universe.</p></div>';
      var nEl = mount.querySelector("#qp-n");
      function fmt(n) {
        if (n <= 50) return Math.pow(2, n).toLocaleString("en-US");
        var log10 = n * Math.LN2 / Math.LN10, exp = Math.floor(log10);
        return (Math.pow(10, log10 - exp)).toFixed(1) + " × 10^" + exp;
      }
      function chart(n) {
        var x0 = 30, x1 = 230, y0 = 122, y1 = 14, NMAX = 50;
        var sx = function (k) { return (x0 + (x1 - x0) * (k / NMAX)).toFixed(1); };
        var sy = function (k) { return (y0 - (y0 - y1) * (k / NMAX)).toFixed(1); };
        return '<svg viewBox="0 0 240 140" width="100%" height="130" role="img" aria-label="Number of states doubles with each qubit; a straight line on a log scale">' +
          '<line x1="' + x0 + '" y1="' + y1 + '" x2="' + x0 + '" y2="' + y0 + '" stroke="rgba(0,76,155,.14)"/>' +
          '<line x1="' + x0 + '" y1="' + y0 + '" x2="' + x1 + '" y2="' + y0 + '" stroke="rgba(0,76,155,.14)"/>' +
          '<polyline points="' + sx(0) + ',' + sy(0) + ' ' + sx(NMAX) + ',' + sy(NMAX) + '" fill="none" stroke="#004c9b" stroke-width="2.6" stroke-linecap="round"/>' +
          '<line x1="' + sx(n) + '" y1="' + sy(n) + '" x2="' + sx(n) + '" y2="' + y0 + '" stroke="#9aa4b2" stroke-width="1" stroke-dasharray="3 3"/>' +
          '<circle cx="' + sx(n) + '" cy="' + sy(n) + '" r="5" fill="#ffdc00" stroke="#003a75" stroke-width="1.5"/>' +
          '<text x="' + x0 + '" y="10" font-size="8" fill="#5b6675">states (log scale)</text>' +
          '<text x="130" y="136" text-anchor="middle" font-size="10" fill="#5b6675">qubits →</text></svg>';
      }
      function update() {
        var n = +nEl.value;
        mount.querySelector("#qp-nv").textContent = n;
        mount.querySelector("#qp-chart").innerHTML = chart(n);
        mount.querySelector("#qp-out").innerHTML =
          '<b>' + n + '</b> qubits hold <b style="color:#004c9b">2<sup>' + n + '</sup> = ' + fmt(n) + '</b> states at once.' +
          '<br><span style="color:#5b6675">Add one more qubit → it doubles.</span>';
      }
      nEl.addEventListener("input", update);
      update();
    },

    "pe-valuation": function (mount) {
      mount.innerHTML =
        '<div class="widget"><h4>How the multiple sets the price</h4>' +
        '<p class="sub">Valuation = annual profit × the P/E multiple. Same profit, a different multiple, a wildly different price — drag both and watch the gold dot.</p>' +
        '<div id="pe-chart"></div>' +
        '<div class="slider-row"><label for="pe-e">Annual profit</label><input id="pe-e" type="range" min="50000" max="2000000" step="50000" value="500000"><span class="readout" id="pe-ev">$500k</span></div>' +
        '<div class="slider-row"><label for="pe-m">P/E multiple</label><input id="pe-m" type="range" min="1" max="40" step="1" value="12"><span class="readout" id="pe-mv">12×</span></div>' +
        '<p style="margin:12px 0 0;font-size:.95rem" id="pe-out"></p>' +
        '<p class="illus-note">Illustrative — real multiples depend on growth, risk and sector.</p></div>';
      var eEl = mount.querySelector("#pe-e"), mEl = mount.querySelector("#pe-m");
      var money = function (n) { n = Math.round(n); var a = Math.abs(n); if (a >= 1e6) return "$" + (n / 1e6).toFixed(1) + "M"; if (a >= 1e3) return "$" + Math.round(n / 1e3) + "k"; return "$" + n; };
      var PEMAX = 40;
      function chart(profit, mult) {
        var x0 = 30, x1 = 230, y0 = 122, y1 = 14;
        var valMax = Math.max(profit * PEMAX, 1);
        var sx = function (pe) { return (x0 + (x1 - x0) * (pe / PEMAX)).toFixed(1); };
        var sy = function (v) { return (y0 - (y0 - y1) * (v / valMax)).toFixed(1); };
        var line = sx(0) + "," + sy(0) + " " + sx(PEMAX) + "," + sy(profit * PEMAX);
        return '<svg viewBox="0 0 240 140" width="100%" height="130" role="img" aria-label="Valuation rises with the P/E multiple">' +
          '<line x1="' + x0 + '" y1="' + y1 + '" x2="' + x0 + '" y2="' + y0 + '" stroke="rgba(0,76,155,.14)"/>' +
          '<line x1="' + x0 + '" y1="' + y0 + '" x2="' + x1 + '" y2="' + y0 + '" stroke="rgba(0,76,155,.14)"/>' +
          '<polyline points="' + line + '" fill="none" stroke="#004c9b" stroke-width="2.6" stroke-linecap="round"/>' +
          '<line x1="' + sx(mult) + '" y1="' + sy(profit * mult) + '" x2="' + sx(mult) + '" y2="' + y0 + '" stroke="#9aa4b2" stroke-width="1" stroke-dasharray="3 3"/>' +
          '<circle cx="' + sx(mult) + '" cy="' + sy(profit * mult) + '" r="5" fill="#ffdc00" stroke="#003a75" stroke-width="1.5"/>' +
          '<text x="130" y="136" text-anchor="middle" font-size="10" fill="#5b6675">P/E multiple →</text></svg>';
      }
      function update() {
        var profit = +eEl.value, mult = +mEl.value, val = profit * mult;
        mount.querySelector("#pe-ev").textContent = money(profit);
        mount.querySelector("#pe-mv").textContent = mult + "×";
        mount.querySelector("#pe-chart").innerHTML = chart(profit, mult);
        mount.querySelector("#pe-out").innerHTML =
          'At <b>' + mult + '×</b>, a <b>' + money(profit) + '</b> profit is worth <b style="color:#004c9b">' + money(val) + '</b>.' +
          '<br><span style="color:#5b6675">Halve the multiple → ' + money(val / 2) + '; double it → ' + money(val * 2) + '. Same profit.</span>';
      }
      eEl.addEventListener("input", update);
      mEl.addEventListener("input", update);
      update();
    },

    "sales-funnel": function (mount) {
      var stages = [
        { n: "Leads", c: 100, w: 196 },
        { n: "Sales-qualified (SQL)", c: 40, w: 158 },
        { n: "Value proposition", c: 25, w: 122 },
        { n: "Proposal / quote", c: 12, w: 90 },
        { n: "Negotiation & review", c: 6, w: 60 },
        { n: "Closed", c: 3, w: 36 }
      ];
      var cx = 120, svg = '<svg viewBox="0 0 300 200" width="100%" height="200" role="img" aria-label="Sales funnel narrowing from many leads to a few closed deals">';
      stages.forEach(function (s, i) {
        var y = 14 + i * 30, x = cx - s.w / 2, op = (0.3 + i * 0.12).toFixed(2);
        svg += '<rect x="' + x + '" y="' + y + '" width="' + s.w + '" height="23" rx="4" fill="#004c9b" opacity="' + op + '"/>';
        svg += '<text x="' + cx + '" y="' + (y + 15.5) + '" text-anchor="middle" font-size="10" font-weight="700" fill="#fff">' + s.c + '</text>';
        svg += '<text x="228" y="' + (y + 15.5) + '" font-size="9" fill="#0f1b2d">' + s.n + '</text>';
      });
      svg += '</svg>';
      mount.innerHTML =
        '<div class="widget"><h4>The sales cycle is a funnel</h4>' +
        '<p class="sub">Every step qualifies harder than the last, so the numbers fall away fast — you spend your energy only where a deal can still happen.</p>' +
        svg +
        '<p class="illus-note">Illustrative drop-off — real rates vary, but the shape always narrows.</p></div>';
    },

    "venture-lifecycle": function (mount) {
      var bands = ["Seed", "Early", "Market", "Scale"], bx = [34, 97, 160, 223, 286];
      var svg =
        '<svg viewBox="0 0 300 190" width="100%" height="190" role="img" aria-label="Venture lifecycle: growth climbs in steps, risk falls, and EBITDA traces a J-curve that crosses zero about halfway through the market stage">' +
        '<rect x="34" y="16" width="63" height="136" fill="rgba(0,76,155,.035)"/>' +
        '<rect x="160" y="16" width="63" height="136" fill="rgba(0,76,155,.035)"/>' +
        '<line x1="97" y1="16" x2="97" y2="152" stroke="rgba(0,76,155,.12)"/>' +
        '<line x1="160" y1="16" x2="160" y2="152" stroke="rgba(0,76,155,.12)"/>' +
        '<line x1="223" y1="16" x2="223" y2="152" stroke="rgba(0,76,155,.12)"/>' +
        '<line x1="34" y1="152" x2="286" y2="152" stroke="rgba(0,76,155,.18)"/>' +
        '<line x1="34" y1="112" x2="286" y2="112" stroke="#9aa4b2" stroke-width="1" stroke-dasharray="3 3"/>' +
        '<text x="285" y="108" text-anchor="end" font-size="8" fill="#5b6675">EBITDA = 0</text>' +
        '<path d="M34,26 C 120,60 190,120 286,148" fill="none" stroke="#b23a3a" stroke-width="2" stroke-dasharray="5 4" opacity=".8"/>' +
        '<polyline points="34,142 97,142 97,118 160,118 160,88 223,88 223,48 286,48" fill="none" stroke="#004c9b" stroke-width="2.6" stroke-linejoin="round"/>' +
        '<path d="M34,112 C 80,140 150,140 191,112 S 250,74 286,58" fill="none" stroke="#1f8a5b" stroke-width="2.4"/>' +
        '<circle cx="191" cy="112" r="4.5" fill="#ffdc00" stroke="#003a75" stroke-width="1.4"/>' +
        bands.map(function (b, i) { return '<text x="' + ((bx[i] + bx[i + 1]) / 2) + '" y="166" text-anchor="middle" font-size="9" fill="#0f1b2d">' + b + '</text>'; }).join("") +
        '<text x="160" y="184" text-anchor="middle" font-size="8" fill="#5b6675">time →</text>' +
        '</svg>';
      mount.innerHTML =
        '<div class="widget"><h4>The venture lifecycle, in one picture</h4>' +
        '<p class="sub"><b style="color:#004c9b">Growth</b> climbs in steps, <b style="color:#b23a3a">risk</b> falls as you prove the model, and <b style="color:#1f8a5b">EBITDA</b> (profit) dips negative before crossing zero — the gold dot — about halfway through the market stage.</p>' +
        svg +
        '<div style="display:flex;gap:16px;flex-wrap:wrap;font-size:.8rem;color:#5b6675;margin-top:6px">' +
          '<span><b style="color:#004c9b">━</b> growth (staircase)</span>' +
          '<span><b style="color:#b23a3a">╍</b> risk</span>' +
          '<span><b style="color:#1f8a5b">━</b> EBITDA / profit</span>' +
        '</div>' +
        '<p class="illus-note">Illustrative — the shape, not exact numbers. Real timelines vary.</p></div>';
    },

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
    },

    "break-even": function (mount) {
      mount.innerHTML =
        '<div class="widget"><h4>Find the break-even point</h4>' +
        '<p class="sub">You only make money once sales cover your fixed costs. Watch where revenue (blue) overtakes total cost (grey).</p>' +
        '<div id="be-chart"></div>' +
        '<div class="slider-row"><label for="be-fc">Fixed costs</label><input id="be-fc" type="range" min="0" max="5000" step="100" value="1000"><span class="readout" id="be-fcv">$1,000</span></div>' +
        '<div class="slider-row"><label for="be-p">Price / unit</label><input id="be-p" type="range" min="1" max="50" step="1" value="12"><span class="readout" id="be-pv">$12</span></div>' +
        '<div class="slider-row"><label for="be-c">Cost / unit</label><input id="be-c" type="range" min="0" max="40" step="1" value="4"><span class="readout" id="be-cv">$4</span></div>' +
        '<p style="margin:12px 0 0;font-size:.95rem" id="be-out"></p>' +
        '<p class="illus-note">Simplified — real costs are messier, but the crossover logic holds.</p></div>';
      var fcEl = mount.querySelector("#be-fc"), pEl = mount.querySelector("#be-p"), cEl = mount.querySelector("#be-c");
      var money = function (n) { return "$" + Math.round(n).toLocaleString("en-US"); };
      function chart(fc, p, c, be) {
        var x0 = 30, x1 = 230, y0 = 122, y1 = 14;
        var xmax = isFinite(be) ? Math.max(be * 2, 10) : Math.max((fc / Math.max(p, 1)) * 2, 10);
        var ymax = Math.max(p * xmax, fc + c * xmax, 1);
        var sx = function (u) { return (x0 + (x1 - x0) * (u / xmax)).toFixed(1); };
        var sy = function (v) { return (y0 - (y0 - y1) * (v / ymax)).toFixed(1); };
        var rev = sx(0) + "," + sy(0) + " " + sx(xmax) + "," + sy(p * xmax);
        var cost = sx(0) + "," + sy(fc) + " " + sx(xmax) + "," + sy(fc + c * xmax);
        var dot = (isFinite(be) && be <= xmax) ? '<circle cx="' + sx(be) + '" cy="' + sy(p * be) + '" r="5" fill="#ffdc00" stroke="#003a75" stroke-width="1.5"/>' : "";
        return '<svg viewBox="0 0 240 140" width="100%" height="130" role="img" aria-label="Revenue vs total cost by units sold">' +
          '<line x1="' + x0 + '" y1="' + y1 + '" x2="' + x0 + '" y2="' + y0 + '" stroke="rgba(0,76,155,.14)"/>' +
          '<line x1="' + x0 + '" y1="' + y0 + '" x2="' + x1 + '" y2="' + y0 + '" stroke="rgba(0,76,155,.14)"/>' +
          '<polyline points="' + cost + '" fill="none" stroke="#9aa4b2" stroke-width="2" stroke-dasharray="3 3"/>' +
          '<polyline points="' + rev + '" fill="none" stroke="#004c9b" stroke-width="2.6" stroke-linecap="round"/>' + dot +
          '<text x="130" y="136" text-anchor="middle" font-size="10" fill="#5b6675">units sold →</text></svg>';
      }
      function update() {
        var fc = +fcEl.value, p = +pEl.value, c = +cEl.value, margin = p - c;
        mount.querySelector("#be-fcv").textContent = money(fc);
        mount.querySelector("#be-pv").textContent = money(p);
        mount.querySelector("#be-cv").textContent = money(c);
        var be = margin > 0 ? fc / margin : Infinity;
        mount.querySelector("#be-chart").innerHTML = chart(fc, p, c, be);
        mount.querySelector("#be-out").innerHTML = margin <= 0
          ? 'At <b>' + money(p) + '</b> price and <b>' + money(c) + '</b> cost you <b style="color:#b23">lose ' + money(c - p) + ' on every unit</b> — there is no break-even. Raise the price or cut the cost.'
          : 'You break even at <b style="color:#004c9b">' + Math.ceil(be).toLocaleString("en-US") + ' units</b>. Below that you\'re in the red; above it, each extra unit earns <b>' + money(margin) + '</b> profit.';
      }
      fcEl.addEventListener("input", update);
      pEl.addEventListener("input", update);
      cEl.addEventListener("input", update);
      update();
    }
  };

  /* ---------- contribute / "email me more notes" block ---------- */
  function mountContribute() {
    var KEY = "shad:contribute-open";
    var store; try { store = window.localStorage; } catch (e) { store = null; }
    var wrap = document.createElement("div");
    wrap.className = "contribute";
    var saved; try { saved = store ? store.getItem(KEY) : null; } catch (e) { saved = null; }
    var open = saved !== "0"; // default open; collapses to a pill once dismissed
    function render() {
      if (open) {
        wrap.classList.remove("collapsed");
        wrap.innerHTML =
          '<button class="contribute-close" aria-label="Collapse this note">×</button>' +
          '<span class="contribute-lab">Got a note to add?</span>' +
          '<p>Spotted something I missed, or have better notes? Email me and I\'ll add them to the site — with credit to you.</p>' +
          '<a href="mailto:william.yin@torontometropolitan.shad.ca">✉ william.yin@torontometropolitan.shad.ca</a>';
        wrap.querySelector(".contribute-close").addEventListener("click", function () {
          open = false; try { if (store) store.setItem(KEY, "0"); } catch (e) {} render();
        });
      } else {
        wrap.classList.add("collapsed");
        wrap.innerHTML = '<button class="contribute-pill" aria-label="Suggest a note to add">✉ Add a note</button>';
        wrap.querySelector(".contribute-pill").addEventListener("click", function () {
          open = true; try { if (store) store.setItem(KEY, "1"); } catch (e) {} render();
        });
      }
    }
    render();
    document.body.appendChild(wrap);
  }

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
  if (view === "timeline") { renderTimeline(); }
  else {
    var q = param("date");
    renderDay(q && /^\d{4}-\d{2}-\d{2}$/.test(q) && SHAD.days[q] ? q : TODAY);
  }
  mountContribute();
})();
