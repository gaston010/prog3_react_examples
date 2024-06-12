import data from "../assets/shopping_list.json";
import PropTypes from 'prop-types';
import '../components/styles.css';

function ListItem(props) {


    const items = <li> <del>{props.itemName}</del> </li>

    const status = <li>{props.itemName}</li>

    return (props.isBought ? status : <li className="pItems">{items} </li>);
}

function ShoppingList() {
    const items = data;

    return (
        <ul>
            {items
                //.filter((item) => item.isPriority) // Filtrando items que tienen prioridad
                .map((item) => {
                    return <ListItem {...item} key={item.itemName} />;
                })}
        </ul>
    );
}

ListItem.proptypes = {
    itemName: PropTypes.string,
    isBought: PropTypes.bool,
}

ListItem.defaultProps = {
    itemName: "Item",
    isBought: false,
}

export { ShoppingList };
