  document.getElementById('temp').addEventListener('click', display_temp);
			document.getElementById('back').addEventListener('click', display_back);
			document.getElementById('graphic').addEventListener('click', display_graphic);
			document.getElementById('powerPoint').addEventListener('click', display_powerPoint);	
			document.getElementById('video').addEventListener('click', display_video);
			document.getElementById('decorsmodels').addEventListener('click', display_decors_models);
			document.getElementById('ecommerce').addEventListener('click', display_e_commerce);
			
			const containner = document.getElementById('tempid');
			
			function display_All() {
			tempid.className = "graphic";
			
			var imageArray = [];
			imageArray[0] = {
				src : "D:/website-Task/Pick Best/img/1.jpg",
				caption : "Image caption for image-1"
			};
			imageArray[1] = {
				src : "D:/website-Task/Pick Best/img/2.jpg",
				caption : "Image caption for image-2"
			};
			
			imageArray[2] = {
				src : "D:/website-Task/Pick Best/img/3.jpg",
				caption : "Image caption for image-3"
			};
			
			imageArray[3] = {
				src : "D:/website-Task/Pick Best/img/4.jpg",
				caption : "Image caption for image-4"
			};
			imageArray[4] = {
				src : "D:/website-Task/Pick Best/img/5.jpg",
				caption : "Image caption for image-5"
			};
			imageArray[5] = {
				src : "D:/website-Task/Pick Best/img/6.jpg",
				caption : "Image caption for image-6"
			};
			imageArray[6] = {
				src : "D:/website-Task/Pick Best/img/7.jpg",
				caption : "Image caption for image-7"
			};
			
			imageArray[7] = {
				src : "D:/website-Task/Pick Best/img/8.jpg",
				caption : "Image caption for image-8"
			};
			
			imageArray[8] = {
				src : "D:/website-Task/Pick Best/img/9.jpg",
				caption : "Image caption for image-9"
			};
			
			imageArray[9] = {
				src : "D:/website-Task/Pick Best/img/10.jpg",
				caption : "Image caption for image-10"
			};
			imageArray[10] = {
				src : "D:/website-Task/Pick Best/img/11.jpg",
				caption : "Image caption for image-11"
			};
			imageArray[11] = {
				src : "D:/website-Task/Pick Best/img/12.jpg",
				caption : "Image caption for image-12"
			};
			imageArray[12] = {
				src : "D:/website-Task/Pick Best/img/13.jpg",
				caption : "Image caption for image-13"
			};
			imageArray[13] = {
				src : "D:/website-Task/Pick Best/img/14.jpg",
				caption : "Image caption for image-14"
			};
			imageArray[14] = {
				src : "D:/website-Task/Pick Best/img/15.jpg",
				caption : "Image caption for image-15"
			};
			
			var fc = containner.firstChild;
			
			while( fc ) {
				containner.removeChild( fc );
				fc = containner.firstChild;
			}
			
			for(x = 0; x < imageArray.length; x++) {
				var img = new Image();
				img.src = imageArray[x].src;
				
				var span = document.createElement('span');
				span.style.display = 'block';
				span.innerHTML = imageArray[x].caption;
				
				var div = document.createElement('div');
				div.appendChild(img);
				div.appendChild(span);
				containner.appendChild(div);
			}
		}
			
			
			function display_temp() {
			tempid.className = "temp";
			
			var imageArray = [];
			imageArray[0] = {
				src : "D:/website-Task/Pick Best/img/1.jpg",
				caption : "Image caption for image-01"
			};
			imageArray[1] = {
				src : "D:/website-Task/Pick Best/img/2.jpg",
				caption : "Image caption for image-02"
			};
			
			imageArray[2] = {
				src : "D:/website-Task/Pick Best/img/3.jpg",
				caption : "Image caption for image-03"
			};
			
			imageArray[3] = {
				src : "D:/website-Task/Pick Best/img/4.jpg",
				caption : "Image caption for image-04"
			};
			imageArray[4] = {
				src : "D:/website-Task/Pick Best/img/5.jpg",
				caption : "Image caption for image-05"
			};
			imageArray[5] = {
				src : "D:/website-Task/Pick Best/img/6.jpg",
				caption : "Image caption for image-06"
			};
			imageArray[6] = {
				src : "D:/website-Task/Pick Best/img/7.jpg",
				caption : "Image caption for image-07"
			};
			imageArray[7] = {
				src : "D:/website-Task/Pick Best/img/8.jpg",
				caption : "Image caption for image-08"
			};
			imageArray[8] = {
				src : "D:/website-Task/Pick Best/img/9.jpg",
				caption : "Image caption for image-09"
			};
			var fc = containner.firstChild;
			
			while( fc ) {
				containner.removeChild( fc );
				fc = containner.firstChild;
			}
			
			for(x = 0; x < imageArray.length; x++) {
				var img = new Image();
				img.src = imageArray[x].src;
				
				var span = document.createElement('span');
				span.style.display = 'block';
				span.innerHTML = imageArray[x].caption;
				
				var div = document.createElement('div');
				div.appendChild(img);
				div.appendChild(span);
				containner.appendChild(div);
			}
		}
		
		function display_back() {
			tempid.className = "back";
			
			var imageArray = [];
			imageArray[0] = {
				src : "D:/website-Task/Pick Best/img/9.jpg",
				caption : "Image caption for image-09"
			};
			imageArray[1] = {
				src : "D:/website-Task/Pick Best/img/10.jpg",
				caption : "Image caption for image-10"
			};
			
			imageArray[2] = {
				src : "D:/website-Task/Pick Best/img/11.jpg",
				caption : "Image caption for image-11"
			};
			
			imageArray[3] = {
				src : "D:/website-Task/Pick Best/img/12.jpg",
				caption : "Image caption for image-12"
			};
			
			imageArray[4] = {
				src : "D:/website-Task/Pick Best/img/14.jpg",
				caption : "Image caption for image-12"
			};
			
			imageArray[5] = {
				src : "D:/website-Task/Pick Best/img/13.jpg",
				caption : "Image caption for image-12"
			};
			
			var fc = containner.firstChild;
			
			while( fc ) {
				containner.removeChild( fc );
				fc = containner.firstChild;
			}
			
			for(x = 0; x < imageArray.length; x++) {
				var img = new Image();
				img.src = imageArray[x].src;
				
				var span = document.createElement('span');
				span.style.display = 'block';
				span.innerHTML = imageArray[x].caption;
				
				var div = document.createElement('div');
				div.appendChild(img);
				div.appendChild(span);
				containner.appendChild(div);
			}
		}
		
		function display_graphic() {
			tempid.className = "graphic";
			
			var imageArray = [];
			imageArray[0] = {
				src : "D:/website-Task/Pick Best/img/13.jpg",
				caption : "Image caption for image-13"
			};
			imageArray[1] = {
				src : "D:/website-Task/Pick Best/img/14.jpg",
				caption : "Image caption for image-14"
			};
			
			imageArray[2] = {
				src : "D:/website-Task/Pick Best/img/1.jpg",
				caption : "Image caption for image-01"
			};
			
			imageArray[3] = {
				src : "D:/website-Task/Pick Best/img/4.jpg",
				caption : "Image caption for image-04"
			};
			imageArray[4] = {
				src : "D:/website-Task/Pick Best/img/5.jpg",
				caption : "Image caption for image-05"
			};
			imageArray[5] = {
				src : "D:/website-Task/Pick Best/img/6.jpg",
				caption : "Image caption for image-06"
			};
			imageArray[6] = {
				src : "D:/website-Task/Pick Best/img/7.jpg",
				caption : "Image caption for image-07"
			};
			
			
			var fc = containner.firstChild;
			
			while( fc ) {
				containner.removeChild( fc );
				fc = containner.firstChild;
			}
			
			for(x = 0; x < imageArray.length; x++) {
				var img = new Image();
				img.src = imageArray[x].src;
				
				var span = document.createElement('span');
				span.style.display = 'block';
				span.innerHTML = imageArray[x].caption;
				
				var div = document.createElement('div');
				div.appendChild(img);
				div.appendChild(span);
				containner.appendChild(div);
			}
		}
		
		function display_powerPoint(){
			tempid.className = "powerPoint";
			var imageArray = [];
			imageArray[0] = {
				src : "D:/website-Task/Pick Best/img/1.jpg",
				caption : "Image caption for image-01"
			};
			imageArray[1] = {
				src : "D:/website-Task/Pick Best/img/2.jpg",
				caption : "Image caption for image-02"
			};
			
			imageArray[2] = {
				src : "D:/website-Task/Pick Best/img/3.jpg",
				caption : "Image caption for image-03"
			};
			
			imageArray[3] = {
				src : "D:/website-Task/Pick Best/img/4.jpg",
				caption : "Image caption for image-04"
			};
			imageArray[4] = {
				src : "D:/website-Task/Pick Best/img/5.jpg",
				caption : "Image caption for image-05"
			};
			imageArray[5] = {
				src : "D:/website-Task/Pick Best/img/6.jpg",
				caption : "Image caption for image-06"
			};
			imageArray[6] = {
				src : "D:/website-Task/Pick Best/img/7.jpg",
				caption : "Image caption for image-07"
			};
			imageArray[7] = {
				src : "D:/website-Task/Pick Best/img/8.jpg",
				caption : "Image caption for image-08"
			};
			imageArray[8] = {
				src : "D:/website-Task/Pick Best/img/9.jpg",
				caption : "Image caption for image-09"
			};
			imageArray[9] = {
				src : "D:/website-Task/Pick Best/img/10.jpg",
				caption : "Image caption for image-10"
			};
			imageArray[10] = {
				src : "D:/website-Task/Pick Best/img/11.jpg",
				caption : "Image caption for image-11"
			};
			imageArray[11] = {
				src : "D:/website-Task/Pick Best/img/12.jpg",
				caption : "Image caption for image-12"
			};
			
			var fc = containner.firstChild;
			
			while( fc ) {
				containner.removeChild( fc );
				fc = containner.firstChild;
			}
			
			for(x = 0; x < imageArray.length; x++) {
				var img = new Image();
				img.src = imageArray[x].src;
				
				var span = document.createElement('span');
				span.style.display = 'block';
				span.innerHTML = imageArray[x].caption;
				
				var div = document.createElement('div');
				div.appendChild(img);
				div.appendChild(span);
				containner.appendChild(div);
			}
		}
		
		function display_video(){
			tempid.className = "video";
			var imageArray = [];
			imageArray[0] = {
				src : "D:/website-Task/Pick Best/img/1.jpg",
				caption : "Image caption for image-01"
			};
			imageArray[1] = {
				src : "D:/website-Task/Pick Best/img/2.jpg",
				caption : "Image caption for image-02"
			};
			
			imageArray[2] = {
				src : "D:/website-Task/Pick Best/img/3.jpg",
				caption : "Image caption for image-03"
			};
			
			imageArray[3] = {
				src : "D:/website-Task/Pick Best/img/4.jpg",
				caption : "Image caption for image-04"
			};
			imageArray[4] = {
				src : "D:/website-Task/Pick Best/img/5.jpg",
				caption : "Image caption for image-05"
			};
			imageArray[5] = {
				src : "D:/website-Task/Pick Best/img/6.jpg",
				caption : "Image caption for image-06"
			};
			imageArray[6] = {
				src : "D:/website-Task/Pick Best/img/7.jpg",
				caption : "Image caption for image-07"
			};
			imageArray[7] = {
				src : "D:/website-Task/Pick Best/img/8.jpg",
				caption : "Image caption for image-08"
			};
						
			
			var fc = containner.firstChild;
			
			while( fc ) {
				containner.removeChild( fc );
				fc = containner.firstChild;
			}
			
			for(x = 0; x < imageArray.length; x++) {
				var img = new Image();
				img.src = imageArray[x].src;
				
				var span = document.createElement('span');
				span.style.display = 'block';
				span.innerHTML = imageArray[x].caption;
				
				var div = document.createElement('div');
				div.appendChild(img);
				div.appendChild(span);
				containner.appendChild(div);
			}
		}
		
		function display_decors_models(){
			tempid.className = "decorsmodels";
			var imageArray = [];
			imageArray[0] = {
				src : "D:/website-Task/Pick Best/img/1.jpg",
				caption : "Image caption for image-01"
			};
			imageArray[1] = {
				src : "D:/website-Task/Pick Best/img/2.jpg",
				caption : "Image caption for image-02"
			};
			
			imageArray[2] = {
				src : "D:/website-Task/Pick Best/img/3.jpg",
				caption : "Image caption for image-03"
			};
			
			imageArray[3] = {
				src : "D:/website-Task/Pick Best/img/4.jpg",
				caption : "Image caption for image-04"
			};
			imageArray[4] = {
				src : "D:/website-Task/Pick Best/img/5.jpg",
				caption : "Image caption for image-05"
			};
			imageArray[5] = {
				src : "D:/website-Task/Pick Best/img/6.jpg",
				caption : "Image caption for image-06"
			};
			imageArray[6] = {
				src : "D:/website-Task/Pick Best/img/7.jpg",
				caption : "Image caption for image-07"
			};
			imageArray[7] = {
				src : "D:/website-Task/Pick Best/img/8.jpg",
				caption : "Image caption for image-08"
			};
			imageArray[8] = {
				src : "D:/website-Task/Pick Best/img/9.jpg",
				caption : "Image caption for image-09"
			};
			imageArray[9] = {
				src : "D:/website-Task/Pick Best/img/10.jpg",
				caption : "Image caption for image-10"
			};
						
					
			var fc = containner.firstChild;
			
			while( fc ) {
				containner.removeChild( fc );
				fc = containner.firstChild;
			}
			
			for(x = 0; x < imageArray.length; x++) {
				var img = new Image();
				img.src = imageArray[x].src;
				
				var span = document.createElement('span');
				span.style.display = 'block';
				span.innerHTML = imageArray[x].caption;
				
				var div = document.createElement('div');
				div.appendChild(img);
				div.appendChild(span);
				containner.appendChild(div);
			}
		}
		
		function display_e_commerce(){
			tempid.className = "ecommerce";
			var imageArray = [];
			imageArray[0] = {
				src : "D:/website-Task/Pick Best/img/1.jpg",
				caption : "Image caption for image-01"
			};
			imageArray[1] = {
				src : "D:/website-Task/Pick Best/img/2.jpg",
				caption : "Image caption for image-02"
			};
			
			imageArray[2] = {
				src : "D:/website-Task/Pick Best/img/3.jpg",
				caption : "Image caption for image-03"
			};
			
			imageArray[3] = {
				src : "D:/website-Task/Pick Best/img/4.jpg",
				caption : "Image caption for image-04"
			};
			imageArray[4] = {
				src : "D:/website-Task/Pick Best/img/5.jpg",
				caption : "Image caption for image-05"
			};
			imageArray[5] = {
				src : "D:/website-Task/Pick Best/img/6.jpg",
				caption : "Image caption for image-06"
			};
			
		   var fc = containner.firstChild;
			
			while( fc ) {
				containner.removeChild( fc );
				fc = containner.firstChild;
			}
			
			for(x = 0; x < imageArray.length; x++) {
				var img = new Image();
				img.src = imageArray[x].src;
				
				var span = document.createElement('span');
				span.style.display = 'block';
				span.innerHTML = imageArray[x].caption;
				
				var div = document.createElement('div');
				div.appendChild(img);
				div.appendChild(span);
				containner.appendChild(div);
			}
		}