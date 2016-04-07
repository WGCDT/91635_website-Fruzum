<?php
    $Name = $_POST['Name'];
    $Email = $_POST['Email'];
    $Message = $_POST['Message'];

    echo "Name:" . $Name . "<br>";
    echo "Email:" . $Email . "<br>";
    echo "Message:" . $Message . "<br>";


    require 'phpmailer/PHPMailAutoload.php'
    $mail = new PHPMail;

    $mail -> IsSMPT();
    $mail -> SMTPDebug = 2;
    $mail -> Debugoutput = 'html';
    $mail -> Host = 'smpt.gmail.com';
    $mail -> SMTPAuth = true;
    $mail -> SMTPSecure = "tls";
    $mail -> Port = 587;
    $mail -> Username = "wgc13dt@gmail.com"; //Gmail username
    $mail -> Password = "silence123";

    $email_to="gillbankssa@wgc.school.nz";
    $name_to="Sally Gillbanks";

    $mail -> AddAddress($email_to, $name_to);
    $mail -> SetFrom($email, $Name);
    $mail -> Subject = "Nature questions";
    $mail -> Body = "\n\nMessage:\n" . $Message;

    $mail -> Send();
?>