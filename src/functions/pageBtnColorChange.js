// pageBtnColorChange.js

export const check = {
  homebtn: false,
  create: false,
  account: false,
};

 export function allFalse() {
  return Object.values(check).every((value) => value === false);
}

export function makeFalse() {
  check["homebtn"] = false;
  check["create"] = false;
  check["account"] = false;
}

const PageBtnColorChange = (e) => {
  if (allFalse()) {
    check[e] = !check[e];
  } else {
    makeFalse();
    check[e] = !check[e];
  }
};

export default PageBtnColorChange;
