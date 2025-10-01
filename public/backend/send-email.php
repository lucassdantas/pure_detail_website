<?php
// Ativar erros (remover em produção)
error_reporting(E_ALL);
ini_set("display_errors", 1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

// Verifica se foi enviado via POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Método não permitido"]);
    exit;
}

// Captura dados do formulário
$name = $_POST["name"] ?? "";
$suburb = $_POST["suburb"] ?? "";
$phone = $_POST["phone"] ?? "";
$email = $_POST["email"] ?? "";
$preferedContactMethod = $_POST["preferedContactMethod"] ?? "";

// Captura dados do veículo (tudo que não for contato)
$vehicleInfo = [];
foreach ($_POST as $key => $value) {
    if (!in_array($key, ["name", "suburb", "phone", "email", "preferedContactMethod"])) {
        $vehicleInfo[$key] = json_decode($value, true) ?? $value;
    }
}

// Monta corpo do e-mail
$body  = "<h2>Novo pedido de orçamento</h2>";
$body .= "<p><strong>Nome:</strong> {$name}</p>";
$body .= "<p><strong>Suburb:</strong> {$suburb}</p>";
$body .= "<p><strong>Telefone:</strong> {$phone}</p>";
$body .= "<p><strong>Email:</strong> {$email}</p>";
$body .= "<p><strong>Contato preferido:</strong> {$preferedContactMethod}</p>";
$body .= "<h3>Informações do veículo:</h3><ul>";

foreach ($vehicleInfo as $field => $value) {
    if (is_array($value)) {
        $body .= "<li><strong>{$field}:</strong><ul>";
        foreach ($value as $subKey => $subVal) {
            $body .= "<li>{$subKey}: {$subVal}</li>";
        }
        $body .= "</ul></li>";
    } else {
        $body .= "<li><strong>{$field}:</strong> {$value}</li>";
    }
}
$body .= "</ul>";

// Configuração do e-mail
$mail = new PHPMailer(true);

try {
    require_once './emailCredencials.php';
    // Config SMTP (troque pelos dados do seu servidor/email)
    $mail->isSMTP();
    $mail->Host       = $smtpHost; 
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtpEmail;
    $mail->Password   = $smtpPassword;
    $mail->SMTPSecure = $smtpEncryption;
    $mail->Port       = $smtpPortNumber;

    // Remetente e destinatário
    $mail->setFrom('seuemail@dominio.com', 'Site - Orçamentos');
    $mail->addAddress('destino@dominio.com', 'Equipe de Vendas');

    // Anexar fotos
    if (!empty($_FILES['photos'])) {
        foreach ($_FILES['photos']['tmp_name'] as $index => $tmpName) {
            if (is_uploaded_file($tmpName)) {
                $mail->addAttachment($tmpName, $_FILES['photos']['name'][$index]);
            }
        }
    }

    // Conteúdo
    $mail->isHTML(true);
    $mail->Subject = "Novo pedido de orçamento de {$name}";
    $mail->Body    = $body;

    $mail->send();
    echo json_encode(["success" => true, "message" => "E-mail enviado com sucesso"]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Erro: {$mail->ErrorInfo}"]);
}
