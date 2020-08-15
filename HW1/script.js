const goods = [
    {title: 'Контент план', price: 1500},
    {title: 'Описание', price: 500},
    {title: 'Контент стратегия', price: 3500},
    {title: 'Контент продукт', price: 2500},
];

const renderGoodsItem = (title, price) => 
    `<div class="goods-item">
      <h3>${title}</h3>
      <p>${price}</p>
      <button class="by-btn">Добавить в корзину</button>
    </div>`;

const renderGoodsList = list => {
    const goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
    // с помощью метода join в качестве необязательного параметра разделителя мы указываем любой символ (либо не указываем вообще), то между элементами будет выводится символ "запятая" (по умолчанию). В данном случае сепаратор указан пустым, ничего не выводится.
}

window.onload = () => {
    renderGoodsList(goods);
};