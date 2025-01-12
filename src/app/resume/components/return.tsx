import Link from 'next/link';
import { FaHouseChimney } from "react-icons/fa6";

export default function Return() {
    return (
        <div className="flex justify-center mb-8 pt-10">
            <Link
                href="/"
                className="flex items-center px-6 py-3 text-white bg-black hover:bg-gray-800"
            >
                <FaHouseChimney className="mr-2" />
                Back to Main Page
            </Link>
        </div>
    );
}