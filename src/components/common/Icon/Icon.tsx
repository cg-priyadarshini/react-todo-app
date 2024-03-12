interface SvgIconProps {
  size?: string;
  iconId?: string;
  color?: string;
}


export const SvgIcon: React.FC<SvgIconProps>  = ({ iconId, size = 24, color = 'black' }) => {

     if (!iconId) return null;

    return (
      <div className='svg-wrapper'>
        <svg
          className={`icon ${iconId}`}
          height={24}
          width={24}
          viewBox='0 0 24 24'
        >
          <use xlinkHref={`/assets/sprite.svg#${iconId}`} fill={color} />
        </svg>
      </div>
    );

}
