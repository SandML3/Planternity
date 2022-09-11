import '../styles/SliderItem.scss';


const SliderItem = (props) => {

return <section className="item">
        <h2 className='item__title'>{props.title}</h2>
        <p className='item__text'>{props.text}</p>
    </section>
};

export default SliderItem;