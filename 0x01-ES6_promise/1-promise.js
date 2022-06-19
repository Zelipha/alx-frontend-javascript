export default function (boolean) {
  return new Promise((resolve, reject) => {
    const object = {
      satus: 200,
      body: 'Success',
    };

    if (boolean === true) {
      resolve(object);
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
}
