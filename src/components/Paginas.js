import React from 'react';

const Paginas = () => {
  return (
    <div>
      <div className="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
        <div className="btn-group me-2" role="group" aria-label="First group">
          <button type="button" className="btn btn-outline-secondary">1</button>
          <button type="button" className="btn btn-outline-secondary">2</button>
          <button type="button" className="btn btn-outline-secondary">3</button>
          <button type="button" className="btn btn-outline-secondary">4</button>
        </div>
        <div className="input-group">
          <div className="input-group-text" id="btnGroupAddon">@</div>
          <input type="text" className="form-control" placeholder="Input group example" 
            aria-label="Input group example" aria-describedby="btnGroupAddon" />
        </div>
      </div>

      <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
        <div className="btn-group" role="group" aria-label="First group">
          <button type="button" className="btn btn-outline-secondary">1</button>
          <button type="button" className="btn btn-outline-secondary">2</button>
          <button type="button" className="btn btn-outline-secondary">3</button>
          <button type="button" className="btn btn-outline-secondary">4</button>
        </div>
        <div className="input-group">
          <div className="input-group-text" id="btnGroupAddon2">@</div>
          <input type="text" className="form-control" placeholder="Input group example" 
            aria-label="Input group example" aria-describedby="btnGroupAddon2" />
        </div>
      </div>
    </div>
  );
}

export default Paginas;
