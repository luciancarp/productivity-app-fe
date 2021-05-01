export const SunIcon = ({
  height = '24px',
  width = '24px',
  color = 'white',
  secondaryColor,
  ...props
}: React.SVGProps<SVGSVGElement> & { secondaryColor?: string }) => (
  <svg
    id='Layer_1'
    data-name='Layer 1'
    xmlns='http://www.w3.org/2000/svg'
    width={width}
    height={height}
    viewBox='0 0 1000 1000'
    {...props}
  >
    <title>sun</title>
    <circle cx='500' cy='500' r='250' fill={color} />
    <rect x='475' y='110' width='50' height='80' fill={color} />
    <rect x='475' y='810' width='50' height='80' fill={color} />
    <rect x='810' y='475' width='80' height='50' fill={color} />
    <rect x='110' y='475' width='80' height='50' fill={color} />
    <rect
      x='200'
      y='185'
      width='50'
      height='80'
      transform='translate(-93.2 225) rotate(-45)'
      fill={color}
    />
    <rect
      x='750'
      y='735'
      width='50'
      height='80'
      transform='translate(-321.02 775) rotate(-45)'
      fill={color}
    />
    <rect
      x='200'
      y='735'
      width='50'
      height='80'
      transform='translate(613.91 67.89) rotate(45)'
      fill={color}
    />
    <rect
      x='750'
      y='185'
      width='50'
      height='80'
      transform='translate(386.09 -482.11) rotate(45)'
      fill={color}
    />
  </svg>

  // <svg
  //   xmlns="http://www.w3.org/2000/svg"
  //   width={width}
  //   height={height}
  //   viewBox="0 0 24 24"
  //   {...props}
  // >
  //   <circle cx="12" cy="12" r="3.2" fill={secondaryColor || color} />
  //   <path
  //     d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
  //     fill={color}
  //   />
  //   <path d="M0 0h24v24H0z" fill="none" />
  // </svg>
)
