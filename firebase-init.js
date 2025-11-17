
/*
  firebase-init.js
  Loads config.json and initializes Firebase. Place this file in the root next to config.json.
*/
(async function(){
  try {
    const res = await fetch('config.json');
    const cfg = await res.json();
    // load firebase scripts dynamically (compat)
    const scripts = [
      'https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js',
      'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth-compat.js',
      'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore-compat.js',
      'https://www.gstatic.com/firebasejs/10.12.2/firebase-storage-compat.js'
    ];
    for (const s of scripts) {
      await new Promise((res, rej) => {
        const sc = document.createElement('script');
        sc.src = s; sc.onload = res; sc.onerror = rej;
        document.head.appendChild(sc);
      });
    }
    firebase.initializeApp(cfg);
    window.auth = firebase.auth();
    window.db = firebase.firestore();
    window.storage = firebase.storage();
    console.log('Firebase initialized');
  } catch(e) {
    console.error('Firebase init error', e);
  }
})();
