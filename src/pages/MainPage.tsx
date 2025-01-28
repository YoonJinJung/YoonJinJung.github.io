import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

export default function MainPage() {
  return (
    <div className='min-h-screen max-w-md bg-background flex flex-col items-center justify-center'>
      <Link to='/jy'>
        <Button className='bg-rose-400 text-[20px] px-10 py-10 hover:bg-neutral-500 mb-10'>
          지율이 사랑해
        </Button>
      </Link>

      <Link to='/ty'>
        <Button className='bg-teal-300 text-[20px] px-10 py-10 hover:bg-neutral-500'>
          태율이 사랑해
        </Button>
      </Link>
    </div>
  );
} 