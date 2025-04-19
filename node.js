exports.handler = async (event) => {
  const data = JSON.parse(event.body);
  console.log("Message received:", data);

  return {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify({ message: "Thanks for contacting me!" }),
  };
};
