<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include '../config/db.php';

$sql = "SELECT canteen_id, canteen_name, crowd_status FROM canteens";
$result = $conn->query($sql);

$canteens = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $canteens[] = $row;
    }
    echo json_encode(["status" => "success", "data" => $canteens]);
} else {
    echo json_encode(["status" => "error", "message" => "No canteens found"]);
}

$conn->close();
