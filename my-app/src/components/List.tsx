import { useAppSelector } from "../store/store"

export default function List() {
    const persons = useAppSelector(state => state.person.persons)
  return (
    <div className="rounded-md shadow border m-2 p-2">
        <p>List component</p>
        <table className="rounded-md">
            <thead>
                <tr className="bg-black text-white">
                    <th className="p-2 border rounded">ID</th>
                    <th className="p-2 border rounded">Name</th>
                </tr>
            </thead>
            <tbody>
                {persons.map(person => (
                    <tr key={person.id} className="bg-gray-100">
                        <td className="p-2">{person.id}</td>
                        <td className="p-2">{person.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
