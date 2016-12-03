import React from 'react';

export default function GroupEdit(props) {
  return (
    <div>
      <h1>Edit Group</h1>

      <form>
        <div className="form-group">
          <label htmlFor="pictureUrl">Picture URL</label>
          <input
            type="text" className="form-control" id="pictureUrl"
            onChange={props.groupPictureUrlChange}
            value={props.values.groupPictureUrl}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text" className="form-control" id="name"
            onChange={props.nameChange}
            value={props.values.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control" id="description"
            onChange={props.descChange}
            value={props.values.description}
          />
        </div>
        <button type="button" className="btn btn-default" onClick={props.submitForm}>Submit</button>
      </form>
    </div>
  );
}
