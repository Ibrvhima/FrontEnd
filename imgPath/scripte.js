'use strict'

function createImage(imgPath) {
     return new Promise((resolve, reject) => {
         const img = document.createElement('img');
         
         img.onload = () => {
             document.querySelector('.images').appendChild(img);
             resolve(img);
         };
 
         img.onerror = () => {
             reject(new Error('Erreur lors du chargement de l\'image'));
         };
 
         img.src = imgPath;
     });
 }
 
 document.getElementById('loadImageBtn').addEventListener('click', () => {
     const imgPath = document.getElementById('imagePath').value;
     const errorMessage = document.querySelector('.error-message');
     
     if (!imgPath) {
         errorMessage.textContent = 'Veuillez entrer un chemin d\'image valide.';
         return;
     }
 
     errorMessage.textContent = '';  
 
     createImage(imgPath)
         .then((img) => {
             console.log('Image chargée avec succès', img);
         })
         .catch((error) => {
             console.error(error.message);
             errorMessage.textContent = error.message;
         });
 });
 