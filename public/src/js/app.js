var deferredPrompt;

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/service-worker.js', { scope: '/help/'})
        .then(function() {
            console.log('Service worker registered!')
        });
}

window.addEventListener('beforeinstallprompt', function(event) {
    console.log('beeforeinstalledprompt fired');
    event.preventDefault();
    deferredPrompt = event;
    return false;
});