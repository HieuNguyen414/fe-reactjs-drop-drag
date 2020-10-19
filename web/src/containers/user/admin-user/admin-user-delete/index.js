import React, { PureComponent } from 'react';

export default class AdminUserDelete extends PureComponent {
  render() {
    // eslint-disable-next-line react/prop-types
    const { onClose } = this.props;
    return (
      <div className="modal-custom" id="delete">
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title">ユーザーの削除</span>
            </div>
            <div className="modal-body">
              <p className="message-confirm">このユーザーを削除します。本当によろしいですか？</p>
              <p className="info-message">ログインID :  loginid</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="" onClick={onClose}>キャンセル</button>
              <button type="button" className="">削除</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
