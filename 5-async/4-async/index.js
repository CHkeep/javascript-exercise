async function fetchData(url) {
  // <-- start
  // TODO 24: 通过await/async实现异步请求
  // 结束后在某事
  const result = await fetch(url);
  const data = await result.json();
  document.writeln(data.name);
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL);
