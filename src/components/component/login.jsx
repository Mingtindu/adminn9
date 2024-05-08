import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Dashboard } from "./dashboard"
import { useState } from "react"
export function Login() {
  const [formData,setFormData]= useState[{
    name:"",
    password:""
  }]

  const onChangeHandler = (e)=>{
    setFormData({
      ...formData,
      [e.field.name]:e.field.value
    })
  }
  const onClickHandler=()=>{
    console.log(formData);
    
  
  }
  return (
    (<div className="mx-auto max-w-sm">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
          <CardDescription>Enter your email and password to log in to the admin account.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label className="text-gray-900 dark:text-gray-50" htmlFor="email">
              Email
            </Label>
            <Input
              className="border-2 border-gray-300 focus:border-gray-500 focus:ring-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:focus:border-gray-500 dark:focus:ring-gray-500 animate-pulse"
              id="email"
              placeholder="m@example.com"
              name="email"
              onChange={onChangeHandler()}
              value={formData.name}
              required
              type="email" />
          </div>
          <div className="relative space-y-2">
            <Label className="text-gray-900 dark:text-gray-50" htmlFor="password">
              Password
            </Label>
            <Input
              className="border-2 border-gray-300 focus:border-gray-500 focus:ring-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:focus:border-gray-500 dark:focus:ring-gray-500 animate-pulse"
              id="password"
              required
              name="password"
              onChange={onChangeHandler()}
              value={formData.password}
              type="password" />
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400"
              type="button">
              <EyeIcon className="h-5 w-5" />
            </button>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            onClick={onClickHandler}
            className="w-full bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 animate-pulse">
            Sign in as Admin
          </Button>
        </CardFooter>
      </Card>
    </div>)
  );
}

function EyeIcon(props) {
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
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>)
  );
}
