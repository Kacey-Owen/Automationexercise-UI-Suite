export const validUserDetails = {
    fullName: 'Jack Allen',
    email: `user${Date.now()}@website.com`,
    password: 'password123',
    firstName:'Jack',
    lastName: 'Allen',
    address: '123 Random St',
    state: 'Colorado',
    city: 'Random City',
    country: 'United States',
    zipcode: '77777',
    mobileNumber: '5555555555', 
    cardNumber: '0000000000000000',
    cvc: '000',
    expirationMonth: '10',
    expirationYear: '2042'
}

export const invalidUser = {
    email: 'wronguser@website.com',
    password: 'wrongpassword123'
}

export const existinguser = {
    name: 'Jack',
    email: 'fake123@fake.com',
    password: 'password123'
}