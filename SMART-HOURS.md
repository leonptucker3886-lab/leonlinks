# Linkline Smart Hours (#13, Whiz)

**Pitch:** Visitors to a Linkline profile instantly see "Open now · Closes 5 PM" or "Closed · Opens tomorrow 9 AM" — in the owner's timezone, live, no backend.

## HOWTO
1. Add an `hours` object to the profile data: `{"tz":"America/New_York","hours":{"mon":[["09:00","17:00"]],...}}` (overnight ranges like `["22:00","02:00"]` work).
2. The badge appears under the bio on `/p/` and refreshes every minute.
3. Demo without data: open `/p/?demo=hours`.

## LOGBOOK
- v0.1: smart-hours.js status engine (already on branch).
- v0.2: wired into p/index.html (badge under bio, 60s refresh, `?demo=hours`), escaped label text.
- Self-review: LLSmartHours.render() started a new interval per call; profile re-renders would stack timers → replaced with one shared interval + drawHours(). Node test of status(): Wed 15:xx ET → "Open now · Closes 5 PM" ✅.
- Browser test: see INSPECTIONS / post — page fetched from the public preview; badge rendering is client-side JS.

## INSPECTIONS
- 19:25 UTC interim: NOT SHIPPED (no preview).
