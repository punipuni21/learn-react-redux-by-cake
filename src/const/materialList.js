const MaterialListSetting = {
  initialList: [
    { name: "小麦粉", price: 50, stock: 15 },
    { name: "牛乳", price: 80, stock: 8 },
    { name: "卵", price: 30, stock: 5 },
    { name: "生クリーム", price: 40, stock: 3 },
    { name: "マロン", price: 100, stock: 4 },
  ],
  tableSetting: [
    { label: "名前", data: "name" },
    { label: "値段", data: "price" },
    { label: "在庫数", data: "stock" },
    { label: "売る", data: "sell" },
    { label: "在庫数を増やす", data: "refill" },
  ],
};

export default MaterialListSetting;
