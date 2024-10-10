import Label from '../components/ui/Label'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'

function SignupPage() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[475px] border rounded-md p-4">
        <div className="flex justify-center items-center">
          <Label size="lg" className="">
            Sign Up
          </Label>
        </div>
        <Input
          placeholder="Enter Your Email"
          type="email"
          className="w-full py-6 mt-4"
        />
        <Input
          placeholder="Password"
          type="password"
          className="w-full mt-4 py-6"
        />
        <Input
          placeholder="Confirm Password"
          type="password"
          className="w-full mt-4 py-6"
        />
        <Button
          type="submit"
          title="Signup"
          size="lg"
          className="my-4 w-full"
        />
        <hr />
        <Button
          type="submit"
          title="Login"
          variant="outline"
          size="lg"
          className="my-4 w-full"
        />
      </div>
    </div>
  )
}

export default SignupPage