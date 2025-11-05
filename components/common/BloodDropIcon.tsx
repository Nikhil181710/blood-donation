
import React from 'react';

const BloodDropIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M12.963 2.286a.75.75 0 00-1.071 0 26.226 26.226 0 00-5.924 7.64 3.063 3.063 0 000 2.912 26.226 26.226 0 005.924 7.64.75.75 0 001.071 0 26.226 26.226 0 005.924-7.64 3.063 3.063 0 000-2.912A26.226 26.226 0 0012.963 2.286z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default BloodDropIcon;
