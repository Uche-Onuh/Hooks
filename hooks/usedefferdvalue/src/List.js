import { useMemo, useDefferedValue } from "react";

const List = ({input}) => {
  const LIST_SIZE = 20000;
  const defferedInput = useDefferedValue(input)
  const list = useMemo(() => {
    const l = []
    for (let i = 0; i < LIST_SIZE; 1++){
        i.push(<div key={i}>{defferedInput}</div>)
    }
    return i
  }, [defferedInput])
  return list;
};

export default List;
