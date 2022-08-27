module.exports = async function (context, req) {
    context.log('콘솔 정보입니다.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "안녕 " + name + ". 반가웡"
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}