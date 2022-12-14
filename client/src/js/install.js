const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle("hidden",false);
    // event.preventDefault();
    // butInstall.style.visibility = 'visible';
    // textHeader.textContent = 'Click the button to install!';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    // event.prompt();
    // butInstall.setAttribute('disabled', true);
    // butInstall.textContent = 'Installed!';
    const promtEvent = window.deferredPrompt;
    promtEvent.prompt();
    window.deferredPrompt = null;
    butInstall.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // textHeader.textContent = 'Successfully installed!';
    console.log('👍', 'appinstalled', event);
    window.deferredPrompt = null;
});


//toubleshoot, come back 