console.log("TAG Engine initialised");

function loadWorld(worldName) {
  const content = document.getElementById("content");

 if (worldName === "world1") {
  content.innerHTML = `
    <h2>World 1 Loaded</h2>
    <p>The 12‑Realm Liturgical Engine is active.</p>

    <button onclick="loadRealm(1)">Realm 1 — Awakening</button>
    <button onclick="loadRealm(2)">Realm 2 — Preparation</button>
    <button onclick="loadRealm(3)">Realm 3 — Offering</button>
    <button onclick="loadRealm(4)">Realm 4 — Reflection</button>
    <button onclick="loadRealm(5)">Realm 5 — Illumination</button>
    <button onclick="loadRealm(6)">Realm 6 — Pilgrimage</button>
    <button onclick="loadRealm(7)">Realm 7 — Communion</button>
    <button onclick="loadRealm(8)">Realm 8 — Transformation</button>
    <button onclick="loadRealm(9)">Realm 9 — Surrender</button>
    <button onclick="loadRealm(10)">Realm 10 — Renewal</button>
    <button onclick="loadRealm(11)">Realm 11 — Blessing</button>
    <button onclick="loadRealm(12)">Realm 12 — Return</button>

    <div id="realm"></div>
  `;
}


  if (worldName === "world2") {
    content.innerHTML = `
      <h2>World 2 Loaded</h2>
      <p>Saint’s Soulscape is active.</p>
    `;
  }
}
