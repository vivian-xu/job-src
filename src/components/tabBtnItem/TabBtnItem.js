// component TabBtnItem
const TabBtnItem = (props) => (
    <div
      className={`tabBtn flex-item ${props.on ? 'tabBtn-on' : ''}`}
      onClick={ props.onHandleClick }
    >
      {props.text}
    </div>
)

export default TabBtnItem;
