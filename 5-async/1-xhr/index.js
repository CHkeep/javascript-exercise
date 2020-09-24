function fetchData(url, successCallback, errorCallback) {
  // 构造函数用于初始化一个 XMLHttpRequest 实例对象。在调用下列任何其他方法之前，
  // 必须先调用该构造函数，或通过其他方式，得到一个实例对象。
  const xhr = new XMLHttpRequest();
  // <-- start
  // TODO 21: 通过XMLHttpRequest实现异步请求
  // 初始化一个请求
  xhr.open('GET', url);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        successCallback(xhr.responseText);
      } else {
        errorCallback(xhr.statusText);
      }
    }
  };
  // 发送请求。如果请求是异步的（默认），那么该方法将在请求发送后立即返回。
  xhr.send(null);

  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(
  URL,
  result => {
    // 打印结果在屏幕上
    document.writeln(JSON.parse(result).name);
  },
  error => {
    console.error(error);
  }
);
