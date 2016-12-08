<?php


if($_POST){
	
	$email=$_POST['email'];
	
	
	
	$to='info@flowrecimedia.com';
	$subject = 'mail from 2nd video';
	$message =<<<EMAIL
	
	
	mail from 2nd video
	
	email   = $email
	
	
	
EMAIL;

$headers = "From: $email";

mail($to,$subject,$message,$headers);
	echo 'done';
}else{
	echo'not';
}



?>