self.addEventListener('push', function (event) {
    const payloadString = event.data?.text();
    const data = JSON.parse(payloadString);

    if (data) {
        const { title, body, action_click } = data;

        event.waitUntil(
            self.registration.showNotification(title || '', {
                body: body || '',
                actions: [
                    { action: 'custom-action', title: action_click || 'Ação Padrão' }
                ]
            })
        );
    }
});

self.addEventListener('notificationclick', function (event) {
    const notification = event.notification;
    const action = event.action;

    if (action === 'custom-action') {
        const redirectUrl = 'http://localhost:5173/confirmation';
        event.waitUntil(
            clients.openWindow(redirectUrl)
        );
    } else {
        const redirectUrl = 'http://localhost:5173/confirmation';
        event.waitUntil(
            clients.openWindow(redirectUrl)
        );
    }
    notification.close();
});
