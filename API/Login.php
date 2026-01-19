<?php //LOGIN FOR WEBPAGELOGIN.users
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Access-Control-Allow-Credentials: true");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

require "Database.php";
$database = new Database();
$pdo = $database->getConnection();

$data = json_decode(file_get_contents("php://input"), true);

$username = $data["username"] ?? "";
$password = $data["password"] ?? "";

if (!$username || !$password) {
    http_response_code(400);
    echo json_encode(["error" => "Missing fields"]);
    exit;
}

error_log("Login attempt for username: " . $username);

$stmt = $pdo->prepare("SELECT * FROM app_user WHERE username = ?");
$stmt->execute([$username]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

error_log("User found: " . ($user ? "Yes" : "No"));

if ($user) {
    error_log("Database password: " . $user["password"]);
    error_log("Provided password: " . $password);
}

if (!$user || $password !== $user["password"]) {
    echo json_encode(["error" => "Invalid username or password"]);
    exit;
}

echo json_encode([
    "success" => true,
    "user" => [
        "id" => $user["id_app_user"],
        "username" => $user["username"],
        "role" => $user["role"]
    ]
]);