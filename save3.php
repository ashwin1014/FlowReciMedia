<?php


if($_POST){
	
	$email=$_POST['email'];
	$idea=$_POST['idea'];
	
	
	$to='info@flowrecimedia.com';
	$subject = 'mail from diwali video';
	$message =<<<EMAIL
	
	
	mail from diwali video
	idea = $idea
	email   = $email
	
	
	
EMAIL;

$headers = "From: $email";

mail($to,$subject,$message,$headers);
	echo 'done';
}else{
	echo'not';
}



?>