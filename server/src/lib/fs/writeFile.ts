import * as fs from 'fs';

export const writeFile = (file: string, data: any) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, error => {
      if (error) reject(error);
      resolve('file created successfully with handcrafted Promise!');
    });
  });
};

export const writeFileBlob = (file: string, data: any) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, 'base64', error => {
      if (error) reject(error);
      resolve('file created successfully with handcrafted Promise!');
    });
  });
};
