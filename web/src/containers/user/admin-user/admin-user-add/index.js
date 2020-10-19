import React, { PureComponent } from 'react';

export default class AdminUserAdd extends PureComponent {
  render() {
    // eslint-disable-next-line react/prop-types
    const { onClose } = this.props;
    return (
      <div className="modal-custom" id="add">
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title">スタッフ追加</span>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <span className="label-text">ログインID</span>
                  <input type="text" placeholder="loginid" />
                </div>
                <div className="form-group">
                  <span className="label-text">名前</span>
                  <input type="text" placeholder="菅野 智之" />
                </div>
                <div className="form-group">
                  <span className="label-text">パスワード</span>
                  <input type="text" placeholder="********" />
                </div>
                <div className="form-group">
                  <span className="label-text">ロール</span>
                  {/* <input type="text" placeholder="管理者" /> */}
                  <select className="form-control select-custom">
                    <option>管理者</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="" onClick={onClose}>キャンセル</button>
              <button type="button" className="">追加</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
