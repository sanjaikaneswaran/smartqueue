<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require_once '../config/db.php';

$data = json_decode(file_get_contents("php://input"), true);

$full_name    = trim($data['full_name'] ?? '');
$email        = trim($data['email'] ?? '');
$password     = $data['password'] ?? '';
$phone_number = trim($data['phone_number'] ?? '');

// Basic validation
if (!$full_name || !$email || !$password) {
    echo json_encode(["success" => false, "message" => "Name, email and password are required."]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["success" => false, "message" => "Invalid email format."]);
    exit;
}

// Check if email already exists
$stmt = $pdo->prepare("SELECT student_id FROM students WHERE email = ?");
$stmt->execute([$email]);
if ($stmt->fetch()) {
    echo json_encode(["success" => false, "message" => "Email already registered."]);
    exit;
}

// Hash password (never store plain text!)
$hashed = password_hash($password, PASSWORD_BCRYPT);

// Insert student
$stmt = $pdo->prepare("INSERT INTO students (full_name, email, password, phone_number) VALUES (?, ?, ?, ?)");
$stmt->execute([$full_name, $email, $hashed, $phone_number]);

echo json_encode(["success" => true, "message" => "Registration successful!"]);
