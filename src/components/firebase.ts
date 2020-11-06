export function configNotification() {
    
    Notification.requestPermission().then((permission) => {console.log(permission)})

}