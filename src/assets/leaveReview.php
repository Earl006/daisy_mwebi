<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");


$servername = "localhost";
$username = "root";
$password = ""; 
$dbname = "daisy_mwebi";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $conn->prepare("INSERT INTO reviews (name, age, review) VALUES (:name, :age, :review)");
    $stmt->bindParam(':name', $_POST['name']);
    $stmt->bindParam(':age', $_POST['age']);
    $stmt->bindParam(':review', $_POST['review']);

    if ($stmt->execute()) {
        http_response_code(201); 
        echo json_encode(array("message" => "Review submitted successfully"));
    } else {
        http_response_code(500); 
        echo json_encode(array("error" => "Error submitting review"));
    }

} catch(PDOException $e) {
    http_response_code(500); 
    echo json_encode(array("error" => "Error submitting review: " . $e->getMessage()));
}

$conn = null; 
?>
