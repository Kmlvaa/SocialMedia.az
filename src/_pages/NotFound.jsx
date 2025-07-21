import Cursor from '../_components/Cursor'
export default function NotFOund() {

    return (
        <div className="relative h-screen w-screen overflow-hidden bg-black text-white">
            <div className="absolute inset-0 flex flex-col gap-10 items-center justify-center z-0">
                <h1 className="text-[150px] font-bold text-green-200 select-none pointer-events-none">
                    404
                </h1>
                <p className='text-xl font-mono'>Sorry we cant find what you are looking for 'cuz its so dark in here</p>
            </div>
            <Cursor />
        </div>
    );
}
