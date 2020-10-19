import React, { PureComponent} from 'react';
import { withLocalize } from 'react-localize-redux';
import './style.scss';
import TopicData from './topic-data/index';

class TeamAddTopic extends PureComponent {
  render() {
    return (
      <div className="team-user-topic">
        <div className="block-control">
          <select className="form-control">
            <option>作業中</option>
            <option>作業中</option>
            <option>作業中</option>
            <option>作業中</option>
          </select>
          <div className="block-button">
            <button type="button" className="btn-delete">Topicsを削除</button>
            <button type="button" className="btn-copy">Topicsをコピー</button>
          </div>
        </div>

        <div className="block-content">
          <button type="button" className="label">データプールからドラッグ&ドロップで追加</button>
          <input type="file" name="upload" id="upload" className="upload-box" placeholder="Upload File" />
        </div>
        <TopicData />
      </div>
    );
  }
}

export default withLocalize(TeamAddTopic);
