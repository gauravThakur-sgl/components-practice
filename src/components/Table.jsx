export default function Table() {
  return (
    <div className="">
        <table className="table-auto w-full border-separate border-spacing-1 border border-slate-500">
            <thead border>
                <tr className="border border-slate-500">
                    <th>Name</th>
                    <th>Title</th>
                    <th>Email</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody className="">
                <tr className="">
                    <td className="px-2 py-1 font-semibold">Lindsay Walton</td>
                    <td className="px-2 py-1 text-slate-600 ">Front-end Developer</td>
                    <td className="px-2 py-1 text-slate-600 ">lindsay.walton@example.com</td>
                    <td className="px-2 py-1 text-slate-600 ">Member</td>
                </tr>
                <tr>
                    <td className="px-2 py-1 font-semibold">Courtney Henry</td>
                    <td className="px-2 py-1 text-slate-600 ">Designer</td>
                    <td className="px-2 py-1 text-slate-600 ">courtney.henry@example.com</td>
                    <td className="px-2 py-1 text-slate-600 ">Admin</td>
                </tr>
                <tr>
                    <td className="px-2 py-1 font-semibold">Tom Cook</td>
                    <td className="px-2 py-1 text-slate-600 ">Director of Product</td>
                    <td className="px-2 py-1 text-slate-600 ">tom.cook@example.com</td>
                    <td className="px-2 py-1 text-slate-600 ">Member</td>
                </tr>
                <tr>
                    <td className=" px-2 py-1 font-semibold">Whitney Francis</td>
                    <td className=" px-2 py-1 text-slate-600 ">Copywriter</td>
                    <td className=" px-2 py-1 text-slate-600 ">whitney.francis@example.com</td>
                    <td className=" px-2 py-1 text-slate-600 ">Admin</td>
                </tr>
                <tr>
                    <td className=" px-2 py-1 font-semibold">Leonard Krasner</td>
                    <td className=" px-2 py-1 text-slate-600 ">Senior Designer</td>
                    <td className=" px-2 py-1 text-slate-600 ">leonard.krasner@example.com</td>
                    <td className=" px-2 py-1 text-slate-600 ">Owner</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

