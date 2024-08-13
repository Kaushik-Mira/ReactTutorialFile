import React from 'react'
import { Button } from 'react-bootstrap';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
const NotificationComponent = () => {
    let showNotification = () => {
        NotificationManager.info("Welcome ws");
        NotificationManager.success("This is Success message");
        NotificationManager.error("This is Error message");
        NotificationManager.warning("This is Warning message");
    }
  return (
    <div>
      <Button onClick={showNotification} className='m-5'>Save</Button>
      <NotificationContainer/>
    </div>
  )
}

export default NotificationComponent;
