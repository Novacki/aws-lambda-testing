const { handler } = require("../app.js");

test('Expected success', async () => {
    const expectedData = { message: "Has event!", statusCode: 200 };
    const data = await handler({ data: "my data" });
    expect(data).toEqual(expectedData);
});

test('Expected error', async () => {
    const expectedData = { statusCode: 400, message: 'Error!' };
    const data = await handler();
    expect(data).toEqual(expectedData);
});