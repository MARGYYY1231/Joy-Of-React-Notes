import React from 'react';

const CORRECT_CODE = '123456';

function CheckCode(code) {
  if (code == CORRECT_CODE) {
    window.alert('Correct!');
  } else {
    window.alert('Incorrect...');
  }
}

function TwoFactor() {
  const [code, setCode] = React.useState('');

  return (
    <>
      <form
        className="validation-form"
        onSubmit={(event) => {
          event.preventDefault();
          CheckCode(code);
        }}
      >
        <label htmlFor="auth-code">Enter authorization code:</label>
        <div className="row">
          <input
            id="auth-code"
            type="text"
            required={true}
            maxLength={6}
            value={code}
            onChange={(event) => {
              setCode(event.target.value);
            }}
          />
          <button>Validate</button>
        </div>
      </form>
    </>
  );
}

export default TwoFactor;