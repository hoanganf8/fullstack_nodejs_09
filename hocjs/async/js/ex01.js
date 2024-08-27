const getUser = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const users = [
        {
          id: 1,
          name: "User 1",
          salary: 1000,
        },
        {
          id: 2,
          name: "User 2",
          salary: 2000,
        },
        {
          id: 3,
          name: "User 3",
          salary: 3000,
        },
      ];
      const user = users.find(({ id }) => id === userId);
      resolve(user);
    }, Math.random() * 2000);
  });
};
const ids = [1, 2, 3];
//Tính tổng thu nhập của tất cả user tồn tại trong mảng ids
// Yêu cầu: Không dùng Promise.all, async await
const totalPromise = new Promise((resolve) => {
  let total = 0;
  let count = 0;
  ids.forEach((id) => {
    getUser(id).then((user) => {
      total += user.salary;
      count++;
      if (count === ids.length) {
        resolve(total);
      }
    });
  });
});
totalPromise.then((data) => {
  console.log(data);
});
