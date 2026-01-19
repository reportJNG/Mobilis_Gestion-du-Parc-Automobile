<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Use the SAME pattern as login.php
require "Database.php";  // ← Capital D
$database = new Database();
$pdo = $database->getConnection();

$response = array();
$response['success'] = false;
$response['message'] = '';

$data = json_decode(file_get_contents("php://input"));

if (
    !empty($data->nom) &&
    !empty($data->prenom) &&
    !empty($data->username) &&
    !empty($data->password)
) {
    $nom = htmlspecialchars(strip_tags($data->nom));
    $prenom = htmlspecialchars(strip_tags($data->prenom));
    $username = htmlspecialchars(strip_tags($data->username));
    $password = $data->password; 
    
    $role = !empty($data->role) ? htmlspecialchars(strip_tags($data->role)) : 'user';

    try {
        $checkQuery = "SELECT id_app_user FROM app_user WHERE username = :username";
        $checkStmt = $pdo->prepare($checkQuery);
        $checkStmt->bindParam(':username', $username);
        $checkStmt->execute();
        
        if ($checkStmt->rowCount() > 0) {
            $response['message'] = 'Username already exists';
            echo json_encode($response);
            exit;
        }
        
        $query = "INSERT INTO app_user (nom, prenom, username, password, role) 
                  VALUES (:nom, :prenom, :username, :password, :role)";
        
        $stmt = $pdo->prepare($query);
        
        $stmt->bindParam(':nom', $nom);
        $stmt->bindParam(':prenom', $prenom);
        $stmt->bindParam(':username', $username);
        $stmt->bindParam(':password', $password); 
        $stmt->bindParam(':role', $role);
        
        if ($stmt->execute()) {
            $response['success'] = true;
            $response['message'] = 'User registered successfully';
            $response['user'] = array(
                'id' => $pdo->lastInsertId(), 
                'nom' => $nom,
                'prenom' => $prenom,
                'username' => $username,
                'role' => $role
            );
        } else {
            $response['message'] = 'Registration failed';
        }
        
    } catch (PDOException $e) {
        $response['message'] = 'Database error: ' . $e->getMessage();
    }
} else {
    $response['message'] = 'Missing required fields';
}

echo json_encode($response);
?>