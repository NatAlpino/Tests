const axios = require ('axios').default;
const Users = require ('./user');

jest.mock('axios');

test('should fetch users', () => {
  const users = [{name: 'Bob'}];
  const resp = {data: users};
  axios.get.mockResolvedValue(resp);

  /* 
  Ou você pode usar o seguinte, dependendo do seu caso de uso:
  axios.get.mockImplementation(() => Promise.resolve(resp))
  */ 
//return Users.all().then(data => expect(data).toEqual(users));
});