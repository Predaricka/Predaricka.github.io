<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Predaricka Deastra — About</title>
  <meta name="description" content="Predaricka Deastra — Structural Dynamics & Earthquake Engineering" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet" />
  <style>
    :root{
      --bg:#0f172a; --card:#111827; --muted:#9ca3af; --text:#e5e7eb; --brand:#60a5fa; --chip:#1f2937; --link:#93c5fd;
      --ring: 0 0 0 3px rgba(96,165,250,.35);
    }
    *{box-sizing:border-box}
    html,body{margin:0;background:linear-gradient(180deg,#0b1220, #0f172a 35%, #0b1220); color:var(--text); font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif}
    a{color:var(--link); text-decoration:none} a:hover{text-decoration:underline}
    .wrap{max-width:1000px;margin:0 auto;padding:24px}
    header{display:flex;gap:20px;align-items:center; padding:32px 0 8px}
    .avatar{width:84px;height:84px;border-radius:999px;background:#1f2937;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:28px;box-shadow:0 10px 30px rgba(0,0,0,.35)}
    .title h1{margin:0;font-size:28px;letter-spacing:.2px}
    .title p{margin:6px 0 0;color:var(--muted)}
    nav{position:sticky;top:0;background:rgba(15,23,42,.7);backdrop-filter:blur(10px);z-index:10;border-bottom:1px solid rgba(255,255,255,.06)}
    .nav{display:flex;flex-wrap:wrap;gap:12px;padding:10px 0}
    .nav a{padding:8px 12px;background:var(--chip);border-radius:999px;color:#cbd5e1;font-size:14px}
    .grid{display:grid;grid-template-columns:1fr;gap:18px;margin-top:18px}
    @media(min-width:900px){.grid{grid-template-columns: 1.2fr .8fr}}
    section{background:var(--card);border:1px solid rgba(255,255,255,.06);border-radius:18px;padding:20px;box-shadow:0 8px 30px rgba(0,0,0,.25)}
    h2{margin:0 0 12px;font-size:18px;color:#dbeafe;letter-spacing:.3px}
    .kvs{display:grid;grid-template-columns: 130px 1fr;gap:10px;row-gap:8px}
    .muted{color:var(--muted)}
    ul{margin:8px 0 0 18px}
    li{margin:6px 0}
    .badge{display:inline-block;padding:6px 10px;background:#0b1220;border:1px solid rgba(255,255,255,.07);border-radius:999px;margin:4px 6px 0 0;font-size:12px;color:#cbd5e1}
    .chips{margin-top:6px}
    .rows>div{padding:10px 0;border-top:1px solid rgba(255,255,255,.06)}
    .rows>div:first-child{border-top:none}
    .split{display:flex;justify-content:space-between;gap:12px}
    .mono{font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace; font-size:13px}
    footer{color:#94a3b8;text-align:center;padding:28px 0}
    .contact a{display:inline-flex;align-items:center;gap:8px;padding:8px 12px;background:#0b1220;border:1px solid rgba(255,255,255,.07);border-radius:999px;margin:6px 6px 0 0}
    .cardlist{display:grid;gap:10px}
    .pub{padding:10px;border:1px solid rgba(255,255,255,.06);border-radius:12px;background:#0b1220}
    .small{font-size:13px}
    .highlight{color:#bbf7d0}
    .right h2
