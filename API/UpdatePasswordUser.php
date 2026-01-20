<?php
// UpdatePasswordUser.php - Update password for users with role 'user'

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
    $newPassword = $data["password"] ?? "";
    
    // Validate input
    if (empty($username) || empty($newPassword)) {
        http_response_code(400);
        echo json_encode(["success" => false, "error" => "Username and password are required"]);
        exit;
    }
    
    // Validate password strength (optional but recommended)
    if (strlen($newPassword) < 6) {
        echo json_encode(["success" => false, "error" => "Password must be at least 6 characters"]);
        exit;
    }
    
    error_log("Password update attempt for username: " . $username);
    
    // First, check if username exists AND has role = 'user'
    $checkStmt = $pdo->prepare("SELECT id_app_user, username, role FROM app_user WHERE username = ?");
    $checkStmt->execute([$username]);
    $user = $checkStmt->fetch(PDO::FETCH_ASSOC);
    
    if (!$user) {
        // Username doesn't exist at all
        error_log("Username not found: " . $username);
        echo json_encode([
            "success" => false,
            "error" => "Username not found"
        ]);
        exit;
    }
    
    if ($user["role"] !== 'user') {
        // User exists but role is not 'user' (admin or worker)
        error_log("Username found but role is: " . $user["role"] . " - not eligible for password update");
        echo json_encode([
            "success" => false,
            "error" => "Not authorized to update password for this account"
        ]);
        exit;
    }
    
    // If we reach here, user exists and has role 'user'
    // Update the password (in plain text - consider hashing for production)
    $updateStmt = $pdo->prepare("UPDATE app_user SET password = ? WHERE username = ? AND role = 'user'");
    $result = $updateStmt->execute([$newPassword, $username]);
    
    if ($result && $updateStmt->rowCount() > 0) {
        error_log("Password successfully updated for username: " . $username);
        echo json_encode([
            "success" => true,
            "message" => "Password updated successfully"
        ]);
    } else {
        error_log("Failed to update password for username: " . $username);
        echo json_encode([
            "success" => false,
            "error" => "Failed to update password"
        ]);
    }
    
} catch (Exception $e) {
    error_log("Error in UpdatePasswordUser.php: " . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "error" => "Internal server error"
    ]);
}
?>