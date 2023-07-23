<?php
	$firstName = $_POST['firstName'];
	
	
	$song_sugg = $_POST['song_sugg'];
	$password = $_POST['password'];
	$number = $_POST['number'];

	// Database connection
	$conn = new mysqli('localhost','root','','test');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into loggin(firstName,song_sugg, password, number) values(?, ?, ?, ?)");
		$stmt->bind_param("sssi", $firstName,  $song_sugg, $password, $number);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}
?>