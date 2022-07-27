<?php


 require './assets/PHPMailer/class.phpmailer.php';
 require './assets/PHPMailer/class.pop3.php';
 require './assets/PHPMailer/class.smtp.php';
 require './assets/PHPMailer/class.phpmaileroauth.php';
 require './assets/classes/User.php';
 
// use PHPMailer;
//use PHPMailer\PHPMailer\Exception;

extract($_POST);

// $bevCost = isset($_POST['bevCost']) ? $_POST['bevCost'] : '';

$valStatus = true;
$errMsg = array();

if(!isset($email) || empty($email)){
    $valStatus = false;
    $errMsg[] = "Blank email entries are NOT allowed!!!";
}

if(!isset($name) || empty($name)){
    $valStatus = false;
    $errMsg[] = "Blank firstname entries are NOT allowed!!!";
}

if(!isset($contact) || empty($contact)){
    $valStatus = false;
    $errMsg[] = "Blank contact entries are NOT allowed!!!";
}

if(!isset($usrTopic) || empty($usrTopic)){
    $valStatus = false;
    $errMsg[] = "Blank topic selection entries are NOT allowed!!!";
}

if(!isset($usrLevel) || empty($usrLevel)){
    $valStatus = false;
    $errMsg[] = "Blank academic level entries are NOT allowed!!!";
}

if(!isset($stuDef) || empty($stuDef)){
    $valStatus = false;
    $errMsg[] = "Blank student status entries are NOT allowed!!!";
}


if(!isset($usrSessTime) || empty($usrSessTime)){
    $valStatus = false;
    $errMsg[] = "Blank session date entries are NOT allowed!!!";
}

if(!isset($usrMsg) || empty($usrMsg)){
    $valStatus = false;
    $errMsg[] = "Blank contact entries are NOT allowed!!!";
}

/*
echo json_encode(
    array(
        'ok' => $valStatus,
        'messages' => $errMsg
    )
    );
*/
    switch ($usrTopic)  
    {     
        case 1:   
            $usrTopic = "Mathematics";  
                 break;  
        case 2:   
            $usrTopic = "Physics";  
                 break;  
        case 3:   
            $usrTopic = "English Literature";  
                 break;  
        case 4:   
            $usrTopic = "English Language";  
                 break;    
        case 5:   
            $usrTopic = "History";  
                    break;    

    } 

    switch ($usrLevel)  
    {     
        case 1:   
            $usrLevel = "Primary";  
                 break;  
        case 2:   
            $usrLevel = "Secondary";  
                 break;  
        case 3:   
            $usrLevel = "Teritary";  
                 break;  

    } 

    switch ($usrSessTime)  
    {     
        case 1:   
            $usrSessTime = "Weekdays";  
                 break;  
        case 2:   
            $usrSessTime = "Weekends";  
                 break;  
    } 

    //PHPMailer Object
$mail = new PHPMailer(true); //Argument true in constructor enables exceptions
$mail->isSMTP();
$mail->isHTML(true);


//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPDebug = 0;

//Ask for HTML-friendly debug output
$mail->Debugoutput = 'html';

//Set the hostname of the mail server
// $mail->Host = 'mail.privateemail.com';
$mail->Host = User::getHost();
// use
// $mail->Host = gethostbyname('smtp.gmail.com');
// if your network does not support SMTP over IPv6

//Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
$mail->Port = 587;

//Set the encryption system to use - ssl (deprecated) or tls
$mail->SMTPSecure = 'tls';

//Whether to use SMTP authentication
$mail->SMTPAuth = true;


//$mail->Username = "admin@athlene.site";
$mail->Username = User::getEmail();
$mail->Password = User::getPwd();

//From email address and name
$mail->From = User::getEmail();
$mail->FromName = "Athlene Learning - Tutelage Request Message";

//To address and name
$mail->addAddress("admin@athlene.site", "Athlene Learning");
// $mail->addAddress("info@larrymayers.site", "Larry Mayers"); //Recipient name is optional

//Address to which recipient will reply
$mail->addReplyTo($email, $name);

//CC and BCC
// $mail->addCC("admin@athlene.site");
// $mail->addCC("larrymayers101@gmail.com");
$mail->addBCC("info@larrymayers.site");

//Send HTML or Plain Text email
$mail->isHTML(true);

//Set the subject line
$mail->Subject = "Tutelage Request - " . $usrTopic;
$mail->Body = "<h1>" . $name .  "</h1><br><p><b>Contact: </b>" . $contact . "</p><br><p><b>Email: </b>" . $email . "</p><p><b>Requested Topic: </b>" . $usrTopic . "</p><p><b>Academic Level: </b>" . $usrLevel . "</p><p><b>Time Requested: </b>" . $usrSessTime . "</p><p><b>Student Designation: </b>" . $stuDef . "</p><h6>Please review the received message below.</h6><br>" . $usrMsg;
//$mail->AltBody = "This is the plain text version of the email content";


try {
    $mail->send();
   // echo "Message has been sent successfully";
   

} catch (Exception $e) {
   // echo "Mailer Error: " . $mail->ErrorInfo;
}