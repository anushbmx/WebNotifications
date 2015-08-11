// Initiate the Web API Functions after page load
window.onload = function() {
	if (('Notification' in window) == true){ 		// Checks user agent for Web API supprot
		
		function notify(event){
			event.preventDefault(); 				// Prevents form from gettin submitted

			title = document.getElementById('title').value;
	        options = {
	          body: document.getElementById('body-message').value,
	          icon: document.getElementById('icon').value,
	          tag : 'techstream-notification'
	     	};

			
			Notification.requestPermission(function(status) {
				var notification = new Notification(title, options);	// Push Notification 
				
				notification.onshow = function() {
					document.getElementById('active-status').classList.remove('button-inactive');

					document.getElementById('inactive-status').classList.add('button-inactive');
					document.getElementById('click-status').classList.add('button-inactive');
					document.getElementById('close-status').classList.add('button-inactive');
					document.getElementById('error-status').classList.add('button-inactive');
				}

				notification.onclick = function() {
					document.getElementById('click-status').classList.remove('button-inactive');

				}

				notification.onclose = function() {
					document.getElementById('active-status').classList.add('button-inactive');
					document.getElementById('close-status').classList.remove('button-inactive');
				}

				notification.onerror = function() {
					document.getElementById('error-status').classList.remove('button-inactive');

					document.getElementById('inactive-status').classList.add('button-inactive');
					document.getElementById('click-status').classList.add('button-inactive');
					document.getElementById('close-status').classList.add('button-inactive');
					document.getElementById('active-status').classList.add('button-inactive');
				}
			});
		}
		document.getElementById('show-notification').addEventListener('click', notify);
	}else{

		// Disable Trigger Buttons if the browser does not support Web Notifications

		document.getElementById('supported').classList.add('notification-trigger-unsupported');
		document.getElementById('unsupported').classList.remove('notification-trigger-unsupported');

	}
}