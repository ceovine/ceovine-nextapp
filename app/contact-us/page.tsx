import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (

    <main className="max-w-6xl mx-auto px-4 py-12">
    
          {/* HERO SECTION */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-6">
            <div className='mx-auto'>
                <h1 className="font-bold mb-6">Contact us</h1>
              <p>Thanks for visiting The CEO VINE contact us page.</p>
              <p>Feel free to connect with us, we will be happy to hear from you.</p>
              <p>For Editorial, Media, Partnerships and other Queries: corporate@ceovine.com</p>

            </div>

            <div className='text-sm'>
              <h2 className="mb-6">Get in Touch</h2>
              <p>Feel free to reach us if you need any assistance.</p>
              <ContactForm />
            </div>
    
            
          </section>
        
        </main>

    
  );
}
