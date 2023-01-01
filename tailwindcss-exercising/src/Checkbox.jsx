import { useState } from 'react';

export const Checkbox = () => {
  const [checked, setChecked] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const toggleChecked = () => {
    setChecked(!checked);
  };
  const toggleDisable = () => {
    setDisabled(!disabled);
  };
  const onChange = (e) => {
    console.log('checked = ', e.target.checked);
    setChecked(e.target.checked);
  };
  const label = `${checked ? ' Checked' : ' Unchecked'}-${
    disabled ? 'Disabled' : 'Enabled'
  }`;
  return (
    <>
      <div className='border shadow-md p-4 max-w-xs mx-auto rounded-lg'>
        <p className='mb-5'>
          <input
            type='radio'
            checked={checked}
            disabled={disabled}
            onChange={onChange}
            placeholder={label}
          />
          {label}{' '}
        </p>
        <p>
          <button
            className='bg-sky-600 min-w-[100px] text-base capitalize px-4 py-1 rounded-lg text-white tracking-wide shadow-md font-semibold leading-7 hover:bg-sky-500'
            onClick={toggleChecked}
          >
            {!checked ? 'Check' : 'Uncheck'}
          </button>
          <button
            style={{
              margin: '0 10px',
            }}
            className='bg-sky-600 min-w-[100px] text-base capitalize px-4 py-1 rounded-lg text-white tracking-wide shadow-md font-semibold leading-7 hover:bg-sky-500'
            onClick={toggleDisable}
          >
            {!disabled ? 'Disable' : 'Enable'}
          </button>
        </p>
      </div>
    </>
  );
};
