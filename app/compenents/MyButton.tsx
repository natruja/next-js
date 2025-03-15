export default function MyButton(
        {text, color = "blue" }:
        {text: string, color?: string }) 
{
    // onClick? () => void
    return (
        <button 
        // onClick={onClick} 
            className={`bg-${color}-500 text-white p-2 rounded-md`}>
           {text} 
        </button>
    );
}