$response = Unirest::post("http://httpbin.org/post", array( "Accept" => "application/json" ),
  array(
    "parameter" => 23,
    "foo" => "bar"
  )
);

$response->code; // HTTP Status code
$response->headers; // Headers
$response->body; // Parsed body
$response->raw_body; // Unparsed body