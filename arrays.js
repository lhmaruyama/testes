let date = []
for (let year = 2020; year <= 2023; year++) {
    for (let month = 1; month <= 12; month++) {
      const id = `${month.toString().padStart(2, '0')}/${year}`;

      
      // Adicionar um novo objeto ao array com o valor do ID e a data correspondente
      date.push({id});
    }
  }

  console.log(date)