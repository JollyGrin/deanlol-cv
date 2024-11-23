export default function Home() {
  return (
    <main className="px-4">
      <div className="grid place-items-center h-[20vh]">
        <p className="text-5xl">dean</p>
      </div>
      <div>
        <p>dabbles in</p>
        <div className="bg-white rounded p-2 flex flex-wrap gap-2">
          {Array.from({ length: 10 }).map((_, i) => (
            <p key={"skill" + i} className="bg-gray-200 text-black p-1">
              skill
            </p>
          ))}
        </div>
      </div>
    </main>
  );
}
