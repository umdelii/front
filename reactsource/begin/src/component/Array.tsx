function Array() {

    type User = {
        name:string;
        email:string;
    }
    interface Item  {
        id:number,
        price:number,
    } 
    const user:User = {
        name:"Jane",
        email: 'jane@example.com',
    };
    const colors:string[] = ['red','blue','green'];
    const numbers:number[] = [1,2,3,4,5]
    const items:Item[] = [
        {id:1, price:10},
        {id:2, price:20},
    ];
    
    return (
    <>
        <p>user 情報 : {user.name}({user.email})</p>
        <p>色 : {colors[1]}</p>
        <br />
        {/* colors 全部 => map() */}
        <ul>
        {colors.map((color, idx) => (
        <li key={idx}>color:{color}</li>))
        }
        </ul>
        <br />
        <h3>Item 照会</h3>
        <ul>
            {items.map(item => (
                <li key={item.id}>{item.price}</li>
            ))}
        </ul>
        <br />
        <h3>numbers 照会</h3>
        <ul>
            {numbers.map((num,idx)=> (
                <li key={idx}>number : {num}</li>
            ))}
        </ul>
        <br />
        {/* filter 使用 : 偶数の場合 */}
        <p>{numbers.filter(n => n % 2 === 0).join(', ')}</p>
        <p>{numbers.map(n => n * 2).join(', ')}</p>
    </> );
}

export default Array;