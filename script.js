document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');

    // Lista de imágenes en la carpeta 'images'
    const images = [
        'images/image1_new.png',
        'images/image2_new.png',
        'images/image3_new.png',
        'images/image4_new.png',
        'images/image5_new.png',
        'images/image6_new.png',
        'images/image7_new.png',
        'images/image8_new.png',
        'images/image9_new.png',
        'images/image10_new.png',
        'images/image11_new.png',
        'images/image12_new.png',
        'images/image13_new.png',
        'images/image14_new.png',
        'images/image15_new.png',
        'images/image16_new.png',
        'images/image17_new.png',
        'images/image18_new.png',
        'images/image19_new.png',
        'images/image20_new.png',
        'images/image21_new.png',
        'images/image22_new.png',
        'images/image23_new.png',
        'images/image24_new.png',
        'images/image25_new.png',
        'images/image26_new.png',
        'images/image27_new.png',
        'images/image28_new.png',
        'images/image29_new.png',
        'images/image30_new.png',
        'images/image31_new.png',
        'images/image32_new.png',
        'images/image33_new.png',
        'images/image34_new.png',
        'images/image35_new.png',
        'images/image36_new.png',
        'images/image37_new.png',
        'images/image38_new.png',
        'images/image39_new.png',
        'images/image40_new.png',
        'images/image41_new.png',
        'images/image42_new.png',
        'images/image43_new.png',
        'images/image44_new.png',
        'images/image45_new.png',
        'images/image46_new.png',
        'images/image47_new.png',
        'images/image48_new.png',
        'images/image49_new.png',
        'images/image50_new.png',
        'images/image51_new.png',
        'images/image52_new.png',
        'images/image53_new.png',
        'images/image54_new.png',
        'images/image55_new.png',
        'images/image56_new.png',
        'images/image57_new.png',
        'images/image58_new.png',
        'images/image59_new.png',
        'images/image60_new.png',
        'images/image61_new.png',
        'images/image62_new.png',
        'images/image63_new.png',
        'images/image64_new.png',
        'images/image65_new.png',
        'images/image66_new.png',
        'images/image67_new.png',
        'images/image68_new.png',
        'images/image69_new.png',
        'images/image70_new.png'
    ];    

    // Crear el HTML de cada imagen y su botón de descarga
    images.forEach(image => {
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');

        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.alt = 'Imagen';

        const downloadButton = document.createElement('button'); // Cambiado a un botón
        downloadButton.classList.add('download-button');
        downloadButton.textContent = 'Descargar';

        // Añadimos un evento click al botón de descarga
        downloadButton.addEventListener('click', () => {
            const a = document.createElement('a'); // Crear un elemento <a>
            a.href = image;
            a.download = image.split('/').pop(); // Nombre del archivo para descargar
            document.body.appendChild(a); // Añadir el elemento al DOM
            a.click(); // Simular el clic
            document.body.removeChild(a); // Eliminar el elemento después de descargar
        });

        // Añadimos la imagen y el botón al contenedor
        imageContainer.appendChild(imgElement);
        imageContainer.appendChild(downloadButton);

        // Añadimos el contenedor a la galería
        gallery.appendChild(imageContainer);
    });
});
