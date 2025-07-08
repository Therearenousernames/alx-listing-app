import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

export default function Home() {
    return (
        <>
          <Head>
            <title>ALX Listing App</title>
            <meta name="description" content="An Airbnb clone listing page" />
          </Head>
          <main className="min-h-screen p-8 bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">Welcome to ALX Listing App</h1>
            
            <Card title="Sample Property" description="This is a sample property description." />
    
            <div className="mt-4">
              <Button label="Book Now" onClick={() => alert('Booking...')} />
            </div>
          </main>
        </>
      );
}