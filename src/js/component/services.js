// this is a file for api methods
import fetch from 'node-fetch';

export function createList() {
    fetch('https://playground.4geeks.com/apis/fake/todos/user/terrylh22', {
      method: 'POST', // or 'POST'
      body: JSON.stringify([]),// data can be a 'string' or an {object} which comes from somewhere further above in our application
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (!res.ok) throw Error(res.statusText);
        return res.json();
      })
      .then(response => console.log('Success:', response))
      .catch(error => console.error(error));
}

export function deleteList() {
  fetch('https://playground.4geeks.com/apis/fake/todos/user/terrylh22', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if (!res.ok) throw Error(res.statusText);
      return res.json();
    })
    .then(response => console.log('Success:', response))
    .catch(error => console.error(error));
}

export function updateList(data) {
    fetch('https://playground.4geeks.com/apis/fake/todos/user/terrylh22', {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (!res.ok) throw Error(res.statusText);
        return res.json();
      })
      .then(response => console.log('Success:', response))
      .catch(error => console.error(error));
}

