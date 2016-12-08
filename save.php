<?php


if($_POST){
	$yidea=$_POST['yidea'];
	$usedas=$_POST['usedas'];
	$email=$_POST['email'];
	$mobile=$_POST['mobile'];
	$signup=$_POST['signup'];
	
	
	$to='info@flowrecimedia.com';
	$subject = 'mail from video';
	$message =<<<EMAIL
	
	idea    = $yidea
	
	used as = $usedas
	
	email   = $email
	
	mobile  = $mobile
	
	signup  = $signup
	
EMAIL;

$headers = "From: $email";

mail($to,$subject,$message,$headers);
	echo 'done';
}else{
	echo'not';
}





?>