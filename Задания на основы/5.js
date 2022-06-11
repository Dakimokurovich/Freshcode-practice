const book = (avtor='Nikita', name= 'Ustalov', year= 1917, izdatelstvo='Flamingo') => {
    return {
      avtor,
      name,
      year,
      izdatelstvo,
    };
};

const electroBook = (avtor='Nikita', name= 'Ustalov', year= 1917, izdatelstvo='Flamingo', format='.fb', electroNumber=1488) => {
    return {
      avtor,
      name,
      year,
      izdatelstvo,
      format,
      electroNumber,
    };
};

const defaultBook = electroBook();

console.log('Электронная версия книги', defaultBook);