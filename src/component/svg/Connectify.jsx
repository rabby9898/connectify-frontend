const ConnectifySvg = (props) => (
  <svg
    width="200px"
    height="200px"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      fill="none"
      stroke="#1DA1F2"
      strokeWidth="2"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      <circle cx="32" cy="32" r="30" />
      <path d="M32 18v28M18 32h28" />
    </g>
  </svg>
);
export default ConnectifySvg;
