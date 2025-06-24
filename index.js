// object

const firstNameUser = 'Brad';
const lastNameUser = 'Pitt';
const ageUser = 32;

/**
 * @param {string} fname - имя пользователя
 * @param {string} lname - фамилия пользователя
 * @param {number} age - возраст пользователя
 */
function logInfo(fname, lname, age) {
  console.log(
    `${fname} ${lname}, ${age}`
  );
}

logInfo(firstNameUser, lastNameUser, ageUser);
