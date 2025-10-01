<?php
// Error reporting (disable display in production)
error_reporting(E_ALL);
ini_set("display_errors", 0);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once './vendor/autoload.php';

// ✅ Allow only POST requests
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit;
}

// ✅ Collect form data
$name = $_POST["name"] ?? "";
$suburb = $_POST["suburb"] ?? "";
$phone = $_POST["phone"] ?? "";
$email = $_POST["email"] ?? "";
$preferedContactMethod = $_POST["preferedContactMethod"] ?? "";

// Validate required fields
if (empty($name) || empty($email) || empty($phone)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Missing required fields"]);
    exit;
}

// ✅ Collect vehicle info
$vehicleInfo = [];
foreach ($_POST as $key => $value) {
    if (!in_array($key, ["name", "suburb", "phone", "email", "preferedContactMethod"])) {
        $vehicleInfo[$key] = json_decode($value, true) ?? $value;
    }
}

// ✅ Email body (formatted in English)
$body  = "<div style='font-family: Arial, sans-serif; line-height:1.6;'>";
$body .= "<h2 style='color:#2c3e50;'>New Quote Request</h2>";
$body .= "<p><strong>Name:</strong> {$name}</p>";
$body .= "<p><strong>Suburb / Area:</strong> {$suburb}</p>";
$body .= "<p><strong>Phone:</strong> {$phone}</p>";
$body .= "<p><strong>Email:</strong> {$email}</p>";
$body .= "<p><strong>Preferred Contact Method:</strong> {$preferedContactMethod}</p>";

$body .= "<h3 style='margin-top:20px; color:#2c3e50;'>Vehicle Information</h3>";

if (!empty($vehicleInfo)) {
    $body .= "<table cellpadding='8' cellspacing='0' border='1' style='border-collapse:collapse; width:100%;'>";
    $body .= "<thead><tr style='background:#f4f4f4;'><th align='left'>Field</th><th align='left'>Value</th></tr></thead><tbody>";

    foreach ($vehicleInfo as $field => $value) {
        if (is_array($value)) {
            $body .= "<tr><td><strong>{$field}</strong></td><td><ul>";
            foreach ($value as $subKey => $subVal) {
                $body .= "<li><strong>{$subKey}:</strong> {$subVal}</li>";
            }
            $body .= "</ul></td></tr>";
        } else {
            $body .= "<tr><td><strong>{$field}</strong></td><td>{$value}</td></tr>";
        }
    }

    $body .= "</tbody></table>";
} else {
    $body .= "<p>No vehicle details provided.</p>";
}

$body .= "</div>";

// ✅ Mail configuration
$mail = new PHPMailer(true);

try {
    require_once './emailCredencials.php';

    $mail->isSMTP();
    $mail->Host       = $smtpHost; 
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtpEmail;
    $mail->Password   = $smtpPassword;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = $smtpPortNumber;

    // Charset UTF-8
    $mail->CharSet = "UTF-8";
    $mail->Encoding = "base64";

    // Sender & Recipient
    $mail->setFrom($smtpEmail, 'Pure Detail - Quotes');
    $mail->addAddress($emailReceiver, 'Pure Detail Team');

    // Attach photos
    if (!empty($_FILES['photos']) && isset($_FILES['photos']['tmp_name'])) {
        foreach ($_FILES['photos']['tmp_name'] as $index => $tmpName) {
            if (is_uploaded_file($tmpName)) {
                $mail->addAttachment($tmpName, $_FILES['photos']['name'][$index]);
            }
        }
    }

    // Email content
    $mail->isHTML(true);
    $mail->Subject = "New Quote Request from {$name}";
    $mail->Body    = $body;

    // Send
    if ($mail->send()) {
        echo json_encode(["success" => true, "message" => "Quote request sent successfully"]);
    } else {
        http_response_code(500);
        echo json_encode([
            "success" => false,
            "message" => "Failed to send email",
            "mailer_error" => $mail->ErrorInfo
        ]);
    }

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Server error while sending email",
        "mailer_error" => $mail->ErrorInfo ?? null,
        "exception" => $e->getMessage()
    ]);
}
