class API {
    #secure;
  
    constructor(url, method = 'GET') {
      this.url = url;
      this.method = method;
      this.#secure = url.startsWith('https');
    }
  
    isSecure() {
      return this.#secure;
    }
  
    updateUrl(url) {
      this.url = url;
      this.#secure = url.startsWith('https');
    }
  }
  const s = new API('http://api.com/api/hello');

  console.log(s.isSecure());
  s.updateUrl('https://api.com/api/hello');
  
  console.log(s.isSecure()); 
  
  console.log(s.url); 
  
  console.log(s.method);
  
  console.log(s.secure); 
    