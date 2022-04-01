import React from 'react';


function Request() {
  return (
    <div>
      <h2>요청사항</h2>
      <textarea
        className="requestArea"
        rows="6"
        placeholder="다른 필요한게 있으시면 적어주세요:)"
      ></textarea>
      <button>주문</button>
    </div>
  );
}

export default Request;