document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product_id');

    // ดึงข้อมูลสินค้า (อาจมาจากเซิร์ฟเวอร์หรือฐานข้อมูลจริง)
    const products = [
    { id: 1, name: 'Modern Family', price: 100, image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/455274474_1243386610012675_5258355784250363263_n.png?stp=dst-png_p206x206&_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeGXaW8dGW4uy9mwJYncnpD_SXxXgEhCgJ1JfFeASEKAnRHi7o5gVNdYlSrv4ovWkVf41BdC83VguZoRb-cm5jqg&_nc_ohc=xNX0DGOhecIQ7kNvgGVEur7&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&_nc_gid=AReHAViGJwmD3nyrfQV-5B8&oh=03_Q7cD1QHWkF6rDLsghr_JPXw7D3dMEH3wvZc60JJvV2vG0F84wg&oe=66F56C02', description: '2 ห้องนอน, 1 ห้องน้ำ, 1 ห้องครัว, 2 ห้องรับแขก, พื้นที่ 176 ตารางเมตร' },
    { id: 2, name: 'Luxury', price: 200, image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/456412530_331747199931639_3074006687179121923_n.png?stp=dst-png_p206x206&_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeFtdMtr1ZzXLupVicqA9SoSF0Fwwfv6HVkXQXDB-_odWTDTyMBaGKDzIfbcXvlru9KFUWtAtofweNeaHjNh8Dbw&_nc_ohc=B8OZ3bkfTv8Q7kNvgFUJFa1&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QF890EDf1Ykaji65ezvxavpSUMOC-TWg7Xi_feZEH14EA&oe=66F54C70', description: '3 ห้องนอน, 2 ห้องน้ำ, 1 ห้องครัว, 1 ห้องรับแขก, พื้นที่ 107 ตารางเมตร' },
    { id: 3, name: 'Cozy', price: 300, image: 'img/8.png', description: '1 ห้องนอน, 1 ห้องน้ำ, 1 ห้องครัว, 1 ห้องรับแขก, พื้นที่ 102 ตารางเมตร' },
    { id: 4, name: 'Elegant', price: 150, image: 'img/1.png', description: '2 ห้องนอน, 1 ห้องน้ำ, 1 ห้องครัว, 1 ห้องรับแขก, พื้นที่ 127 ตารางเมตร' },
    { id: 5, name: 'City View', price: 250, image: 'img/9.png', description: '2 ห้องนอน, 1 ห้องน้ำ, 1 ห้องครัว, 1 ห้องรับแขก, พื้นที่ 123 ตารางเมตร' },
    { id: 6, name: 'Modern', price: 350, image: 'img/mmmmmmmmmmmm.png', description: '2 ห้องนอน, 2 ห้องน้ำ, 2 ห้องครัว, 2 ห้องรับแขก, พื้นที่ 246 ตารางเมตร' },
    { id: 7, name: 'Beautiful', price: 180, image: 'img/2.png', description: '4 ห้องนอน, 2 ห้องน้ำ, 2 ห้องครัว, 2 ห้องรับแขก, พื้นที่ 274 ตารางเมตร'},
    { id: 8, name: 'Spacious', price: 220, image: 'img/5.png', description: '2 ห้องนอน, 2 ห้องน้ำ, 2 ห้องครัว, 2 ห้องรับแขก, พื้นที่ 125 ตารางเมตร'},
    { id: 9, name: 'Luxury Villa', price: 280, image: 'img/3.png', description: '2 ห้องนอน, 2 ห้องน้ำ, 2 ห้องครัว, 2 ห้องรับแขก, พื้นที่ 145 ตารางเมตร'},
    { id: 10, name: 'Grand', price: 400, image: 'img/10.png', description: '2 ห้องนอน, 2 ห้องน้ำ, 1 ห้องครัว, 2 ห้องรับแขก, พื้นที่ 307 ตารางเมตร' },
    { id: 12, name: 'Exclusive', price: 240, image: 'img/11.png', description: '2 ห้องนอน, 2 ห้องน้ำ, 1 ห้องครัว, 1 ห้องรับแขก, พื้นที่ 263 ตารางเมตร' },
    { id: 13, name: 'Charming', price: 180, image: 'img/4.png', description: '2 ห้องนอน, 1 ห้องน้ำ, 2 ห้องครัว, 1 ห้องรับแขก, พื้นที่ 243 ตารางเมตร' },
    { id: 15, name: 'Spacious Home', price: 140, image: 'img/6.png', description: '2 ห้องนอน, 2 ห้องน้ำ, 1 ห้องครัว, 1 ห้องรับแขก, พื้นที่ 277 ตารางเมตร' }
];

    const product = products.find(p => p.id == productId);

    if (product) {
        const productInfo = document.getElementById('product-info');
        productInfo.innerHTML = `
            <img src="${product.image}" alt="${product.name}" width="300">
            <h2>${product.name}</h2>
            <p></p>
            <p>${product.description}</p>
            <a href="contact.html?product_id=${product.id}" class="contact-button">สนใจติดต่อ</a>
        `;
    } else {
        document.getElementById('product-info').innerHTML = '<p>ไม่พบข้อมูลสินค้า</p>';
    }
});