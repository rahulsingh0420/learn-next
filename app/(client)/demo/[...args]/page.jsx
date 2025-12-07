export default async function About({ params }) {
    const { args } = await params;
    return (
        <div className="p-3 min-h-1 border rounded bg-white shadow m-3">
            <h3 className="text-black underline text-red-400">
                Recieved Args
            </h3>
            {args.map(element => {
                return(
                    <div key={element} className="text-orange-700"> ~&gt; {element}</div>
                )
            })}
        </div>
    );
}