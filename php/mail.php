<?php
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$mailheader = "From:".$name."<".$email.">\r\n";

$recepient = "mmikemillionn@gmail.com"

mail($recepient, $subject, $message, $mailheader)

or die("Error!")

echo'

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responce</title>
</head>
<body>

    <h1>Thanks for the mail. I will get back to you ASAP</h1>

    <p>Go back to home page <a href="../index.html">Home Page</a></p>
    
</body>
</html>

';

?>