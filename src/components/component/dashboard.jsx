import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
export function Dashboard() {
  const [userData, setUserData] = useState({})
  useEffect(() => {
    fetchData();
  }, []);
  //Data fetching from backend::
  const fetchData = async () => {
    try {
      const response = await fetch('https://nninebackend.onrender.com/api/v1/dashboard/registerDetails');
      if (!response.ok) {
        alert(`Not able to fetch the data`)
      }
      const data = await response.json()
      setUserData(data)
      console.log(data);
      console.log(userData);


    } catch (err) {
      console.log(`Error while fetching data err: ${err}`);
    }
  }

  return (
    (<div className="grid min-h-screen w-full grid-cols-[280px_1fr]">
      <div
        className="hidden border-r bg-gradient-to-b from-[#5A67D8] to-[#4C51BF] lg:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold text-white" href="#">
              <Package2Icon className="h-6 w-6 text-white" />
              <span className="">Office nnine</span>
            </Link>
            <Button className="ml-auto h-8 w-8 text-[#FF6B6B]" size="icon" variant="outline">
              <BellIcon className="h-4 w-4 text-[#FF6B6B]" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 transition-all hover:text-white"
                href="#">
                <HomeIcon className="h-4 w-4 text-gray-300" />
                Dashboard
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg bg-[#4C51BF] px-3 py-2 text-white transition-all hover:bg-[#4C51BF]/90"
                href="/">
                <UsersIcon className="h-4 w-4 text-white" />
                Register Details
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 transition-all hover:text-white"
                href="#">
                <CalendarIcon className="h-4 w-4 text-gray-300" />
                Attendance
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 transition-all hover:text-white"
                href="#">
                <SettingsIcon className="h-4 w-4 text-gray-300" />
                Settings
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header
          className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gradient-to-r from-[#5A67D8] to-[#4C51BF] px-6 text-white">
          <Link className="lg:hidden" href="#">
            <Package2Icon className="h-6 w-6 text-white" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-300" />
                <Input
                  className="w-full bg-[#4C51BF] shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 text-white placeholder:text-gray-300"
                  placeholder="Search users, attendance, etc..."
                  type="search" />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-200 border-[#4C51BF] w-8 h-8 text-[#FF6B6B] dark:border-gray-800"
                size="icon"
                variant="ghost">
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/images/user_icon.png"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel className="text-red">My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red">Settings</DropdownMenuItem>
              <DropdownMenuItem className="text-red">Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-[#FF6B6B]">Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="bg-[#5A67D8] text-white">S.No.</TableHead>
                  <TableHead className="bg-[#5A67D8] text-white">Name</TableHead>
                  <TableHead className="bg-[#5A67D8] text-white">Email</TableHead>
                  <TableHead className="bg-[#5A67D8] text-white">Phone</TableHead>
                  <TableHead className="bg-[#5A67D8] text-white">Level of Education</TableHead>
                  <TableHead className="bg-[#5A67D8] text-white">School/College Name</TableHead>
                  <TableHead className="bg-[#5A67D8] text-white">Courses</TableHead>
                  <TableHead className="bg-[#5A67D8] text-white">Message</TableHead>
                  <TableHead className="bg-[#5A67D8] text-white">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Object.entries(userData).map(([key, item], index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.phone}</TableCell>
                    <TableCell>{item.levelOfEducation}</TableCell>
                    <TableCell>{item.schoolCollegeName}</TableCell>
                    <TableCell>{item.courses}</TableCell>
                    <TableCell>{item.message}</TableCell>
                    <TableCell>
                      <Button className="bg-[#5A67D8] text-white px-4 py-2 rounded">View</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

          </div>
        </main>
      </div>
    </div>)
  );
}

function BellIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>)
  );
}


function CalendarIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>)
  );
}


function HomeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>)
  );
}


function Package2Icon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>)
  );
}


function SearchIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>)
  );
}


function SettingsIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>)
  );
}


function UsersIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>)
  );
}
