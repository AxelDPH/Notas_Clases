const usuarios = require ('./data.js')

test ('debe darnos los datos de los distinstos usuarios', () => {
    expect(usuarios.users(users, username)).toBe("hpLover4");
})