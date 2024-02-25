import './App.css'
import { Badge } from './components/badges/Badge'
import { Banner } from './components/banners/Banner'

function App() {
    return (
        <div className='flex flex-col gap-y-10 m-4'>
            <div className='flex flex-col items-start gap-y-4'>
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
            <div className='flex flex-col gap-y-4'>
                <Banner 
                    status="success" 
                    title="Congratulation!" 
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
                />
                <Banner 
                    status="success" 
                    title="Congratulation!" 
                />
                <Banner 
                    status="attention" 
                    title="Attention" 
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
                />
                <Banner 
                    status="attention" 
                    title="Attention" 
                />
                <Banner 
                    status="error" 
                    title="There is a problem with your application" 
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
                />
                <Banner 
                    status="error" 
                    title="There is a problem with your application" 
                />
                <Banner 
                    status="update" 
                    title="Update Available" 
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
                />
                <Banner 
                    status="update" 
                    title="Update Available" 
                />
            </div>
        </div>
    )
}

export default App


