function request(text, callback){
    if (typeof text !== 'string') {
      throw new Error(
        `Expected string text when calling request(text, callback), actual ${typeof text}.`,
      );
    }

    if (typeof callback !== 'function') {
      throw new Error(
        `Expected callback function when calling request(text, callback), actual ${typeof callback}.`,
      );
    }

    if (text !== 'aaa') {
      callback(new Error('probando'));
      return;
    }

    if (text) {
      // If it's now available, yay, otherwise, nay
      setTimeout(
        () => callback( text ? undefined : new Error('error ramdom')),
        1,
      );
      return;
    }

    callback(new Error('lalala'));
  }

  