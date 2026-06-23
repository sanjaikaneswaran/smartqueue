<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

session_start();
require_once '../config/db.php';

$data = json_decode(file_get_contents("php://input"), true);

$email    = trim($data['email'] ?? '');
$password = $data['password'] ?? '';
$role     = $data['role'] ?? 'student'; // 'student', 'staff', or 'canteen'

if (!$email || !$password) {
    echo json_encode(["success" => false, "message" => "Email and password are required."]);
    exit;
}

if ($role === 'student') {
    $stmt = $pdo->prepare("SELECT * FROM students WHERE email = ?");
    $stmt->execute([$email]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['user_id']   = $user['student_id'];
        $_SESSION['user_type'] = 'student';
        $_SESSION['name']      = $user['full_name'];
        echo json_encode(["success" => true, "message" => "Login successful!", "name" => $user['full_name'], "role" => "student"]);
    } else {
        echo json_encode(["success" => false, "message" => "Invalid email or password."]);
    }
} elseif ($role === 'staff') {
    $stmt = $pdo->prepare("SELECT * FROM university_staff WHERE email = ?");
    $stmt->execute([$email]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['user_id']   = $user['staff_id'];
        $_SESSION['user_type'] = 'staff';
        $_SESSION['name']      = $user['full_name'];
        echo json_encode(["success" => true, "message" => "Login successful!", "name" => $user['full_name'], "role" => "staff"]);
    } else {
        echo json_encode(["success" => false, "message" => "Invalid email or password."]);
    }
} elseif ($role === 'canteen') {
    // Canteen staff login using username
    $username = trim($data['email']); // reusing email field for username
    $stmt = $pdo->prepare("SELECT * FROM canteens WHERE username = ?");
    $stmt->execute([$username]);
    $canteen = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($canteen && $password === $canteen['password']) { // canteens use plain password for now
        $_SESSION['canteen_id']   = $canteen['canteen_id'];
        $_SESSION['user_type']    = 'canteen';
        $_SESSION['canteen_name'] = $canteen['canteen_name'];
        echo json_encode(["success" => true, "message" => "Login successful!", "canteen_name" => $canteen['canteen_name'], "role" => "canteen"]);
    } else {
        echo json_encode(["success" => false, "message" => "Invalid username or password."]);
    }
}
