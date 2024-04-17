import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function UserIndex({ auth, users }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Users
                </h2>
            }
        >
            <Head title="Users" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-2">
                        <label htmlFor="" className="font-bold">
                            Users: {users.total}
                        </label>
                        <Link
                            href={route("users.create")}
                            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                        >
                            Create User
                        </Link>
                    </div>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <table className="min-w-full">
                                <thead>
                                    <tr className="border-b-2">
                                        <th className="px-6 py-3 text-lg font-medium text-left text-black">
                                            Id
                                        </th>
                                        <th className="px-6 py-3 text-lg font-medium text-left text-black">
                                            Name
                                        </th>
                                        <th className="px-6 py-3 text-lg font-medium text-left text-black">
                                            Email
                                        </th>
                                        <th className="px-6 py-3 text-lg font-medium text-left text-black">
                                            Role
                                        </th>
                                        <th className="px-6 py-3 text-lg font-medium text-left text-black">
                                            &nbsp;
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.data.map(
                                        ({ id, name, email, role }) => (
                                            <tr key={id} className="border-b">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {id}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {name}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {email}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {role}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <Link
                                                        className="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-md hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                        href={route(
                                                            "users.edit",
                                                            id
                                                        )}
                                                    >
                                                        Edit
                                                    </Link>
                                                </td>
                                            </tr>
                                        )
                                    )}
                                </tbody>
                            </table>
                            <Pagination links={users.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
