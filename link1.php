<?php

if($_POST){
	$name= $_POST['name'];
	$email= $_POST['email'];
	$subject= $_POST['subject'];
	$msg= $_POST['msg'];
	$to='info@flowrecimedia.com';
	
	if($name==''||$email==''||$subject==''||$msg==''){
	$bt= "please fill all fileds";
	}else{
	$headers = "From: $email";
	mail($to,$subject,$msg,$headers);
	$bt= "thank you for your support";
	}
}



?>


<!DOCTYPE html>
<!-- Website template by freewebsitetemplates.com -->
<html>
<head>
	<meta charset="UTF-8">
	<title>Contact - Flow Reci Media</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<script src="js/jquery-2.2.0.min.js"></script>
<script src="js/popcorn.js"></script>
 <script src="js/action.js"></script> 
</head>
<body>
	<div id="header">
		<div>
			<div>
				<video  id="videoPlayerMain" ></video>
				</div>
				<div>
			</div>
			<div>
				<a href="indexw.html" id="logo"><img src="images/logo.jpg" alt="Image"></a>
				<p>
			
					 <font face="verdana"> Interact with our<br> 'Sales Expert' <br/>in this video by clicking on the icon.</font> 
				</p>
				<a href="indexw.html" id="clickhere"></a>
				<!--<a href="index.html" id="clickhere2"><span>Click here to</span>View more</a>-->
			</div>
		</div>
		<ul>
			<li>
				<a href="index.html">Home</a>
			</li>
			<li>
				<a href="about.html">About Us</a>
			</li>
			<li>
				<a href="news.html">Offering</a>
			</li>
			<li>
				<a href="gallery.html">Gallery</a>
			</li>
			<li class="current">
				<a href="#">Contact</a>
			</li>
		</ul>
	</div>
	<div id="body">
	
		<div>
			<div id="link1">
				
				<div class="sidebar">
					<div>
						<h2>Connect</h2>
						<a href="http://#/" id="twitter" target="_blank">Twitter</a>
						<a href="http://freewebsitetemplates.com/go/facebook/" id="facebook" target="_blank">Facebook</a>
						<a href="http://#/" id="googleplus" target="_blank">Google&#43;</a>
					</div>
					<!--<img id="iphone" src="images/iphone-bwastoff.jpg" alt="Image">-->
				</div>
				<div class="aside">
			<P > <?php echo $bt; ?> </p>
			
			<form action="?" class="comments-form contact-form" method = "POST">
                    <div class="form-group">                        
                      <input type="text" class="form-control" placeholder="Your Name" name = "name">
                    </div>
                    <div class="form-group">                        
                      <input type="email" class="form-control" placeholder="Email" name="email">
                    </div>
                     <div class="form-group">                        
                      <input type="text" class="form-control" placeholder="Subject" name="subject">
                    </div>
                    <div class="form-group">                        
                      <textarea placeholder="Comment" rows="3" class="form-control" name = "msg"></textarea>
                    </div>
                    <button class="comment-btn">Submit Comment</button>
                  </form>
			
			</div>
			</div>
			
			<div class="section">
				<div>
					<h2>Gallery</h2>
					<div>
						<ul class="gallery">
							<li>
								<a href="indexw.html"><img src="images/gallery1.jpg" alt="Image"></a>
							</li>
							<li>
								<a href="flow.html"><img src="images/gallery2.jpg" alt="Image"></a>
							</li>
							<li>
								<a href="diwali.html"><img src="images/STICKER.png" alt="Image"></a>
							</li>
							<li>
								<a href="#"><img src="images/gallery3.jpg" alt="Image"></a>
							</li>
						</ul>  
						<!--<div class="paging">
							<a href="gallery.html" class="next">Next 4 &gt;&gt;</a>
							<div>
								<a href="gallery.html" class="prev">Prev</a>
								<ul>
									<li>
										<a href="gallery.html">1</a>
									</li>
									<li>
										<a href="gallery.html">2</a>
									</li>
									<li>
										<a href="gallery.html">3</a>
									</li>
									<li>
										<a href="gallery.html">4</a>
									</li>
									<li>
										<a href="gallery.html">5</a>
									</li>
								</ul>
							</div>
						</div> -->
					</div>
				</div>
			</div>
		</div>
	</div>
	<div id="footer">
		<ul>
			<li>
				<a href="index.html">Home</a>
			</li>
			<li>
				<a href="about.html">About</a>
			</li>
			<li>
				<a href="news.html">Offering</a>
			</li>
			<li>
				<a href="gallery.html">Gallery</a>
			</li>
			<li>
				<a href="#">Contact</a>
			</li>
		</ul>
		<div class="copyright">
			&copy; Copyright 2016. <a href="http://flowrecimedia.com" style="color : #ffffff">Flowrecimedia</a>
		</div>
	</div>
</body>
</html>