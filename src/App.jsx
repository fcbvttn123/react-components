import './App.css'
import { Badge } from './components/badges/Badge'

function App() {
    return (
        <div>
            <div className='m-4 flex flex-col items-start gap-y-4'>
                <div className='flex gap-x-2'>
                    <Badge bgColor="bg-gray-200" shape='pill'>Badge</Badge>
                    <Badge bgColor="bg-red-200" shape='pill'>Badge</Badge>
                    <Badge bgColor="bg-yellow-200" shape='pill'>Badge</Badge>
                    <Badge bgColor="bg-green-200" shape='pill'>Badge</Badge>
                    <Badge bgColor="bg-blue-200" shape='pill'>Badge</Badge>
                    <Badge bgColor="bg-purple-200" shape='pill'>Badge</Badge>
                    <Badge bgColor="bg-pink-200" shape='pill'>Badge</Badge>
                </div>
                <div className='flex gap-x-2'>
                    <Badge bgColor="bg-gray-200" shape='square'>Badge</Badge>
                    <Badge bgColor="bg-red-200" shape='square'>Badge</Badge>
                    <Badge bgColor="bg-yellow-200" shape='square'>Badge</Badge>
                    <Badge bgColor="bg-green-200" shape='square'>Badge</Badge>
                    <Badge bgColor="bg-blue-200" shape='square'>Badge</Badge>
                    <Badge bgColor="bg-purple-200" shape='square'>Badge</Badge>
                    <Badge bgColor="bg-pink-200" shape='square'>Badge</Badge>
                </div>
            </div>
        </div>
    )
}

export default App
