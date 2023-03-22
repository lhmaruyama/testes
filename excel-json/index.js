/* const fs = require('fs');
const XLSX = require('xlsx');

// Carregue o arquivo do Excel como um objeto buffer
const file = fs.readFileSync('plan.xlsx');

// Converta o buffer em uma planilha do Excel
const workbook = XLSX.read(file, {type: 'buffer'});

// Escolha a planilha que deseja converter em JSON
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

// Converta a planilha em um objeto JSON
const json = XLSX.utils.sheet_to_json(sheet);

// Salve o objeto JSON em um arquivo .json na pasta do projeto
fs.writeFileSync('plan.json', JSON.stringify(json));

// Imprima uma mensagem de conclusão
console.log('Arquivo JSON salvo com sucesso!'); */

/* 
const XLSX = require('xlsx');
const fs = require('fs');

// Ler o arquivo Excel
const workbook = XLSX.readFile('plan.xlsx');

// Selecionar a primeira planilha
const worksheet = workbook.Sheets[workbook.SheetNames[0]];

// Converter todos os dados em texto
const data = XLSX.utils.sheet_to_json(worksheet, { raw: true });

// Converter os valores numéricos em texto
for (let i = 0; i < data.length; i++) {
  const row = data[i];
  for (const prop in row) {
    if (typeof row[prop] === 'number') {
      row[prop] = row[prop].toString();
    }
  }
}

// Salvar os dados como um arquivo JSON
const json = JSON.stringify(data, null, 2);
fs.writeFileSync('plan.json', json); */


/* 

const XLSX = require('xlsx');
const fs = require('fs');
const mysql = require('mysql');

// Configurar a conexão com o banco de dados MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'database_name'
});

// Ler o arquivo Excel
const workbook = XLSX.readFile('caminho/do/arquivo.xlsx');

// Selecionar a primeira planilha
const worksheet = workbook.Sheets[workbook.SheetNames[0]];

// Converter todos os dados em texto
const data = XLSX.utils.sheet_to_json(worksheet, { raw: true });
for (let i = 0; i < data.length; i++) {
  const row = data[i];
  for (const prop in row) {
    if (typeof row[prop] === 'number' || row[prop] instanceof Date) {
      row[prop] = row[prop].toString();
    }
  }
}

// Salvar os dados como um arquivo JSON
const json = JSON.stringify(data, null, 2);
fs.writeFileSync('caminho/do/arquivo.json', json);

// Enviar os dados para o banco de dados MySQL
connection.connect(function(err) {
  if (err) throw err;
  console.log('Conexão bem sucedida!');

  const sql = 'INSERT INTO nome_da_tabela (coluna1, coluna2, coluna3) VALUES ?';
  const values = data.map(row => [row.coluna1, row.coluna2, row.coluna3]);

  connection.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + ' linhas foram inseridas no banco de dados.');
    connection.end();
  });
});
 */
