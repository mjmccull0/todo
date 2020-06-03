const reorder = (orderedArray, sourceItemIndex, destinationItemIndex) => {
    const [movedItem] = orderedArray.splice(sourceItemIndex, 1);
    orderedArray.splice(destinationItemIndex, 0, movedItem);
    return orderedArray;
}

export default reorder;
