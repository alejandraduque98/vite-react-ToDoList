import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
    return (
        <div className="min-h-screen bg-gray-100 bg-[url(./assets/images/bg-mobile-light.jpg)] bg-contain bg-no-repeat">
            <header className="container mx-auto px-4 pt-8">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white md:text-right">
                        todo
                    </h1>
                    {/*boton de dark and light*/}
                    <button><MoonIcon className="fill-black" /></button>
                </div>

                <form className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-4">
                    <span className="inline-block h-5 w-5 rounded-full border-2"></span>

                    <input
                        type="text"
                        placeholder="Create a new todo..."
                        className="w-full text-gray-400 outline-none"
                    />
                </form>
            </header>

            <main className="container mx-auto mt-8 px-4">
                <div className="rounded-md bg-white ">
                    <article className="flex gap-4 py-4 px-4 border-b-gray-200 border-b">
                        <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="text-gary-500 grow">
                            complete online javascript curse in blueweb
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>

                    <article className="flex gap-4 py-4 px-4 border-b-gray-200 border-b">
                        <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="text-gary-500 grow">
                            complete online javascript curse in blueweb
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>

                    <article className="flex gap-4 py-4 px-4 border-b-gray-200 border-b">
                        <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="text-gary-500 grow">
                            complete online javascript curse in blueweb
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>      
                </div>

                <section className="py-4 px-4 flex justify-between">
                    <span className="text-gray-400">5 items left</span>
                    <button className="text-gray-400">clear completed</button>
                </section>
            </main>

            <section className="container mx-auto px-4">
                <div className="bg-white mt-8 p-4 rounded-md flex justify-center gap-4">
                    <button className="hover:text-blue-600">All</button>
                    <button className="hover:text-blue-600">Active</button>
                    <button className="hover:text-blue-600">Completed</button>
                </div>
                
            </section>

            <section className="text-center">
                <p className="mt-8 text-center text-gray-400">Drag and drop to reorder list</p>
            </section>
        </div>
    );
};

export default App;
