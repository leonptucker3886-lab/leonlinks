/* Linkline Smart Hours v0.1
 * Shows a live "Open now / Closed / Opens at" badge on a Linkline profile.
 * Usage: LLSmartHours.render(el, {tz:"America/New_York", hours:{mon:[["09:00","17:00"]], ...}})
 */
(function (g) {
  var DAYS = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  function toMin(s) { var p = s.split(":"); return (+p[0]) * 60 + (+p[1]); }
  function fmt(s) { var m = toMin(s), h = Math.floor(m / 60) % 24, mm = m % 60;
    return ((h % 12) || 12) + (mm ? ":" + String(mm).padStart(2, "0") : "") + (h < 12 ? " AM" : " PM"); }
  function nowIn(tz) {
    var d = new Date(), parts = {};
    try {
      new Intl.DateTimeFormat("en-US", { timeZone: tz || undefined, weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false })
        .formatToParts(d).forEach(function (p) { parts[p.type] = p.value; });
    } catch (e) { return { day: d.getDay(), min: d.getHours() * 60 + d.getMinutes() }; }
    var day = DAYS.indexOf(parts.weekday.toLowerCase().slice(0, 3));
    return { day: day, min: (+parts.hour % 24) * 60 + (+parts.minute) };
  }
  function status(cfg) {
    var hours = (cfg && cfg.hours) || {}, n = nowIn(cfg && cfg.tz);
    var today = hours[DAYS[n.day]] || [];
    for (var i = 0; i < today.length; i++) {
      var o = toMin(today[i][0]), c = toMin(today[i][1]);
      if (c <= o) c += 1440; // overnight range
      if (n.min >= o && n.min < c) return { open: true, label: "Open now", detail: "Closes " + fmt(today[i][1]) };
    }
    for (var k = 0; k < 7; k++) {
      var dayIdx = (n.day + k) % 7, list = hours[DAYS[dayIdx]] || [];
      for (var j = 0; j < list.length; j++) {
        if (k === 0 && toMin(list[j][0]) <= n.min) continue;
        var when = k === 0 ? "today" : k === 1 ? "tomorrow" : DAYS[dayIdx].charAt(0).toUpperCase() + DAYS[dayIdx].slice(1);
        return { open: false, label: "Closed", detail: "Opens " + when + " " + fmt(list[j][0]) };
      }
    }
    return { open: false, label: "Closed", detail: "No hours set" };
  }
  function render(el, cfg) {
    if (!el) return;
    function draw() {
      var s = status(cfg);
      el.innerHTML = '<span style="display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border-radius:999px;font:600 13px system-ui;background:' +
        (s.open ? "#e6f6ea;color:#0a6b2b" : "#fdecec;color:#9b1c1c") + '"><span style="width:8px;height:8px;border-radius:50%;background:' +
        (s.open ? "#16a34a" : "#dc2626") + '"></span>' + s.label + ' &middot; ' + s.detail + '</span>';
    }
    draw(); setInterval(draw, 60000);
  }
  g.LLSmartHours = { status: status, render: render };
})(window);
