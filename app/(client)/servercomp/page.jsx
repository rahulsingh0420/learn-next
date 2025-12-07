export default async function ServerComp() {
 
    const URL = "https://jsonplaceholder.typicode.com/posts";
 
    const res = await fetch(URL);
    const data = await res.json();
    return (
      <>
        {/* can't use onclick or any event handlers on a server component */}
        {/* <div className="">
            <button onClick={()=>alert('alert')}>click me</button>
        </div> */}
        <div className="my-5 m-3 grid grid-cols-3 gap-10">
          {data.map((el) => {
            return (
              <div key={el.id} className="bg-white rounded-xl p-3 shadow-xl">
                <h3 className="text-2xl font-bold">{el.title}</h3>
                <p>{el.body}</p>
              </div>
            );
          })}
        </div>
      </>
    );    
}