const getUserInfo = id => {
  return {
    uid: id,
    name: "hello huiquan"
  };
};

const ajaxAsync = url => {
  return Promise.resolve({ url });
};

module.exports = { getUserInfo, ajaxAsync };
