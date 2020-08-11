import inThisHouseWe from "in-this-house-we";

exports.handler = function (event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: inThisHouseWe(
      event.queryStringParameters.text || "live dat meme life"
    )
  });
};
