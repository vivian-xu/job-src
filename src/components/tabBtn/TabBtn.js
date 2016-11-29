import TabBtnItem from '../tabBtnItem/TabBtnItem.js';

let TabBtn =  (props) => {

    const btns = [ "学生QA" , "师兄师姐QA"];

    let onHandleClick = (id) => {
        //  将 changeTab 变成 return 的 function 可以
        let changeTab = props.changeTab;

        return () => {
            changeTab(id);
        }
    }

    const btnsList = btns.map((btn, idx) => (
        <TabBtnItem
            key={idx}
            text={btn}
            on={idx === props.onbtn ? true: false}
            onHandleClick={onHandleClick(idx) }
        />
    ));

    return(
        <div className='flex-box' >
            {btnsList}
        </div>
    );
}

export default TabBtn;
