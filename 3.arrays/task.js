function compareArrays(arr1, arr2) {
    // Проверяем, равны ли длины массивов
    if (arr1.length !== arr2.length) {
      return false;
    }
    
    // Используем every для сравнения элементов
    return arr1.every((element, index) => element === arr2[index]);
  }
  
  function getUsersNamesInAgeRange(users, gender) {
    if (users.length === 0) {
      return 0;
    }
  
    const filteredUsers = users.filter(user => user.gender === gender);
    
    if (filteredUsers.length === 0) {
      return 0;
    }
  
    const totalAge = filteredUsers.reduce((sum, user) => sum + user.age, 0);
    return Number((totalAge / filteredUsers.length).toFixed(1));
  }    
    