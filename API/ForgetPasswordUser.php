<?php
// ForgetPasswordUser.php - Check if username exists with role 'user' only

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

require "Database.php";

try {
    $database = new Database();
    $pdo = $database->getConnection();
    
    // Get JSON data from request
    $data = json_decode(file_get_contents("php://input"), true);
    $username = $data["username"] ?? "";
    
    if (empty($username)) {
        http_response_code(400);
        echo json_encode(["success" => false, "error" => "Username is required"]);
        exit;
    }
    
    error_log("Checking username for password reset: " . $username);
    
    // Check if username exists AND has role = 'user'
    $stmt = $pdo->prepare("SELECT username, role FROM app_user WHERE username = ? AND role = 'user'");
    $stmt->execute([$username]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if ($user) {
        // Username exists and has role 'user'
        error_log("Valid user found for password reset: " . $username);
        echo json_encode([
            "success" => true,
            "message" => "Username found",
            "username" => $user["username"]
        ]);
    } else {
        // Either username doesn't exist OR user has role 'admin' or 'worker'
        error_log("Username not found or not eligible for password reset: " . $username);
        
        // Optional: Check if username exists but with wrong role
        $stmt = $pdo->prepare("SELECT username, role FROM app_user WHERE username = ?");
        $stmt->execute([$username]);
        $anyUser = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($anyUser) {
            error_log("Username exists but role is: " . $anyUser["role"]);
        }
        
        echo json_encode([
            "success" => false,
            "error" => "Username not found or not eligible for password reset"
        ]);
    }
    
} catch (Exception $e) {
    echo json_encode([
        "success" => false,
        "error" => "Internal server error"
    ]);
}
?>