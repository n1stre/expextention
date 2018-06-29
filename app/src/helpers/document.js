const c = document.body;

export const clearBody = () => {
  _body.innerHTML = '';
}

export const replaceBodyContent = (element) => {
  return new Promise((res, rej) => {
    try {
      clearBody();
      _body.appendChild(element);
      res();
    } catch(err) {
      rej(err);
    }
  });
}

export const createElement = (selector, { id, className }) => {
  return new Promise((res, rej) => {
    try {
      const newElement = document.createElement(selector);
      if (id) newElement.setAttribute('id', id);
      if (className) newElement.setAttribute('class', className);
      res(newElement);
    } catch(err) {
      rej(err)
    }
  })
}

export const copyContentsOf = sourceElement => targetElement => {
  if (targetElement.innerHTML && sourceElement.innerHTML) {
    targetElement.innerHTML = sourceElement.innerHTML;
  }
  return targetElement;
}