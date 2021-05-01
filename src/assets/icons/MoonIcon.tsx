export const MoonIcon = ({
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
    <title>moon</title>
    <path
      d='M864,718.65C791.64,822,671.73,889.55,536,889.55c-220.91,0-400-179.09-400-400,0-176.17,113.9-325.75,272.07-379.1A398.14,398.14,0,0,0,336,339.55c0,220.91,179.09,400,400,400A399.16,399.16,0,0,0,864,718.65Z'
      fill={color}
    />
  </svg>
)
